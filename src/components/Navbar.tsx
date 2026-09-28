import { CiSearch } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

 
export function Navbar() {
  const NAV_ITEMS = [
    { label: "Home", href: "home", hasDropdown: false },
    { label: "Plants Type", href: "Plants Type", hasDropdown: true },
    { label: "More", href: "More", hasDropdown: false },
    { label: "Contact", href: "Contact", hasDropdown: false },
  ];
 
  return (
    <nav className="absolute top-0 left-0 z-30 w-full px-16 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 object-contain" src="plant1.png" alt="" />
          <h1 className="text-2xl font-semibold text-white">Planto.</h1>
        </div>
 
        <div className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              className="flex items-center gap-1 text-base font-medium text-white transition-opacity duration-200 hover:opacity-70"
            >
              {item.label}
              {item.hasDropdown && <IoChevronDown className="text-sm" />}
            </a>
          ))}
        </div>
 
        <div className="flex items-center gap-6 text-2xl text-white">
          <button
            type="button"
            aria-label="Search"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <CiSearch />
          </button>
 
          <button
            type="button"
            aria-label="Shopping Bag"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <MdOutlineShoppingBag />
          </button>
 
          <button
            type="button"
            aria-label="Menu"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaGripLines />
          </button>
        </div>
      </div>
    </nav>
  );
}
 