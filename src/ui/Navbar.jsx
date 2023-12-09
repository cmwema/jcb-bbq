import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../state/cartSlice";
import { logOut } from "../Auth/Auth";
import Logo from "../img/logo.webp"

function Navbar() {
  const user = localStorage.getItem("accessToken") ? "admin" : "";
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const [isMenu, setIsMenu] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  const menu = () => {
    setIsMenu(!isMenu);
    setIsBurger(!isBurger);
  };

  return (
    <header className="fixed  top-0 z-50 flex w-[100vW] border-b-2 bg-gray-100 p-3 px-4 md:p-6 md:px-16">
      {/* DEsktop and tablet */}
      <div className="hidden h-full w-full items-center justify-between md:flex">
        <Link to={"/"} className="flex cursor-pointer items-center gap-2">
          <img src={Logo} className="w-8 object-cover " alt="logo" />
          <p className="font-bold text-orange-500 sm:text-xs md:text-sm lg:text-xl">
            Josephine Caribbean BBQ
          </p>
        </Link>

        <div className="flex items-center gap-4">
          {user === "admin" ? (
            <motion.ul className="flex flex-col items-center gap-6 md:flex-row">
              <Link to="/admin">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Dashboard
                </motion.li>
              </Link>
              {/* <Link to="/admin/sales">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Sales
                </motion.li>
              </Link> */}
              <Link to="/admin/categories/new">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Add Category
                </motion.li>
              </Link>
              <Link to="/admin/products/new">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Add Product
                </motion.li>
              </Link>
              {/* <Link to="/admin/tables/new">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Add Table
                </motion.li>
              </Link> */}
              <button
                onClick={logOut}
                className="cursor-pointer rounded-xl border border-gray-300 p-1 px-3 text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:bg-gray-300  hover:text-orange-500 "
              >
                logOut
              </button>
            </motion.ul>
          ) : (
            <motion.ul className="flex flex-col items-center gap-6 md:flex-row">
              <Link to="/">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Home
                </motion.li>
              </Link>
              <Link to="/menu">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Menu
                </motion.li>
              </Link>
              <Link to="/about">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  About
                </motion.li>
              </Link>
              <Link to="/contact">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                >
                  Contact
                </motion.li>
              </Link>
              <Link to="/cart">
                <motion.div
                  whileTap={{ scale: 0.6 }}
                  className="relative flex items-center justify-center "
                >
                  <AiOutlineShoppingCart className="cursor-pointer text-lg text-gray-900" />
                  <div className="absolute -right-4 -top-2 h-5 w-5 justify-center rounded-full bg-teal-500 text-center">
                    <p className="cursor-pointer text-xs font-semibold text-white">
                      {totalCartQuantity}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.ul>
          )}
        </div>
      </div>

      {/* mobile */}
      <div className="flex h-full w-full justify-between md:hidden">
        <Link to={"/"} className="flex cursor-pointer items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="hidden text-sm font-bold text-orange-500 xs:block lg:text-xl">
            Josephine Caribbean BBQ
          </p>
        </Link>

        <div className="flex items-center gap-6">
          {user !== "admin" && (
            <Link to="/cart">
              <motion.div
                whileTap={{ scale: 0.6 }}
                className="relative flex items-center justify-center "
              >
                <AiOutlineShoppingCart className="cursor-pointer text-lg text-gray-900" />
                <div className="absolute -right-4 -top-2 h-5 w-5 justify-center rounded-full bg-teal-500 text-center">
                  <p className="cursor-pointer text-xs font-semibold text-white">
                    {totalCartQuantity}
                  </p>
                </div>
              </motion.div>
            </Link>
          )}

          <div className="relative">
            <motion.h1 whileTap={{ scale: 0.6 }} onClick={menu}>
              {isBurger ? <RxCross2 /> : <GiHamburgerMenu />}
            </motion.h1>

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 400 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.6, x: 400 }}
                className="absolute right-0 top-12 flex w-40 flex-col gap-2 rounded-lg bg-gray-100 p-0 py-4 shadow-xl "
              >
                {user === "admin" ? (
                  <motion.ul className="flex flex-col items-center gap-6 md:flex-row">
                    <Link to="/admin" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Dashboard
                      </motion.li>
                    </Link>
                    {/* <Link to="/admin/sales" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Sales
                      </motion.li>
                    </Link> */}
                    <Link to="/admin/categories/new" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Add Category
                      </motion.li>
                    </Link>
                    <Link to="/admin/products/new" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Add Product
                      </motion.li>
                    </Link>
                    {/* <Link to="/admin/tables/new" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Add Table
                      </motion.li>
                    </Link> */}
                    <button
                      onClick={logOut}
                      className="cursor-pointer rounded-xl border border-gray-300 p-1 px-3 text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:bg-gray-300  hover:text-orange-500 "
                    >
                      logOut
                    </button>
                  </motion.ul>
                ) : (
                  <ul className="flex flex-col items-center gap-6 md:flex-row">
                    <Link to="/" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Home
                      </motion.li>
                    </Link>
                    <Link to="/menu" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Menu
                      </motion.li>
                    </Link>
                    <Link to="/about" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        About
                      </motion.li>
                    </Link>
                    <Link to="/contact" onClick={menu}>
                      <motion.li
                        whileTap={{ scale: 0.6 }}
                        className="cursor-pointer  text-sm font-semibold text-gray-900 transition-all duration-100 ease-in-out hover:text-orange-500"
                      >
                        Contact
                      </motion.li>
                    </Link>
                  </ul>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
