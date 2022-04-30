import ok from "./img/ss.png";

const Projek = () => {
  return (
    <div>
      <div className="tempatProjeknya flex flex-wrap justify-center items-center mt-10">
        <div className="boxProjek bg-blue-100 p-5 w-96 flex flex-col items-center rounded-2xl shadow-lg">
          <img src={ok} className="h-40 w-auto m-auto mt-5 mb-5 rounded-xl" />
          <p className="font-semibold">REACT WEATHER APP</p>
          <div className="flex">
            <div className="m-5 bg-blue-200 p-3 text-xs rounded-lg mt-5 text-blue-900 text-center">
              <a href="https://albabriziq.github.io/cuaca/">VISIT PROJECT</a>
            </div>
            <div className="m-5 bg-blue-200 p-3 text-xs rounded-lg mt-5 text-blue-900 text-center">
              <a href="https://github.com/AlbabRiziq/cuaca">SOURCE CODE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projek;
