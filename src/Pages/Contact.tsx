import { useState } from 'react'
import { Form } from "../components/Form";
import { Success } from '../components/Success';

export function Contact() {

  return (    
    <div id="contact" className="flex flex-col min-h-screen max-auto items-center justify-center space-y-5">
      <h1 className="text-purple-600 text-5xl font-bold">
        Get In Touch
      </h1>

      <p className="text-gray-400 text-lg text-center font-Roboto max-w-sm">
        My mailbox is always open for your message and I'll try answers it the fast I can!
      </p>
      
      <Form />
    </div> 
  )
}