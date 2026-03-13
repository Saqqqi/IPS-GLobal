import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 text-gray-900 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 h-16 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center w-44 h-16">
                    <Image
                        src="/IPS Global Logo.svg"
                        alt="IPSGlobal Logo"
                        width={200}
                        height={40}
                        className="object-contain h-10 w-auto transform transition-all hover:scale-105"
                        priority
                    />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold">
                    <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                    <a href="#how-we-work" className="hover:text-blue-600 transition-colors">How We Work</a>
                    <a href="#case-studies" className="hover:text-blue-600 transition-colors">Case Studies</a>
                    <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
                    <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-[#0d3553] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d3553]/90 transition-colors shadow-md">
                        Get Started
                    </button>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <button>
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
}