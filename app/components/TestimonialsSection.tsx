const testimonials = [
    {
        text: `Working with team proto has been an exceptional experience.
           From consultation to implementation, their professionalism and
           attention to detail have exceeded our expectations.
           I highly recommend them for their outstanding service and results.`,
        name: "Emma Monroe Harris",
        role: "Owner, Found and Chosen"
    },
    {
        text: `Proto IT Consultants helped our company automate workflows
           seamlessly. Their team is professional, responsive, and highly skilled.
           We achieved results faster than we expected.`,
        name: "Michael Thompson",
        role: "CTO, Curbstand"
    },
    {
        text: `Excellent experience! They migrated our systems smoothly,
           optimized processes, and delivered everything on time.
           I highly recommend them for business automation.`,
        name: "Sophie Adams",
        role: "Founder, Ambiance Hotel"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-[#0d3553] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Client Testimonials
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:bg-white/20 transition-all duration-300">
                            <div>
                                <svg className="w-8 h-8 text-blue-300 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                                </svg>
                                <p className="italic text-sm leading-relaxed text-gray-200">
                                    {t.text}
                                </p>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold text-white">
                                    {t.name}
                                </h4>
                                <p className="text-xs text-gray-400">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}