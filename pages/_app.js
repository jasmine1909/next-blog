import '@/styles/globals.css'
import { BlogProvider } from '@/context/BlogConext'

export default function App({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  )
}
