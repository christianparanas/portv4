import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'

import prisma from '../../lib/prisma';
import { Auth } from '../../components'


export default function Guests(props) {

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
          <div className="create_drop_wrapper">
            <Auth />
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
    created_by: entry.created_by.toString(),
    updated_at: entry.updatedAt.toString()
  }));

  console.log(fallbackData)


  return {
    props: {
    	fallbackData,
    }
  };
};
