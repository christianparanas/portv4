import { useState, useEffect } from "react";
import * as moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const baseURL = "https://github.com/"

// import components
import { Repo, Live } from "./icons";

function Card({ props }) {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    {isLoading ? (<Skeleton count={1} height={132} />) :

    (<div className="card__container">
      <div className="card_header">
        <h4 className="project_title">{props.name.length >= 25 ? `${props.name.substring(0, 20)} ...` : props.name }</h4>
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
      <span className="updated_at">Last updated: {moment(props.updated_at).fromNow()}</span>
    </div>)
    }
    </>
  );
}

export default Card;
