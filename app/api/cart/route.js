import executeQuery from "@/app/_utils/db"

export async function POST(request){
    const {id,user,day,totalPrice,start,end} = await request.json()
    console.log(id,user,day,totalPrice,start,end)
    const [rows] = await executeQuery('INSERT INTO cart (user,service,day,totalPrice,start,end) VALUES(?,?,?,?,?,?)',[user,id,day,totalPrice,start,end])
    return Response.json({success: true,affectedRows:rows.affectedRows})
}
export async function GET(request){
    const [rows] = await executeQuery('CALL getIncart(?)',[16])
    return Response.json(rows[0])
}
export async function PUT(request){
    const datas = await request.json()
    console.log(datas)
    return Response.json({success:false})
}