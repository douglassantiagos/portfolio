import React, { useRef } from 'react';
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { EnvelopeSimple } from "phosphor-react";
import emailjs from '@emailjs/browser';

import { Success } from "./Success";
import { Loading } from '../components/Loading';

export function Contact() {
  const [comment, setComment] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [resultStatusMessage, setResultStatusMessage] = useState(0);

  const form = useRef();

  const sendEmail = async (e: any) => {
    setIsSendingMessage(true);
    e.preventDefault();

    await emailjs.sendForm('service_wjag3e8', 'template_vlhbsmk', form.current, 'X7tlZ8Hkz0auY0XN4')
    .then((result) => {
      console.log('message sent');
      setResultStatusMessage(result.status)      
    }, (error) => {
      console.log(error.text);
    });
    
    setIsSendingMessage(false);
  };

  const Variants: Variants = {
    offscreen: {
      y: 300,
      opacity: -0.1,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
  };

  return (
    <>
      { resultStatusMessage !== 200 ? (
        <motion.div 
          id="contact" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }} 
          className="flex flex-col min-h-screen max-auto items-center justify-center space-y-5 dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00]"
        >
          <motion.div variants={Variants}  className="flex flex-col flex-wrap sm:max-w-sm items-center justify-center space-y-5 md:my-32 p-10 sm:p-4  dark:border-white rounded-xl border-purple-600">
            <h1 className="text-purple-600 text-5xl font-bold dark:text-white">
              Get In Touch
            </h1>

            <p className="text-gray-400 text-base text-center font-Roboto max-w-sm dark:text-purple-900">
              My mailbox is always open for your message and I'll try to answer it the fast I can!
            </p>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[600px] sm:w-full pt-3">
              <label className="text-white">Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="name"
                required
                className="mt-2 rounded-md shadow-sm p-2 text-white font-Roboto focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-transparent border-[1px] border-gray-400 dark:focus:ring-2 dark:text-purple-900 dark:bg-white dark:border-white dark:focus:ring-purple-900"
              />

              <label className="text-white mt-5">Email</label>
              <input 
                type="email" 
                name="user_email" 
                id="email" 
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

              <footer className="self-end mt-5">
                <button
                  type="submit"
                  value="Send"
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
          </motion.div>
        </motion.div> 
      ) : (
        <Success />
      )}    
    </>  
  )
}