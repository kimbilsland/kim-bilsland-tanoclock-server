/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: 1,
      name: "Supergoop! Unseen Sunscreen SPF 40",
      description:
        "An invisible, weightless, scentless sunscreen with SPF 40 that leaves no residue and makeup can be applied over it.",
      price: 34,
      type: "all",
      image: "product-1.jpg",
      rating: 4,
      category: "SPF",
    },
    {
      id: 2,
      name: "COOLA Full Spectrum 360° Mineral Sun Silk Crème SPF 30",
      description:
        "A lightweight, organic, reef-friendly sunscreen that offers broad-spectrum SPF 30 protection with a luminous finish.",
      price: 42,
      type: "all",
      image: "product-2.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 3,
      name: "Tan-Luxe The Face Illuminating Self-Tan Drops",
      description:
        "Customizable self-tanning drops that add a natural-looking, radiant glow to your complexion.",
      price: 49,
      type: "all",
      image: "product-3.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 4,
      name: "St. Tropez Self Tan Classic Bronzing Mousse",
      description:
        "A lightweight, quick-drying mousse that delivers a rich bronze tan without streaks or a sticky residue.",
      price: 42,
      type: "all",
      image: "product-4.jpg",
      rating: 4.5,
      category: "Alternative-tanning",
    },
    {
      id: 5,
      name: "Supergoop! Glowscreen Sunscreen SPF 40",
      description:
        "A hydrating, makeup-gripping primer with SPF 40 and shimmering pearlescence.",
      price: 36,
      type: "all",
      image: "product-5.jpg",
      rating: 4,
      category: "SPF",
    },
    {
      id: 6,
      name: "COOLA Classic Face Sunscreen SPF 50",
      description:
        "An antioxidant-rich, non-greasy sunscreen with SPF 50 that hydrates and nourishes the skin.",
      price: 32,
      type: "all",
      image: "product-6.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 7,
      name: "Vita Liberata Phenomenal Tan Mousse",
      description:
        "A fast-drying, long-lasting self-tanning mousse that delivers a natural-looking tan.",
      price: 54,
      type: "all",
      image: "product-7.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 8,
      name: "Drunk Elephant Umbra Sheer Physical Daily Defense SPF 30",
      description:
        "A sheer, physical sunscreen with SPF 30 that provides broad-spectrum protection against UVA and UVB rays.",
      price: 34,
      type: "all",
      image: "product-8.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 9,
      name: "COOLA Sunless Tan Anti-Aging Face Serum",
      description:
        "A gradual, sunless tanning serum infused with antioxidants and plant stem cell extracts for youthful-looking skin.",
      price: 54,
      type: "all",
      image: "product-9.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 10,
      name: "Supergoop! PLAY Everyday Lotion SPF 50",
      description:
        "A lightweight, water- and sweat-resistant sunscreen lotion with SPF 50 for everyday protection.",
      price: 32,
      type: "all",
      image: "product-10.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 11,
      name: "COOLA Organic Sunless Tan Luminizing Body Serum",
      description:
        "A hydrating, gradual self-tanning serum for the body with a natural-looking luminous finish.",
      price: 48,
      type: "all",
      image: "product-11.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 12,
      name: "St. Tropez Self Tan Express Bronzing Mousse",
      description:
        "A fast-acting, quick-drying self-tanning mousse that delivers a natural-looking bronze glow in just one hour.",
      price: 44,
      type: "all",
      image: "product-12.jpg",
      rating: 4.5,
      category: "Alternative-tanning",
    },
    {
      id: 13,
      name: "Supergoop! Glow Oil SPF 50",
      description:
        "A lightweight, hydrating sunscreen oil with SPF 50 and subtle shimmer for a radiant glow.",
      price: 38,
      type: "all",
      image: "product-13.jpg",
      rating: 4,
      category: "SPF",
    },
    {
      id: 14,
      name: "COOLA Classic Body Organic Sunscreen Spray SPF 50",
      description:
        "A continuous, non-aerosol sunscreen spray with SPF 50 that provides broad-spectrum protection.",
      price: 36,
      type: "all",
      image: "product-14.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 15,
      name: "COOLA Organic Sunless Tan Dry Oil Mist",
      description:
        "A gradual, sunless tanning dry oil mist with hydrating botanicals and antioxidants.",
      price: 46,
      type: "all",
      image: "product-15.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 16,
      name: "Supergoop! Glow Stick SPF 50",
      description:
        "A hydrating, mess-free sunscreen stick with SPF 50 for on-the-go protection and a dewy glow.",
      price: 25,
      type: "all",
      image: "product-16.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 17,
      name: "COOLA Sunless Tan Sculpting Mousse",
      description:
        "A lightweight, easy-to-apply self-tanning mousse that sculpts and defines the body while delivering a natural-looking tan.",
      price: 48,
      type: "all",
      image: "product-17.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 18,
      name: "Supergoop! 100% Mineral Smooth & Poreless Matte Screen SPF 40",
      description:
        "A lightweight, pore-blurring sunscreen with SPF 40 that delivers a smooth, matte finish.",
      price: 38,
      type: "all",
      image: "product-18.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 19,
      name: "COOLA Sunless Tan Anti-Aging Body Serum",
      description:
        "A hydrating, anti-aging self-tanning serum for the body that delivers a natural-looking, streak-free tan.",
      price: 58,
      type: "all",
      image: "product-19.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 20,
      name: "Supergoop! Matte Screen SPF 40",
      description:
        "A lightweight, oil-free sunscreen with SPF 40 that controls shine and leaves a velvety finish.",
      price: 38,
      type: "all",
      image: "product-20.jpg",
      rating: 4.5,
      category: "SPF",
    },
    {
      id: 21,
      name: "Isle of Paradise Light Self Tanning Drops",
      description:
        "Self-tanning drops formulated for fair skin tones that deliver a natural-looking, streak-free tan.",
      price: 29,
      type: "light",
      image: "product-21.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 22,
      name: "Isle of Paradise Medium Self Tanning Drops",
      description:
        "Self-tanning drops formulated for medium skin tones that deliver a natural-looking, streak-free tan.",
      price: 29,
      type: "medium",
      image: "product-22.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 23,
      name: "Isle of Paradise Dark Self Tanning Drops",
      description:
        "Self-tanning drops formulated for dark skin tones that deliver a natural-looking, streak-free tan.",
      price: 29,
      type: "dark",
      image: "product-23.jpg",
      rating: 4,
      category: "Alternative-tanning",
    },
    {
      id: 25,
      name: "Salty Face Self-Tanning Mousse",
      description:
        "A lightweight, quick-drying self-tanning mousse formulated with DHA and erythrulose for a natural-looking tan.",
      price: 32,
      type: "all",
      image:
        "product-25.jpg",
      rating: 4.8,
      category: "Alternative-tanning",
    },
    {
      id: 26,
      name: "Salty Face Freckle Paint",
      description:
        "A buildable freckle paint with a fine-tip brush for creating natural-looking freckles.",
      price: 14,
      type: "all",
      image:
        "product-26.jpg",
      rating: 4.5,
      category: "Alternative-tanning",
    },
    {
      id: 27,
      name: "Salty Face Tanning Water",
      description:
        "A hydrating tanning water enriched with aloe vera and vitamin E to give your skin a gradual, sun-kissed tan.",
      price: 24,
      type: "all",
      image:
        "product-27.jpg",
      rating: 4.7,
      category: "Alternative-tanning",
    },
  ]);
};


