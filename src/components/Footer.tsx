"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white py-6 px-4 md:px-10 lg:px-20 border-t border-gray-100 mt-auto text-center flex flex-col justify-center items-center">
            <div className="text-[11px] text-gray-500 font-inter flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <span>© 2026 ORAXE.</span>
                <a href="https://www.instagram.com/oraxegalerie?igsh=MTd3ZndlYjY1NWIxNQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  | Instagram
                </a>
                <a href="https://www.artistessansfrontieres.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  | DevOps: Art Conversation
                </a>
                <Link href="/politique-de-confidentialite" className="hover:text-gray-800 transition-colors">
                  | POLITIQUE DE CONFIDENTIALITÉ
                </Link>
            </div>
        </footer>
    );
}
