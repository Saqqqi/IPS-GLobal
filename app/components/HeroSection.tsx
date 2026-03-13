"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

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
        <section id="home" className="bg-[#0d3553] text-white py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 relative z-10">

                {/* LEFT TEXT */}
                <div className="space-y-6">
                    <div className="inline-flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 sm:py-1 rounded-xl sm:rounded-full bg-white text-black text-[10px] sm:text-xs font-bold tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full shrink-0 animate-pulse mt-1 sm:mt-0"></span>
                        <span className="leading-snug text-left">Integrated Platform Systems: Design, Development, & SEO.</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-tight text-white font-sans">
                        Integrated Design, <br />
                        Development & SEO to <br />
                        <span className="text-blue-400 drop-shadow-sm">
                            Scale Faster & Smarter
                        </span>
                    </h1>

                    <p className="text-gray-300 text-base max-w-lg leading-relaxed font-sans">
                        IPS Global delivers high energy digital solutions from our London studio. Premium quality development and design at rates significantly lower than the UK market average.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-blue-400" />
                            2 Months Free Support
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-blue-400" />
                            London Based Studio
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div id="contact" className="lg:justify-self-end w-full max-w-md">
                    <div className="bg-[#1a4b6e]/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl relative">

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -m-8 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-5 text-white text-center">
                            Lets Work Together!

                        </h3>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none font-sans text-sm border border-white/10"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="email@example.com"
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none font-sans text-sm border border-white/10"
                                />
                            </div>

                            {/* Services */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Service Category</label>
                                <div className="relative">
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white focus:outline-none text-sm cursor-pointer font-sans appearance-none border border-white/10"
                                    >
                                        <option className="bg-[#0d3553]" value="Web & App Development">Web & App Development</option>
                                        <option className="bg-[#0d3553]" value="Strategic SEO">Strategic SEO</option>
                                        <option className="bg-[#0d3553]" value="UI/UX Redesign">UI/UX Redesign</option>
                                        <option className="bg-[#0d3553]" value="Website Rescue (Bug Fixes)">Website Rescue (Bug Fixes)</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ArrowRight size={14} className="rotate-90" />
                                    </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Project Details</label>
                                <textarea
                                    required
                                    value={formData.details}
                                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                    placeholder="Tell us about your digital goals..."
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none h-24 text-sm font-sans border border-white/10"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-white text-[#0d3553] font-bold py-4 rounded-xl shadow-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Processing...
                                    </>
                                ) : (
                                    "Send Message!"
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <p className="text-green-400 text-center text-sm font-medium animate-pulse">
                                    Message sent successfully! We&apos;ll be in touch soon.
                                </p>
                            )}
                            {(status === "error" || status === "validation-error") && (
                                <p className="text-red-400 text-center text-sm font-medium">
                                    {errorMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
