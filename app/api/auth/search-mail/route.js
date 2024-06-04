import executeQuery from "@/app/_utils/db"
import { transporter } from "@/app/_utils/email";
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000000) + 100000; // Generate a random number between 100000 and 999999
  return randomNumber.toString().substring(0, 6); // Convert to string and extract the first 6 digits
}
export async function POST(request) {
  const data = await request.json()
  const mail = data.email
  try {
    const [[rows]] = await executeQuery('SELECT uuid,name,email FROM users WHERE email=?', [mail])
    if (rows != undefined) {
      const { uuid, name, email } = rows
      const otp = generateRandomNumber()
      const mailOptions = {
        from: process.env.SMTP_ADDRESS,
        to: email,
        subject: 'Reset Password',
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
                          <h2>Hello ${name},</h2>
                          <p>your account has been found successfully.<br>
                          Please click the button below to reset your password</p>
                        </div>
                        <div className="button">
                        <a href="${process.env.NEXT_PUBLIC_URL}/reset/${uuid}/password" style="text-decoration: none; color: white;">
                          Reset Password
                        </a>
                        </div>
                      </div>
                    </body>
                  </html>
                `,

      };
      try {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('E-mail envoyé: ' + info.response);
          }
        });
      } catch (error) {
        console.log("error while sending email", error)
      }

      return Response.json({ success: true, message: "Your account found successfully !", otp: otp })
    } else {
      return Response.json({ success: false, message: "Your account doesn't exist in system !" })
    }

  } catch (error) {
    console.error("Error while activating account", error)
  }
}