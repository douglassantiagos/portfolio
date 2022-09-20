import { useState } from "react";
import { EnvelopeSimple } from "phosphor-react";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

export function Form() {
  const [comment, setComment] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  return (
    <form action="https://formsubmit.co/97613ae2a3beee36a70a74db8fa18e36"  method="POST" onSubmit={() => setIsSendingMessage(true)} className="flex flex-col w-[600px] sm:w-full pt-3">
      <label className="text-white">Name</label>
      <input 
        type="text" 
        name="name" 
        id="name"
        required
        className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 dark:focus:ring-2 dark:text-purple-900 dark:bg-white dark:border-white dark:focus:ring-purple-900"
      />

      <label className="text-white mt-5">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        required
        className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 dark:focus:ring-2 dark:text-purple-900 dark:bg-white dark:border-white dark:focus:ring-purple-900"
      />

      <label className="text-white mt-5">Subject</label>
      <input 
        type="text" 
        name="subject" 
        id="subject" 
        required
        className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 dark:focus:ring-2 dark:text-purple-900 dark:bg-white dark:border-white dark:focus:ring-purple-900"
      />

      <label className="text-white mt-5">Message</label>
      <textarea
        id="message"
        name="message"
        onChange={event => setComment(event.target.value)}          
        rows={5}
        className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 dark:focus:ring-2 dark:text-purple-900 dark:bg-white dark:border-white dark:focus:ring-purple-900 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      />

      <input type="hidden" name="_next" value="http://127.0.0.1:5173/" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <footer className="self-end mt-5">
        <button
          type="submit"
          value="Enviar"
          disabled={comment.length === 0 || isSendingMessage}
          className="flex items-center p-2 text-white bg-purple-600 rounded-lg text-sm hover:bg-transparent hover:ring-2 hover:ring-purple-600 transition-all duration-450 ease-linear disabled:opacity-50 hover:disabled:bg-purple-600 hover:disabled:ring-0 hover:disabled:cursor-not-allowed dark:bg-purple-900 dark:text-white dark:hover:bg-transparent dark:hover:text-purple-900 dark:hover:ring-black dark:hover:disabled:bg-purple-900 dark:hover:disabled:text-white"
        > 
          { isSendingMessage
            ? <Loading /> 
            :
            <span className="flex items-center">
              <EnvelopeSimple weight="bold" className="mr-1 w-4 h-4" />
              Send Message
            </span>
          }     
        </button>
      </footer>
    </form>
  )
}