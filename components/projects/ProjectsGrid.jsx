"use client";
import FadeIn from "react-fade-in";
import Project from "components/Project";

export default function ProjectsGrid({ repos, pinnedRepos }) {
  return (
    <div className="space-y-12">
      {/* Pinned Repos Section */}
      {pinnedRepos && pinnedRepos.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Pinned Repositories</h2>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {pinnedRepos.map((repo, key) => (
                <Project key={key} props={repo} isPinned={true} />
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* All Repos Section */}
      {repos && repos.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Repositories</h2>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {repos.map((repo, key) => (
                <Project key={key} props={repo} />
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* Empty State */}
      {(!repos || repos.length === 0) && (!pinnedRepos || pinnedRepos.length === 0) && (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-[#18232c] flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No projects yet</h3>
          <p className="text-gray-500 dark:text-slate-400">Projects will appear here once they're added.</p>
        </div>
      )}
    </div>
  );
}
