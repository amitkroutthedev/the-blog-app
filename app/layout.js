import './globals.css'


export const metadata = {
  title: 'The Dev Blog',
  description: 'A blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
