
import { ErrorBoundary } from 'react-error-boundary'
import PError from './error'
import UseDarkMode from './useDarkMode'
import ScrollButton from './scrollToTop'



export default function RootLayout({ children }) {
    /* const metadata = {
         title: 'The Dev Blog',
         description: 'A blog app',
     }*/

    return (
        <ErrorBoundary fallback={<PError />}>
            <UseDarkMode />
            <div className='border-3 border-sky-200'>
                {children}
                
            </div>
        </ErrorBoundary>
    )
}