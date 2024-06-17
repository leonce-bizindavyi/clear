export default function Page({params}){
    const slug = params.slug
    return (
        <h1 className="font-semibold text-xl">
            {slug}
        </h1>
    )
}