import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-double border-t-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <p className="mr-10 text-sm">
              We are a company dedicated to providing the best service in the
              industry. Our mission is to deliver high-quality products and
              ensure customer satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="list-none font-semibold">
              <li className="mb-0">
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/getstarted" className="hover:text-gray-400">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@company.com" className="hover:text-gray-400">
                info@company.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+1234567890" className="hover:text-gray-400">
                +1 234 567 890
              </a>
            </p>
            <div className="mt-4">
              <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="text-gray-500 hover:text-white text-xl"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-500 hover:text-white text-xl"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-500 hover:text-white text-xl"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-500 hover:text-white text-xl"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 mt-8 border-t border-gray-700">
          <p>&copy; 2024 Hello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
