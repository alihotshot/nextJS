import Link from "next/link"
import Logo from "/public/logo.svg"
import Image from "next/image"


const Footer = () => {
    return (
        <footer className="flex justify-between px-4  bg-purple-400 max-w-screen-xl mx-auto py-6 my-96 ">
            {/* <div>
                <Image src={Logo} alt="Tile Mountain" />
            </div>
            <ul className="flex space-x-4 font-semibold items-center">
                <li>Home</li>
                <li>Courses</li>
            </ul> */}
        </footer>
    )
}

export default Footer