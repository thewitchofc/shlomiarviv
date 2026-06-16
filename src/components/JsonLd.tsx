export default function JsonLd() {
  const hairSalonSchema = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "LocalBusiness"],
    "@id": "https://www.shlomiarviv.co.il/#organization",
    name: "שלומי ארביב עיצוב שיער",
    alternateName: "Shlomi Arviv Hair Design",
    description:
      "סטודיו לעיצוב שיער פרמיום בתל אביב. מתמחים בבלייאז׳, גוונים, צבעי שיער, החלקות קרטין ותוספות שיער. חווית יופי אישית ברמה הגבוהה ביותר.",
    url: "https://www.shlomiarviv.co.il",
    telephone: "+972-53-522-0611",
    email: "contact@shlomiarviv.co.il",
    address: {
      "@type": "PostalAddress",
      streetAddress: "בוגרשוב 37",
      addressLocality: "תל אביב",
      addressRegion: "תל אביב",
      postalCode: "6340306",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.0785,
      longitude: 34.775,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    priceRange: "₪₪₪",
    currenciesAccepted: "ILS",
    paymentAccepted: "Cash, Credit Card",
    image: "https://www.shlomiarviv.co.il/assets/og-image.jpg",
    logo: "https://www.shlomiarviv.co.il/assets/logo.png",
    sameAs: [
      "https://www.instagram.com/shlomiarviv",
      "https://wa.me/972535220611",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי עיצוב שיער",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "בלייאז'",
            description: "טכניקת בלייאז' מקצועית לתוצאה טבעית ומושלמת",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "גוונים",
            description: "גוונים ובהירים מותאמים אישית לכל סוג שיער",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "צבעי שיער",
            description: "צביעת שיער מקצועית עם מוצרים פרמיום",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "החלקת קרטין",
            description: "החלקה אורגנית וטיפולי קרטין לשיער חלק ומבריק",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "תוספות שיער",
            description: "תוספות שיער איכותיות בשיטות מתקדמות",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "עיצוב שיער",
            description: "תסרוקות ועיצוב שיער לכל אירוע",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "מיכל ל.",
        },
        reviewBody:
          "שלומי הוא פשוט קסם. הגעתי עם שיער שלא אהבתי שנים, יצאתי עם ביטחון שלא הרגשתי מזמן. ממליצה בחום!",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "נועה ש.",
        },
        reviewBody:
          "הבלייאז' שקיבלתי השאיר אותי בלי מילים. תוצאה מושלמת, טיפול מקצועי ברמה הכי גבוהה שחוויתי.",
      },
    ],
    knowsAbout: [
      "Balayage",
      "Hair Coloring",
      "Keratin Treatment",
      "Hair Extensions",
      "Hair Highlights",
      "בלייאז'",
      "גוונים",
      "קרטין",
      "תוספות שיער",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.0785,
        longitude: 34.775,
      },
      geoRadius: "20000",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.shlomiarviv.co.il/#website",
    url: "https://www.shlomiarviv.co.il",
    name: "שלומי ארביב עיצוב שיער",
    description: "סטודיו לעיצוב שיער פרמיום בתל אביב",
    inLanguage: "he-IL",
    publisher: {
      "@id": "https://www.shlomiarviv.co.il/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.shlomiarviv.co.il/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "דף הבית",
        item: "https://www.shlomiarviv.co.il",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
