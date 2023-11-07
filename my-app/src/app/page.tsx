import Logo from "public/logo.svg"
import Image from "next/image"
import Hero from "@/app/components/widgets/Hero"
import Wrapper from "./components/shared/Wrapper"

function Home() {
  return (
    <Wrapper>
      <div>
        <Hero />
        <div className="flex justify-center my-6 bg-gray-200">
          <div className=" order-last mx-4 self-center">
            <Image src={Logo} alt="Tile Mountain Logo" />
          </div>
          <div className=" mx-4 self-center text-center">
            <h1 className=" font-bold text-6xl text-blue-700">Welcome to NorthBy</h1>
            <h2 className=" text-2xl font-semibold text-blue-400">A Premium in Sight and Sound</h2>
            <button className=" border-2 border-black p-2 rounded-md bg-blue-800 text-white my-4 hover:underline">Learn More</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home