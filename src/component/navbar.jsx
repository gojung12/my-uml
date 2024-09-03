import '../index.css'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center h-28 bg-white shadow-lg ">
      <div className="container flex bg-white ">
        <div className="flex w-1/2 items-center ">
          <img src="/Rentokil.png" className=" " />
        </div>
        <div className="w-1/2 flex items-center justify-end poppins-medium ">
          <h1 className="px-4 py-2  rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-600 duration-300 cursor-pointer text-black">Home</h1>
          <h1 className="ml-6  px-4 py-2  rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-600 duration-300 cursor-pointer text-black">Our Company</h1>
          <h1 className="ml-6  px-4 py-2  rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-600 duration-300 cursor-pointer text-black">Product</h1>
          <h1 className="ml-6  px-4 py-2  rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-600 duration-300 cursor-pointer text-black">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
