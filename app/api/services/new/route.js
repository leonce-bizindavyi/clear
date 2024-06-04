import executeQuery from "@/app/_utils/db";
import { writeFile } from "fs-extra";
import fs from 'fs-extra';
import path from "path";

const generateRandomString = (long) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_-';
    let result = '';
    for (let i = 0; i < long; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
const imgFolderPath = path.join(process.env.NEXT_UPLOADS_FOLDERS, '/imgs');
export async function POST(request) {
    const formdata = await request.formData()
    await fs.ensureDir(imgFolderPath);

    const user = await formdata.get("user");
    const title = await formdata.get("title");
    const price = await formdata.get('price');
    const body = await formdata.get('body');
    const type = await formdata.get('type');
    const length = await formdata.get('length');
    const avenue = await formdata.get('avenue');
    const commune = await formdata.get('commune');
    const quarter = await formdata.get('quarter');
    const town = await formdata.get('town');
    const zone = await formdata.get('zone');
    const color = await formdata.get('color');
    const marque = await formdata.get('marque');
    const model = await formdata.get('model');
    const plaque = await formdata.get('plaque');
    const serial = await formdata.get('serial');
    const capacity = await formdata.get('capacity');
    const defaultImg = await formdata.get('defaultImg');
    const [inAddr] = await executeQuery('INSERT INTO addresse(avenue,quarter,zone,commune,town) VALUES (?,?,?,?,?)', [avenue, quarter, zone, commune, town])
    const lieu = inAddr.insertId 
    if(!lieu){
        return Response.json({success:false})
    }
    const filename = await moveImage(defaultImg)
    const uuid = generateRandomString(5)+title.substring(0,4)
    const [inServ] = await executeQuery(
        'INSERT INTO services(uuid,title,body,type,lieu,price,capacity,proprietaire,image) VALUES (?,?,?,?,?,?,?,?,?)',
     [uuid, title, body, type,lieu,price,capacity,user,filename])
    const servId = inServ.insertId
    const [rows] = await executeQuery('INSERT INTO photos(id_serv,photo) VALUES(?,?)',[servId,filename])
    for (let i = 0; i < length; i++) {
        const image = await formdata.get(`image${i}`)
        if(image){
          const newFilename = await moveImage(image)
          const [rows] = await executeQuery('INSERT INTO photos(id_serv,photo) VALUES(?,?)',[servId,newFilename])
        }
        
    } 
    console.log(
        title, price, body, type, length, avenue, commune, quarter, town, zone, color, marque, model, plaque, serial, defaultImg
    )
    return Response.json({ success: true });
}

async function moveImage(image) {
    const bytebuffer = await image.arrayBuffer()
    const buffer = new Buffer.from(bytebuffer);
    const filename = generateRandomString(8)+path.extname(image.name)
    const pathname = imgFolderPath + `/${filename}`
    writeFile(pathname, buffer)
    
    return filename
}