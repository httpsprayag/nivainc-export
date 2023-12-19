
"use client"
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CatalogPage = () => {
    const whatsappNumber = "+1 (945) 268-6122";
    const whatsappMessage = "Hello, I'm interested in your catalogs.";

    return (
        <div className="text-center mt-20 h-[calc(100vh-427px)] px-4 w-full">
            <div className="flex items-start gap-4 text-justify md:justify-center">
                <p className="text-base md:text-xl font-light font-serif mb-4 text-[#034d94]">For catalogs, please reach out to us on WhatsApp</p>
                <Link target="_blank" href={'https://wa.me/+19452686122'}>
                    <FaWhatsapp
                        className="text-3xl text-[#034d94] cursor-pointer"
                    />
                </Link>
            </div>
            <p className="mt-4 font-black text-left md:text-center text-[#034d94]">Click the WhatsApp icon to chat with us!</p>
        </div>
    );
};

export default CatalogPage;
