export default function Footer() {
  return (
    <footer className="bg-[#0e1f14] text-[#f4f7f2] rounded-[28px] mt-6 px-8 md:px-14 pt-12 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <img src="plant 1.png" alt="" className="w-6 h-6" />
            <h1 className="text-lg font-bold">Planto.</h1>
          </div>
          <p className="text-sm text-[#f4f7f2]/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
 
        {/* Quick links */}
        <div>
          <h2 className="text-base font-bold mb-4">Quick Link's</h2>
          <ul className="flex flex-col gap-2.5 text-sm text-[#f4f7f2]/60">
            <li>Home</li>
            <li>Type's Of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
 
        {/* Newsletter */}
        <div>
          <h2 className="text-base font-bold mb-4">For Every Update.</h2>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 min-w-0 rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-[#f4f7f2] placeholder:text-[#f4f7f2]/40 outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2.5 text-sm font-semibold bg-[#f4f7f2] text-[#0e1f14] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
 
      {/* Bottom bar */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6 text-sm text-[#f4f7f2]/50">
        <p>planto © all right reserve</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#f4f7f2]">FB</a>
          <a href="#" className="hover:text-[#f4f7f2]">TW</a>
          <a href="#" className="hover:text-[#f4f7f2]">LI</a>
        </div>
      </div>
    </footer>
  );
}