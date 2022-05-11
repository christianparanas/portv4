import { Repo, Live } from "components/icons";

function Project({ props }) {
  return (
    <div className="w-full bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
      {props.openGraphImageUrl && (
        <img
          className="rounded-md mb-4 w-full h-[192px] object-cover"
          src={props.openGraphImageUrl}
          alt=""
        />
      )}

      <div className="flex justify-between">
        <h4 className="text-lg">
          {props.name.length >= 25
            ? `${props.name.substring(0, 20)} ...`
            : props.name}
        </h4>
        <div
          className={`grid ${
            props.homepageUrl ? "grid-cols-2" : "grid-cols-1"
          } gap-2`}
        >
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
      <div className="my-4 text-sm text-slate-500 dark:text-slate-200">
        {props.description ? props.description : "No description provided."}
      </div>

      <div className="flex overflow-x-auto">
        {(props.languages.edges
          ? props.languages.edges
          : props.languages.nodes
        ).map((tool, key) => {
          return (
            <div
              className="mr-1 bg-[#11191f] pt-2 py-1 px-3 rounded-lg shadow-lg text-xs text-slate-50"
              key={key}
            >
              {tool.name ? tool.name : tool.node.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
