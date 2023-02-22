import { Link, animateScroll as scroll } from "react-scroll";

interface Props {
  headerHeight: number;
  sectionIDs: string[];
}

const Header: React.FC<Props> = (props: Props) => {
  const handleTopClick = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <nav className="relative w-full h-full flex items-center justify-center">
      <img
        src="/AJ-logo.svg"
        alt="Logo"
        className="w-24 absolute top-2 left-4"
      />
      <div className="flex justify-center items-center">
        <div className="flex text-sm font-semibold gap-12 items-center">
          <Link
            to="top"
            onClick={handleTopClick}
            className="hover:text-gray-100 hoverUnderline cursor-pointer"
            key="top"
            aria-label="Go to the home page"
          >
            Home
          </Link>
          {props.sectionIDs.map((id) => (
            <Link
              to={id}
              smooth={true}
              offset={-props.headerHeight}
              className="hover:text-gray-100 hoverUnderline cursor-pointer"
              key={id}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
