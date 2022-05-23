import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useSWR from "swr";
import FadeIn from "react-fade-in";
import * as moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import fetcher from "../lib/fetcher";

import Page from "components/Page";
import SpinLoader from "components/icons/SpinLoader";

export default function Guests() {
  const { data } = useSWR("/api/guestbook", fetcher);
  const { data: session } = useSession();
  const [entries, setEntries] = useState([]);
  const inputEl = useRef(null);

  const [authLoading, setAuthLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [postLoader, setPostLoader] = useState(false);

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
          <h1 className="text-3xl font-black mb-10 text-slate-900 dark:text-slate-50">Guestbook</h1>

          <div className="flex justify-center h-[300px]">
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
              <div className="mt-20">
                <SpinLoader /> 
              </div>
            )}
          </div>

          <div className="mt-20">
            {data && entries.length == 0 ? (
              <div className="">Empty 😥</div>
            ) : (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 2 }}
              >
                <Masonry gutter="15px">
                  {entries.map((dropMsg, key) => (
                    <GuestMessageCard dropMsg={dropMsg} key={key} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </main>
      </FadeIn>
    </Page>
  );
}

export function GuestMessageCard({ dropMsg }) {
  return (
    <div className="bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
      <div className="mb-5">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-full mr-3"
            src={dropMsg.image}
            alt=""
          />
          <div className="">
            <div className="text-[14px] text-slate-900 dark:text-slate-50 font-semibold">{dropMsg.name}</div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">
              {moment(dropMsg.updatedAt).calendar()}
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-[14px] text-slate-900 dark:text-slate-100">{dropMsg.body}</div>
    </div>
  );
}

export function DropNote({ postEntry, postLoader, session, inputEl, signOut }) {
  return (
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
        <button
          className="absolute right-[20px] h-[48px] bottom-[-10px] text-slate-50 bg-[#11191f] py-3 px-6 shadow-lg rounded-lg cursor-pointer"
          type="submit"
        >
          <span
            className={`flex justify-center items-center ${
              postLoader ? "hidden" : ""
            }`}
          >
            Post
          </span>
          <span
            className={`flex justify-center items-center ${
              postLoader ? "" : "hidden"
            }`}
          >
            <SpinLoader />
          </span>
        </button>
      </form>

      <div className="mt-8 md:mt-2 text-[14px]">
        Signed in as{" "}
        <span className="text-black dark:text-slate-50">
          {session.user.name}
        </span>
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
  );
}

export function GuestbookAuth({ signIn }) {
  const [providerAuthLoader1, setProviderAuthLoader1] = useState(false);
  const [providerAuthLoader2, setProviderAuthLoader2] = useState(false);

  const providerAuth = (op) => {
    if (op == 1) {
      setProviderAuthLoader1(true);
      return;
    }

    setProviderAuthLoader2(true);
  };

  return (
    <div className="text-center m-12">
      <div className="mb-6 text-slate-900 dark:text-slate-50 font-semibold">Sign In to leave a message. 😉</div>
      <div className="grid gap-2 place-items-center">
        <button
          className="w-fit"
          onClick={() => {
            providerAuth(1);
            signIn("github");
          }}
        >
          <div className="hover:bg-gray-800 dark:hover:bg-slate-900 hover:text-slate-100 w-[210px] bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
            <div
              className={`flex justify-center items-center text-sm ${
                providerAuthLoader1 ? "hidden" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="text-sm text-center font-semibold">
                Login with Github
              </span>
            </div>
            <div
              className={`flex justify-center items-center ${
                providerAuthLoader1 ? "" : "hidden"
              }`}
            >
              <SpinLoader />
            </div>
          </div>
        </button>

        <button
          className="h-[54px]"
          onClick={() => {
            providerAuth(2);
            signIn("google");
          }}
        >
          <div className="hover:bg-gray-800 hover:text-slate-100 dark:hover:bg-slate-900 text-center w-[210px] bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
            <div
              className={`flex justify-center items-center text-sm ${
                providerAuthLoader2 ? "hidden" : ""
              }`}
            >
              <img src="/icons/google.svg" alt="" className="w-6 h-6 mr-2" />
              <span className="text-sm text-center font-semibold">Login with Google</span>
            </div>
            <div
              className={`flex justify-center items-center ${
                providerAuthLoader2 ? "" : "hidden"
              }`}
            >
              <SpinLoader />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}