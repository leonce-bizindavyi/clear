import Link from "next/link"

function NotFound404() {
    return (
        <div className="min-w-screen min-h-screen  flex p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-md bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
                        <p>The page you&apos;re looking for isn&apos;t available.</p>
                        <p>Try searching again or use the Go Home button below.</p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <Link href={`/`} className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600 flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>Go Home</Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <img src='/img/404NotFound.jpg' />
                </div>
            </div>
            <div className="w-64 md:w-96 h-96 md:h-full bg-black bg-opacity-10 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
    )
}
export default NotFound404