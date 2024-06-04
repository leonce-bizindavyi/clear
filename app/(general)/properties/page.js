import { getAllServices } from "@/app/_libs/datas"
import Properties from "@/app/ui/properies"
import { Suspense } from "react"


export default async function Page() {
        const services = await getAllServices(0,17)
    return (
        <Suspense>
            <Properties service={services} />
        </Suspense>
        
    )
}