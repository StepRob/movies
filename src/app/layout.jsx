import { Roboto } from 'next/font/google'
import './globals.css'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal'],
  variable: '--font-mono',
})
export const metadata = {
  title: 'Movies',
  description: 'App for search movies',
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={`${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
