import Head from "next/head";
import Link from "next/link";
import Masonry from "react-masonry-css";
import useSWR from 'swr'
import FadeIn from "react-fade-in";
import * as moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import { Google } from '../../components/icons' 
import fetcher from '../../lib/fetcher'



const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};


export default function Guests() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState([])
  const inputEl = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

   // login btn loader
  const [loginLoader, setLoginLoader] = useState("loader");
  const [loginLoaderTxt, setLoginLoaderTxt] = useState("loginTxtnIco");
  const [loginLoader1, setLoginLoader1] = useState("loader");
  const [loginLoaderTxt1, setLoginLoaderTxt1] = useState("loginTxtnIco");



  const { data, error } = useSWR('/api/guestbook', fetcher);

  useEffect(() => {
    console.log(session)

    setTimeout(() => {
      setAuthLoading(false)
    }, 2000)

    if(data) {
      setEntries(data)

      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }

  }, [data, session])


  const onLoginShowLoader = (provider) => {
    if(provider == 1) {
      setLoginLoaderTxt("loginTxtnIco hideLoginTxtnIco");
      setLoginLoader("loader showLoginLoader");
      return
    }

    setLoginLoaderTxt1("loginTxtnIco hideLoginTxtnIco");
    setLoginLoader1("loader showLoginLoader");
  };

  const onLoginHideLoader = (provider) => {
    if(provider == 1) {
      setLoginLoaderTxt("loginTxtnIco");
      setLoginLoader("loader");
      return
    }

    setLoginLoaderTxt1("loginTxtnIco");
    setLoginLoader1("loader");
  };

  const loadEntries = async (data) => {
    setEntries(prevArray => [data, ...prevArray])
    setSubmitting(false)
    onLoginHideLoader(1);
  }

  const postEntry = async (e) => {
    e.preventDefault();
    if(inputEl.current.value == "") return

    setSubmitting(true)
    onLoginShowLoader(1);

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const data = await res.json()
    loadEntries(data)

    inputEl.current.value = '';
  }

  return (
    <div className="container">
      <Head>
        <title>Guestbook | Christian Paranas</title>
      </Head>

      <FadeIn>
      <main className="guests">

        <div className="content">
          <div className="content_header">
            <h1 className="title">Guestbook</h1>
          </div>

          <div className="drop_wrapper">
            {!authLoading ? (
              session != undefined ? (
                <div className="create">
                  <div className="hh">Share a message for a future visitor of my site.</div>
                  <form className="con" onSubmit={postEntry}>
                    <textarea ref={inputEl} placeholder="Your message" rows="6" required></textarea>
                    <button type="submit">
                      <span className={loginLoaderTxt}>Post</span>
                      <div className={loginLoader}></div>
                    </button>
                  </form>

                  <div className="pp">
                    Signed in as <span>{session.user.name}</span>
                    <button onClick={(e) => { e.preventDefault(); signOut()}}>Sign out</button>
                  </div>
                </div>
              ) : (
              <div class="out_ui">
                <span>Sign In to leave a message. 😉</span>
                <button className="git_btn" onClick={(e) => { onLoginShowLoader(1); signIn('github') }}>
                  <span className={loginLoaderTxt}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" class="sbui-icon "><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Sign In with Github</span>
                  </span>
                  <div className={loginLoader}></div>
                </button>
                <button className="git_btn one" onClick={(e) => { onLoginShowLoader(2); signIn('google') }}>
                  <span className={loginLoaderTxt1}>
                    <Google />
                    <span>Sign In with Google</span>
                  </span>
                  <div className={loginLoader1}></div>
                </button>
              </div>
              )
            ) : 
            (
              <React.Fragment>
                <Skeleton count={1} height={270} />
              </React.Fragment>
            )
          }
          </div>

          <div className="drop_content_wrapper">
            {data && entries.length == 0 ? (<div className="empty">Empty 😥</div>) 
              : 
              (<Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                {!isLoading ? (entries.map((dropMsg, key) => {
                    return (
                      <div className="drop" key={key}>
                        <div className="header">
                          <div className="con">
                            <img src={dropMsg.image} alt="" />
                            <div className="info">
                              <div className="name">{ dropMsg.name }</div>
                              <div className="date">{moment(dropMsg.updatedAt).calendar()}</div>
                            </div>
                          </div>
                        </div>
                        <div className="drop_body">{ dropMsg.body }</div>
                      </div>
                    )
                  }))
                  :
                  ([...Array(8).keys()].map((el, key) => (
                    <React.Fragment key={key}>
                      <Skeleton count={1} height={120} />
                    </React.Fragment>
                  ))) 
                  }
                </Masonry>
              )
            } 
          </div>
        </div>
      </main>
      </FadeIn>
    </div>
  )
}
