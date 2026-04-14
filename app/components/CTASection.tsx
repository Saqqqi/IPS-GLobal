export default function CTASection() {
    return (
        <section className="bg-gray-50 py-14 md:py-16">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3553] mb-2">
                            Ready to Digitalize Your Business?
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Get in touch with Proto consultants to help you scale your business to success.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <a
                            href="#contact"
                            className="inline-block bg-[#0d3553] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-blue-900 hover:scale-105 transition-all duration-300 shadow-blue-900/10"
                        >
                            Contact Us Now
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}