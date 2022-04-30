import React from "react";
import About from "../About/About";
import Skill from "../Skill/Skill";
import muka from "./img/foto.jpeg";
import logoReact from "./img/react.png";
import lahir from "./img/lahir.png";
import logoHtml from "./img/html.png";
import logoJS from "./img/js.png";
import logoCss from "./img/css.png";
import Footer from "../Footer/Footer";
import Projek from "../Projek/Projek";
import Navbar from "../Navbar/Navbar";

const Body = () => {
  const umur = () => {
    const hariDalamTahun = () => {
      let waktu = new Date();
      let tahun = waktu.getFullYear();
      let hari;
      if (tahun % 400 == 0) {
        hari = 366;
      } else {
        if (tahun % 400 > 0 && tahun % 100 == 0) {
          hari = 365;
        } else if (tahun % 400 > 0 && tahun % 100 > 0 && tahun % 4 == 0) {
          hari = 366;
        } else {
          hari = 365;
        }
      }

      return hari;
    };

    console.log(hariDalamTahun());
    let satuHari = 24 * 60 * 60 * 1000;
    let tglLahir = new Date(2006, 9, 1);
    let hariIni = new Date();

    let hari = Math.round((hariIni - tglLahir) / satuHari);
    let umur = Math.trunc(hari / hariDalamTahun());
    return umur;
  };

  return (
    <div className="bg-blue-50 w-[90%] max-w-4xl p-10 rounded-xl">
      <div className="flex justify-center content-center flex-col">
        <div className="flex justify-evenly items-center flex-col md:flex-row text-center">
          <img src={muka} className="mb-8 rounded-full h-40 w-40" />
          <div>
            <h1 className="font-extrabold text-2xl mb-3 md:text-3xl text-slate-900">
              ALBAB RIZIQ
            </h1>
            <p className="text-xs sm:text-base">
              STUDENT | WEB DEVELOPER | {umur()} YEARS OLD{" "}
            </p>
          </div>
        </div>
        <p className="mt-10 text-center p-2 rounded-full">
          Interested in working with me?{" "}
          <a
            className="text-blue-600 font-bold"
            href="mailto:albabriziq123@gmail.com"
          >
            EMAIL ME!
          </a>
        </p>
        <br />
        <br />
        <br />
        <p className="font-bold text-xl text-slate-900 text-center">
          MORE ABOUT ME
        </p>
        <div className="flex justify-evenly items-center flex-wrap">
          {/* /////////////////////// ABOUT  /////////////////////////*/}
          <About gambar={lahir} tentang="1 OCTOBER 2006" />
          {/* /////////////////////////////////////////////////////// */}
        </div>
      </div>
      <br />
      <br />
      <br />

      <br />
      <p className="font-bold text-zinc-900 text-2xl text-center">MY SKILLS</p>
      <div className="flex justify-evenly items-center flex-wrap">
        {/* ////////////////////// SKILL /////////////////////*/}
        <Skill gambar={logoHtml} nama="HTML" />
        <Skill gambar={logoCss} nama="CSS" />
        <Skill gambar={logoJS} nama="JAVASCRIPT" />
        <Skill gambar={logoReact} nama="REACT" />
        {/* ///////////////////////////////////////////////////// */}
      </div>

      <div className="mt-10 mb-10">
        <p className="font-bold text-zinc-900 text-2xl text-center">
          MY PROJECT
        </p>
        <Projek />
      </div>
      <Footer />
    </div>
  );
};
export default Body;
