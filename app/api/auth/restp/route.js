import executeQuery from "@/app/_utils/db"
import bcrypt from "bcryptjs/dist/bcrypt"

export async function POST(request){
    const {password,uuid} = await request.json()
    try {
        const saltrounds = 10
        const salt = await bcrypt.genSalt(saltrounds)
        const hashedPassword = await bcrypt.hash(password, salt)
        const [rows] = await executeQuery("UPDATE users SET passcode=? WHERE users.uuid=?",[hashedPassword,uuid])
        return Response.json({error: false,message:rows.changedRows})
    } catch (error) {
        return Response.json({error: true})
    }
    
}