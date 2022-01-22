import { useEffect, useState } from 'react'
import { CheckIcon, PlusIcon } from '@heroicons/react/solid'

let steps = [
  { name: 'Form submission', description: 'Form sumbitted', href: '#', status: 'complete' },
  { name: 'Slack notification', description: 'Get a message in Slack.', href: '#', status: 'complete' },
  { name: 'Confirmation Email', description: 'Send a welcome email.', href: '#', status: 'upcoming' },
  { name: '1 Week Email', description: 'Send an email to check up.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Actions() {

  const [ actions, setActions ] = useState([])

  useEffect(() => {
    setActions(steps);
  }, [])

  const doCreateAction = () => {
    const newstep = { name: 'Prevefw', description: 'Iusto et officia maiores porro dad non quas.', href: '#', status: 'upcoming' }
    setActions([...actions, newstep]);
  }

  const Action = (step) => (
    <>
      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
      <a href={step.href} className="relative flex items-start group" aria-current="step">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
            <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
          </span>
        </span>
        <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">{step.name}</span>
          <span className="text-sm text-gray-500">{step.description}</span>
        </span>
      </a>
    </>
  )
  
  const CreateAction = (step) => (
    <>       
      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
      <div className="cursor-pointer relative flex items-start group" onClick={doCreateAction}>
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-indigo-600">
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </span>
        </span>
        <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase">Add action</span>
          <span className="text-sm text-gray-500">Create a new action</span>
        </span>
      </div>
    </>
  )

  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {actions.map((step, stepIdx) => (
          <li key={step.name} className='pb-8 relative'>
            { step.status === 'complete' ? (
              <>
                <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : 
              <>
                <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                <a href={step.href} className="relative flex items-start group" aria-current="step">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                      <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            }
          </li>
        ))}
        <li className='relative'>
          {CreateAction()}
        </li>
      </ol>
    </nav>
  )
}