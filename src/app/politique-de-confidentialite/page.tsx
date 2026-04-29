import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Galerie Oraxe",
  description: "Politique de confidentialité de la Galerie Oraxe. Découvrez comment nous protégeons et gérons vos données personnelles avec soin, clarté et sécurité.",
  openGraph: {
    title: "Politique de Confidentialité | Galerie Oraxe",
    description: "Politique de confidentialité de la Galerie Oraxe. Découvrez comment nous protégeons et gérons vos données personnelles avec soin, clarté et sécurité.",
  }
};

export default function PolitiquePage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full py-8 md:py-12 px-4 md:px-16 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto mt-4 md:mt-8 lg:ml-8 flex flex-col">

        {/* Top Header Row -> Just Menu */}
        <div className="mb-10 md:mb-16">
          <div className="bg-[#FFF] py-3 md:py-4 px-4 md:px-6 flex items-center shadow-sm w-fit max-w-full overflow-x-auto shrink-0 rounded-sm">
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity">
                <img src="/Logo1.png" className="w-24 h-auto object-contain" alt="Logo Oraxe" />
              </div>
            </Link>
            <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>
            <div className="flex flex-col gap-2 pl-2 pr-4">
              <Link href="/artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">ARTISTS</span>
              </Link>
              <Link href="/exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">EXHIBITIONS</span>
              </Link>
              <Link href="/team" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">TEAM</span>
              </Link>
              <Link href="/manifeste" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">MANIFESTE</span>
              </Link>
              <Link href="/contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">CONTACT</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 w-full max-w-4xl text-[#000] font-inter mx-auto mt-4 mb-24 px-4 md:px-0">

          <div className="flex flex-col gap-4 text-center items-center mb-8">
            <div className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">Politique de Confidentialité</div>
            <p className="text-[13px] tracking-widest text-[#9D9D9D] uppercase text-center">Dernière mise à jour : 29 Avril 2026</p>
          </div>

          <div className="text-[15px] md:text-base font-light leading-relaxed max-w-3xl text-[#000]">
            <p className="mb-8 text-center">
              Bienvenue chez Oraxe. Parce que nous croyons que la liberté artistique commence par le respect de la vie privée, nous traitons vos données avec la même exigence que nos œuvres d'art : avec soin, clarté et sécurité.
            </p>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">Ce que nous collectons</div>
            <p className="mb-4">
              Nous ne collectionnons pas les données pour le plaisir de les accumuler. Nous recueillons uniquement ce qui est nécessaire pour vous connecter à l'art :
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li><strong>Identité & Contact :</strong> Nom, prénom et votre email (galerieo@galleryoraxe.com est notre point de contact, le vôtre nous sert à vous répondre).</li>
              <li><strong>Données de Transaction :</strong> Pour nos ventes aux enchères et acquisitions.</li>
              <li><strong>Navigation :</strong> Des données anonymes pour comprendre quelles expositions vous font vibrer sur notre site.</li>
            </ul>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">Pourquoi vos données sont-elles ici ?</div>
            <p className="mb-4">Nous utilisons vos informations pour :</p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>Vous envoyer notre Magazine et les alertes de ventes aux enchères.</li>
              <li>Faciliter les collaborations internationales via notre partenaire Art Conversation.</li>
              <li>Assurer la sécurité de vos transactions artistiques.</li>
            </ul>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">Pas de frontières, mais des limites</div>
            <p className="mb-4">
              Vos données ne sont ni vendues, ni louées à des tiers. Elles circulent uniquement entre la Galerie Oraxe et ses partenaires techniques de confiance (comme Artistes Sans Frontières) pour rendre possible votre expérience internationale.
            </p>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">Vos droits</div>
            <p className="mb-4">
              Vous gardez le contrôle total sur vos données personnelles. À tout moment, vous pouvez :
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>Demander l'accès à vos données.</li>
              <li>Corriger une information.</li>
              <li>Demander la suppression totale de votre profil de nos archives.</li>
            </ul>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">Sécurité</div>
            <p className="mb-4">
              Nous utilisons des protocoles de chiffrement standards pour protéger vos informations contre les accès non autorisés. Vos données sont stockées sur des serveurs sécurisés.
            </p>

            <div className="text-lg md:text-xl font-bold tracking-widest text-[#000] uppercase mt-12 mb-6 text-left">contacte</div>
            <p className="mb-4">
              Une question ? Une envie de retirer vos données ? Ou juste besoin de précision sur notre gestion de la vie privée ?
            </p>
            <p className="mt-4 font-medium">
              Écrivez-nous directement à l'adresse dédiée :<br/>
              📩 galerieo@galleryoraxe.com
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
