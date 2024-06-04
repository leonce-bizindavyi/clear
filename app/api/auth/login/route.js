import executeQuery from "@/app/_utils/db";
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs/dist/bcrypt';

export async function POST(request) {
    const secret=process.env.SECRET
    const datas = await request.json();
    const { email, password } = datas
    const [rows] = await executeQuery("SELECT * FROM users WHERE email=?", [email])
    if (rows.length == 1) {
        const isMatch = await bcrypt.compare(password, rows[0].passcode)
        if (!isMatch) {
            return Response.json({ success: false, message: "Password incorrect !" })
        }
        const active = rows[0].actif
        if (active === 0) {
            return Response.json({ success: false, message: "The account is not activated. Check your email box for the message sent to you to activate it. or consult the clear solution help center" })
        }
        // Générer un jeton JWT pour l'utilisateur
        const user=rows[0];
        const token = sign(
          {
            exp: 60 * 60 * 24 * 15,
            id:user.id,
            uuid: user.uuid,
            name: user.name,
            adresse: user.adresse,
            phone: user.phone,
            role: user.role,
            Admin: user.Admin,
            email:user.email,
            actif: user.actif,
            admin: user.admin,
            create_at:user.create_at,
            update_at:user.update_at
          },
          secret
        );

        return Response.json({ success: true,actif:rows[0].actif, admin: rows[0].admin,role:rows[0].role, message: "You have logged in successfully !",data:token })
    } else {
        return Response.json({ success: false, message: "This email doesn't exist!" })
    }

}