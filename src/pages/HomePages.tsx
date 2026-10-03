import { BiCaretRightCircle } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
import BackgroundImage from "./BackgroundImage.png";

export default function HomePages() {
  return (
    // <main className={`bg-[#0e1f14] h-screen w-screen background-image: url(${BackgroundImage}); bg-cover bg-center text-[#f4f7f2] font-sans`}>

      <main
  className={`h-screen w-screen bg-[#0e1f14] bg-cover bg-center text-[#f4f7f2] font-sans bg-[url('./BackgroundImage.png')]`}
>


      {/* <img src={BackgroundImage} alt="" className=" inset-0 w-full h-full flex items-center justify-center z-0" /> */}
      <section className="  rounded-[28px] p-6 md:p-10 flex flex-col bg-[radial-gradient(120%_100%_at_50%_0%,_#1b3323_0%,_#0e1f14_70%)]">
        <div className=" inset-0 flex items-center justify-center z-0">
          <img
            src="Plant image (1).png"
            alt="Round bush plant"
            className="w-80 h-80 object-cover rounded-full opacity-90"
          />
        </div>

        <div className=" z-10 w-fit">
          <h1 className=" whitespace-nowrap absolute bottom-450 left-0 text-4xl md:text-5xl font-bold leading-tight ">
            Breath Natural
          </h1>
          <p className="text-sm text-[#f4f7f2]/70 max-w-[260px] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-5">
            <button className="rounded-full px-6 py-2.5 text-sm font-semibold border border-white/40 hover:-translate-y-0.5 transition-transform">
              Explore
            </button>
            <button className="flex items-center gap-2 text-sm bg-transparent border-none cursor-pointer">
              <BiCaretRightCircle className="text-2xl" />
              <span>Live Demo...</span>
            </button>
          </div>
        </div>

        <div className=" top-20 right-6 md:right-10 w-[200px] z-20 rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-md p-4">
          <img
            src="image2.png"
            alt="Calathea plant"
            className="w-full h-32 object-cover rounded-xl mb-2.5"
          />
          <p className="text-[11px] text-[#f4f7f2]/70 mb-0.5">
            Trendy House Plant
          </p>
          <h3 className="text-base font-bold mb-2.5">Calathea plant</h3>
          <button className="rounded-full px-4 py-1.5 text-[13px] font-semibold bg-[#f4f7f2] text-[#0e1f14]">
            Buy Now
          </button>
        </div>

        <div className=" bottom-10 left-6 md:left-10 w-[220px] z-20 rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-md p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#3a5a44] shrink-0" />
            <div>
              <h4 className="text-[13px] font-bold mb-0.5">Zilly</h4>
              <div className="flex text-[#f4b740] text-xs gap-0.5">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <MdStarHalf />
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#f4f7f2]/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
        </div>
      </section>

      <section className=" flex items-center gap-8 mt-6 min-h-[220px] rounded-[28px] bg-[#16281c] overflow-hidden p-8 md:p-10">
        <img
          src="image 3.png"
          alt="Small deco plant"
          className="w-44 h-44 object-contain"
        />
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold mb-2.5">
            For Small Decs Ai Plants
          </h2>
          <p className="text-[13px] text-[#f4f7f2]/70 mb-3.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <span className="block text-lg font-bold mb-4">Rs. 599/-</span>
          <div className="flex items-center gap-3">
            <button className="rounded-full px-6 py-2.5 text-sm font-semibold border border-white/40">
              Explore
            </button>
            <button className="w-[38px] h-[38px] rounded-full border border-white/30 flex items-center justify-center">
              <FaShoppingBag />
            </button>
          </div>
        </div>
      </section>

      PRODUCT 2
      <section className=" flex items-center justify-between gap-8 mt-6 min-h-[220px] rounded-[28px] bg-[#16281c] overflow-hidden p-8 md:p-10">
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold mb-2.5">
            For Fresh Decs Ai Plants
          </h2>
          <p className="text-[13px] text-[#f4f7f2]/70 mb-3.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <span className="block text-lg font-bold mb-4">Rs. 579/-</span>
          <div className="flex items-center gap-3">
            <button className="rounded-full px-6 py-2.5 text-sm font-semibold border border-white/40">
              Explore
            </button>
            <button className="w-[38px] h-[38px] rounded-full border border-white/30 flex items-center justify-center">
              <FaShoppingBag />
            </button>
          </div>
        </div>
        <img
          src="image2.png"
          alt="Fresh deco plant"
          className="w-44 h-44 object-contain"
        />
      </section>
    </main>
  );
}
