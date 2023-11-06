import Link from "next/link"
import Logo from "/public/logo.svg"
import Image from "next/image"
import Wrapper from "@/app/components/shared/Wrapper"

const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between py-6 px-2 bg-m">
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="Verge Future Logo" />
          </Link>
        </div>
        <ul className="flex space-x-8 font-semibold py-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
        </ul>
      </header >
    </Wrapper>
  )
}

export default Header