import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

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
                        <Link className='text-xl flex flex-wrap font-spacemono' href={'/'}>
                            <span className='text-primary'>{`>`}</span>
                            thedev<span className='text-secondary'>blog</span>
                        </Link>
                    </div>
                    <div className="flex-none">
                    <a href='https://github.com/amitkroutthedev/the-blog-app'><FaGithub size={25} /></a>
                    </div>
                </div>
                <div className='border-3 border-sky-200'>
                    {children}
                </div>
            </body>
        </html>
    )
}