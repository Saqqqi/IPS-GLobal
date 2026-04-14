"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="bg-[#0d3553] text-white py-8 md:py-20 relative overflow-hidden flex items-center">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 relative z-10 w-full">

                {/* LEFT TEXT */}
                <div className="space-y-6 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">


                    <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white font-sans text-balance">
                        Scale Faster with High Performance
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                            Digital Solutions
                        </span>
                    </h1>


                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs"
                        >
                            Get a Free Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
                    {/* Decorative glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative w-full h-full transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                        <Image
                            src="/hero image1.png"
                            alt="IPS Global Hero"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
