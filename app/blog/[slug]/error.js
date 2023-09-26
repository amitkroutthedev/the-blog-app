'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from 'next/image'
import NoData from "../../../assets/data-pana.png"
import Link from 'next/link'
export default function PError({ error }) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-1/2 flex flex-col'>
        <Image src={NoData} width={400} height={400} alt="something wrong" className='mx-auto'/>
        <h2 className='text-4xl text-center text-secondary font-majormono'>Something went wrong in collecting articles<br/>Maybe wrong url?</h2>
        <p>{error}</p>
        <Link href="/"
          className='text-primary-focus text-2xl font-majormono mx-auto'
        >
          Go to home page
        </Link>
      </div>
    </div>
  )
}