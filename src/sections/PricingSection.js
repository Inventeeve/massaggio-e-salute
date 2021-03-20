import React from "react"
import { MinusIcon } from "../components/icons"

const MinMaxPrice = ({ entries }) => {
  const minPrice = Math.min(...entries.map(e => parseFloat(e.price)))
  const maxPrice = Math.max(...entries.map(e => parseFloat(e.price)))

  if (entries) {
    return (
      <>
        <span className="text-xl text-gray-500">
          {minPrice} €
        </span>
        <MinusIcon className="w-4 mx-2 text-gray-500" />
        <span className="text-xl text-gray-500">
          {maxPrice} €
        </span>
      </>
    )
  }

  return <span className="text-4xl text-red-500">€</span>
}

const PricingSections = ({ prices }) => (
  <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl leading-none font-extrabold text-gray-900 sm:text-center">
            Listino Prezzi
          </h1>
          <p className="mt-5 text-xl leading-7 text-gray-500 sm:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            assumenda quisquam aut repellendus quibusdam in et mollitia
            veritatis blanditiis laboriosam! Provident explicabo quis nihil
            natus ad. Optio laudantium animi natus!
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {prices.map((entry, key) => (
            <div
              key={key}
              className="rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 text-2xl text-gray-900 font-extrabold capitalize">
                  {entry.category.toLowerCase()}
                </h2>
                <div className="mt-8 flex space-x-3 flex items-center">
                  <MinMaxPrice entries={entry.entries} />
                </div>
                {/* <button
                  type="button"
                  className="mt-8 w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                >
                  Chiedi informazioni
                </button> */}
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase">
                  Listino completo
                </h3>
                <ul className="mt-6 space-y-4">
                  {entry.entries ? (
                    entry.entries.map((entry, key) => (
                      <li key={key}>
                        <span className="flex space-x-3">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="text-sm leading-5 text-gray-500">
                            {entry.label}
                          </div>
                        </span>
                        <div className="ml-8 text-sm leading-5 font-extrabold text-gray-500">
                          {entry.price.toFixed(2)} €
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="text-red-500">
                      Add a price for this category
                    </div>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default PricingSections
