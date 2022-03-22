import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react';

import prisma from '../../lib/prisma';
import { Auth } from '../../components'


export default function Guests(props) {
  const { data: session } = useSession();

  useEffect(() => {
    if(props) console.log(props)

  }, [])

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
                <div className="con">
                  <textarea name="" placeholder="Your message" id="" rows="6"></textarea>
                  <button>Post</button>
                </div>


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
            {props && props.fallbackData.map((dropMsg, key) => {
              return (
                <div className="drop" key={key}>
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

export const getStaticProps = async () => {
  const entries = await prisma.guests.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    name: entry.name.toString(),
    updated_at: entry.updatedAt.toString()
  }));

  console.log(fallbackData)


  return {
    props: {
      fallbackData,
    }
  };
};
