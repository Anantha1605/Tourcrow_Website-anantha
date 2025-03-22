"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Send } from "lucide-react"

export default function Section6() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email body from form data
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`
    
    // Open mailto link
    window.location.href = `mailto:collaborations.tourcrow@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  } 

  return (
    <section className="relative py-16 md:py-52"
    style={{
        backgroundImage: `url('/bg Contact Section.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      <div className="container mx-auto px-4">  
        {/* Updated container with rounded corners and consistent yellow background */}
        <div className="bg-[#FEC90F61]  rounded-3xl shadow-lg overflow-hidden max-w-5xl mx-auto ">
          <div className="flex flex-col md:flex-row p-6 md:p-10">
            {/* Left side with illustration */}
            <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/contact-telephone-landing.svg"
                  alt="Contact concept"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right side with form */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-black text-center">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full font-bold placeholder-black rounded-2xl p-3 border-2 border-gray-200 focus:border-[#FEC90F] focus:ring-0 outline-none bg-white text-black"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full font-bold placeholder-black rounded-2xl p-3 border-2 border-gray-200 focus:border-[#FEC90F] focus:ring-0 outline-none bg-white text-black"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full font-bold placeholder-black rounded-2xl p-3 border-2 border-gray-200 focus:border-[#FEC90F] focus:ring-0 outline-none resize-none bg-white text-black"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex font-bold items-center gap-2 rounded-2xl px-6 py-3 bg-[#FEC90F] hover:bg-[#e8b80e] text-black transition-colors"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}