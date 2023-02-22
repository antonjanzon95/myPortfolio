interface Props {
  icon: React.ReactElement;
  link: string;
  description: string;
}

const SideBarIcon: React.FC<Props> = ({ icon, link, description }) => (
  <a
    href={link}
    target="_blank"
    aria-label={description}
    className="sidebar-icon"
  >
    {icon}
  </a>
);

export default SideBarIcon;
