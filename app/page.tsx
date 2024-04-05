

import { Contact, Hero, Second } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Second />
      <section id="home_contact">
        <Contact />
      </section>
    </main>
  );
}
