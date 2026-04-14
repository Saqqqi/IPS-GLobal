export default function HowWeWorkSection() {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description: "Identify What's Holding You Back. We start by understanding your current systems, team structure, and goals. Our consultants uncover workflow bottlenecks and inefficiencies that are costing you time, money, and missed opportunities."
        },
        {
            number: "02",
            title: "Strategy & Planning",
            description: "Built Around Your Business. Next, we define clear requirements and develop a tailored roadmap, whether it's automating processes, upgrading legacy systems, or deploying IT talent. Every solution is engineered for scalability and business impact."
        },
        {
            number: "03",
            title: "Clear Proposal",
            description: "What You See is What You Get. We present a transparent, step-by-step plan that aligns with your budget, timeline, and KPIs. No fluff - just actionable insight with room for your input before execution begins."
        },
        {
            number: "04",
            title: "Execution",
            description: "High-Performance Delivery. Our expert teams implement your solution using best practices, clean code, and modern tech stacks. We maintain regular communication and status reports, so you never stay in the dark."
        },
        {
            number: "05",
            title: "Quality Control & Launch",
            description: "Every deployment undergoes rigorous testing and review as we make sure everything works perfectly before going live."
        },
        {
            number: "06",
            title: "Post-Launch Support",
            description: "We monitor performance, provide ongoing support, and continuously optimize your setup to meet evolving business goals."
        }
    ];

    return (
        <section id="how-we-work" className="bg-[#0d3553] text-white py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
            {/* Subtle atmosphere background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        How We Work
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-200/70 text-sm md:text-base leading-relaxed">
                        Here at IPS Global, we turn operational challenges into growth drivers and ensure every project is efficient, ROI-focused, and delivered on time:
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
                            <p className="text-xs md:text-sm text-blue-100/60 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}