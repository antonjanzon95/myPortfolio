import React from "react";

interface Props {
  icon: React.ReactElement;
  iconType: string;
}

const TechnologyIcon: React.FC<Props> = ({ icon, iconType }) => (
  <div className={`${iconType}`}>{icon}</div>
);

export default TechnologyIcon;
