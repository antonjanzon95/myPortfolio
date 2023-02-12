interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <nav className="relative w-full text-slate-100 flex justify-end items-center">
      <ul className="flex text-sm gap-12 items-center pr-8">
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
