import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full px-4 py-6 text-white font-merriweather">
      <div className="max-w-5xl mx-auto flex flex-wrap text-justify justify-between md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div>
          <h1 className="text-lg font-semibold mb-2 text-blue-500">
            Quick Links
          </h1>
          <Link href="/" className="flex items-start gap-3 py-1">
            <FaHome className="inline text-blue-500 text-2xl" />
            <p className="flex items-center">Home</p>
          </Link>
          <Link href="/about-us" className="flex items-start gap-3 py-1">
            <FaInfoCircle className="inline text-blue-500  text-2xl" />
            <p className="flex items-center">About</p>
          </Link>
          <Link href="/services" className="flex items-start gap-3 py-1">
            <FaCogs className="inline text-blue-500  text-2xl" />
            <p className="flex items-center">Services</p>
          </Link>
          <Link href="/contact" className="flex items-start gap-3 py-1">
            <FaPhone className="inline text-blue-500  text-2xl" />
            <p className="flex items-center ">Contact</p>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-blue-500  text-2xl ">
            Social Media Links
          </h1>
          <div className="flex items-center gap-2 py-1">
            <FaInstagram className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            <p>Instagram</p>
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaLinkedin className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            Linkedin
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaWhatsapp className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            Whatsapp
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaFacebook className="inline box-content text-blue-500 text-2xl hover:text-white transition" />
            Facebook
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2 text-blue-500">
            Contact Information
          </h1>
          <div className="flex items-start gap-4">
            <GoLocation className="text-blue-400 mt-2 text-5xl" />
            <p>
              Corporate Office: Akshar Business Center N/H 8A Morbi, Gujarat
              363642 Factory Address: At. Shapar, Jetpar Rd, Morbi, Gujarat
              363642
            </p>
          </div>
          <div className="mt-3 flex items-start gap-4">
            <FaPhone className="text-blue-400 mt-2" />
            <div>
              <p className="text-sm">India: +91-9537526707, +91-7859916418 </p>
              <p className="text-sm">USA: +1-9452686122</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <MdOutlineEmail className="text-blue-500 text-2xl" />
            <p>Export@nivainc.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
