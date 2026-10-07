"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CircleNavButton } from "@/components/ui/CircleNavButton";
import type { Testimonial } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [index, setIndex] = useState(0);
  const [offsetPx, setOffsetPx] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setOffsetPx(viewport.clientWidth);
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  const total = testimonials.length;
  const current = testimonials[index];

  function goPrev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  function goNext() {
    setIndex((i) => (i + 1) % total);
  }

  if (!current) return null;

  return (
    <section className="section-y border-t border-ink/5 bg-paper text-ink">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel variant="light">TESTIMONIOS</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-8 max-w-xl">
                Lo que dicen quienes ya confiaron en nosotros
              </h2>
            </InView>
          </div>
          <div className="hidden gap-3 md:flex">
            <CircleNavButton
              direction="prev"
              onClick={goPrev}
              label="Testimonio anterior"
              theme="dark"
            />
            <CircleNavButton
              direction="next"
              onClick={goNext}
              label="Testimonio siguiente"
              theme="dark"
            />
          </div>
        </div>

        <div ref={viewportRef} className="mt-10 overflow-hidden md:mt-12">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{
              transform: `translateX(-${index * offsetPx}px)`,
            }}
          >
            {testimonials.map((item) => (
              <article
                key={item.id}
                data-slide
                className="shrink-0"
                style={{ width: offsetPx || "100%" }}
                aria-hidden={item.id !== current.id}
              >
                <div className="grid overflow-hidden md:grid-cols-[minmax(0,42%)_1fr] md:gap-10">
                  <div className="image-editorial relative min-h-[240px] overflow-hidden md:min-h-[360px]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="image-editorial-target object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-8 md:py-4">
                    <blockquote
                      className="heading-editorial text-2xl leading-snug md:text-3xl lg:text-4xl"
                      aria-live={item.id === current.id ? "polite" : "off"}
                    >
                      “{item.quote}”
                    </blockquote>
                    <footer className="mt-6">
                      <p className="text-sm font-medium">{item.author}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                        {item.role}
                      </p>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between md:hidden">
          <div className="flex gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir al testimonio ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  dotIndex === index ? "bg-ink" : "bg-ink/20"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CircleNavButton
              direction="prev"
              onClick={goPrev}
              label="Testimonio anterior"
              theme="dark"
            />
            <CircleNavButton
              direction="next"
              onClick={goNext}
              label="Testimonio siguiente"
              theme="dark"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
