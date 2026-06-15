"use client";
import { contactItems } from "../data/contactContent";

interface ContactProps {
  contactItems: typeof contactItems;
}

const Contact = ({ contactItems }: ContactProps) => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white py-20"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
              Contact
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="max-w-xl text-gray-300 leading-relaxed">
              I&apos;m available for freelance work, contract roles, or
              full-stack engineering positions. Send me a message and I&apos;ll
              get back to you as soon as possible.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400 hover:bg-sky-500/10"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project or opportunity"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400"
              onClick={(event) => event.preventDefault()}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
