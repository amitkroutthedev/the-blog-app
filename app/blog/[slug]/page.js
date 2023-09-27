import { getPostBySlug } from "@/src/utils/mdx"

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'



import { LiaCalendarSolid } from "react-icons/lia"
import { BsPersonCircle } from "react-icons/bs"
import { CgTimer } from "react-icons/cg"
import * as React from 'react'
import ScrollButton from "./scrollToTop"




export async function generateMetadata({ params }) {
    const { slug } = params
    const props = await getPostBySlug(slug)
    return {
        title: props.meta.title,
        description: props.meta.seoTitle
    }
}

export default async function Page({ params }) {
    const { slug } = params
    const props = await getPostBySlug(slug)


    let pubTime = new Date(props.meta.publishedOn)

    let articlePublishTime = new Intl.DateTimeFormat('en-GB').format(pubTime)

    return <div className="px-28 py-10 max-sm:px-10">
        <div className="text-slate-500 flex justify-between">
            <div className="flex items-center space-x-2  font-majormono">
                <LiaCalendarSolid size={40} />{articlePublishTime}
            </div>
            <div className="flex items-center font-majormono">
                <CgTimer size={42} />{props.meta.readingTime}
            </div>
        </div>
        <h1 className="text-6xl max-sm:text-4xl font-spacemono text-primary-focus break-all">{props.meta.title}</h1>
        <div className="">
            <div className="flex items-center text-slate-500 font-majormono">
                {props.meta.publisher}
            </div>


        </div>
        <div className="">
            <div className="prose max-sm:max-w-prose
                        prose-h2:text-secondary-focus 
                        prose-h3:text-secondary 
                    prose-code:text-xl max-sm:prose-code:text-base
                        prose-strong:text-error
        min-w-prose bg-base-200 p-2 font-spacemono space-y-2 w-11/12 mx-auto break-all"
            >
                {props.content}
            </div>
            <div className="absolute right-0">
                <ScrollButton />
            </div>
        </div>
    </div>
}


