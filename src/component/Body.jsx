import "bootstrap-icons/font/bootstrap-icons.css";
const Body = () => {
  return (
    <div className="">
      <div className="brightness-50">
        <img src="RentokilHomepage.png" />
      </div>
      <div className="absolute bottom-56 text-white left-96 leading-loose line-clamp-6 flex ">
        <div className="w-1/2 mt-40">
          <p className="font-semibold text-5xl">
            Kami adalah ahlinya dalam pengendalian hama
          </p>
          <h2 className="text-xl mt-7">
            Rentokil menyediakan solusi pengendali hama yang efektif, andal dan
            inovatif untuk rumah tinggal dan properti komersial seluruh
            Indonesia.
          </h2>
          <div className="flex mt-6">
            <h1 className="text-2xl pr-14 mt-3">021-299-669-54</h1>
            <h1 className="  p-3 text-3xl  transition ease-in-out delay-150    hover:bg-sky-700 bg-sky-600 duration-300 cursor-pointer text-white">
              Hubungi kami
            </h1>
          </div>
        </div>
        <div className="ml-10 bg-white text-black   p-8 text-center text-xl border-t-8 border-red-600">
          <h1 className="mb-2">Saya butuh bantuan untuk...</h1>
          <select className="text-black w-80 h-12 border-none mb-4 bg-slate-200  p-1">
            <option value="volvo">Semut</option>
            <option value="saab">Kutu Busuk</option>
            <option value="mercedes">Burung</option>
            <option value="audi">Kecoa</option>
            <option value="volvo">Lalat</option>
            <option value="saab">Nyamuk</option>
            <option value="mercedes">Tikus</option>
            <option value="audi">Semut</option>
            <option value="volvo">Rayap</option>
            <option value="saab">Ular</option>
            <option value="mercedes">Pengendalian Hama lainya</option>
            <option value="audi">Pengendalian Hama Komersial</option>
            <option value="saab">Pengendalian Hama diRumah</option>
            <option value="mercedes">Servis disenfeksi</option>
            <option value="audi">Kutu</option>
          </select>
          <br />
          <input
            className="border border-black w-80 h-12  pl-1"
            placeholder="Masukan Kota Anda"
            type="text"
          />{" "}
          <br />
          <div className="flex text-sky-500 mt-3 ml-3 text-sm">
            <img src="target.png" className="w-4 h-4 relative top-2 mr-1 " />
            <p className="mt-1 cursor-pointer">Gunakan Lokasi Saya Saat ini</p>
          </div>
          <div className="flex mt-5 ml-4">
            <div className="border border-black text-center p-3 cursor-pointer border-b-8 border-b-red-600 w-32 ">
              <div className="w-20 h-20 ml-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
                <img src="house (1).png" className="" />
                <h1>Rumah</h1>
              </div>
            </div>
            <div className="border border-black text-center p-3 ml-8 cursor-pointer border-b-8 border-b-red-600 w-32 h-36">
              <div className="w-20 h-20 ml-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                <img
                  src="building.png"
                  className=""
                />
                <h1>Building</h1>
              </div>
            </div>
          </div>
          <div className="bg-sky-600 w-44 text-center flex justify-center ml-[70px] mt-10 text-lg p-3 text-white font-bold hover:bg-sky-500 cursor-pointer">
            <h1 className="">Temukan Layanan</h1>
          </div>
          <div className="text-sky-700 mt-4 cursor-pointer">
            Tidak Yakin? indetifikasi hama <br /> anda
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
