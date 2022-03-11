import React from "react";

const baseURL = "https://github.com/"

// import components
import { Repo, Live } from "./svgs";

function Card({ props }) {
  return (
    <div className="card__container">
      <div className="card_header">
        <h3 className="project_title">{props.name.length >= 25 ? `${props.name.substring(0, 20)} ...` : props.name }</h3>
        <div className="project_links">
          <a href={ baseURL + props.full_name } target="_blank"><Repo /></a>
          {props.homepage && <a href={ props.homepage } target="_blank"><Live /></a>}
        </div>
      </div>
      <div className="project_description">{props.description ? props.description : "No description provided."}</div>
      <div className="project_tools">
        {[...props.topics].map((tool, key) => {
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
