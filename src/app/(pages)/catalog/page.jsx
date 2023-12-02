
"use client"
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CatalogPage = () => {
    const whatsappNumber = "+1 (945) 268-6122";
    const whatsappMessage = "Hello, I'm interested in your catalogs.";

    const handleWhatsAppClick = () => {
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        window.location.href = whatsappLink;
    };

    return (
        <div className="text-center mt-20 h-[calc(100vh-427px)] px-4 w-full">
            <div className="flex items-start gap-4 text-justify md:justify-center">
                <p className="text-base md:text-xl font-light font-serif mb-4 text-blue-600">For catalogs, please reach out to us on WhatsApp</p>

                <FaWhatsapp
                    className="text-3xl text-green-500 cursor-pointer"
                    onClick={handleWhatsAppClick}
                />
            </div>
            <p className="mt-4 font-black text-left md:text-center text-blue-400">Click the WhatsApp icon to chat with us!</p>
        </div>
    );
};

export default CatalogPage;
