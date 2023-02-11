interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <nav className="relative w-full h-full bg-slate-200 text-slate-700 text-xl font-bold flex items-center justify-center">
      <ul className="flex justify-center items-center text-xl top-0 flex-row gap-16">
        <li className="hover:text-slate-400">
          <a className="" href="">
            Home
          </a>
        </li>
        <li className="hover:text-slate-400">
          <a className="" href="">
            Projects
          </a>
        </li>
        <li className="hover:text-slate-400">
          <a className="" href="">
            Skills
          </a>
        </li>
        <li className="hover:text-slate-400">
          <a className="" href="">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
