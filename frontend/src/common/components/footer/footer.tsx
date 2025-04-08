"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = [
    { icon: FaFacebook, href: "#facebook" },
    { icon: FaInstagram, href: "#insta" },
    { icon: FaLinkedin, href: "#linkedin" },
];

const NavLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const Footer = () => {
    return (
        <footer className="bg-black w-full mt-12 md:mt-16 py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-start">
                <div>
                    <span className="text-white text-2xl font-semibold">Care</span>
                    <p className="text-white mt-4">
                        Bulevardi 31A 
                        <br/> 
                        00180 Helsinki 
                        <br/> 
                        0414795414
                    </p>
                    <div className="flex mt-4">
                        {SocialLinks.map(link => {
                            return (
                                <a key={link.href} href={link.href} className="mr-2">
                                    <link.icon color="white"/>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-0">
                    { NavLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-white mr-4">{link.label}</Link>
                    ))}
                    <span className="text-white">All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;