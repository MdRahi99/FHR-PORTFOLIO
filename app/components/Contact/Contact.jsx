'use client'
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import { ImLocation, ImPhone, ImEnvelop } from "react-icons/im";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen px-4 lg:px-12 py-12 flex flex-col">
            <div className="mb-10">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4">Get in Touch</h1>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-500 text-lg max-w-2xl">
                    If you have any suggestions, project ideas, or even if you just want to say "hi",
                    please fill out the form below. I'll get back to you shortly.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-20">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 col-span-2">
                    <div className="grid lg:grid-cols-2 gap-6">
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Name"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition duration-300"
                        />
                        <input
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            placeholder="Email"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition duration-300"
                        />
                        <input
                            {...register("phone")}
                            type="tel"
                            placeholder="Phone"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition duration-300"
                        />
                        <input
                            {...register("subject", { required: "Subject is required" })}
                            type="text"
                            placeholder="Subject"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition duration-300"
                        />
                    </div>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Message"
                        rows="4"
                        className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition duration-300"
                    ></textarea>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-400 transition duration-300 ease-in-out w-full"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="space-y-8 col-span-1">
                    <div>
                        <h3 className="flex items-center text-xl font-semibold mb-2">
                            <ImLocation className="mr-2 text-orange-500" /> Address
                        </h3>
                        <p className="text-gray-500">Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className="flex items-center text-xl font-semibold mb-2">
                            <ImPhone className="mr-2 text-orange-500" /> Phone
                        </h3>
                        <p className="text-gray-500">+8801799550816</p>
                    </div>
                    <div>
                        <h3 className="flex items-center text-xl font-semibold mb-2">
                            <ImEnvelop className="mr-2 text-orange-500" /> Email
                        </h3>
                        <a href="mailto:mdforhadhossainrahi10@gmail.com" className="text-gray-500 hover:text-orange-500 transition duration-300">
                            mdforhadhossainrahi10@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;