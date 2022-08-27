import { useState } from "react";
import { EnvelopeSimple } from 'phosphor-react'

import { Loading } from "../components/Loading";

export function Contact() {
  const [comment, setComment] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  return (
    <div id="contact" className="flex flex-col min-h-screen max-auto items-center justify-center space-y-5">
      <h1 className="text-purple-600 text-5xl font-bold">
        Get In Touch
      </h1>
      <p className="text-gray-400 text-lg text-center font-Roboto max-w-sm">
        My email is always open for your message and I'll try answers it the fast I can!
      </p>

      <form action="" className="flex flex-col w-1/2">
        <label className="text-white">
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400"
        />
        <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
          Please provide a valid email address.
        </p>

        <label className="text-white">
          Email
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          className="peer-invalid mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400"
        />
        <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
          Please provide a valid email address.
        </p>

        <label className="text-white">
          Message
        </label>
        <textarea
          onChange={event => setComment(event.target.value)}
          className="min-h-[130px] mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        />
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>

        <footer className="self-start">
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingMessage}
            className="flex items-center p-2 text-white bg-purple-600 rounded-lg text-sm hover:bg-transparent hover:ring-2 hover:ring-purple-600 transition-all duration-450 ease-linear disabled:opacity-50 hover:disabled:bg-purple-600 hover:disabled:ring-0"
          >
            <EnvelopeSimple weight="bold" className="mr-1 w-4 h-4" />
            { isSendingMessage ? <Loading /> : 'Send Message' }
          </button>
        </footer>
      </form>

    </div>
  )
}