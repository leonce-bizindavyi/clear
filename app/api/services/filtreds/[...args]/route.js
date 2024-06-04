import executeQuery from "@/app/_utils/db"

export async function GET(request,{params}){
    const args = params.args
    try {
        const [rows] = await executeQuery('CALL getFiltreds(?,?,?)',args)
        return Response.json(rows[0])
    } catch (error) {
        
    }
    return Response.json({success: true,message:`You have selected ${price}, ${type} and ${location}`})
}