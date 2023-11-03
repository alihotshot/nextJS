import Logo from "/public/logo.svg"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto py-6 px-2 bg-m">
      <div>
        {/* <h2 className="text-xl font-bold">Verge Future</h2> */}
        <Image src={Logo} alt="Verge Future Logo" />
      </div>
      <ul className="flex space-x-8 font-semibold py-6">
        <li>Home</li>
        <li>Courses</li>
      </ul>
    </header>
  )
}

export default Header