"use client";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden bg-slate-950 text-white py-20"
    >
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <Image
              className="h-full w-full rounded-[1.75rem] border border-white/10 object-cover"
              src={"/images/me.png"}
              alt="Portrait of James Black"
              width={560}
              height={560}
            />

            <div className="mt-8 space-y-5">
              <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-200">
                Full-Stack Developer
              </span>

              <p className="text-gray-300">
                Experienced building polished frontends, scalable backends, and
                cloud-native solutions for modern web products.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    Experience
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    7+ yrs
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    Focus
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    Web Apps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
                About Me
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Hi, I’m James Black. I build modern full-stack web experiences.
              </h1>
              <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
                I design and develop production-ready applications using React,
                TypeScript, Node.js, and cloud platforms. My focus is on clean
                UI, performant architecture, and seamless user experiences.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "React", value: "Frontend" },
                { label: "TypeScript", value: "Typed Apps" },
                { label: "Node.js", value: "APIs" },
                { label: "Tailwind CSS", value: "Design" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    {item.value}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
