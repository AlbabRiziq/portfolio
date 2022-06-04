import ig from "./img/instagram.png";
import fb from "./img/facebook.png";
import gb from "./img/github.png";

const Footer = () => {
  const tahun = () => {
    let ok = new Date().getFullYear();

    return ok;
  };

  return (
    <div className="bg-slate-400 h-20 rounded-md flex items-center justify-evenly flex-wrap">
      <p className="text-white font-light text-xs">ALBAB RIZIQ</p>
      <div className="flex">
        <a href="https://github.com/AlbabRiziq" className="m-2">
          <img src={gb} alt="" />
        </a>
        <a href="https://www.facebook.com/albab.riziq" className="m-2">
          <img src={fb} alt="" />
        </a>
        <a href="https://www.instagram.com/albabriziq_/" className="m-2">
          <img src={ig} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
