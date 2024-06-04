import executeQuery from "@/app/_utils/db";

export async function GET(request) {
  // If you need to access specific headers by name:
  const start = request.headers.get('start');
  const limit = request.headers.get('limit');
  const search = request.headers.get('search');
  try {
    const [rows] = await executeQuery('CALL getSearched(?, ?,?,?)', [limit, search, 5000,start])
    return Response.json(rows[0])
  } catch (error) {
    console.log(error)
  } 
  return Response.json({ success: true, message: `start: ${start}, limit: ${limit}` })
}