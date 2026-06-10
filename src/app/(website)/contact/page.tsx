import type { Metadata } from 'next';

import { getMetadata } from '@/lib/get-metadata';

export const metadata: Metadata = getMetadata({
  title: 'Contact',
  description: 'Contactez Viraza IT Solutions pour vos projets de transformation digitale en RDC.',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <section className="container py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="font-label text-sm tracking-widest text-emerald">CONTACT</span>
            <h1 className="mt-4 font-display text-4xl leading-[1.125] text-balance sm:text-5xl md:text-[2.625rem] lg:text-[3.25rem]">
              Parlons de votre
              <br />
              <span className="text-emerald">prochain projet</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-normal tracking-tight text-muted-foreground">
              Que vous ayez un projet précis ou simplement une idée, notre équipe est là pour vous
              accompagner dans votre transformation digitale.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-emerald">Adresse</h3>
                <p className="mt-2 text-muted-foreground">
                  N°14 Ngabeno, Ngaliema
                  <br />
                  Kinshasa, RD Congo
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald">Téléphone</h3>
                <p className="mt-2 text-muted-foreground">
                  <a href="tel:+243840095936" className="hover:text-emerald transition-colors">
                    (+243) 840-095-936
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald">Email</h3>
                <p className="mt-2 text-muted-foreground">
                  <a href="mailto:info@viraza.net" className="hover:text-emerald transition-colors">
                    info@viraza.net
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald">Horaires</h3>
                <p className="mt-2 text-muted-foreground">
                  Lun - Ven : 8h00 - 18h00
                  <br />
                  Sam : 9h00 - 13h00
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-emerald/20 bg-emerald/5 p-8">
              <h3 className="mb-6 text-xl font-medium">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full rounded-md border border-emerald/20 bg-background px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full rounded-md border border-emerald/20 bg-background px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 w-full rounded-md border border-emerald/20 bg-background px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-2"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
