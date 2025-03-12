import Link from "next/link"

const HeaderComponent = () => {

    return (
      <div className="bg-blue-500 text-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href='/'>
          <div className="text-2xl font-bold">
            Home
          </div>
          </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">Link1</a>
          <a href="#about" className="hover:text-gray-300">Link2</a>
          <a href="#services" className="hover:text-gray-300">Link3</a>
          <a href="#contact" className="hover:text-gray-300">Link4</a>
         </nav>      
        </div>
      </div>
    )
}
export default HeaderComponent