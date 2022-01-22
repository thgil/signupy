import { data } from 'autoprefixer'
import Nav from '../../components/nav'
import Table from '../../components/table'
import hljs from 'highlight.js'
import '../../node_modules/highlight.js/styles/night-owl.css'
import { useEffect, useState } from 'react'
import Actions from '../../components/actions'
export default function ShowForm({ data }) {

  useEffect(() => {
    hljs.highlightAll();
  
  }, [])

  const input = 
  {
    name: typeof('Jane Cooper'),
    title: typeof('Regional Paradigm Technician'),
    email: typeof('jane.cooper@example.com'),
    age: typeof(1),
    role: typeof('Admin')
  }

  return (
    <div className="pt-10 bg-slate-50 sm:pt-16 lg:pt-8 lg:pb-14 min-h-screen">
      <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>

        <Nav />
        
        <div className="mt-6 pb-5 border-b border-gray-200 dark:border-gray-500 flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9 sm:truncate flex-shrink-0">
            {data.name}
          </h2>
        </div>
        <div className="my-4">
          <div className="my-8 grid grid-cols-3 gap-8">
            <div>
              <h3 className='font-semibold mb-4'>Detected input</h3>
              <pre><code className='language-json text-xs rounded-lg'>{JSON.stringify(input, null, 2)}</code></pre>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Actions</h3>
              <Actions />
              </div>
            <div>Exit</div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(req) {
  // Fetch data from external API
  // const res = await fetch(``)
  // const data = await res.json()
  const data = {}
  data.name = req.params.id
  // Pass data to the page via props
  return { props: { data } }
}