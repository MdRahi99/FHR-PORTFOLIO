"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import { ImLocation, ImPhone } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import SeeMore from "../SeeMore/SeeMore";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Get in Touch</h1>
        <div className="w-20 h-1 bg-hover mb-6"></div>
        <p className="text-secondary text-lg max-w-2xl">
          If you have any suggestions, project ideas, or even if you just want
          to say "hi", please fill out the form below. I'll get back to you
          shortly.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 col-span-2 order-2 lg:order-1"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className="bg-primary border border-secondary px-4 py-2 w-full focus:outline-none transition duration-300"
            />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="bg-primary border border-secondary px-4 py-2 w-full focus:outline-none transition duration-300"
            />
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone"
              className="bg-primary border border-secondary px-4 py-2 w-full focus:outline-none transition duration-300"
            />
            <input
              {...register("subject", { required: "Subject is required" })}
              type="text"
              placeholder="Subject"
              className="bg-primary border border-secondary px-4 py-2 w-full focus:outline-none transition duration-300"
            />
          </div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            rows="4"
            className="bg-primary border border-secondary px-4 py-2 w-full focus:outline-none transition duration-300"
          ></textarea>
          <div className="flex w-full lg:w-[30%]">
            <button
              type="submit"
              className="border-2 text-sm border-primary py-3 hover:border-hover hover:text-hover transition duration-300 ease-in-out w-full"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="space-y-8 col-span-1 order-1 lg:order-2">
          <div>
            <h3 className="flex items-center text-xl font-semibold mb-2">
              <ImLocation className="mr-2 text-hover" /> Address
            </h3>
            <p className="text-secondary">Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="flex items-center text-xl font-semibold mb-2">
              <ImPhone className="mr-2 text-hover" /> Phone
            </h3>
            <p className="text-secondary">+8801799550816</p>
          </div>
          <div>
            <h3 className="flex items-center text-xl font-semibold mb-2">
              <FiMail className="mr-2 text-hover" /> Email
            </h3>
            <a
              href="mailto:mdforhadhossainrahi10@gmail.com"
              className="text-secondary hover:text-hover transition duration-300"
            >
              mdforhadhossainrahi10@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end pr-2">
        <SeeMore url={"/"} title={`Go Back Home`} />
      </div>
    </div>
  );
};

export default Contact;
