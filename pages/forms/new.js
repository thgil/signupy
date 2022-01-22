import Nav from '../../components/nav'
import { useEffect } from 'react'

export default function CreateForm() {

  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <div className="pt-10 bg-slate-50 sm:pt-16 lg:pt-8 lg:pb-14 min-h-screen">
      <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>      
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Form</h3>
              <p className="mt-1 text-sm text-gray-600">
                Let&apos;s create a new form
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="/api/form/new" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Form Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="My Waitlist"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                        Domain
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="domain"
                          id="domain"
                          className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}