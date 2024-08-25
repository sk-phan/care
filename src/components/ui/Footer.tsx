import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section
        className="bg-black w-full mt-12 md:mt-16 py-12">
            <div
            style={{ maxWidth: "1400px"  }}
            className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12  flex flex-col md:flex-row justify-between items-start">
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
                        <a href="#" className="mr-2"><FaFacebook color="white" /></a>
                        <a href="#" className="mr-2"><FaInstagram color="white" /></a>
                        <a href="#"><FaLinkedin color="white"/></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-0">
                    <Link href="/about" className="text-white mr-4">About</Link>
                    <Link href="/contact" className="text-white mr-4">Contact</Link>
                    <span className="text-white">All Rights Reserved</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;