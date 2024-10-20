"use client"
import { useEffect } from "react";
import "../../styles/ItemPage.css";
import ContactDonorForm from "../ContactDonorForm";

const ItemPage = () => {
    useEffect(() => {
        const itemInfo = document.getElementById("item-info");
        const itemImage = document.getElementById("item-image");

        if (window.innerWidth >= 768) {
            if (itemInfo && itemImage) {
                itemImage.style.height = `${itemInfo.clientHeight}px`;
            }
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <img 
            id="item-image"
            src="https://images.pexels.com/photos/10216083/pexels-photo-10216083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Toy image"
            className="rounded-xl w-full md:w-1/2 object-cover item-image"
            />
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 h-fit" id="item-info">
                <h3
                className="text-2xl md:text-4xl font-medium break-words"
                >Pink car toy is looking for new home
                </h3>
                <div className="flex flex-col mt-6 md:mt-8 mb-6">
                    <span className="bg-green-500 mb-2 text-white w-fit px-4 py-1 rounded-full">Available</span>
                    <span>
                        <span className="text-gray-500">Status:</span> 
                        <span className="ml-2 font-medium">Like new</span>
                    </span>
                    <span>
                        <span className="text-gray-500">Location:</span>  
                        <span className="ml-2 font-medium">Helsinki, FI</span>
                    </span>
                </div>
                <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ContactDonorForm />
            </div>
        </div>
    )
};

export default ItemPage;