import icon from "./icon.svg";

const Navbar = () => {
  return (
    <nav className="float-right fixed right-20 hover:border-2 ease-in duration-100 ">
      <div className="flex items-center justify-center ">
        <img src={icon} />
        <p className="ml-3">MENU</p>
      </div>
      <div className="flex-col ">
        <div className=" bg-blue-300"></div>
      </div>
    </nav>
  );
};

export default Navbar;
