import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 text-gray-900 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 h-16 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className="flex items-center w-44 h-16">
                    <Image
                        src="/IPS Global Logo.svg"
                        alt="IPS Global Logo"
                        width={200}
                        height={40}
                        className="object-contain h-10 w-auto transform transition-all hover:scale-105"
                        priority
                    />
                </a>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold">
                    <a href="#home" className="hover:text-[#0d3553] transition-colors">Home</a>
                    <a href="#services" className="hover:text-[#0d3553] transition-colors">Services</a>
                    <a href="#Maintenance-&-Support" className="hover:text-[#0d3553] transition-colors">Maintenance & Support</a>
                    <a href="#case-studies" className="hover:text-[#0d3553] transition-colors">Case Studies</a>
                    <a href="#contact" className="hover:text-[#0d3553] transition-colors">Contact</a>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="#contact" className="inline-block bg-[#0d3553] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-900 transition-colors shadow-md">
                        Get Started
                    </a>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <button aria-label="Toggle Menu">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
}
