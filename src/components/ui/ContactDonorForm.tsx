"use client";

import { useRef } from "react";
import "../../styles/ContactDonorForm.css"
import Button from "./Button";

interface ContactDonorFormPropsType {
}
const ContactDonorForm = () => {

    const formRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formRef.current)
    }

    return (
        <div className="mt-6 bg-gray-100 p-6 rounded-3xl">
            <div className="flex items-center mb-6">
                <img 
                className="object-cover rounded-full avatar mr-4"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="placeholder image"/>
                <div>
                    <span className="font-medium block">Mikko Korhonen</span>
                    <div className="flex flex-col xl:flex-row xl:justify-between">
                        <span className="xl:w-1/2 xl:mr-6 font-semibold">
                            <span className="text-gray-500 mr-2">Email:</span>
                            <a href="mailto:someone@example.com" className="underline">mikko@gmail.com</a>
                        </span>
                        <span className="xl:w-1/2 xl:mr-6 font-semibold">
                            <span className="text-gray-500 mr-2">Phone:</span>
                            <a href="tel:+123456789" className="underline">0123 456 789</a>
                        </span>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} ref={formRef}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                        <input type="text" 
                        id="name" 
                        className="rounded-full bg-white border border-gray-900 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Your name" 
                        required />
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/2">
                        <input type="text" id="email" className="rounded-full bg-white border border-gray-900 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Your email" 
                        required />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <textarea 
                    id="message" 
                    className="rounded-3xl bg-white border border-gray-900 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Your message to the donor..." 
                    rows={10}
                    required />
                </div>
                <Button
                    type="submit"
                    color="secondary"
                    className="
                    p-4
                    w-full
                    md:block
                    mt-8">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default ContactDonorForm;