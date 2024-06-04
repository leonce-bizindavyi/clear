import Activate from "@/app/ui/auth/activate";

export default function Page({ params }) {
    const uuid = params.uuid;
    return (
       <Activate uuid={uuid} />
    )
}