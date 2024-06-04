import executeQuery from "@/app/_utils/db"
import { transporter } from "@/app/_utils/email";
import bcrypt from 'bcryptjs/dist/bcrypt';
async function checkUserEmail(email) {
    try {
        const [user] = await executeQuery("SELECT email FROM users WHERE email= ?", [email])
        return user.length
    } catch (error) {
        console.log('error in sql for checking Mail', error)
        return
    }
}

const generateRandomString = (long) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    let result = '';
    for (let i = 0; i < long; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

function removeAccents(str) {
    // Normalize the string using a normalization function (e.g., from a library)
    const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // Convert to lowercase (optional)
    return normalizedStr.toLowerCase();
}
export async function POST(request) {
    const { name, email, password, bank, account, phone, provider } = await request.json()
    console.log(name, email, password, bank, account, phone,  provider)
     const isNew = await checkUserEmail(email)
    if (isNew == 0) {
        const uuid = (removeAccents(name.substring(0,4)) + generateRandomString(5)).replace(' ', '')
        const saltrounds = 10
        const salt = await bcrypt.genSalt(saltrounds)
        const hashedPassword = await bcrypt.hash(password, salt)
        try {
            const [rows] = await executeQuery(
                "INSERT INTO `users` (uuid, name, passcode, phone, role, email) VALUES (?,?,?,?,?,?)", [
                uuid, name, hashedPassword, phone, provider, email
            ])
            const user_id = rows.insertId
            console.log(user_id)
            if(provider == 2 && user_id && user_id==0){
            const [row] = await executeQuery("INSERT INTO providers (user_id,bank,account) VALUES (?,?,?)",[user_id,bank,account])
            }
            const mailOptions = {
                from: process.env.SMTP_ADDRESS,
                to: email,
                subject: 'Account validation',
                html: `
                  <html>
                    <head>
                      <style>
                      body {
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        color: black;
                        line-height: 1.5;
                      }
                      
                      .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                      
                      .header {
                        color:black;
                        margin-bottom: 20px;
                      }
                      
                      .button {
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                        margin-left:50px;
                      }
                      
                      .button a {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #3a86ff;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                      }
                      
                      
                      
                      .content {
                        margin-bottom: 20px;
                      }
                      </style>
                    </head>
                    <body>
                      <div className="container">
                        <div className="header">
                          <h2>Hello ${name} ,</h2>
                          <p>your account has been created successfully.<br>
                          Please click the link below to activate your account</p>
                        </div>
                        <div className="button">
                          <a href="${process.env.NEXT_PUBLIC_URL}/${uuid}/activate" style="text-decoration: none; color: white;">
                            Active now
                          </a>
                        </div>
                      </div>
                    </body>
                  </html>
                `,
                
              }; 
              try {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('E-mail envoyé: ' + info.response);
                    }
                  });
              } catch (error) {
                console.log("error while sending email",error)
              }
              
                
            return Response.json({ success: true, "message": "You have create account successfully !" })
        } catch (error) {
            console.log('error', error)
            return Response.json({ success: false, "message": email + "has already in database" })
        }
    } else {
        return Response.json({ success: false, "message": email + "has already in database" })
    }
}