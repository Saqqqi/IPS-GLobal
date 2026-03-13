export default function HowWeWorkSection() {
    const steps = [
        {
            number: "01",
            title: "Discovery & Audit",
            description: "We deep dive into your current systems to uncover bottlenecks and identify exactly what's holding your digital growth back."
        },
        {
            number: "02",
            title: "Strategic Roadmap",
            description: "No guesswork. We build a tailored project blueprint that aligns your business goals with the right technology stack."
        },
        {
            number: "03",
            title: "Transparent Proposal",
            description: "A clear, itemized plan with fixed timelines and budgets. No hidden fees or 'dev speak' just straightforward value."
        },
        {
            number: "04",
            title: "High Energy Execution",
            description: "Our London based team builds with clean code and high performance in mind, keeping you updated every step of the way."
        },
        {
            number: "05",
            title: "Precision Launch",
            description: "Rigorous testing and quality assurance ensure your deployment is flawless and ready to handle traffic from day one."
        },
        {
            number: "06",
            title: "Extended Support",
            description: "Every build includes 2 months of post-launch maintenance, ensuring your systems stay healthy and optimized as you scale."
        }
    ];

    return (
        <section id="how-we-work" className="bg-[#0d3553] text-white py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
            {/* Subtle atmosphere background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Our Precision Process
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
                        At IPS Global, we turn technical challenges into growth drivers through a structured,
                        high-energy methodology delivered with London standard precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                                    {step.number}
                                </span>
                                <div className="w-6 h-6 rounded-full bg-blue-400/10 flex items-center justify-center">
                                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                                </div>
                            </div>

                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}