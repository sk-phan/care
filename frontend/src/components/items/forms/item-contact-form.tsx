"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import TextInput from "@/components/common/TextInput";
import Button from "../../common/Button";
import "../../../styles/items/ItemContactForm.css";
import { ItemContactFormData } from "./item-contact-form.type";
import TextArea from "@/components/common/TextArea";

const ItemContactForm = () => {
    const { 
        handleSubmit, 
        control,
        formState: { errors } 
    } = useForm<ItemContactFormData>();

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (data: ItemContactFormData) => {
        console.log(data);
    }

    return (
        <div className="mt-6 bg-gray-100 p-6 rounded-3xl">
            <div className="flex items-center mb-6">
                <Image 
                className="object-cover rounded-full avatar mr-4"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="placeholder image"
                width={100}
                height={100}/>
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
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                    <TextInput 
                        name="name" 
                        control={control} 
                        rules={{ required: "Name is required" }} 
                        error={errors.name} 
                        placeholder="Full name"
                    />
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/2">
                        <TextInput 
                            name="email" 
                            control={control} 
                            rules={{ required: "Email is required" }} 
                            error={errors.email} 
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <TextArea 
                        name="message" 
                        control={control} 
                        rows={10}
                        placeholder="Your message to the donor..."
                    />
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

export default ItemContactForm;