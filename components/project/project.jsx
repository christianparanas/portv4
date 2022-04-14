import { useState, useEffect } from "react";
import * as moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const baseURL = "https://github.com/";

// import components
import { Repo, Live } from "components/icons";
import styles from "./project.module.scss";

function Project({ props }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton count={1} height={132} />
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <h4 className={styles.title}>
              {props.name.length >= 25
                ? `${props.name.substring(0, 20)} ...`
                : props.name}
            </h4>
            <div className={styles.links}>
              <a href={baseURL + props.full_name} target="_blank">
                <Repo />
              </a>
              {props.homepage && (
                <a href={`https://${props.homepage}`} target="_blank">
                  <Live />
                </a>
              )}
            </div>
          </div>
          <div className={styles.description}>
            {props.description ? props.description : "No description provided."}
          </div>
          <div className={styles.tools}>
            {[...props.topics].map((tool, key) => {
              return (
                <div className={styles.tool} key={key}>
                  {tool}
                </div>
              );
            })}
          </div>
          <span className={styles.updated_at}>
            Created at: {moment(props.created_at).fromNow()}
          </span>
        </div>
      )}
    </>
  );
}

export default Project;
