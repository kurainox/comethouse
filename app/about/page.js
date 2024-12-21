import { anekLatin, openSans } from "@/global/fonts";
import styles from "./about.module.css";
import Highlight from "@/components/highlight/hightlight.component";
import SlideCarousel from "@/components/carousel/carousel.component";
import CircularProgress from "@/components/circular_progress/circular_progress.component";
export default function AboutPage() {
  return (
    <main className={`${styles["about-page"]}`}>
      <span className={`${styles["about-head"]}`}>
        <p className={`${anekLatin.className} ${styles["font-lg"]}`}>
          Thousands of businesses settle for websites built with templates.
        </p>
        <p className={`${anekLatin.className} ${styles["font-md"]}`}>
          {`We build with `}
          <Highlight
            text="purpose."
            color="#00201e"
            background="#bcece7"
            weight={900}
          />
        </p>
        <span className={`${styles["head-subtext"]}`}>
          <p className={`${styles["font-normal"]}`}>
            Most web agencies will sell you a template website, claiming "it's
            just as good".
          </p>
          <p className={`${styles["font-normal"]}`}>We disagree.</p>
        </span>
      </span>
      <em>Here's what Google says:</em>
      <SlideCarousel className={`${styles["carousel"]}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress percentage="53" />
          <p className={`${styles["info-card-text"]} ${openSans.className}`}>
            of visits are abandoned if a mobile site takes longer than 3 seconds
            to load.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress percentage="52" />
          <p className={`${styles["info-card-text"]} ${openSans.className}`}>
            of users said that a bad mobile experience made them less likely to
            engage with a company.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress percentage="61" />
          <p className={`${styles["info-card-text"]} ${openSans.className}`}>
            of customers have stopped buying from a company because a competitor
            provided a better experience.
          </p>
        </div>
      </SlideCarousel>
      <span className={`${styles["font-normal"]} ${styles["temp"]}`}>
        <p>These aren't just numbers. They're the clients you're losing.</p>
        <p>
          {" "}
          The truth is, template websites can be set up easily, but they often
          underperform. They're slow, clunky, and difficult to optimize for
          search engines. This costs you leads, sales, and valuable brand
          authority.
        </p>
        <p>
          But we get it. Spending thousands of dollars upfront on a website
          isn't always feasible for all businesses. At best, you get a
          cookie-cutter website that can't stand out from your competitors. And
          at worst, you get a website that's slow, doesn't work well on mobile
          and actually loses you revenue.
        </p>
      </span>

      <span className={`${styles["temp"]}`}>
        <p className={`${anekLatin.className} ${styles["font-md"]}`}>
          That's why we do things differently
        </p>
        <p className={`${styles["font-normal"]}`}>
          We build every website from scratch. No templates. No shortcuts. We
          make premium web design accessible to businesses without breaking the
          bank with our $0 upfront $150/month model. Learn more about our pricing.
        </p>
      </span>
    </main>
  );
}

// https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/
// https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/what-users-want-most-from-mobile-sites-today/
// https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-data/
// et it. Spending thousands of dollars upfront on a website isn't always feasible for small businesses. And the risk of ending up with a mediocre website that loses you customers is a real concern.
// our Mission: To empower small businesses with the online presence they need to thrive. We’re committed to delivering beautiful, functional, and results-driven websites that generate leads, increase sales, and build brand authority.
