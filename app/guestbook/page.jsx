"use client";
import useSWR from "swr";
import FadeIn from "components/FadeIn";
import * as moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import fetcher from "lib/fetcher";
import Page from "components/Page";
import SpinLoader from "components/icons/SpinLoader";
import { Git } from "components/icons";

// Mock entries for display
const mockEntries = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    body: "Amazing portfolio! Love the clean design and smooth animations. Keep up the great work! 🚀",
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 2,
    name: "Sarah Chen",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    body: "Really impressed with your projects. The attention to detail is outstanding!",
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    body: "Great work on the UI/UX. Very inspiring for my own portfolio redesign.",
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: 4,
    name: "Emily Watson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    body: "Love the dark mode implementation! Smooth transitions everywhere. 🌙",
    updatedAt: new Date(Date.now() - 345600000).toISOString(),
  },
];

export default function Guests() {
  const { data } = useSWR("/api/guestbook", fetcher);
  const { data: session } = useSession();
  const [entries, setEntries] = useState([]);
  const inputEl = useRef(null);

  const [authLoading, setAuthLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [postLoader, setPostLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => setAuthLoading(false), 2000);
    if (data) {
      setEntries(data.length > 0 ? data : mockEntries);
      setTimeout(() => setIsLoading(false), 2000);
    } else {
      setEntries(mockEntries);
    }
  }, [data, session]);

  const loadEntries = async (payload) => {
    setEntries((prev) => [payload, ...prev]);
    setPostLoader(false);
  };

  const postEntry = async (e) => {
    e.preventDefault();
    if (inputEl.current.value == "") return;
    setPostLoader(true);
    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({ body: inputEl.current.value }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const payload = await res.json();
    loadEntries(payload);
    inputEl.current.value = "";
  };

  return (
    <Page>
      <FadeIn>
        <main className="pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Guestbook</h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">Leave a message for future visitors</p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Sign in and share your thoughts, feedback, or just say hello! Your message will be displayed below.
            </p>
          </div>

          {/* Auth & Form Section */}
          <div className="mb-8 sm:mb-12">
            {!authLoading ? (
              session != undefined ? (
                <DropNote
                  postLoader={postLoader}
                  postEntry={postEntry}
                  session={session}
                  inputEl={inputEl}
                  signOut={signOut}
                />
              ) : (
                <GuestbookAuth signIn={signIn} />
              )
            ) : (
              <div className="flex justify-center py-12">
                <SpinLoader />
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#18232c] border border-gray-200 dark:border-[#203042] shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{entries.length}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400">Messages</div>
              </div>
            </div>
          </div>

          {/* Messages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {entries.length > 0 ? (
              entries.map((dropMsg, key) => (
                <GuestMessageCard dropMsg={dropMsg} key={dropMsg.id || key} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-[#18232c] flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No messages yet</h3>
                <p className="text-gray-500 dark:text-slate-400">Be the first to leave a message!</p>
              </div>
            )}
          </div>
        </main>
      </FadeIn>
    </Page>
  );
}

export function GuestMessageCard({ dropMsg }) {
  return (
    <div className="group rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-5 shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <img 
          className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-[#203042]" 
          src={dropMsg.image} 
          alt={dropMsg.name} 
        />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 dark:text-white truncate">{dropMsg.name}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {moment(dropMsg.updatedAt).fromNow()}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{dropMsg.body}</p>
    </div>
  );
}

export function DropNote({ postEntry, postLoader, session, inputEl, signOut }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-5 md:p-6 shadow-md">
      {/* User info */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-[#18232c]">
        <div className="flex items-center gap-3">
          {session.user.image && (
            <img src={session.user.image} alt={session.user.name} className="w-10 h-10 rounded-xl object-cover" />
          )}
          <div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{session.user.name}</div>
            <div className="text-xs text-gray-500 dark:text-slate-400">Signed in</div>
          </div>
        </div>
        <button
          className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign out
        </button>
      </div>

      {/* Form */}
      <form onSubmit={postEntry}>
        <textarea
          className="w-full border border-gray-200 dark:border-[#18232c] outline-none h-[100px] resize-none bg-gray-50 dark:bg-[#18232c] text-gray-800 dark:text-slate-100 p-4 rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-500 transition-all"
          ref={inputEl}
          placeholder="Share your thoughts, feedback, or just say hello..."
          rows="4"
          required
        ></textarea>
        <div className="flex justify-end mt-3">
          <button 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" 
            type="submit"
            disabled={postLoader}
          >
            {postLoader ? (
              <SpinLoader />
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Post Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export function GuestbookAuth({ signIn }) {
  const [providerAuthLoader1, setProviderAuthLoader1] = useState(false);
  const [providerAuthLoader2, setProviderAuthLoader2] = useState(false);
  const [providerAuthLoader3, setProviderAuthLoader3] = useState(false);
  const providerAuth = (op) => {
    if (op == 1) return setProviderAuthLoader1(true);
    if (op == 2) return setProviderAuthLoader2(true);
    setProviderAuthLoader3(true);
  };
  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-6 md:p-8 shadow-md">
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sign in to leave a message</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">Choose your preferred sign-in method</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          className="w-full"
          onClick={() => {
            providerAuth(1);
            signIn("github");
          }}
        >
          <div className="group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#18232c] bg-gray-50 dark:bg-[#18232c] hover:bg-gray-900 dark:hover:bg-gray-800 hover:border-gray-900 dark:hover:border-gray-700 transition-all duration-200">
            {providerAuthLoader1 ? (
              <SpinLoader />
            ) : (
              <>
                <span className="w-5 h-5 flex items-center justify-center">
                  <Git />
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-slate-200 group-hover:text-white">GitHub</span>
              </>
            )}
          </div>
        </button>

        <button
          className="w-full"
          onClick={() => {
            providerAuth(2);
            signIn("google");
          }}
        >
          <div className="group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#18232c] bg-gray-50 dark:bg-[#18232c] hover:bg-gray-900 dark:hover:bg-gray-800 hover:border-gray-900 dark:hover:border-gray-700 transition-all duration-200">
            {providerAuthLoader2 ? (
              <SpinLoader />
            ) : (
              <>
                <img src="/icons/google.svg" alt="" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700 dark:text-slate-200 group-hover:text-white">Google</span>
              </>
            )}
          </div>
        </button>

        <button
          className="w-full"
          onClick={() => {
            providerAuth(3);
            signIn("credentials");
          }}
        >
          <div className="group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-md hover:shadow-lg">
            {providerAuthLoader3 ? (
              <SpinLoader />
            ) : (
              <>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-medium text-white">Anonymous</span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
