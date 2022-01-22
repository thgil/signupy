import Nav from '../../components/nav'
import ListForms from '../../components/listforms'
import Link from 'next/link'
import { useSession } from "next-auth/react"

export default function Forms() {
  const { data: session } = useSession()

  return (
    <div className="pt-10 bg-slate-50 sm:pt-16 lg:pt-8 lg:pb-14 min-h-screen">
      <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
        <Nav />
        
        <div className="mt-6 pb-5 border-b border-gray-200 dark:border-gray-500 flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9 sm:truncate flex-shrink-0">
            My Forms
          </h2>
        </div>

        <ListForms />
      </div>
    </div>
  )
}