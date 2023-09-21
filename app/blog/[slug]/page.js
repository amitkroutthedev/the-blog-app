import { getArticleFromSlug } from "@/src/utils/mdx"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm';


import { getMDXComponent } from 'mdx-bundler/client';

import { LiaCalendarSolid } from "react-icons/lia"
import { BsPersonCircle } from "react-icons/bs"
import { CgTimer } from "react-icons/cg"
import * as React from 'react'
import { bundleMDX } from "mdx-bundler"



export default async function Page({ params }) {
    const { slug } = params
    const props = await getArticleFromSlug(slug)

    let pubTime = new Date(props.frontmatter.publishedOn)

    let articlePublishTime = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(pubTime)

    return <div className="px-28 py-10">
        <h1 className="text-6xl font-spacemono">{props.frontmatter.title}</h1>
        <div className="text-slate-500 flex items-center py-4 space-x-14">
            <div className="flex items-center space-x-2">
                <LiaCalendarSolid size={40} />{articlePublishTime}
            </div>
            <div className="flex items-center space-x-2">
                <BsPersonCircle size={40} />{props.frontmatter.publisher}
            </div>
            <div className="flex items-center space-x-2">
                <CgTimer size={42} />{props.frontmatter.readingTime}
            </div>

        </div>
        <div>
            {/*sourceC && <MDXRemote source={sourceC.code} />*/}
        </div>
    </div>
}


