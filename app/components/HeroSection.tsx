import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-[#0d3553] text-white py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 relative z-10">

                {/* LEFT TEXT */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-bold tracking-wide uppercase">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        Empowering Global Businesses
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-tight text-white font-sans">
                        Automate Business <br />
                        Processes to <br />
                        <span className="text-[#1F4762]">
                            Scale Faster & <br /> Smarter
                        </span>
                    </h1>

                    <p className="text-gray-300 text-base max-w-lg leading-relaxed font-sans">
                        IPSGlobal helps small and medium-sized businesses automate workflows, optimize operations, and leverage top-tier IT talent.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-blue-400/10 text-sm">
                            Get Started Now! <ArrowRight size={18} />
                        </button>
                    </div>


                </div>

                {/* RIGHT FORM */}
                <div className="lg:justify-self-end w-full max-w-md">
                    <div className="bg-[#1a4b6e]/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl relative">

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -m-8 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-5 text-white text-center">
                            Request a Service
                        </h3>

                        <form className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none font-sans text-sm border border-white/10"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@ipsglobal.co"
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none font-sans text-sm border border-white/10"
                                />
                            </div>

                            {/* Services */}
                            <div>
                                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">Service Category</label>
                                <div className="relative">
                                    <select className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white focus:outline-none text-sm cursor-pointer font-sans appearance-none border border-white/10">
                                        <option className="bg-[#0d3553]">Digital Transformation</option>
                                        <option className="bg-[#0d3553]">Finance & Accounting</option>
                                        <option className="bg-[#0d3553]">BPO Services</option>
                                        <option className="bg-[#0d3553]">Software Development</option>
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
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-[#0d3553]/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none h-24 text-sm font-sans border border-white/10"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-white text-[#0d3553] font-bold py-4 rounded-xl shadow-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-sm"
                            >
                                Request Free Quote
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}