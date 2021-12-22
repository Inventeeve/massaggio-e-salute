import React, { useState } from "react"
import { BurgerIcon, CloseIcon } from "../components/icons"
// import logo from "../images/logo-sirio.png"

const Nav = [
  { label: "I nostri trattamenti", link: "#blurbs", type: "standard" },
  { label: "Listino prezzi", link: "#prices", type: "standard" },
  { label: "Contattaci", link: "#contacts", type: "accent" },
]

const HeaderSection = ({ data }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const HeaderMenuMobile = () => (
    <div className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-end">
          <div className="-mr-2">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              onClick={() => setOpenMenu(false)}
            >
              <span className="sr-only">Close main menu</span>
              <CloseIcon classNames="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Nav.map((nav, key) => (
            <a
              key={key}
              href={nav.link}
              className={`${key > 1 && "mt-1"} ${
                nav.type === "accent"
                  ? `text-yellow-600 bg-gray-50 hover:bg-gray-100 hover:text-yellow-700 focus:bg-gray-100 focus:text-yellow-700 `
                  : `text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50 `
              } focus:outline-none block px-3 py-2 rounded-md text-base font-medium  transition duration-150 ease-in-out`}
              role="menuitem"
            >
              {nav.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  const HeaderMenu = () => {
    return (
      <div className="relative z-10 pb-8 bg-white sm:pb-16">
        {/* Full Menu */}
        <div className="relative sm:px-6 lg:px-8 w-full">
          <div className="px-6 pt-6 items-center justify-end flex">
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                onClick={() => setOpenMenu(true)}
              >
                <span className="sr-only">Close main menu</span>
                <BurgerIcon classNames="w-6 h-6 sm:hidden" />
              </button>
            </div>
          </div>
          <nav className="relative justify-center items-center hidden md:flex">
            <div className="md:block md:pr-4 text-center">
              {Nav.map((nav, index) => (
                <a
                  key={index}
                  href={nav.link}
                  className={`${
                    nav.type === "accent"
                      ? `text-yellow-600 hover:text-yellow-900`
                      : `text-gray-500 hover:text-gray-900`
                  } mx-4 font-medium transition duration-150 ease-in-out`}
                >
                  {nav.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative bg-white overflow-hidden md:block">
        <div className="max-w-screen-xl justify-center mx-auto">
          <div className="relative pb-8 bg-white">
            {/* Full Menu */}
            <HeaderMenu />

            {/* Mobile Menu */}
            {openMenu && <HeaderMenuMobile />}
            {/* <HeaderMenuMobile /> */}

            <main className="mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 md:flex justify-between">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  {data.title}
                  <br />
                </h2>
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-yellow-600 sm:text-4xl sm:leading-none md:text-4xl">
                  {data.subtitle}
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {data.description}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#blurbs"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Scopri di più
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#contacts"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:shadow-outline-green focus:border-yellow-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Contattaci
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="w-full mx-auto sm:mx-0 md:my-6 my-12"
                style={{ maxWidth: "300px" }}
                src={data.featuredImage}
                alt="featured"
              />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSection
