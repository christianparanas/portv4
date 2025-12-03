import Page from "components/Page";
import CodeBlock from "components/codeBlock";
import * as moment from "moment";
import { getGists } from "lib/github";

// Mock gists for when API fails
const mockGists = [
  {
    id: "1",
    description: "React Custom Hook for Local Storage",
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    files: [
      {
        name: "useLocalStorage.js",
        text: `import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}`,
      },
    ],
  },
  {
    id: "2",
    description: "Debounce Function Utility",
    createdAt: new Date(Date.now() - 1209600000).toISOString(),
    files: [
      {
        name: "debounce.js",
        text: `export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
      },
    ],
  },
];

export default async function Gist() {
  let gistsData = { gists: [], avatarUrl: "", username: "" };
  
  try {
    gistsData = await getGists();
  } catch (error) {
    console.log("Failed to fetch gists, using mock data");
  }

  const gists = gistsData.gists?.length > 0 ? gistsData.gists : mockGists;
  const avatarUrl = gistsData.avatarUrl || "https://avatars.githubusercontent.com/u/59472122?v=4";
  const username = gistsData.username || "christianparanas";

  return (
    <Page>
      <main className="pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                {gists.length > 1 ? "Gists" : "Gist"}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">Code snippets & utilities</p>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A collection of useful code snippets, utilities, and quick solutions I've created and shared.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#18232c] border border-gray-200 dark:border-[#203042] shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{gists.length}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400">Snippets</div>
            </div>
          </div>
        </div>

        {/* Gists Grid */}
        <div className="space-y-4 sm:space-y-6">
          {gists.map((gist) => (
            <GistCard gist={gist} avatarUrl={avatarUrl} username={username} key={gist.id} />
          ))}
        </div>

        {/* Empty State */}
        {gists.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-[#18232c] flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No gists yet</h3>
            <p className="text-gray-500 dark:text-slate-400">Code snippets will appear here once they're added.</p>
          </div>
        )}
      </main>
    </Page>
  );
}

export function GistCard({ gist, avatarUrl, username }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] overflow-hidden shadow-md dark:shadow-none hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-gray-100 dark:border-[#18232c]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <img 
              src={avatarUrl} 
              alt={username} 
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-[#203042]" 
            />
            <div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-900 dark:text-white">{username}</span>
                <span className="text-gray-400 dark:text-slate-500">/</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">{gist.files[0].name}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Created {moment(gist.createdAt).fromNow()}
              </div>
            </div>
          </div>
        </div>
        {gist.description && (
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">{gist.description}</p>
        )}
      </div>

      {/* Code Block */}
      <div className="p-4 md:p-5 bg-gray-50 dark:bg-[#0d1117]">
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#18232c]">
          <CodeBlock className="overflow-auto text-sm">{gist.files[0].text}</CodeBlock>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Gist | Christian Paranas",
};
