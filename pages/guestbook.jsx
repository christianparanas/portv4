import Head from "next/head";
import Masonry from "react-masonry-css";
import useSWR from "swr";
import FadeIn from "react-fade-in";
import * as moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import clsx from "classnames";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import fetcher from "../lib/fetcher";

import Page from "components/Page";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

export default function Guests() {
  const { data, error } = useSWR("/api/guestbook", fetcher);
  const { data: session } = useSession();
  const [entries, setEntries] = useState([]);
  const inputEl = useRef(null);

  const [authLoading, setAuthLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // login btn loader
  const [postLoader, setPostLoader] = useState(false);
  const [providerAuthLoader, setProviderAuthLoader] = useState(false);
  const [providerAuthLoader1, setProviderAuthLoader1] = useState(false);

  const providerAuth = (op) => {
    if (op == 1) {
      setProviderAuthLoader(true);
      return;
    }

    setProviderAuthLoader1(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(false);
    }, 2000);

    if (data) {
      setEntries(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [data, session]);

  const loadEntries = async (data) => {
    setEntries((prevArray) => [data, ...prevArray]);
    setPostLoader(false);
  };

  const postEntry = async (e) => {
    e.preventDefault();
    if (inputEl.current.value == "") return;

    setPostLoader(true);

    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();
    loadEntries(data);

    inputEl.current.value = "";
  };

  return (
    <Page>
      <Head>
        <title>Guestbook | Christian Paranas</title>
      </Head>

      <FadeIn>
        <main className="mt-[100px]">
          <h1 className="text-3xl font-black">Guestbook</h1>

          <div className="flex justify-center h-[300px]">
            {!authLoading ? (
              session != undefined ? (
                <div className="w-full mt-[40px]">
                  <div className="mb-3">
                    Share a message for a future visitor of my site.
                  </div>
                  <form className="relative" onSubmit={postEntry}>
                    <textarea
                      className="w-full border-0 outline-none h-[120px] resize-none bg-white dark:bg-[#18232c] p-4 rounded-lg shadow-md text-[12px]"
                      ref={inputEl}
                      placeholder="Your message"
                      rows="4"
                      required
                    ></textarea>
                    <button className="absolute right-[20px] bottom-[-10px] text-slate-50 bg-[#11191f] py-3 px-6 shadow-lg rounded-lg cursor-pointer" type="submit">
                      <span className="">Post</span>
                      <div className=""></div>
                    </button>
                  </form>

                  <div className="mt-8 md:mt-2 text-[14px]">
                    Signed in as <span className="text-black dark:text-slate-50">{session.user.name}</span>
                    <button
                      className="ml-4 bg-[#18232c] p-1 px-3 rounded-lg cursor-pointer shadow-md hover:shadow-lg text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-2">
                  <span className="mb-4">Sign In to leave a message. 😉</span>
                  <button
                    className="w-fit"
                    onClick={(e) => {
                      providerAuth(1);
                      signIn("github");
                    }}
                  >
                    <span className="flex items-center dark:bg-[#18232c] dark:hover:bg-[#18232c]/40 transition-all px-4 py-3 rounded-lg shadow-lg text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 mr-4"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>Sign In with Github</span>
                    </span>
                    <div className=""></div>
                  </button>
                  <button
                    className="w-fit"
                    onClick={(e) => {
                      providerAuth(2);
                      signIn("google");
                    }}
                  >
                    <span className="flex items-center dark:bg-[#18232c] dark:hover:bg-[#18232c]/40 transition-all px-4 py-3 rounded-lg shadow-lg text-sm">
                      <img
                        src="/icons/google.svg"
                        alt=""
                        className="w-6 h-6 mr-4"
                      />
                      <span>Sign In with Google</span>
                    </span>
                    <div className=""></div>
                  </button>
                </div>
              )
            ) : (
              <React.Fragment>
                <Skeleton count={1} height={202} />
              </React.Fragment>
            )}
          </div>


          <div className="">
            {data && entries.length == 0 ? (
              <div className="">Empty 😥</div>
            ) : (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {!isLoading
                  ? entries.map((dropMsg, key) => {
                      <GuestMessageCard dropMsg={dropMsg} key={key} />
                    })
                  : [...Array(8).keys()].map((el, key) => (
                      <React.Fragment key={key}>
                        <Skeleton count={1} height={120} />
                      </React.Fragment>
                    ))}
              </Masonry>
            )}
          </div>
        </main>
      </FadeIn>
    </Page>
  );
}

export function GuestMessageCard({ dropMsg }) {
  return (
    <div className="bg-white dark:bg-[#18232c] p-4 rounded-lg shadow-md">
      <div className="mb-5">
        <div className="flex items-center">
          <img className="w-[50px] h-[50px] rounded-full mr-3" src={dropMsg.image} alt="" />
          <div className="">
            <div className="text-[14px]">
              {dropMsg.name}
            </div>
            <div className="text-[10px] text-slate-300">
              {moment(dropMsg.updatedAt).calendar()}
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-[14px]">
        {dropMsg.body}
      </div>
    </div>
  );
}
