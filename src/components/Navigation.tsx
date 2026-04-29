"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="bg-white inline-flex shadow-sm items-center py-6 px-10 gap-8 min-h-48 h-auto absolute top-10 left-10 z-50">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
          src="/Logo_oraxe.png"
          alt="Oraxe Galerie d'Art"
          width={400}
          height={133}
          priority
          className="h-auto w-auto max-h-36"
        />
      </Link>

      <div className="h-full border-l border-oraxe-offwhite"></div>

      <nav className="flex flex-col justify-between h-full text-[10px] text-oraxe-deep tracking-[0.2em] gap-2 font-mono-tech font-bold">
        <Link href="/" className="hover:opacity-70 transition-opacity uppercase">
          Home
        </Link>
        <Link href="/artists" className="hover:opacity-70 transition-opacity uppercase">
          Artists
        </Link>
        <Link href="/exhibitions" className="hover:opacity-70 transition-opacity uppercase">
          Exhibitions
        </Link>
        <Link href="/team" className="hover:opacity-70 transition-opacity uppercase">
          Team
        </Link>
        <Link href="/manifeste" className="hover:opacity-70 transition-opacity uppercase">
          Manifeste
        </Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity uppercase">
          Contact
        </Link>
      </nav>
    </div>
  );
}
