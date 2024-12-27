"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

import TextInput from "@/components/common/text-input";
import Button from "../../common/button";
import "../../../styles/items/ItemContactForm.css";
import { ItemContactFormData } from "./item-contact-form.type";
import TextArea from "@/components/common/textarea";
import { useMutation } from "@tanstack/react-query";
import { PickupRequestApi } from "@/services/pickup-request/pickup-request-api";
import { PickUpRequestPostParams } from "@/types/pickup-request/pickup-request.type";
import { useNotify } from "@/hooks/notification/use-notify";

const ItemContactForm = ({
    donorName,
    donorEmail
} : {
    donorName: string;
    donorEmail: string;
}) => {
    const { 
        handleSubmit, 
        control
    } = useForm<ItemContactFormData>();

    const notify = useNotify();

    const mutation = useMutation({
        mutationFn: (newTodo: PickUpRequestPostParams) => {
            return PickupRequestApi.create(newTodo)
        },
        onSuccess: () => {
            notify({
                message: "This is a success message!",
            });
        },
        onError:(error) => {
            console.log(error)
        }
    })
    const onSubmit = (data: ItemContactFormData) => {
        mutation.mutate({...data, itemId: '6731163f964185a39c3c51a3'})
    };


    return (
        <div className="mt-6 bg-gray-100 p-6 rounded-3xl">
            <div className="flex items-center mb-6">
                <Image 
                className="object-cover rounded-full avatar mr-4"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="placeholder image"
                width={100}
                height={100}
                />
                <div>
                    <span className="font-medium block">{donorName}</span>
                    <div className="flex flex-col xl:flex-row xl:justify-between">
                        <span className="xl:w-1/2 xl:mr-6 font-semibold">
                            <span className="text-gray-500 mr-2">Email:</span>
                            <a href="mailto:someone@example.com" className="underline">{donorEmail}</a>
                        </span>
                        <span className="xl:w-1/2 xl:mr-6 font-semibold">
                            <span className="text-gray-500 mr-2">Phone:</span>
                            <a href="tel:+123456789" className="underline">0123 456 789</a>
                        </span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                    <TextInput 
                        name="name" 
                        control={control} 
                        rules={{ required: "Name is required" }} 
                        placeholder="Full name"
                    />
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/2">
                        <TextInput 
                            name="email" 
                            control={control} 
                            rules={{ required: "Email is required" }} 
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