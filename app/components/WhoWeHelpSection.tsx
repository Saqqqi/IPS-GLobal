export default function WhoWeHelpSection() {
    return (
        <section className="bg-[#0d3553] text-white py-12 md:py-16">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        Who We Empower & Why
                    </h2>
                    <p className="text-sm md:text-base text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
                        IPS Global partners with startups, SMBs, and established enterprises to solve complex digital challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex gap-4 items-start hover:bg-white/10 transition-colors">
                        <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold shrink-0 text-sm">
                            01
                        </span>
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-1 text-white">Startups & Scaleups</h4>
                            <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed">Launching ground up MVPs and scaling digital products with speed and precision.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex gap-4 items-start hover:bg-white/10 transition-colors">
                        <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold shrink-0 text-sm">
                            02
                        </span>
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-1 text-white">Legacy Businesses</h4>
                            <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed">Modernizing outdated systems, fixing critical bugs, and stabilizing user experiences.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex gap-4 items-start hover:bg-white/10 transition-colors">
                        <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold shrink-0 text-sm">
                            03
                        </span>
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-1 text-white">E-commerce Brands</h4>
                            <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed">Increasing conversions with user centric design and technical SEO that dominates search.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex gap-4 items-start hover:bg-white/10 transition-colors">
                        <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold shrink-0 text-sm">
                            04
                        </span>
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-1 text-white">B2B Service Providers</h4>
                            <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed">Optimizing workflows and building custom portals to enhance client satisfaction.</p>
                        </div>
                    </div>
                </div>



            </div>

        </section>
    );
}