interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <nav className="relative w-full flex justify-center items-center">
      <ul className="flex text-sm font-semibold gap-12 items-center">
        <li className="hover:text-gray-100 hoverUnderline">
          <a className="" href="">
            Home
          </a>
        </li>
        <li className="hover:text-gray-100 hoverUnderline">
          <a className="" href="">
            Projects
          </a>
        </li>
        <li className="hover:text-gray-100 hoverUnderline">
          <a className="" href="">
            Skills
          </a>
        </li>
        <li className="hover:text-gray-100 hoverUnderline">
          <a className="" href="">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
