import { unstable_noStore as noStore } from "next/cache"
import executeQuery from "../_utils/db";
export async function getAllRooms(start, limit){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getrooms(?, ?)',[start,limit])
        return rows[0]
    } catch (error) {
        console.log("Error",error)
    }
}
export async function getAllHouses(start, limit){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getHouses(?, ?)',[start,limit])
        return rows[0]
    } catch (error) {
        console.log("Error",error)
    }
}
export async function getAllAutos(start, limit){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getAutos(?, ?)',[start,limit])
        return rows[0]
    } catch (error) {
        console.log("Error",error)
    }
}
export async function getAllServices(start, limit){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getAllServices(?, ?)',[start,limit])
        return rows[0]
    } catch (error) {
        console.log("Error",error)
    }
}
export async function getTrendingServices(start, limit){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getAllServices(?, ?)',[start,limit])
        return rows[0]
    } catch (error) {
        console.log("Error",error)
    }
}
export async function getOneServices(uuid){
    noStore();
    try {
        const [rows] = await executeQuery('CALL getOneService(?)',[uuid])
        return {details : rows[0][0], images: rows[1]}
    } catch (error) {
        console.log("Error",error)
    }
}
