import React from "react";

// import components
import { Repo, Live } from "./svgs";

function Card({ props }) {
  return (
    <div className="card__container">
      <div className="card_header">
        <h3 className="project_title">{props.projectName}</h3>
        <div className="project_links">
          <a href={ props.links.github } target="_blank"><Repo /></a>
          {props.links.live && <a href={ props.links.live } target="_blank"><Live /></a>}
        </div>
      </div>
      <div className="project_description">{props.projectDescription}</div>
      <div className="project_tools">
        {[...props.tools].map((tool, key) => {
          return (
            <div className="tool" key={key}>
              {tool}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
