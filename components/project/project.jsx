import { Repo, Live } from "components/icons";
import styles from "./project.module.scss";

function Project({ props }) {

  return (
    <div className={styles.container}>
      {props.openGraphImageUrl && (
        <img className={styles.image} src={props.openGraphImageUrl} alt="" />
      )}

      <div className={styles.header}>
        <h4 className={styles.title}>
          {props.name.length >= 25
            ? `${props.name.substring(0, 20)} ...`
            : props.name}
        </h4>
        <div className={styles.links}>
          <a href={props.url} target="_blank">
            <Repo />
          </a>
          {props.homepageUrl && (
            <a href={props.homepageUrl} target="_blank">
              <Live />
            </a>
          )}
        </div>
      </div>
      <div className={styles.description}>
        {props.description ? props.description : "No description provided."}
      </div>

      <div className={styles.tools}>
        {(props.languages.edges ? props.languages.edges : props.languages.nodes).map((tool, key) => {
          return (
            <div className={styles.tool} key={key}>
              {tool.name ? tool.name : tool.node.name }
            </div>
          );
        })}
        </div>
    </div>
  );
}

export default Project;


