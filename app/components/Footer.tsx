import { Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0b2940] text-gray-300 py-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/IPS Global White.svg"
                                alt="IPSGlobal Logo"
                                width={150}
                                height={32}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering businesses through digital transformation, automation, and scalable backend infrastructure. Your success is our mission.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href="#services" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                    <ExternalLink size={14} /> Services
                                </a>
                            </li>
                            <li>
                                <a href="#how-we-work" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                    <ExternalLink size={14} /> How We Work
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                    <ExternalLink size={14} /> Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                    <ExternalLink size={14} /> Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-300 shrink-0" />
                                <span>info@protoops.co</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-300 shrink-0" />
                                <span>+1 267 297 9129</span>
                            </li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Office Locations</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-300 shrink-0" />
                                <span>30 N Gould St Ste R Sheridan, WY 82801 United States</span>
                            </li>
                            <li className="flex items-start gap-3 border-t border-white/5 pt-4">
                                <MapPin size={18} className="text-blue-300 shrink-0" />
                                <span>252-2, G.T. Rd, Lajpatabad</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <p>© 2025 IPSGlobal. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}