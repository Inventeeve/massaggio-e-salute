import React from "react"
import { MinusIcon } from "../components/icons"

const MinMaxPrice = ({ entries }) => {
  const minPrice = Math.min(...entries.map(e => parseFloat(e.price)))
  const maxPrice = Math.max(...entries.map(e => parseFloat(e.price)))

  if (entries) {
    return (
      <div className="text-md font-light text-gray-500 flex items-center">
        <span>{minPrice} €</span>
        <MinusIcon className="w-4 mx-2 text-gray-400" />
        <span>{maxPrice} €</span>
      </div>
    )
  }

  return <span className="text-4xl text-red-500">€</span>
}

const PricingSections = ({ prices }) => (
  <>
    <div className="bg-white" id="prices">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl leading-none font-extrabold text-gray-900 sm:text-center">
            {prices.pricestitle}
          </h1>
          <p className="mt-5 text-xl leading-7 text-gray-500 sm:text-center">
            {prices.pricesdescription}
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {prices.priceslist.map((entry, key) => (
            <div
              key={key}
              className="rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-xl leading-6 text-gray-900 font-extrabold tracking-wide capitalize">
                  {entry.category.toLowerCase()}
                </h2>
                <div className="mt-4 flex space-x-3 flex items-center">
                  <MinMaxPrice entries={entry.entries} />
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {entry.entries ? (
                    entry.entries.map((entry, key) => (
                      <li key={key}>
                        <span className="flex space-x-3">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-yellow-500"
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
                          {entry.price} €
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
