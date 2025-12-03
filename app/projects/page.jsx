import Page from "components/Page";
import ProjectsGrid from "components/projects/ProjectsGrid";
import { getPinnedRepos, getRepos } from "lib/github";

export default async function Projects() {
  const repos = await getRepos();
  const pinnedRepos = await getPinnedRepos();
  return (
    <Page>
      <main className="pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Projects</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">Open-source work & side projects</p>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A collection of open-source projects I've worked on with others for work, or as personal side-projects to explore new technologies.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#18232c] border border-gray-200 dark:border-[#203042] shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{pinnedRepos?.length || 0}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400">Pinned</div>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 dark:bg-[#203042]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{repos?.length || 0}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400">Repositories</div>
            </div>
          </div>
        </div>

        <ProjectsGrid repos={repos} pinnedRepos={pinnedRepos} />
      </main>
    </Page>
  );
}

export const metadata = {
  title: "Projects | Christian Paranas",
};
