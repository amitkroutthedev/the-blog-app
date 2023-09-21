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
                        let publishedDate =pubOn.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                        
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

                    <article className="flex transition hover:shadow-xl">
                        <div className="p-6 bg-secondary flex flex-1 flex-col justify-between rounded-xl">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="flex transition hover:shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span className='text-white'>2022</span>
                                <span className="w-px flex-1 bg-gray-900/10 dark:bg-white"></span>
                                <span className='text-white'>Oct 10</span>
                            </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                            <img
                                alt="Guitar"
                                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                className="aspect-square h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
                            />
                        </div>

                        <div className="p-6 bg-secondary flex flex-1 flex-col justify-between rounded-tr-xl rounded-br-xl">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="flex transition hover:shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span className='text-white'>2022</span>
                                <span className="w-px flex-1 bg-gray-900/10 dark:bg-white"></span>
                                <span className='text-white'>Oct 10</span>
                            </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                            <img
                                alt="Guitar"
                                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                className="aspect-square h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
                            />
                        </div>

                        <div className="p-6 bg-secondary flex flex-1 flex-col justify-between rounded-tr-xl rounded-br-xl">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="flex transition hover:shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span className='text-white'>2022</span>
                                <span className="w-px flex-1 bg-gray-900/10 dark:bg-white"></span>
                                <span className='text-white'>Oct 10</span>
                            </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                            <img
                                alt="Guitar"
                                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                className="aspect-square h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
                            />
                        </div>

                        <div className="p-6 bg-secondary flex flex-1 flex-col justify-between rounded-tr-xl rounded-br-xl">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    </article>



                </div>
            </div>
        </main>
    )
}
