import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs"

function Footer() {
  const date = new Date();
  return (
    <footer className="bottom-0 mt-4 flex flex-col items-center justify-center gap-4 bg-black p-4 pt-6 text-gray-200 md:p-6">
      <section className="flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="w-full md:w-[50%]">
          <h1 className="mb-4 w-max border-b-2 border-orange-500 pr-4 text-xl font-semibold tracking-wide text-orange-500">
            About
          </h1>
          <p className="text-sm">
            Josephine Caribbean Restaurant, a vivacious tribute to Josephine by
            her grandson, Brian Loe. It embodies her heritage, serving
            delightful Caribbean cuisine, and creating a vibrant, welcoming
            atmosphere. Savor authentic Caribbean flavors, embracing her
            enduring legacy.
          </p>
        </div>
        <div>
          <h1 className="mb-4 w-max border-b-2 border-orange-500 pr-4 text-xl font-semibold tracking-wide text-orange-500">
            Quick Links
          </h1>
          <ul className="flex flex-col">
            <Link className="text-sm text-gray-50 hover:text-orange-300" to="/">
              Home
            </Link>
            <Link
              className="text-sm text-gray-50 hover:text-orange-300"
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className="text-sm text-gray-50 hover:text-orange-300"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-sm text-gray-50 hover:text-orange-300"
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 w-min border-b-2 border-orange-500 pr-4 text-xl font-semibold tracking-wide text-orange-500">
            Contact
          </h1>
          <ul className="flex flex-col text-sm">
            <li>
              Phone:
              <a className="pl-2" href="tel:+254706089666">
                +254 706 089666
              </a>
            </li>
            <li>
              Email:
              <a className="pl-2" href="mailto:info@josephinebbq.com">
                info@josephinebbq.com
              </a>
            </li>
            <li>Location: Craft Center, Gigiri Lane, Nairobi, Kenya</li>
            <li className="flex gap-2 text-orange-200 ">
              <a
                className="hover:text-gray-400"
                href="https://www.facebook.com/JosCaribbeanBBQ/"
              >
                <BsFacebook />
              </a>
              <a
                className="hover:text-gray-400"
                href="https://www.instagram.com/josephinecaribbean/"
              >
                <BsInstagram />
              </a>
              <a
                className="hover:text-gray-400"
                href="https://wa.me/254706089666"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <p className="mt-6 text-center text-xs text-teal-600">
        ©{date.getFullYear()} Josephine Caribbean BBQ Ltd, Craft Center, Gigiri
        Lane, Nairobi, Kenya
      </p>
    </footer>
  );
}

export default Footer;
