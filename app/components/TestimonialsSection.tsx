import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
    {
        text: "Working with IPS Global has been an exceptional experience. From design consultation to technical implementation, their energy and attention to detail exceeded our expectations. They are easily the most capable digital agency in London.",
        name: "Emma Monroe Harris",
        role: "Owner, Found and Chosen",
        rating: 5
    },
    {
        text: "IPS Global helped us rebuild our platform and optimize for SEO seamlessly. The team is professional, responsive, and delivered premium results at a fraction of the cost we were quoted elsewhere.",
        name: "Michael Thompson",
        role: "CTO, Curbstand",
        rating: 5
    },
    {
        text: "Excellent experience! They rescued our legacy site, fixed optimization issues, and implemented new features on time. I highly recommend IPS Global for any high stakes digital rescue mission.",
        name: "Sophie Adams",
        role: "Founder, Ambiance Hotel",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-[#0d3553] text-white py-12 md:py-16 relative overflow-hidden border-t border-white/5">
            {/* Soft ambient glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-10 md:mb-12">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#133e5e]/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                        >
                            {/* Quote Icon Overlay */}
                            <Quote size={30} className="absolute top-4 right-4 text-white/5 group-hover:text-blue-400/10 transition-colors duration-300" />

                            <div>
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={12} className="fill-blue-400 text-blue-400" />
                                    ))}
                                </div>

                                <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed italic mb-4 line-clamp-4">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                            </div>

                            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0d3553] to-blue-600 flex items-center justify-center font-bold text-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors truncate">
                                        {t.name}
                                    </h4>
                                    <p className="text-[10px] uppercase tracking-widest text-blue-200/50 font-semibold mt-0.5 truncate">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}