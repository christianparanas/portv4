import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'

import prisma from '../../lib/prisma';


export default function Guests({ props }) {

  useEffect(() => {
  	if(props) console.log(props)

  }, [props])

  return (
    <div className="container">
      <Head>
        <title>Guests | Christian Paranas</title>
      </Head>

      <main className="guests">

        guests
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
