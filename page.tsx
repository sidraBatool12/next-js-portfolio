'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    setStatus('sending');

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_1hb7nds',
        'template_h3gcvqr',
        form.current,
        '9Kdgvo-RzGdz4LXDF'
      )
      .then(
        () => {
          setSuccess('Message sent successfully! 🎉');
          setStatus('sent');
          form.current?.reset();
          setLoading(false);
        },
        () => {
          setError('Oops! Something went wrong. Please try again.');
          setStatus('error');
          setLoading(false);
        }
      );
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-[#001233] rounded-xl shadow-lg text-white min-h-[80vh]">
      <h2 className="text-4xl font-bold mb-5 text-center">Get in Touch</h2>
      <h1 className='mt-  text-center text-white mb-10'>Because great conversations lead to amazing collaborations.</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6"
        noValidate
      >
        {/* Name Field */}
        <label className="block ">
          <span className="flex items-center gap-2 mb-2 text-blue-400">
            <User size={20} /> Name
          </span>
          <input
            required
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded border-blue-300 bg-[#001a4d]  border-1 transition 
            hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.9)]"
          />
        </label>

        {/* Email Field */}
        <label className="block">
          <span className="flex items-center gap-2 mb-2 text-blue-400">
            <Mail size={20} /> Email
          </span>
          <input
            required
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded border-blue-300 bg-[#001a4d] placeholder-blue-300 border-1 transition 
            hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.9)]"
          />
        </label>

        {/* Message Field */}
        <label className="block">
          <span className="flex items-center gap-2 mb-2 text-blue-400">
            <MessageSquare size={20} /> Message
          </span>
          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded border-blue-300 bg-[#001a4d] placeholder-blue-300 border-1 transition 
            hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.9)]"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-1000 text-white border border-blue-300 py-3 rounded font-semibold transition relative overflow-hidden  shadow-[0_0_10px_rgba(0,0,255,0.6)]
            ${
              loading ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-[inset_0_0_25px_rgba(0,0,255,0.6)]'
            }`}
        >
          <motion.span
            initial={{ x: 0 }}
            animate={{
              rotate: status === 'sending' ? 360 : 0,
              x: status === 'sent' ? 50 : 0,
            }}
            transition={{
              duration: status === 'sending' ? 0.8 : 0.5,
              repeat: status === 'sending' ? Infinity : 0,
            }}
            className="inline-block"
          >
            {status === 'sent' ? (
              <CheckCircle size={20} className="text-green-400" />
            ) : status === 'error' ? (
              <XCircle size={20} className="text-red-400" />
            ) : (
              <Send size={20} />
            )}
          </motion.span>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Message */}
        {success && <p className="text-green-400 text-center mt-2 font-semibold">{success}</p>}
        {error && <p className="text-red-400 text-center mt-2 font-semibold">{error}</p>}
      </form>
    </section>
  );
}
