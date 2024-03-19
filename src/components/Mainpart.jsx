const Mainpart = () => {
  return (
    <div className="flex flex-col ml-10 mt-40">
      <span className="text-3xl font-light">Hey,I'm Rc0ut</span>
      <div className="flex flex-row text-8xl font-bold mt-3">
        <span className="text-[#6E00F2]">Front</span>
        <span>end Developer</span>
      </div>
      <p className="text-3xl mt-10 font-normal">
        I'm a frontend developer based in Italy, I'll help you build beautiful
        websites your users will love.
      </p>
      <div className="mt-8">
        <button className="bg-[#6E00F2] text-white p-4 font-bold rounded-lg text-xl">
          Get In Touch
        </button>
        <button className="bg-white text-blacks border border-black ml-5 p-4 font-bold rounded-lg text-xl">
          Browse Projects
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-20">
        <img
          src="https://i.ibb.co/KXHPcF7/unnamed-modified.jpg"
          height={600}
          width={600}
          className="border-[#6E00F2] rounded-full border-4 "
        />
      </div>
    </div>
  );
};

export default Mainpart;
