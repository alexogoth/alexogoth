"use client";

import { useState } from "react";

const questions = [
  {
    question: "Kako pristupam kursu nakon kupovine?",
    answer:
      "Nakon uspješne kupovine kurs će biti dostupan na Vašem korisničkom profilu odmah nakon prijave.",
  },
  {
    question: "Da li imam doživotni pristup?",
    answer:
      "Da. Nakon kupovine kurs ostaje trajno dostupan na Vašem korisničkom nalogu.",
  },
  {
    question: "Da li mogu gledati lekcije na telefonu?",
    answer:
      "Da. Platforma je potpuno prilagođena mobilnim telefonima, tabletima i računarima.",
  },
  {
    question: "Da li dobijam ažuriranja kursa?",
    answer:
      "Da. Sve buduće nadogradnje kursa biće Vam dostupne bez dodatne naknade.",
  },
  {
    question: "Kako mogu kontaktirati podršku?",
    answer:
      "Podršku možete kontaktirati putem kontakt forme ili e-mail adrese koja će biti dostupna na sajtu.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#050505] py-28 px-6 border-t border-yellow-500/10"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-yellow-300 mt-4">
            Često postavljena pitanja
          </h2>

        </div>

        <div className="space-y-5">

          {questions.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-yellow-500/20 bg-[#111111]"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="text-lg text-white font-medium">
                  {item.question}
                </span>

                <span className="text-yellow-400 text-2xl">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-gray-400 leading-8">
                  {item.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}