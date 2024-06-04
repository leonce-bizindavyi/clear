import executeQuery from "@/app/_utils/db";

export async function GET(request){
    // If you need to access specific headers by name:
  const type = request.headers.get('type');
  const start = request.headers.get('start');
  const limit = request.headers.get('limit');
  try {
      const [rows] = await executeQuery('CALL getTypeServices(?, ?, ?)',[type,start,limit])
      return Response.json(rows[0])
  } catch (error) {
    console.log(error)
  }
return Response.json({success:true,message:`type: ${type}, start: ${start}, limit: ${limit}`})
}