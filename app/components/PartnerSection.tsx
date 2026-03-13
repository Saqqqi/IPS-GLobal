export default function PartnerSection() {
    return (
        <section className="bg-[#0d3553] text-white py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Partner with IPS Global
                    </h2>
                    <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                        We bridge the gap between design and development to deliver cohesive digital ecosystems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                        <div className="text-3xl font-bold mb-2 text-white group-hover:scale-110 transition-transform">100%</div>
                        <p className="text-xs text-blue-100/60 uppercase tracking-widest">In-house Talent</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                        <div className="text-3xl font-bold mb-2 text-white group-hover:scale-110 transition-transform">2mo</div>
                        <p className="text-xs text-blue-100/60 uppercase tracking-widest">Free Maintenance</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                        <div className="text-3xl font-bold mb-2 text-white group-hover:scale-110 transition-transform">London</div>
                        <p className="text-xs text-blue-100/60 uppercase tracking-widest">Studio-Based</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                        <div className="text-3xl font-bold mb-2 text-white group-hover:scale-110 transition-transform">30%+</div>
                        <p className="text-xs text-blue-100/60 uppercase tracking-widest">Cost Savings</p>
                    </div>

                </div>
            </div>
        </section>
    );
}