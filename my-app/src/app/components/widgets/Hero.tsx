
function Hero() {
  return (
    <div>
      <button className=" m-6 p-4 rounded-md ring-4 ring-offset-4 ring-offset-black">Hero</button>
      <div className="m-8 bg-gray-50 p-10">
        <button className="p-10 mx-10 shadow-sm bg-white hover:underline font-semibold">1</button>
        <button className="p-10 mx-10 shadow-lg bg-white hover:underline font-semibold">2</button>
        <button className="p-10 mx-10 shadow-xl bg-white hover:underline font-semibold">3</button>
      </div>
    </div>
  )
}

export default Hero