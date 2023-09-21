import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['vietnamese'] })


export default function RootLayout({ children }) {
    const metadata = {
        title: 'The Dev Blog',
        description: 'A blog app',
    }
    return (
        <html lang="en">
            <body>
                <div className="px-28 navbar bg-base-100">
                    <div className="flex-1">
                        <p className='text-xl flex flex-wrap font-spacemono'>
                            <span className='text-primary'>{`>`}</span>
                            thedev<span className='text-secondary'>blog</span>
                        </p>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className='border-3 border-sky-200'>
                    {children}
                </div>
            </body>
        </html>
    )
}