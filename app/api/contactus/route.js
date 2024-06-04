import { transporter } from "@/app/_utils/email";

export async function POST(request){
    const {name,email,message} = await request.json()
    const mailOptions = {
        from: email ,
        to: process.env.SMTP_ADDRESS,
        subject: `${name} From Contact us`,
        html: message,
        
      }; 
      try {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              return Response.json({error: true,message:'There is error while sending message'})
            } else {
              console.log('E-mail envoyé: ' + info.response);
              return Response.json({error: false,message:'E-mail envoyé: ' + info.response})
            }
          });
      } catch (error) {
        console.log("error while sending email",error)
        return Response.json({error: true,message:'There is error while sending message'})
      }
      finally{
        return Response.json({error: false})
      }
}