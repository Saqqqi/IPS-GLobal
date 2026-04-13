"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, User, Mail, Layers, MessageSquare } from "lucide-react";

export default function HeroSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Web & App Development",
        details: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "validation-error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        // Frontend Validation
        if (!formData.name.trim()) {
            setStatus("validation-error");
            setErrorMessage("Please enter your full name.");
            return;
        }
        if (!validateEmail(formData.email)) {
            setStatus("validation-error");
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "Web & App Development", details: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage("Server error. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Connection failed. Check your internet.");
        }
    };

    return (
        <section id="home" className="bg-[#0d3553] text-white py-8 md:py-12 relative overflow-hidden flex items-center">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-8 md:gap-12 relative z-10 w-full">

                {/* LEFT TEXT */}
                <div className="space-y-5 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase border border-white/20 shadow-lg whitespace-nowrap max-w-full overflow-hidden sm:overflow-visible">
                        <span className="w-2 h-2 bg-blue-400 rounded-full shrink-0 animate-pulse"></span>
                        <span className="leading-none text-ellipsis text-center lg:text-left">Integrated Platform Systems: Design, Development, & SEO.</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white font-sans text-balance">
                        Integrated Design, 
                        Development & SEO to 
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                            Scale Faster & Smarter
                        </span>
                    </h1>

                    <p className="text-gray-300 text-sm max-w-lg leading-relaxed font-sans opacity-90 mx-auto lg:mx-0">
                        IPS Global delivers high energy digital solutions from our London studio. Premium quality development and design at rates significantly lower than the UK market average.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-[11px] font-semibold text-gray-200 hover:bg-white/10 transition-all cursor-default">
                            <CheckCircle2 size={14} className="text-blue-400" />
                            2 Months Free Support
                        </div>
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-[11px] font-semibold text-gray-200 hover:bg-white/10 transition-all cursor-default">
                            <CheckCircle2 size={14} className="text-blue-400" />
                            London Based Studio
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div id="contact" className="lg:justify-self-end w-full max-w-md">
                    <div className="bg-[#1a4b6e]/30 backdrop-blur-2xl p-5 md:p-6 rounded-[1.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                        
                        {/* Subtle inner glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h3 className="text-xl font-extrabold mb-0.5 text-white text-center">
                            Let&apos;s Work Together!
                        </h3>
                        <p className="text-blue-200/60 text-center text-[9px] mb-4 uppercase tracking-[0.2em] font-bold">
                            Get a Custom Quote
                        </p>

                        <form className="space-y-3" onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[9px] font-bold text-blue-200/50 uppercase tracking-widest ml-1">
                                    <User size={10} />
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter your name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition-all text-xs font-medium"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[9px] font-bold text-blue-200/50 uppercase tracking-widest ml-1">
                                    <Mail size={10} />
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition-all text-xs font-medium"
                                    />
                                </div>
                            </div>

                            {/* Services */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[9px] font-bold text-blue-200/50 uppercase tracking-widest ml-1">
                                    <Layers size={10} />
                                    Service Category
                                </label>
                                <div className="relative group">
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition-all text-xs font-medium appearance-none cursor-pointer"
                                    >
                                        <option className="bg-[#0b1f2e]" value="Web & App Development">Web & App Development</option>
                                        <option className="bg-[#0b1f2e]" value="Strategic SEO">Strategic SEO</option>
                                        <option className="bg-[#0b1f2e]" value="UI/UX Redesign">UI/UX Redesign</option>
                                        <option className="bg-[#0b1f2e]" value="Website Rescue (Bug Fixes)">Website Rescue (Bug Fixes)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                        <ArrowRight size={14} className="rotate-90" />
                                    </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[9px] font-bold text-blue-200/50 uppercase tracking-widest ml-1">
                                    <MessageSquare size={10} />
                                    Project Details
                                </label>
                                <textarea
                                    required
                                    value={formData.details}
                                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                    placeholder="Tell us about your digital goals..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition-all text-xs font-medium resize-none h-20"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Processing Request...
                                    </>
                                ) : (
                                    <>
                                        Start Your Project
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            <div className="min-h-[20px]">
                                {status === "success" && (
                                    <p className="text-blue-400 text-center text-[10px] font-bold uppercase tracking-widest animate-pulse">
                                        Request sent! We&apos;ll be in touch soon.
                                    </p>
                                )}
                                {(status === "error" || status === "validation-error") && (
                                    <p className="text-red-400 text-center text-[10px] font-bold uppercase tracking-widest">
                                        {errorMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
