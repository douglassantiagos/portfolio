import { Check } from "phosphor-react";
import { Button } from "../components/Button";

export function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-900 dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00]">
      <div className="flex flex-col items-center  space-y-6">
        <section className="bg-purple-600 dark:bg-white rounded-full p-1">
          <Check size={40} className="text-white dark:text-purple-900" />
        </section>

        <span className="text-2xl text-center">
          Thanks! <br />
          Your message was sent successfully
        </span>
        <span className="text-xl align-middle text-[#FEFCFF] my-4 ">      
          I'll get back to you soon
        </span>

        <Button href="/" title='Send Another Email' />
      </div>
    </div>
  )
}