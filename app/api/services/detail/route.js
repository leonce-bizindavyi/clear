export async function GET(request){
    const uuid = request.headers.get('uuid')
    console.log(uuid)
    return Response.json({success: false})
}