import { Repo, Live } from "components/icons";

function Project({ props, isPinned = false }) {
  const languages = props.languages?.edges || props.languages?.nodes || [];
  
  return (
    <div className={`group relative w-full rounded-2xl border bg-white dark:bg-[#11191f] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isPinned 
        ? "border-yellow-200 dark:border-yellow-900/50 shadow-lg" 
        : "border-gray-200 dark:border-[#18232c] shadow-md dark:shadow-none"
    }`}>
      {/* Pinned indicator */}
      {isPinned && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-xs font-medium">Pinned</span>
        </div>
      )}

      {/* Project Image */}
      {props.openGraphImageUrl && (
        <div className="relative overflow-hidden">
          <img
            className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            src={props.openGraphImageUrl}
            alt={props.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200 line-clamp-1">
            {props.name}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a 
              href={props.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-[#18232c] flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-[#203042] hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              aria-label="View repository"
            >
              <Repo />
            </a>
            {props.homepageUrl && (
              <a 
                href={props.homepageUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-all duration-200"
                aria-label="View live site"
              >
                <Live />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
          props.description 
            ? "text-gray-600 dark:text-slate-300" 
            : "text-gray-400 dark:text-slate-500 italic"
        }`}>
          {props.description || "No description provided."}
        </p>

        {/* Languages */}
        {languages.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {languages.slice(0, 4).map((tool, key) => {
              const name = tool.name || tool.node?.name;
              return (
                <span
                  key={key}
                  className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-[#18232c] text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-[#203042]"
                >
                  {name}
                </span>
              );
            })}
            {languages.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-[#18232c] text-gray-500 dark:text-slate-400">
                +{languages.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;