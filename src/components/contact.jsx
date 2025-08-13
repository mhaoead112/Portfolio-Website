import React, { useRef, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2a8b1yf",   // from EmailJS dashboard
        "template_b3tg5eb",  // from EmailJS dashboard
        form.current,
        "KyEe-gCOfh9dTdNxl"    // from EmailJS account
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow rounded-xl p-6"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-gray-600 mt-3">{status}</p>
            )}
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start">
            <p className="text-gray-700 mb-4">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/mhaoead112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-hesham-a825a5312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/mohamed__.__h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
