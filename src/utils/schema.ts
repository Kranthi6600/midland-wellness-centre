interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midland Wellness Centre",
    "url": "https://midlandwellnesscentre.com",
    "logo": "https://midlandwellnesscentre.com/assets/images/header_logo.png",
    "description": "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough",
    "foundingDate": "1994",
    "areaServed": {
      "@type": "City",
      "name": "Scarborough",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Scarborough",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-416-261-7246",
      "contactType": "customer service",
      "email": "info@midlandwellnesscentre.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      // Add social media URLs when available
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Midland Wellness Centre",
    "image": "https://midlandwellnesscentre.com/assets/images/header_logo.png",
    "telephone": "+1-416-261-7246",
    "email": "info@midlandwellnesscentre.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2555 Eglinton Ave. E",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1K 5J1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7247,
      "longitude": -79.2670
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00",
      "Su Closed"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "CAD"
  };
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://midlandwellnesscentre.com${item.url}`
    }))
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Midland Wellness Centre",
    "url": "https://midlandwellnesscentre.com",
    "telephone": "+1-416-261-7246",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2555 Eglinton Ave. E",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1K 5J1",
      "addressCountry": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "nameOf": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Physiotherapy",
            "description": "Expert physiotherapy services for rehabilitation and pain management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chiropractic Care",
            "description": "Professional chiropractic treatments for spinal health and wellness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Massage Therapy",
            "description": "Therapeutic massage services for relaxation and muscle recovery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orthotics",
            "description": "Custom orthotic solutions for foot and posture correction"
          }
        }
      ]
    }
  };
}
