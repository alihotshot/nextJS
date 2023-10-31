const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto bg-purple-300 py-6 px-2">
      <div>
        <h2 className="text-xl font-bold">Verge Future</h2>
      </div>
      <ul className="flex space-x-8 font-semibold">
        <li>Home</li>
        <li>Courses</li>
      </ul>
    </header>
  )
}

export default Header