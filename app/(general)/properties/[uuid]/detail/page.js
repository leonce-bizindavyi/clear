import { getOneServices } from "@/app/_libs/datas"
import BallRoomDetails from "@/app/ui/properies/room/ball-room-details"


export default async function page({params}){
    const uuid = params.uuid
    const property = await getOneServices(uuid)
    console.log(property)
    return <BallRoomDetails service={property.details} images={property.images}/>
}