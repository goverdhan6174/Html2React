import '@assets/css/main.css'
import '@assets/css/chrome-bug.css'
import '@assets/css/lineIcons.css'

import { useEffect } from 'react'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
          <Component {...pageProps} />
      </ManagedUIContext>
    </>
  )
}
