import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import {
  ShieldBadgeIcon,
  ShieldBadgeType,
  ShieldCheckIcon,
} from "@/components/ShieldIcons";

// Reusable icons for situations and fits
const situations: { icon: ShieldBadgeType; title: string; desc: string }[] = [
  { icon: "disputes", title: "Guest Disputes", desc: "De-escalating conflicts calmly and professionally to help prevent escalation on the gaming floor." },
  { icon: "alcohol", title: "Alcohol-Related Incidents", desc: "De-escalating situations involving intoxicated guests safely and reporting to venue staff with minimal disruption." },
  { icon: "restricted", title: "Restricted Area Access", desc: "Supporting controlled access to client-designated areas, subject to casino policies and applicable gaming requirements." },
  { icon: "parking", title: "Parking Lot Concerns", desc: "Patrolling structures and surface lots to help deter vehicle break-ins, loitering, and vandalism." },
  { icon: "cash", title: "Cash Handling Support", desc: "Support authorized on-site escort duties according to defined post orders, training, and coverage arrangements." },
  { icon: "escort", title: "Employee Escort Needs", desc: "Supporting staff safety during late-night shifts, cage operations, and employee parking transfers when included in post orders." },
  { icon: "suspicious", title: "Suspicious Behavior", desc: "Observing, identifying, and documenting potential theft, gaming irregularities, or security concerns for venue management." },
  { icon: "theft", title: "Theft or Vandalism", desc: "Deterring property damage and vandalism, and promptly reporting unlawful activity on the property." },
  { icon: "crowd", title: "Crowd Control", desc: "Managing entryways, queues, concert venues, and event spaces during peak hours and holidays." },
  { icon: "emergency", title: "Medical or Emergency Response Support", desc: "Contact emergency services and follow site emergency procedures (officers do not provide clinical or police services unless separately qualified)." },
];

const properties: { icon: ShieldBadgeType; label: string }[] = [
  { icon: "casino", label: "Casinos & Gaming Halls" },
  { icon: "cards", label: "Card Rooms & Clubs" },
  { icon: "hotel", label: "Casino Hotels & Resorts" },
  { icon: "parking-lot", label: "Parking Structures" },
  { icon: "dining", label: "Restaurants & Lounges" },
  { icon: "venue", label: "Entertainment Venues" },
  { icon: "events", label: "Connected Event Areas" },
];

const coverageOptions = [
  { service: "Entrance & Access Control", schedule: "Sample: 24/7 by Agreement", desc: "Monitoring entry points, verifying IDs, checking credentials, and managing guest or staff access (24/7 coverage is a sample schedule available by agreement and staffing follows the venue contract)." },
  { service: "Gaming Floor Presence", schedule: "Sample: Peak & Late-Night", desc: "High-visibility patrols to observe behavior, support floor staff, and help deter disputes under venue direction." },
  { service: "Cash Vault & Cage Escorts", schedule: "Contracted / By Agreement", desc: "Assigned on-site escort support when contracted and authorized, following defined post orders." },
  { service: "Parking & Perimeter Patrols", schedule: "Sample: Evening & Overnight", desc: "Scheduled patrols to help deter vehicle theft and vandalism while supporting guest and employee transit." },
];

export default function CasinoSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/casino_hero_upscaled.png"
            alt="Secure Guard officer standing inside a premium casino environment at twilight"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Casino Security Support
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Protect Guests, Staff, Gaming Areas, Cash Handling, <span className={styles.heroTitleAccent}>and High-Traffic Entertainment Spaces</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers professional casino security support. We monitor behavior, support floor staff, respond to disputes, and support controlled access to client-designated areas, subject to casino policies and applicable gaming requirements.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <span className={styles.sectionTag}>Real-Life Problem</span>
              <h2 className={styles.sectionTitle}>
                Challenges of a <span className={styles.titleAccent}>Fast-Moving Casino Environment</span>
              </h2>
              <p className={styles.bodyText}>
                Casinos operate in a fast-moving environment with guests, gaming activity, cash movement, alcohol service, entertainment, parking areas, and late-night traffic.
              </p>
              <p className={styles.bodyText}>
                Security teams must balance guest experience with risk control. The client needs officers who can monitor behavior, support floor staff, respond to disputes, document incidents, support controlled access to client-designated areas, and help maintain a safer environment without disrupting operations.
              </p>
            </div>
            <div className={styles.whyCards}>
              {(
                [
                  { icon: "disputes", title: "Disputes & Alcohol", desc: "Managing guest conflicts and alcohol-related incidents professionally to support the gaming floor." },
                  { icon: "cash", title: "Cash & Asset Flows", desc: "Provide assigned escort support when contracted and authorized, with cash-in-transit or high-value movement scoped as separate specialized duties." },
                  { icon: "restricted", title: "Restricted Access", desc: "Supporting controlled access to client-designated areas, subject to casino policies and applicable gaming requirements." },
                  { icon: "parking", title: "Parking & Entrances", desc: "Monitoring structures and entrances to deter theft, vandalism, and loitering." },
                ] as { icon: ShieldBadgeType; title: string; desc: string }[]
              ).map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <ShieldBadgeIcon type={c.icon} size={44} />
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="/casino_patrol_upscaled.png" 
                alt="Secure Guard officer patrolling casino gaming and entertainment floor" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Proactive Security & <span className={styles.titleAccent}>Casino Support Services</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides casino security support for entrance monitoring, floor presence, parking areas, employee access, restricted area control, incident response, escort support, and activity documentation.
              </p>
              <p className={styles.bodyText}>
                Our security officers work alongside casino management, surveillance teams, hospitality staff, and local authorities when needed—supporting safer operations and incident response, with all gaming-floor and surveillance responsibilities subject to venue direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Tailored Security Scheduling <span className={styles.titleAccentGold}>for Gaming Properties</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Sample schedules are shown below; 24/7 or peak-hour coverage is available by agreement and staffing follows the venue contract.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you establish a reliable security presence that supports both management and employees, helps identify and document incidents and supports venue risk-management procedures.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Safer guest and employee environment",
                "Visible security presence across the property",
                "Support for disputes and behavioral issues",
                "Better protection for restricted and back-of-house areas",
                "Documented incident reports for liability control",
                "Improved parking lot and entrance monitoring",
                "Flexible staffing for evenings, weekends, and events",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>
                    <ShieldCheckIcon size={24} />
                  </span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Casino Security <span className={styles.titleAccent}>Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>
                    <ShieldBadgeIcon type={sit.icon} size={42} />
                  </span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Properties We <span className={styles.titleAccentGold}>Secure & Support</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our specialized security services are optimized for diverse gaming operations, casino hotels, and connected hospitality areas.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>
                  <ShieldBadgeIcon type={prop.icon} size={46} />
                </div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
