import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CricDash Contact Us | Have Questions? Contact Us Now for Assistance! | CricDash.com",
  description:
    "Have inquiries or feedback about Cricdash? Reach out to us through our contact page. Our team is here to assist you with any questions or concerns regarding the app's features, functionality, or support. Connect with us today and enhance your cricket scoring experience with Cricdash.",
};
function page() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero Map */}
      <div className="flex flex-col space-y-8 pb-5 pt-6 md:pt-10">
        <div className="mx-auto max-w-max rounded-full border bg-gray-50 dark:bg-gray-950 p-1 px-3">
          <p className="text-center text-xs font-semibold leading-normal md:text-sm dark:text-yellow-500">
            Share your thoughts
          </p>
        </div>
        {/* <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p> */}
      </div>
      <div className="mx-auto max-w-full py-2 md:py-2">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 ">
          {/* contact from */}
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="mt-4 text-lg text-gray-400">
                Our friendly team would love to hear from you.
              </p>
              <form action="" className="mt-8 space-y-4 pb-10">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone_number"
                  >
                    Phone number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="tel"
                    id="phone_number"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="message"
                    placeholder="Leave us a message"
                    cols={3}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black dark:bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* <Image
            alt="Contact us"
            height={500}
            width={500}
            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
            src="/contact.jpeg"
          />*/}
        </div>
      </div>
    </div>
  );
}

export default page;
