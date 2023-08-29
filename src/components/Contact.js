import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#474748] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f204f3ca-f8f5-4d48-864d-9690890d1d5f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#CA2E55] text-white">
            Contact
          </p>
          <p className="py-4 text-white">
            Submit the form below or send me an email at n.justinaro@gmail.com
          </p>
        </div>
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="email"
          className="my-4 p-2 rounded"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="p-2 rounded"
          name="message"
          rows="10"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#68ffd4] hover:border-[#68ffd4] hover:text-[#09090B] px-4 py-3 my-8 mx-auto flex items-center font-light">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}
