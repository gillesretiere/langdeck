import { HM_Logo_WK } from "../../../assets/images";
import { hamburger } from "../../../assets/icons";
import { navLinks } from "../../../assets/constants/index.js";
import HomeIcon from '@mui/icons-material/Home';

const Nav = () => {
  return (
    <header className="bg-white padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container">

        <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
        <a href="/">
        {/* <span>{<img src={HM_Logo_WK} alt="logo" width={30} height={20} className="pl-0" />}</span> */}
        <HomeIcon />
        </a>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-neue_haas_grotesk_display leading-normal text-lg text-slate-800"
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