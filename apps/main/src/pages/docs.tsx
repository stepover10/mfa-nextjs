import { ReactElement, Suspense } from 'react'
import dynamic from "next/dynamic";

// Wrap the dynamic import in a no-ssr component
const RemoteHome = dynamic(() => import('@/apps/docs/src/pages/docs'))

const Page_Docs = () => {
  return (
    <div>
      <RemoteHome />
    </div>
  )
}

export default Page_Docs;