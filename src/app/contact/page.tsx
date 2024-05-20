"use client";
import Image from "next/image";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="min-h-screen flex justify-center items-center gap-10">
      <Image
        src={"/imgs/avatar2.png"}
        width={5000}
        height={5000}
        alt="avt2"
        className="scale-90 rounded-2xl max-w-[650px]"
      />
      <div className="p-10 border-zinc-700 bg-zinc-900 border rounded-md min-w-[700px] flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="uppercase font-cocogoose text-sm text-[rgb(255,255,255,0.7)]">
            Contact
          </span>
          <h1 className="text-4xl">Let&apos;s get in touch</h1>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-zinc-800 p-3 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-zinc-800 p-3 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-zinc-800 p-3 outline-none resize-none h-44"
          />
          <button
            type="submit"
            className="text-center text-lg gap-2 px-5 py-3 bg-neutral-600 transition-all hover:bg-[rgba(255,255,255,0.5)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
