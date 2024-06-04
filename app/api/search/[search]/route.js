import executeQuery from "@/app/_utils/db"

export async function GET(request,{params}){
    const search = params.search
    try {
        const [rows] = await executeQuery("SELECT towns.name FROM towns WHERE towns.name LIKE ?",[`%${search}%`])
        return Response.json(rows)
    } catch (error) {
      console.log(error)
    }
    return Response.json({success:false})
}