import React from "react";
import TeamCard from "../TeamCard/TeamCard";

const TeamRow = ({ team }) => {
  return (
    <>
      {team.map(({ id, role, img, title, twitter_link }) => (
        <TeamCard
          img={img}
          title={title}
          role={role}
          twitter_link={twitter_link}
          key={id}
        />
      ))}
    </>
  );
};

export default TeamRow;
