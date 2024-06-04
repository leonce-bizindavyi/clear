import executeQuery from "@/app/_utils/db"

export async function POST(request) {
    const { uuid } = await request.json()
    try {
        const [rows] = await executeQuery('UPDATE users SET actif=1 WHERE uuid=?', [uuid])
        return Response.json({ success: true, message: "You have acivated your account successfully !" })
    } catch (error) {
        console.error("Error while activating account", error)
    }
}