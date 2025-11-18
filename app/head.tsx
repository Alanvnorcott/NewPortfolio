// app/head.tsx
export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alan Norcott",
    jobTitle: "Software Engineer",
    url: "https://alannorcott.com",
    sameAs: [
      "https://www.linkedin.com/in/alannorcott",
      "https://github.com/alannorcott"
    ],
    skills: [
      "C#", "ASP.NET", "ASP.NET Core", "Azure", "AWS", "SQL Server",
      "React", "TypeScript", "Python", "Cloud Security",
      "Backend Engineering", "APIs", "Distributed Systems"
    ],
    worksFor: [
      { "@type": "Organization", "name": "Microsoft" },
      { "@type": "Organization", "name": "GitHub" },
      { "@type": "Organization", "name": "Atlassian" },
      { "@type": "Organization", "name": "NVIDIA" },
      { "@type": "Organization", "name": "Stripe" },
      { "@type": "Organization", "name": "Datadog" }
    ],
    // Hidden location hint in structured data only; not visible in UI
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressCountry: "DE"
    },
    knowsAbout: [
      "Backend Engineering", "Cloud Engineering", "Security Engineering",
      "Azure", "AWS", "C#", "ASP.NET", "SQL Server", "React", "TypeScript", "Python"
    ],
    hasCredential: [
      // Structured data only; no visible mention in UI
      "EU Blue Card Eligible"
    ]
  };

  return (
    <>
      {/* Neutral, employer-safe description optimized for US and Munich tech search */}
      <meta
        name="description"
        content="Software engineer focused on backend, cloud, and security engineering across Azure and AWS. Builds robust systems with C#, ASP.NET, SQL Server, React, TypeScript, and Python."
      />
      <meta
        name="keywords"
        content="software engineer, mid-level software engineer, backend engineering, cloud engineering, security engineering, C#, ASP.NET, ASP.NET Core, Azure, AWS, SQL Server, React, TypeScript, Python, US software engineer, Munich software engineer, Blue Card eligible profile, cloud security"
      />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
