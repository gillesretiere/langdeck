import { LGDK_LOGO } from "../../../assets/images";
import { hamburger } from "../../../assets/icons";
import { navLinks } from "../../../assets/constants/index.js";

const Nav = () => {
  return (
    <header className="bg-white padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <div>{<img src={LGDK_LOGO} alt="logo" width={128} className="ml-8 pl-0" />}</div>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-articulat_cf leading-normal font-semibold text-primary-orange"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;