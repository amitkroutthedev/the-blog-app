import { getPostBySlug } from "@/src/utils/mdx"

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'



import { LiaCalendarSolid } from "react-icons/lia"
import { BsPersonCircle } from "react-icons/bs"
import { CgTimer } from "react-icons/cg"
import * as React from 'react'




export async function generateMetadata({ params }) {
    const { slug } = params
    const props = await getPostBySlug(slug)
    return {
      title: props.meta.title,
      description:props.meta.seoTitle
    }
  }

export default async function Page({ params }) {
    const { slug } = params
    const props = await getPostBySlug(slug)
    console.log(props, typeof props)
    

   let pubTime = new Date(props.meta.publishedOn)

   let articlePublishTime = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(pubTime)

    return <div className="px-28 py-10">
        <h1 className="text-6xl font-spacemono">{props.meta.title}</h1>
        <div className="text-slate-500 flex items-center py-4 space-x-14">
            <div className="flex items-center space-x-2">
                <LiaCalendarSolid size={40} />{articlePublishTime}
            </div>
            <div className="flex items-center space-x-2">
                <BsPersonCircle size={40} />{props.meta.publisher}
            </div>
            <div className="flex items-center space-x-2">
                <CgTimer size={42} />{props.meta.readingTime}
            </div> 

        </div>
        {/*<div className="border-4 border-sky-200 p-10 font-spacemono text-xl space-y-2">
        <MDXRemote source={props.content}/>
    </div> */}
    <div className="prose border-4 border-sky-200 p-10 font-spacemono text-xl space-y-2 mx-auto">
         {props.content}
    </div>
    </div>
}


