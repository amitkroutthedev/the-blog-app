import { getAllArticles } from '@/src/utils/mdx';
import Link from 'next/link';
import UseDarkMode from './useDarkMode';

//import useDarkMode from './changeTheme';

export default async function Home() {

    //const [colorTheme, setTheme] = useDarkMode();

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
        <main className='flex h-screen lg:flex-col md:flex-col sm:flex-col flex-col'>
            <UseDarkMode/>
            <div className='flex items-center px-2 w-full font-spacemono'>
                <div className='h-96'>
                    <p className='text-8xl flex flex-wrap'>
                        <span className='text-primary'>{`>`}</span>
                        thedev<span className='text-secondary'>blog</span>
                    </p>
                    <p className='text-xl px-20 py-7'>Personal blog site of <a href='https://github.com/amitkroutthedev' className='text-primary-focus'>@amitkroutthedev</a></p>
                </div>
            </div>
            <div className='w-full'>
                <div className='p-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {allArticles && allArticles.map(dataArticle => {
                        let pubOn = new Date(dataArticle.publishedOn)
                        let publishedDate = pubOn.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
                        return (
                            <article className="p-6 bg-neutral flex flex-1 flex-col justify-between rounded-xl" key={dataArticle.title}>
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <h3 className="font-bold uppercase text-primary font-spacemono text-xl">
                                        {dataArticle.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-3 text-lg/relaxed text-warning font-majormono">
                                        {dataArticle.abstract}
                                    </p>
                                </div>
                                <div className="p-6 sm:flex sm:items-center sm:justify-between">
                                    <div className='text-secondary-focus font-spacemono'>
                                        {publishedDate},<br /> {dataArticle.readingTime}
                                    </div>
                                    <Link
                                        href={`/blog/${dataArticle.slug}`}
                                        
                                        className="block text-center text-lg font-bold uppercase text-primary-focus transition font-spacemono"
                                    >
                                        Read Blog
                                    </Link>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
