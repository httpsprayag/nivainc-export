"use client";
import React, { useRef } from "react";
import { useFormik } from "formik";
import { ProgressSpinner } from "primereact/progressspinner";
import { Heading } from "@/components";
import * as Yup from "yup";
import { MdContactPage } from "react-icons/md";
import axios from "axios";
import { Toast, ToastMessage } from "primereact/toast"
import { Button } from 'primereact/button';

const ContactUsPage = () => {
  const toast = useRef(null)
  const showSuccess = () => {
    toast.current.show({ detail: 'Email Sent Successfully.', life: 3000 });
  }
  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Something went wrong, please try again sometime later.",
      life: 3000,
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      contactNumber: "",
      email: "",
      query: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      contactNumber: Yup.string().required("Contact number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      query: Yup.string().required("Query is required"),
    }),
    onSubmit: async (values, { setSubmitting, isSubmitting, resetForm }) => {
      // Handle form submission logic here
      console.log("Form values :", values)
      const response = await axios.post("/api/email", values)
      // console.log("response :", response?.data?.message)
      // console.log(response?.data?.message)
      if (response?.data?.message.length > 0) {
        showSuccess()
      }else{
        showError()
      }
    },
  });
  return (
    <div className="mt-8 px-4 md:px-0 pb-4">
      <Toast ref={toast} className="bg-blue-800 bg-opacity-80 rounded-xl shadow-lg border p-3 text-white" />
      <div className="flex flex-col md:items-center gap-3 md:justify-center">
        <div className="flex items-center gap-3 text-blue-500">
          <MdContactPage className="text-3xl text-blue-400" />
          <Heading isCenter>Contact Us</Heading>
        </div>
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-500">
          We would be most delighted to answer any of your questions or queries,
          thus feel free to contact us anytime! What is more, you can visit our
          showroom during our operating hours to check our products and have a
          chat with our representatives, or even schedule an appointmen
        </p>
      </div>
      <div className="mt-7 md:mt-[70px] flex md:max-w-3xl border border-blue-400 rounded-lg lg:max-w-4xl mx-auto relative">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-gray-950 bg-opacity-80 p-8 rounded-l-lg shadow-md w-full md:pr-40 lg:pr-36"
        >
          <div className="mb-4">
            <div className="text-3xl py-3 flex items-center gap-2">
              <p className="text-blue-300">Get In Touch</p>
            </div>
            <label htmlFor="name" className="text-blue-400 block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full px-3 py-2 border duration-200 border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-400"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 mt-2">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="text-blue-400 block mb-2">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactNumber}
              className="w-full px-3 py-2 duration-200 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-400"
            />
            {formik.touched.contactNumber && formik.errors.contactNumber && (
              <div className="text-red-500 mt-2">
                {formik.errors.contactNumber}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-blue-400 block mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-400"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-2">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="query" className="text-blue-400 block mb-2">
              Query
            </label>
            <textarea
              id="query"
              name="query"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.query}
              className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-400"
            />
            {formik.touched.query && formik.errors.query && (
              <div className="text-red-500 mt-2">{formik.errors.query}</div>
            )}
          </div>

          <button
            type="submit"
            className="border h-12 w-32 duration-200 hover:text-black border-blue-400 text-blue-500 hover:bg-blue-400 px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <ProgressSpinner color="blue" className="h-full text-blue-400" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
        <div className="w-2/5 bg-blue-400 hidden md:block rounded-r-lg"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1038075.7105361769!2d-93.48650886938557!3d60.97321408042491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699804356173!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute hidden md:flex w-[250px] right-[12%] top-0 bottom-0 h-full py-3"
        ></iframe>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1038075.7105361769!2d-93.48650886938557!3d60.97321408042491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699804356173!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="md:hidden h-[230px] w-full py-3"
      />
    </div>
  );
};

export default ContactUsPage;
