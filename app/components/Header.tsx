"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 text-gray-900 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 flex flex-col">
            <div className="bg-[#0d3553] text-white py-1.5 px-6 hidden md:block">
                <div className="max-w-6xl mx-auto flex justify-center items-center gap-10 text-[10px] md:text-xs font-medium">
                    <a href="mailto:info@ipsglobal.co.uk" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
                        <Mail size={12} className="text-blue-300" />
                        <span>info@ipsglobal.co.uk</span>
                    </a>
                    
                    <div className="h-3 w-px bg-white/20"></div>

                    <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-blue-300" />
                        <span>145 Upper Tooting Rd, London SW17 7TJ</span>
                    </div>

                    <div className="h-3 w-px bg-white/20"></div>

                    <div className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
                        <Phone size={12} className="text-blue-300" />
                        <a href="tel:+447473342236">+44 7473 342236</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between h-16">

                {/* Logo */}
                <a href="#home" className="flex items-center w-42 h-16" onClick={closeMenu}>
                    <Image
                        src="/IPS Global Logo.svg"
                        alt="IPS Global Logo"
                        width={200}
                        height={40}
                        className="object-contain h-10 w-auto transform transition-all hover:scale-105"
                        priority
                    />
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold">
                    <a href="#home" className="hover:text-[#0d3553] transition-colors">Home</a>
                    <a href="#about" className="hover:text-[#0d3553] transition-colors">About</a>
                    <a href="#services" className="hover:text-[#0d3553] transition-colors">Services</a>
                    <a href="#Maintenance-&-Support" className="hover:text-[#0d3553] transition-colors">Maintenance & Support</a>
                    {/* <a href="#case-studies" className="hover:text-[#0d3553] transition-colors">Case Studies</a> */}
                    <a href="#contact" className="hover:text-[#0d3553] transition-colors">Contact</a>
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <a href="#contact" className="inline-block bg-[#0d3553] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-900 transition-colors shadow-md">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center h-full">
                    <button
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                        className="text-gray-900 p-2 -mr-2 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X size={26} className="text-[#0d3553]" />
                        ) : (
                            <Menu size={26} className="text-[#0d3553]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-xl border-b border-gray-100 flex flex-col px-6 py-6 gap-6 md:hidden">
                    <a href="#home" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">Home</a>
                    <a href="#about" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">About</a>
                    <a href="#services" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">Services</a>
                    <a href="#Maintenance-&-Support" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">Maintenance & Support</a>
                    {/* <a href="#case-studies" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">Case Studies</a> */}
                    {/* <a href="#contact" onClick={closeMenu} className="text-gray-900 font-semibold text-base hover:text-[#0d3553]">Contact</a> */}

                    <a href="#contact" onClick={closeMenu} className="inline-block bg-[#0d3553] text-white px-6 py-3 rounded-xl text-center font-bold shadow-md hover:bg-blue-900 mt-2">
                        Get Started
                    </a>
                </div>
            )}
        </header>
    );
}
