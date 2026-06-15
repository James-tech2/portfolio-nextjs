"use client";
const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold">James Black</p>
          <p className="max-w-md text-sm text-gray-400">
            Full-stack developer crafting modern web applications with a focus
            on UI, performance and scalable backend systems.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          <p>hello@jamesblack.dev</p>
          <p>github.com/James-tech2</p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2026 James Black. Built with modern web technologies.
      </div>
    </footer>
  );
};

export default Footer;
