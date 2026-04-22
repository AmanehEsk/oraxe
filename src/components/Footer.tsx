"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-12 px-4 md:px-10 lg:px-20 border-t border-gray-100 mt-auto">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 !text-left">
                {/* Gallery Info */}
                <div className="flex flex-col gap-5 !items-start !text-left">
                    <Link href="/" className="!text-left">
                        <img
                            src="/Logo_oraxe.png"
                            alt="Oraxe"
                            className="h-7 w-auto object-contain opacity-90 !text-left"
                        />
                    </Link>
                    <p className="!text-[12px] font-tech !tracking-normal text-gray-400 !text-left !leading-relaxed uppercase !normal-case">
                        Galerie d'Art contemporain dédiée à la promotion de l'art iranien et des artistes émergents à l'international.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4 !items-start !text-left">
                    <h4 className="!text-[13px] font-tech font-bold tracking-widest !text-[#96905a] uppercase !text-left !m-0 !p-0 !h-auto">Navigation</h4>
                    <nav className="flex flex-col gap-2.5 !items-start !text-left">
                        <Link href="/artists" className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 hover:text-[#96905a] transition-colors !text-left">Artists</Link>
                        <Link href="/exhibitions" className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 hover:text-[#96905a] transition-colors !text-left">Exhibitions</Link>
                        <Link href="/team" className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 hover:text-[#96905a] transition-colors !text-left">Team</Link>
                    </nav>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-4 !items-start !text-left">
                    <h4 className="!text-[13px] font-tech font-bold tracking-widest !text-[#96905a] uppercase !text-left !m-0 !p-0 !h-auto">Contact</h4>
                    <div className="flex flex-col gap-2.5 !items-start !text-left">
                        <p className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 !text-left">320 RUE SAINT-HONORÉ</p>
                        <p className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 !text-left">75001 Paris, France</p>
                        <p className="mt-1 !text-[12px] font-tech tracking-wider uppercase !text-[#96905a] !text-left">ORAXE.GALLERY</p>
                    </div>
                </div>

                {/* Social & Legal */}
                <div className="flex flex-col gap-4 !items-start !text-left">
                    <h4 className="!text-[13px] font-tech font-bold tracking-widest !text-[#96905a] uppercase !text-left !m-0 !p-0 !h-auto">Connect</h4>
                    <div className="flex gap-5 !items-start !text-left">
                        <a href="#" className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 hover:text-[#96905a] transition-colors !text-left">Instagram</a>
                        <a href="#" className="!text-[12px] font-tech tracking-wider uppercase text-gray-600 hover:text-[#96905a] transition-colors !text-left">LinkedIn</a>
                    </div>
                    <div className="mt-auto pt-4 !text-left">
                        <p className="!text-[9px] font-tech tracking-[0.2em] uppercase text-gray-300 !text-left">
                            © 2026 ORAXE. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
