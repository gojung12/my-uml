const AboutMe = () => {
  return (
    <div className="">
      <div className="items-center flex justify-center">
        <img src="Rentokil.png" alt="" />
      </div>
      <div className="text-3xl text-center mt-1">
        <h1>
          Rentokil Indonesia: Jasa pest control untuk rumah & bisnis di <br />
          Indonesia
        </h1>
      </div>
      <div className="text-center mt-6 mb-6">
        <p>
          Kami telah menyediakan layanan jasa pest control secara global selama
          lebih dari 90 tahun dan telah lebih dari 50 tahun <br /> melindungi
          rumah dan bisnis dari serangan hama di Indonesia. Rentokil Pest
          Control memiliki teknisi lokal yang dekat dengan <br /> Anda dan siap
          memberikan Anda layanan pest control yang efektif, aman dan andal
          untuk menjaga rumah dan tempat kerja Anda <br /> bebas hama.
        </p>
      </div>
      <div className="text-center">
        Untuk informasi lebih lanjut mengenai layanan Rentokil Pest Control,
        hubungi kami di 021-299-669-54 atau isi online form.
      </div>
      <div className="flex justify-center mt-11 text-center">
        <div className="">
          <img src="eco-house.png" className="w-32 ml-16" />
          <p>
            Melindungi properti di seluruh <br />Indonesia dari serangan hama selama <br />
            lebih dari 50 tahun
          </p>
        </div>
        <div className="ml-16 mr-16">
          <img src="user (1).png" className="w-24 ml-20 "/>
          <p>Teknisi yang terlatih, berpengalaman <br /> dan bersertifikat</p>
        </div>
        <div className="">
          <img src="planet-earth.png" className="ml-20"/>
          <p>Pengendalian hama ramah lingkungan <br /> dengan mengutamakan keselamatan <br /> untuk solusi jangka panjang</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
