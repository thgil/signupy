import Link from 'next/link'
import useSWR from 'swr'
import { CogIcon, ExternalLinkIcon } from '@heroicons/react/solid'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ListForms() {

  const { data, error } = useSWR('/api/form/sad', fetcher)

  if(error) return <div>Error! {error}</div>
  if(!data) return <div>Loading...</div>

  const forms = data.forms;

  return (
    <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {forms.map((form) => (
        <div className='rounded-lg shadow p-4 relative bg-white' key={form.id}>
        <Link href={form.link}>
          <a>
            <h2 className="text-md font-semibold">{form.name}</h2>
            <h3 className="text-gray-400 text-sm">{form.domain}</h3>
            <div className="text-gray-600 text-sm mt-2"><b>{form.submissions}</b> submissions <b>{form.today}</b> today</div>
          </a>
        </Link>
        <Link href={`${form.link}/settings`}>
          <a className='absolute top-0 right-0 p-4 mt-1'>
            <CogIcon className="text-gray-500 h-6 w-6" aria-hidden="true" />
          </a>
        </Link>
        </div>
      ))}
    </div>
  )
}