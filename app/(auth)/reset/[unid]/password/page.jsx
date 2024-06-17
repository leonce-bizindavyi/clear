import ResetPassword from "@/app/ui/auth/reset-password";

export default function Page({params}){
    const uuid = params.unid
    return (
        <ResetPassword uuid={uuid}/>
    )
}