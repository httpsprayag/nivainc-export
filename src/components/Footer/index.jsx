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
          <h1 className="text-lg font-semibold mb-2 text-[#034d94]">
            Quick Links
          </h1>
          <Link href="/" className="flex items-start gap-3 py-1">
            <FaHome className="inline text-[#034d94] text-2xl" />
            <p className="flex items-center">Home</p>
          </Link>
          <Link href="/about-us" className="flex items-start gap-3 py-1">
            <FaInfoCircle className="inline text-[#034d94]  text-2xl" />
            <p className="flex items-center">About</p>
          </Link>
          <Link href="" className="flex items-start gap-3 py-1">
            <FaCogs className="inline text-[#034d94]  text-2xl" />
            <p className="flex items-center">Products</p>
          </Link>
          <Link href="/contact" className="flex items-start gap-3 py-1">
            <FaPhone className="inline text-[#034d94]  text-2xl" />
            <p className="flex items-center ">Contact</p>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-[#034d94]  text-2xl ">
            Social Media Links
          </h1>
          <Link
            target="_blank"
            href={
              "https://instagram.com/nivainc?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
            }
            className="flex items-center gap-2 py-1"
          >
            <FaInstagram className="inline box-content text-[#034d94]  text-2xl hover:text-white transition" />
            <p>Instagram</p>
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.linkedin.com/in/dipak-patel-8908b7287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            }
            className="flex items-center gap-2 py-1"
          >
            <FaLinkedin className="inline box-content text-[#034d94]  text-2xl hover:text-white transition" />
            Linkedin
          </Link>
          <Link
            href={"https://wa.me/+19452686122"}
            target="_blank"
            className="flex items-center gap-2 py-1"
          >
            <FaWhatsapp className="inline box-content text-[#034d94]  text-2xl hover:text-white transition" />
            Whatsapp
          </Link>
          <div className="flex items-center gap-2 py-1">
            <FaFacebook className="inline box-content text-[#034d94] text-2xl hover:text-white transition" />
            Facebook
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2 text-[#034d94]">
            Contact Information
          </h1>
          <div className="flex items-start gap-4">
            <GoLocation className="text-[#034d94] mt-2 text-3xl" />
            <p>
              Corporate Office: Akshar Business Center N/H 8A Morbi, Gujarat
              363642
            </p>
          </div>
          <div className="flex items-start gap-4">
            <GoLocation className="text-[#034d94] mt-2 text-3xl" />
            <p>
              {" "}
              Factory Address: At. Shapar, Jetpar Rd, Morbi, Gujarat 363642
            </p>
          </div>
          <div className="mt-3 flex items-start gap-4">
            <FaPhone className="text-[#034d94] mt-2" />
            <div>
              <div className="text-sm flex gap-3">
                <p className="text-sm">India:</p>
                <div className="flex gap-1">
                  <Link href="tel:+91-7859916418">+91-7859916418</Link>
                  <Link href="tel:+91-7859916418">, +91-9537526707</Link>
                </div>
              </div>
              <p className="text-sm">USA: +1-9452686122</p>
            </div>
          </div>
          <Link
            href={"mailto:Export@nivainc.com"}
            className="mt-3 flex items-center gap-2"
          >
            <MdOutlineEmail className="text-[#034d94] text-2xl" />
            <p>Export@nivainc.com</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
