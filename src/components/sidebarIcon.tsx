interface Props {
  icon: React.ReactElement;
  link: string;
}

const SideBarIcon: React.FC<Props> = ({ icon, link }) => (
  <a href={link} target="_blank" className="sidebar-icon">
    {icon}
  </a>
);

export default SideBarIcon;
