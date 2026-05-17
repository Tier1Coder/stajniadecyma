import type { ReactNode } from 'react';

export type FaqItem = {
  question: string
  answer: string
  content?: ReactNode
}

type FaqSectionProps = {
  heading: string
  intro?: string
  items: FaqItem[]
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });
}

export default function FaqSection({ heading, intro, items }: FaqSectionProps) {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{heading}</h2>
      {intro ? <p className="faq-section__intro">{intro}</p> : null}
      <div className="faq-list">
        {items.map((item) => (
          <article key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <div className="faq-item__answer">
              {item.content ?? <p>{item.answer}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
