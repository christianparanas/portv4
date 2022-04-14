import Head from "next/head";
import Masonry from "react-masonry-css";
import useSWR from "swr";
import FadeIn from "react-fade-in";
import * as moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import clsx from "classnames";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import fetcher from "../lib/fetcher";

import Page from "components/page/page";
import styles from "styles/guestbook.module.scss";

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

  const iconLoading = clsx({
    [[styles.loader, styles.showLoginLoader].join(" ")]:
      postLoader || providerAuthLoader,
    [styles["loader"]]: !postLoader || !providerAuthLoader,
  });

  const textLoading = clsx({
    [[styles.loginTxtnIco, styles.hideLoginTxtnIco].join(" ")]:
      postLoader || providerAuthLoader,
    [styles["loginTxtnIco"]]: !postLoader || !providerAuthLoader,
  });

  const iconLoading1 = clsx({
    [[styles.loader, styles.showLoginLoader].join(" ")]: providerAuthLoader1,
    [styles["loader"]]: !providerAuthLoader1,
  });

  const textLoading1 = clsx({
    [[styles.loginTxtnIco, styles.hideLoginTxtnIco].join(" ")]:
      providerAuthLoader1,
    [styles["loginTxtnIco"]]: !providerAuthLoader1,
  });

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
        <main className={styles.wrapper}>
          <h1 className="title">Guestbook</h1>

          <div className={styles.interact}>
            {!authLoading ? (
              session != undefined ? (
                <div className={styles.create}>
                  <div className="hh">
                    Share a message for a future visitor of my site.
                  </div>
                  <form className="con" onSubmit={postEntry}>
                    <textarea
                      ref={inputEl}
                      placeholder="Your message"
                      rows="4"
                      required
                    ></textarea>
                    <button type="submit">
                      <span className={textLoading}>Post</span>
                      <div className={iconLoading}></div>
                    </button>
                  </form>

                  <div className={styles.logged_indicator}>
                    Signed in as <span>{session.user.name}</span>
                    <button
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
                <div class={styles.authwall}>
                  <span>Sign In to leave a message. 😉</span>
                  <button
                    className={styles.provider_btn}
                    onClick={(e) => {
                      providerAuth(1);
                      signIn("github");
                    }}
                  >
                    <span className={textLoading}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="sbui-icon "
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>Sign In with Github</span>
                    </span>
                    <div className={iconLoading}></div>
                  </button>
                  <button
                    className={`${styles.provider_btn} ${styles.one}`}
                    onClick={(e) => {
                      providerAuth(2);
                      signIn("google");
                    }}
                  >
                    <span className={textLoading1}>
                      <img
                        src="/icons/google.svg"
                        alt=""
                        className={styles.icon}
                      />
                      <span>Sign In with Google</span>
                    </span>
                    <div className={iconLoading1}></div>
                  </button>
                </div>
              )
            ) : (
              <React.Fragment>
                <Skeleton count={1} height={202} />
              </React.Fragment>
            )}
          </div>

          <div className={styles.messages}>
            {data && entries.length == 0 ? (
              <div className={styles.empty}>Empty 😥</div>
            ) : (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {!isLoading
                  ? entries.map((dropMsg, key) => {
                      return (
                        <div className={styles.message} key={key}>
                          <div className={styles.header}>
                            <div className={styles.con}>
                              <img src={dropMsg.image} alt="" />
                              <div className={styles.info}>
                                <div className={styles.name}>
                                  {dropMsg.name}
                                </div>
                                <div className={styles.date}>
                                  {moment(dropMsg.updatedAt).calendar()}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.message_body}>
                            {dropMsg.body}
                          </div>
                        </div>
                      );
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
