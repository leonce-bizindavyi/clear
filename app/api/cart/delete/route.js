import executeQuery from "@/app/_utils/db"

export async function POST(request){
    const {user,service} = await request.json()
    console.log(user,service)
    const [rows] = await executeQuery('DELETE FROM cart WHERE cart.user=? AND cart.service =?',[user,service])
    console.log(rows)
    return Response.json({success:false})
}