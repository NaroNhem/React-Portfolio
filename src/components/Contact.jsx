import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#605770] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f204f3ca-f8f5-4d48-864d-9690890d1d5f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#F7C4A5] text-white">
            Contact
          </p>
          <p className="py-4 text-white">
            // Submit the form below or send me an email at
            n.justinaro@gmail.com
          </p>
        </div>
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="my-4 p-2 rounded"
          placeholder="Email"
          name="email"
        />
        <textarea className="p-2 rounded" name="message" rows="10"></textarea>
        <button className="text-white border-2 hover:bg-[#F7C4A5] hover:border-[#F7C4A5] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}