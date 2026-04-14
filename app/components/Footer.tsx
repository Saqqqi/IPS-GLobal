import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const serviceLinks = [
        { name: "Web & App Dev", href: "#services" },
        { name: "Strategic SEO", href: "#services" },
        { name: "UI/UX Redesign", href: "#services" },
        { name: "Website Rescue", href: "#Maintenance-&-Support" }
    ];

    const companyLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-[#0b1f2e] text-gray-400 py-12 md:py-16 relative overflow-hidden ring-1 ring-white/5">
            {/* Background Grain/Texture Effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-5 mb-12 md:mb-16">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="inline-block">
                            <Image
                                src="/IPS Global White.svg"
                                alt="IPS Global"
                                width={160}
                                height={35}
                                className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-xs leading-relaxed max-w-xs text-gray-400">
                            IPS Global (Integrated Platform Systems) is London's premier digital agency. We combine high energy design with ground up technical excellence.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a 
                                href="https://linkedin.com/company/ips-global-uk" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077B5] hover:bg-white/10 hover:border-[#0077B5]/30 transition-all duration-300"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a 
                                href="https://www.facebook.com/profile.php?id=61573363726197" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-white/10 hover:border-[#1877F2]/30 transition-all duration-300"
                            >
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Capabilities</h4>
                        <ul className="space-y-2.5 text-xs">
                            {serviceLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="flex items-center group hover:text-white transition-colors">
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Navigation</h4>
                        <ul className="space-y-2.5 text-xs">
                            {companyLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Inquiries</h4>
                        <ul className="space-y-4 text-xs">
                            <li className="flex gap-3 group">
                                <div className="w-9 h-9 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                                    <Mail size={16} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase tracking-wider text-gray-600 mb-0.5">Email us</p>
                                    <a href="mailto:info@ipsglobal.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium text-xs hover:text-white transition-colors">
                                        info@ipsglobal.co.uk
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-3 group">
                                <div className="w-9 h-9 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                                    <Phone size={16} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase tracking-wider text-gray-600 mb-0.5">Call us</p>
                                    <a href="tel:+447473342236" className="text-gray-300 font-medium text-xs hover:text-white transition-colors">
                                        +44 7473 342236
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-3 group">
                                <div className="w-9 h-9 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                                    <MapPin size={16} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase tracking-wider text-gray-600 mb-0.5">Visit Studio</p>
                                    <span className="text-gray-300 font-medium text-xs leading-relaxed">
                                        145 Upper Tooting Rd,<br />London SW17 7TJ
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-medium text-gray-600">
                        © {new Date().getFullYear()} IPS Global.All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}