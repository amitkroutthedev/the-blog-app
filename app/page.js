import { getAllArticles } from '@/src/utils/mdx';
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
    const articles = await getAllArticles()

    let sortArticles = () => articles
        .map((article) => article)
        .sort((a, b) => {
            if (a.publishedOn < b.publishedOn) return 1
            if (a.publishedOn > b.publishedOn) return -1

            return 0
        })
    const allArticles = sortArticles()
    return (
        <main className='overflow-y-hidden flex h-screen lg:flex-row md:flex-col sm:flex-col flex-col'>
            <div className='my-auto px-2 w-full font-spacemono'>
                <p className='text-8xl flex flex-wrap'>
                    <span className='text-primary'>{`>`}</span>
                    thedev<span className='text-secondary'>blog</span>
                </p>
                <p className='text-xl px-20 py-7'>Personal blog site of <a href='https://github.com/amitkroutthedev' className='text-primary-focus'>@amitkroutthedev</a></p>
            </div>

            <div className='w-full overflow-y-scroll'>
                <div className='p-3 space-y-4 flex flex-col'>
                    {allArticles && allArticles.map(dataArticle => {
                        let pubOn = new Date(dataArticle.publishedOn)
                        let publishedDate = pubOn.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

                        return (
                            <article className="flex transition hover:shadow-xl" key={dataArticle.titlr}>

                                <div className="p-6 bg-secondary flex flex-1 flex-col justify-between rounded-xl">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-gray-900 font-spacemono text-xl">
                                                {dataArticle.title}
                                            </h3>
                                        </a>

                                        <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-700 font-majormono">
                                            {dataArticle.abstract}
                                        </p>
                                    </div>
                                    <div className="p-6 sm:flex sm:items-center sm:justify-between">
                                        <div className='text-gray-900 font-spacemono'>
                                            {publishedDate}
                                        </div>
                                        <Link
                                            href={`/blog/${dataArticle.slug}`}
                                            className="block text-center text-xs font-bold uppercase text-gray-900 transition font-spacemono"
                                        >
                                            Read Blog
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
