import Head from "next/head";
import Link from "next/link";
import useSWR from 'swr'
import * as moment from 'moment';
import { useEffect, useRef, useState } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react';


import fetcher from '../../lib/fetcher'


export default function Guests() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState([])
  const inputEl = useRef(null);

  const { data, error } = useSWR('/api/guestbook', fetcher);

  useEffect(() => {
    if(data) {
      console.log(data)
      setEntries(data)
    }

  }, [])


  const loadEntries = async (data) => {
    setEntries(prevArray => [data, ...prevArray])
  }

  const postEntry = async (e) => {
    e.preventDefault();
    if(inputEl.current.value == "") return

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
        <title>Guests | Christian Paranas</title>
      </Head>

      <main className="guests">

        <div className="content">
          <div className="drop_wrapper">
            {session ? (
              <div className="create">
                <div>Share a message for a future visitor of my site.</div>
                <p>Your information is only used to display your name and reply by email.</p>
                <form className="con" onSubmit={postEntry}>
                  <textarea ref={inputEl} placeholder="Your message" rows="6" required></textarea>
                  <button type="submit">Post</button>
                </form>


                <div>
                  Signed in as {session.user.email} <br />
                  <button onClick={() => signOut()}>Sign out</button>
                </div>
              </div>
            ) : (
            <div>
              Not signed in <br />
              <button onClick={(e) => { e.preventDefault(); signIn('github') }}>Sign in</button>
            </div>)
          }

          </div>

          <div className="drop_content_wrapper">
            {entries && entries.map((dropMsg, key) => {
              return (
                <div className="drop" key={key}>
                  <div className="header">
                    <div className="con">
                      <img src="https://avatars.githubusercontent.com/u/59472122?v=4" alt="" />
                      <div className="name">{ dropMsg.name }</div>
                    </div>
                    <div className="date">{moment(dropMsg.updatedAt).calendar()}</div>
                  </div>
                  <div className="drop_body">{ dropMsg.body }</div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
