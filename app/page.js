import Image from "next/image";
import styles from "./page.module.css";
import { anekLatin, bagelFatOne, openSans } from "@/global/fonts";
import CircularProgress from "@/components/circular_progress/circular_progress.component";
import SlideCarousel from "@/components/carousel/carousel.component";
import Card from "@/components/card/card.component";
import { maple } from "@/global/icons";
import Pricing from "@/components/pricing/pricing.component";
import Button from "@/components/button/button.component";
import Accordion from "@/components/accordion/accordion.component";
import Highlight from "@/components/highlight/hightlight.component";
import Divider from "@/components/divider/divider.component";
import ElevatedButton from "@/components/ElevatedButton/ElevatedButton.component";

export default function Home() {
  return (
    <>
      <main>
        {/* <Navbar /> */}
        <section id="hero" className={styles["hero-section"]}>
          <Image
            src="/background.webp"
            alt="Hero Background Texture Image"
            loading="lazy"
            placeholder="empty"
            fill
          />
          <div className={`${styles["hero-wrapper"]}`}>
            <div className={`${styles["hero-content-wrapper"]}`}>
              <span
                className={`${anekLatin.className} ${styles["hero-heading"]}`}
              >
                <p>{"Building better websites \n for small businesses."}</p>
              </span>
              <p className={`${openSans.className} ${styles["hero-subtext"]}`}>
                Custom-built websites that will help you outperform your
                competition.
              </p>
              <ElevatedButton
                variant="pill"
                type="button"
                backgroundColor="var(--color-button-primary)"
                textColor="var(--color-on-button-primary)"
                className={`${openSans.className} ${styles["hero-cta"]}`}
                size="wide"
              >
                Get Started
              </ElevatedButton>
            </div>
            <div className={`${styles["hero-image-wrapper"]}`}>
              <div className={`${styles["del-container"]}`}>
                <Image
                  src="/design_el_01.png"
                  alt="design element image"
                  width={397}
                  height={398}
                  loading="lazy"
                  className={`${styles["hero-del-01"]}`}
                />
              </div>
              <Image
                src="/hero_image.webp"
                alt="Hero Image"
                width={650}
                height={800}
                loading="lazy"
                placeholder="empty"
                // objectFit="contain"
                className={`${styles["hero-image"]}`}
              />
              <div className={`${styles["del-02-wrapper"]}`}>
                <Image
                  src="/stars.png"
                  alt="design element image"
                  width={116}
                  height={120}
                  loading="lazy"
                  className={`${styles["hero-del-02"]}`}
                />
              </div>
            </div>
          </div>
        </section>
        {/* <Navbar /> */}
        <div className={`${styles["grid-layout"]}`}>
          <section className={styles["about-section"]}>
            <span className={`${styles["text-wrapper"]}`}>
              <span
                className={`${anekLatin.className} ${styles["about-section-header"]} `}
              >
                <Image
                  src="/pin.png"
                  alt="pin icon"
                  width={101}
                  height={95}
                  loading="lazy"
                  className={`${styles["pin-icon"]}`}
                />
                {/* <p>We believe your business deserves better</p> */}
                <p className={`${styles["section-title"]}`}>
                  Your website should grow your business
                </p>
              </span>
              <p className={`${openSans.className} ${styles["section-text"]}`}>
                {`Whether that's generating leads, making sales, or building your
                brand, every pixel matters.`}
              </p>
            </span>
          </section>
          <section className={`${styles["problem-section"]}`}>
            {/* <p className={`${anekLatin.className} ${styles["section-title"]}`}>
              But there's a problem...
            </p> */}
            <div className={`${styles["card-container"]}`}>
              <Image
                src="/blob.png"
                alt="Problem Image"
                width={306}
                height={249}
                loading="lazy"
                objectFit="cover"
                className={`${styles["problem-section-blob"]}`}
              />
              {/* <div className={`${styles["problem-container"]}`}> */}
              <div className={`${styles["problem-section-content"]}`}>
                <span className={`${styles["text-wrapper"]}`}>
                  <p
                    className={`${anekLatin.className} ${styles["problem-section-header"]} ${styles["section-title"]}`}
                  >
                    {`But there's a problem...`}
                  </p>
                  <p
                    style={{ textAlign: "left" }}
                    className={`${openSans.className} ${styles["section-text"]}`}
                  >
                    If your website is slow, unresponsive, or not optimized for
                    mobile,{" "}
                    <Highlight
                      weight={600}
                      text={`you're losing clients`}
                      color="#410002"
                      background="#ffdad6"
                    />
                  </p>
                </span>
              </div>
              <SlideCarousel className={`${styles["info-carousel"]}`}>
                <div className={`${styles["info-card"]}`}>
                  <CircularProgress percentage={53} />
                  <p
                    className={`${styles["info-card-text"]} ${openSans.className}`}
                  >
                    of visitors abandon websites that take over 3 seconds to
                    load.
                  </p>
                </div>
                <div className={`${styles["info-card"]}`}>
                  <CircularProgress percentage={74} />
                  <p
                    className={`${styles["info-card-text"]} ${openSans.className}`}
                  >
                    {`of visitors abandon mobile websites that don’t load within 5
                    seconds.`}
                  </p>
                </div>
                <div className={`${styles["info-card"]}`}>
                  <CircularProgress percentage={46} />
                  <p
                    className={`${styles["info-card-text"]} ${openSans.className}`}
                  >
                    {`of users don't revisit poorly performing websites`}
                  </p>
                </div>
              </SlideCarousel>
            </div>
            {/* </div> */}
          </section>
          <section className={`${styles["services-section"]}`}>
            {/* <div className={`${styles["services-wrapper"]}`}> */}
            <span className={`${styles["text-wrapper"]}`}>
              <p
                className={`${anekLatin.className} ${styles["section-title"]}`}
              >
                {`That's why we do things differently`}
              </p>
              <p className={`${styles["section-text"]}`}>
                We build every website from the ground up.{" "}
                <Highlight
                  weight={600}
                  text="No WordPress, no off-the-shelf templates."
                  color="#0D4124"
                  background="#7aecad"
                />
                Our websites load faster, rank higher, look better and convert
                more.
              </p>
            </span>
            <div className={`${styles["services-card-grid"]}`}>
              <div>
                <Card title="Custom Designs" googleIcon="design_services">
                  <p>
                    We build websites from the ground up so you can stand out
                    from your competition.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="Lightning-Fast Performance" googleIcon={"bolt"}>
                  <p>
                    The longer it takes for your website to load, the more
                    likely it is for you to lose customers. Our websites load
                    instantly and keep your visitors engaged, leading to higher
                    conversion rates.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="SEO Optimization" googleIcon={"speed"}>
                  <p>
                    We build with search engines in mind, helping your business
                    rank higher and attract more qualified leads to your
                    website.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="Predictable Pricing" googleIcon={"savings"}>
                  <p>
                    Our flat-rate model is designed to be affordable and
                    flexible so you can avoid hidden and accruing costs that
                    create financial black holes.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="Unlimited Edits" googleIcon={"support_agent"}>
                  <p>
                    We manage all edits to your website the entire time you’re
                    with us. Our goal is to grow with our clients, ensuring your
                    website evolves as your business grows.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="Fully Responsive" googleIcon={"responsive_layout"}>
                  <p>
                    With over 60% of web traffic coming from mobile devices,
                    your website needs to work flawlessly on every screen. We
                    ensure your site looks and performs perfectly across all
                    devices, keeping your customers engaged no matter how they
                    visit.
                  </p>
                </Card>
              </div>
              <div>
                <Card title="Based in Canada" customIcon={maple}>
                  <p>
                    {`We're based in Ottawa, Canada and we serve clients
                    wordlwide, from local Canadian businesses to clients in the
                    United States and Europe.`}
                  </p>
                </Card>
              </div>
            </div>
            {/* </div> */}
          </section>
          <section className={`${styles["pricing-section"]}`}>
            <p className={`${styles["section-title"]}`}>Pricing</p>
            <div className={`${styles["pricing-cards"]}`}>
              <Pricing
                type={"One-time payment"}
                price={"$3500"}
                features={[
                  "Web design",
                  "Web development",
                  "Up to 5 pages",
                  "SEO optimization",
                  "Website copywriting",
                ]}
                addOns={[
                  "$100/additional page",
                  "$25/month hosting",
                  "$75/month for unlimited edits",
                  "$300 for blog integration",
                ]}
              />
              <Pricing
                type={"Monthly"}
                price={"$150/m"}
                features={[
                  "Web design",
                  "Web development",
                  "Up to 5 pages",
                  "SEO optimization",
                  "Website copywriting",
                  "Unlimited edits",
                  "Hosting included",
                ]}
                addOns={["$100/additional page", "$300 for blog integration"]}
                hightlighted
              />
            </div>
          </section>
          <section className={`${styles["faq-section"]}`}>
            <p className={`${styles["section-title"]}`}>FAQs</p>
            <Accordion
              items={[
                {
                  title:
                    "What's the advantage of a hand-coded website over WordPress or Page Builders?",
                  content: `Because it can directly impact your bottom line. WordPress and page builders often come with bloat that can slow down your website and even create security vulnerabilities, leading to lost customers. \n\nHand-coded websites are leaner, faster, and more secure, which can lead to higher conversion rates and more revenue for your business.`,
                },
                {
                  title: "How long does it take to complete a website?",
                  content:
                    "Most websites are completed within 2-4 weeks. This includes design, development and revisions. The exact timeline depends on your project's complexity and revision/feedback cycles (such as design approvals and how long it takes for us to receive requested content or assets from the client).",
                },

                {
                  title:
                    "What's the advantage of a hand-coded website over WordPress or Page Builders?",
                  content:
                    "We do not offer hosting, but we can recommend a hosting provider that suits your needs.",
                },
                {
                  title: "What is SEO?",
                  content:
                    "SEO stands for Search Engine Optimization. It is the process of optimizing your website to rank higher in search engine results pages.",
                },

                {
                  title: "Do you offer refunds?",
                  content:
                    "We do not offer refunds, but we will work with you to ensure you are satisfied with your website.",
                },
              ]}
            />
          </section>
        </div>
        <footer className={`${styles["footer"]}`}>
          <div className={`${styles["footer-content-wrapper"]}`}>
            <div className={`${styles["footer-left"]}`}>
              <div className={`${styles["footer-logo-container"]}`}>
                <span className={`${styles["footer-logo"]}`}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 787 323"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2,
                      fill: "currentColor",
                    }}
                  >
                    <g>
                      <path d="M203.351,24.374c-3.168,5.487 -48.595,97.472 -60.047,120.117c-14.063,27.809 8.098,46.17 25.645,15.776c11.639,-20.158 41.746,-79.966 52.557,-98.69c12.798,-22.168 30.399,-6.24 21.737,12.55c-17.358,37.653 -59.96,159.67 -89.519,204.937c-28.635,43.852 -70.579,55.257 -112.767,30.216c-44.803,-26.594 -49.478,-75.887 -30.216,-112.767c22.367,-42.822 68.841,-110.467 87.737,-139.575c8.683,-13.375 16.123,-25.051 22.977,-36.923c15.306,-26.512 40.255,-19.69 21.729,12.397c-24.808,42.969 -34.771,61.604 -55.201,96.99c-10.884,18.852 10.54,31.362 20.755,13.668c14.325,-24.811 52.632,-96.999 71.451,-129.595c14.593,-25.276 35.896,-11.157 23.162,10.899Zm-130.966,174.397c-21.442,5.745 -34.186,27.818 -28.44,49.26c5.745,21.442 27.818,34.186 49.26,28.44c21.442,-5.745 34.185,-27.818 28.44,-49.26c-5.745,-21.442 -27.818,-34.185 -49.26,-28.44Z" />
                    </g>
                    <path
                      d="M320.767,165.2c-9.943,-0 -18.897,-2.055 -26.861,-6.164c-7.964,-4.109 -14.229,-10.222 -18.795,-18.338c-4.565,-8.117 -6.848,-18.11 -6.848,-29.981c-0,-11.87 2.308,-22.117 6.924,-30.741c4.617,-8.624 10.958,-15.244 19.023,-19.86c8.066,-4.616 17.273,-6.924 27.622,-6.924c11.972,-0 21.154,1.674 27.545,5.022c6.392,3.348 9.588,8.319 9.588,14.914c0,5.073 -1.37,9.258 -4.109,12.555c-2.739,3.297 -6.493,4.946 -11.262,4.946c-4.058,0 -7.989,-0.533 -11.794,-1.598c-3.805,-1.065 -8.243,-1.598 -13.316,-1.598c-6.493,0 -11.617,1.877 -15.371,5.631c-3.754,3.754 -5.631,8.675 -5.631,14.762c0,5.986 1.877,10.983 5.631,14.99c3.754,4.008 8.878,6.011 15.371,6.011c3.449,0 6.62,-0.279 9.511,-0.837c2.892,-0.558 5.733,-1.141 8.523,-1.75c2.79,-0.608 5.808,-0.913 9.055,-0.913c5.377,0 9.334,1.75 11.87,5.251c2.537,3.5 3.805,7.837 3.805,13.011c-0,5.175 -1.877,9.36 -5.631,12.556c-3.754,3.195 -8.7,5.504 -14.838,6.924c-6.138,1.42 -12.809,2.131 -20.012,2.131Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M412.23,165.352c-10.856,-0 -20.038,-2.384 -27.546,-7.153c-7.508,-4.768 -13.189,-11.363 -17.044,-19.784c-3.856,-8.421 -5.783,-18.11 -5.783,-29.067c-0,-10.856 1.927,-20.52 5.783,-28.991c3.855,-8.472 9.536,-15.117 17.044,-19.937c7.508,-4.819 16.69,-7.228 27.546,-7.228c10.856,-0 20.012,2.409 27.469,7.228c7.457,4.82 13.113,11.465 16.969,19.937c3.855,8.471 5.783,18.135 5.783,28.991c-0,10.957 -1.928,20.646 -5.783,29.067c-3.856,8.421 -9.512,15.016 -16.969,19.784c-7.457,4.769 -16.613,7.153 -27.469,7.153Zm-31.198,-58.439c-0,3.145 0.761,6.113 2.283,8.903c1.521,2.79 4.514,5.022 8.978,6.696c4.465,1.674 11.11,2.511 19.937,2.511c8.826,-0 15.446,-0.837 19.86,-2.511c4.413,-1.674 7.381,-3.906 8.903,-6.696c1.521,-2.79 2.282,-5.758 2.282,-8.903c0,-3.247 -0.761,-6.164 -2.282,-8.751c-1.522,-2.587 -4.49,-4.667 -8.903,-6.239c-4.414,-1.573 -11.034,-2.359 -19.86,-2.359c-8.827,-0 -15.472,0.786 -19.937,2.359c-4.464,1.572 -7.457,3.652 -8.978,6.239c-1.522,2.587 -2.283,5.504 -2.283,8.751Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M486.039,164.895c-5.275,0 -9.182,-1.572 -11.718,-4.718c-2.536,-3.145 -3.805,-7.355 -3.805,-12.631l0,-70.918c0,-7.711 2.106,-13.392 6.316,-17.045c4.211,-3.652 9.258,-5.478 15.142,-5.478c5.581,-0 10.324,1.826 14.23,5.478c3.906,3.653 6.772,9.436 8.598,17.349l11.871,51.591l3.956,0l11.871,-51.591c1.826,-7.913 4.743,-13.696 8.75,-17.349c4.008,-3.652 8.802,-5.478 14.382,-5.478c5.884,-0 10.932,1.826 15.142,5.478c4.211,3.653 6.316,9.334 6.316,17.045l-0,70.918c-0,5.276 -1.294,9.486 -3.881,12.631c-2.587,3.146 -6.518,4.718 -11.794,4.718c-5.073,0 -8.979,-1.572 -11.718,-4.718c-2.74,-3.145 -4.109,-7.355 -4.109,-12.631l-0,-40.938c-0,-1.014 -0.127,-1.953 -0.381,-2.815c-0.253,-0.862 -0.938,-1.294 -2.054,-1.294c-0.913,0 -1.573,0.432 -1.979,1.294c-0.406,0.862 -0.71,1.801 -0.913,2.815l-5.783,38.351c-0.71,4.16 -1.547,7.736 -2.511,10.729c-0.964,2.993 -2.46,5.276 -4.489,6.848c-2.029,1.573 -4.972,2.359 -8.827,2.359c-3.754,0 -6.671,-0.786 -8.751,-2.359c-2.08,-1.572 -3.601,-3.855 -4.565,-6.848c-0.964,-2.993 -1.75,-6.569 -2.359,-10.729l-5.935,-38.351c-0.102,-1.014 -0.355,-1.953 -0.761,-2.815c-0.406,-0.862 -1.116,-1.294 -2.131,-1.294c-1.014,0 -1.674,0.432 -1.978,1.294c-0.305,0.862 -0.457,1.801 -0.457,2.815l0,40.938c0,5.276 -1.344,9.486 -4.033,12.631c-2.688,3.146 -6.569,4.718 -11.642,4.718Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M633.963,164.591c-4.972,-0 -9.715,-0.457 -14.229,-1.37c-4.515,-0.913 -8.472,-2.663 -11.871,-5.25c-3.399,-2.587 -6.087,-6.341 -8.066,-11.262c-1.978,-4.921 -2.967,-11.388 -2.967,-19.403c-0,-7.204 0.964,-13.393 2.891,-18.567c1.928,-5.174 4.236,-9.283 6.925,-12.327c2.688,-3.044 5.149,-4.921 7.381,-5.631l-0.761,-2.891l-2.587,-0c-4.667,-0 -8.345,-1.497 -11.034,-4.49c-2.688,-2.993 -4.083,-7.076 -4.185,-12.251c-0.101,-5.072 1.243,-9.131 4.033,-12.174c2.79,-3.044 6.519,-4.566 11.186,-4.566l54.634,0c10.856,0 16.284,5.073 16.284,15.219c-0,4.565 -1.319,8.218 -3.957,10.957c-2.638,2.739 -6.747,4.109 -12.327,4.109l-31.502,-0c-3.754,-0 -5.631,2.181 -5.631,6.544l-0,11.414c5.073,-1.116 10.374,-2.435 15.903,-3.957c5.529,-1.522 10.78,-2.283 15.751,-2.283c4.769,0 8.345,1.04 10.729,3.12c2.384,2.08 3.577,4.895 3.577,8.446c-0,3.653 -1.193,6.519 -3.577,8.599c-2.384,2.079 -5.96,3.17 -10.729,3.272c-4.971,0.101 -10.247,-0.609 -15.827,-2.131c-5.58,-1.522 -10.907,-2.841 -15.979,-3.957l-0,19.936c-0,1.928 0.532,3.272 1.598,4.033c1.065,0.761 2.764,0.482 5.098,-0.837c5.073,-2.942 10.044,-5.301 14.914,-7.076c4.87,-1.776 9.638,-2.664 14.305,-2.664c6.595,0 11.592,1.725 14.99,5.175c3.399,3.449 5.099,7.964 5.099,13.544c-0,5.986 -1.801,10.602 -5.403,13.849c-3.602,3.247 -9.41,4.87 -17.425,4.87l-27.241,-0Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M703.968,87.89c-5.073,-0 -9.207,-1.471 -12.403,-4.414c-3.196,-2.942 -4.794,-7 -4.794,-12.174c-0,-5.073 1.446,-9.157 4.337,-12.251c2.892,-3.095 7.178,-4.642 12.86,-4.642l65.591,0c5.682,0 9.968,1.547 12.86,4.642c2.891,3.094 4.337,7.178 4.337,12.251c0,5.174 -1.598,9.232 -4.794,12.174c-3.195,2.943 -7.33,4.414 -12.403,4.414c-3.449,-0 -6.214,-0.381 -8.294,-1.142c-2.08,-0.761 -3.779,-1.674 -5.098,-2.739c-1.319,-1.065 -2.587,-1.978 -3.805,-2.739c-1.217,-0.761 -2.739,-1.142 -4.565,-1.142l-1.37,2.74c0.406,0.913 1.116,2.206 2.131,3.88c1.014,1.674 1.978,4.059 2.891,7.153c0.913,3.094 1.37,7.28 1.37,12.555l0,43.982c0,4.159 -1.547,7.609 -4.642,10.348c-3.094,2.74 -6.873,4.109 -11.337,4.109c-4.566,0 -8.396,-1.369 -11.49,-4.109c-3.095,-2.739 -4.642,-6.189 -4.642,-10.348l0,-43.982c0,-5.275 0.457,-9.461 1.37,-12.555c0.913,-3.094 1.902,-5.479 2.967,-7.153c1.066,-1.674 1.801,-2.967 2.207,-3.88l-1.522,-2.74c-1.826,0 -3.348,0.381 -4.565,1.142c-1.218,0.761 -2.486,1.674 -3.805,2.739c-1.319,1.065 -2.993,1.978 -5.022,2.739c-2.029,0.761 -4.819,1.142 -8.37,1.142Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M285.4,321.438c-4.923,-0 -8.99,-1.421 -12.201,-4.262c-3.211,-2.84 -4.816,-6.442 -4.816,-10.805l-0,-80.505c-0,-4.465 1.552,-8.193 4.656,-11.186c3.103,-2.993 7.17,-4.489 12.2,-4.489c5.352,-0 9.526,1.496 12.522,4.489c2.997,2.993 4.495,6.62 4.495,10.881l0,28.154l29.86,0l0,-27.849c0,-4.465 1.552,-8.193 4.656,-11.186c3.103,-2.993 7.277,-4.489 12.522,-4.489c5.244,-0 9.364,1.496 12.361,4.489c2.997,2.993 4.495,6.62 4.495,10.881l-0,80.81c-0,4.363 -1.579,7.965 -4.736,10.805c-3.157,2.841 -7.09,4.262 -11.799,4.262c-5.138,-0 -9.338,-1.421 -12.603,-4.262c-3.264,-2.84 -4.896,-6.442 -4.896,-10.805l0,-30.284l-29.86,-0l0,30.284c0,4.363 -1.578,7.965 -4.736,10.805c-3.157,2.841 -7.197,4.262 -12.12,4.262Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M424.906,322.351c-11.451,-0 -21.137,-2.385 -29.057,-7.153c-7.92,-4.768 -13.913,-11.363 -17.98,-19.784c-4.067,-8.421 -6.1,-18.11 -6.1,-29.067c-0,-10.856 2.033,-20.52 6.1,-28.991c4.067,-8.472 10.06,-15.117 17.98,-19.937c7.92,-4.819 17.606,-7.228 29.057,-7.228c11.452,-0 21.111,2.409 28.977,7.228c7.867,4.82 13.833,11.465 17.9,19.937c4.067,8.471 6.1,18.135 6.1,28.991c0,10.957 -2.033,20.646 -6.1,29.067c-4.067,8.421 -10.033,15.016 -17.9,19.784c-7.866,4.768 -17.525,7.153 -28.977,7.153Zm-32.91,-58.439c0,3.145 0.803,6.113 2.408,8.903c1.606,2.79 4.763,5.022 9.472,6.696c4.709,1.674 11.719,2.511 21.03,2.511c9.311,-0 16.295,-0.837 20.95,-2.511c4.656,-1.674 7.786,-3.906 9.392,-6.696c1.605,-2.79 2.408,-5.758 2.408,-8.903c-0,-3.247 -0.803,-6.164 -2.408,-8.751c-1.606,-2.587 -4.736,-4.667 -9.392,-6.239c-4.655,-1.573 -11.639,-2.359 -20.95,-2.359c-9.311,-0 -16.321,0.786 -21.03,2.359c-4.709,1.572 -7.866,3.652 -9.472,6.239c-1.605,2.587 -2.408,5.504 -2.408,8.751Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M535.195,322.351c-6.421,-0.102 -12.549,-0.913 -18.381,-2.435c-5.833,-1.522 -11.051,-4.008 -15.653,-7.457c-4.602,-3.45 -8.214,-8.066 -10.836,-13.849c-2.622,-5.783 -3.933,-12.936 -3.933,-21.458l-0,-51.591c-0,-4.87 1.686,-8.497 5.057,-10.881c3.371,-2.384 7.304,-3.576 11.799,-3.576c4.388,-0 8.295,1.192 11.719,3.576c3.425,2.384 5.138,6.011 5.138,10.881l-0,44.438c-0,7.204 1.792,12.479 5.378,15.827c3.585,3.348 8.214,4.87 13.886,4.566c5.993,-0.406 10.301,-2.587 12.923,-6.544c2.622,-3.957 3.345,-9.233 2.168,-15.827c-0.75,-4.464 -1.579,-8.218 -2.489,-11.262c-0.91,-3.044 -1.819,-5.758 -2.729,-8.142c-0.91,-2.384 -1.686,-4.768 -2.328,-7.152c-0.642,-2.385 -1.123,-5.2 -1.445,-8.447c-0.642,-6.797 0.83,-12.149 4.415,-16.055c3.586,-3.906 8.321,-5.859 14.208,-5.859c5.886,-0 10.488,1.877 13.806,5.631c3.318,3.753 4.977,9.435 4.977,17.044l-0,43.373c-0,8.522 -1.258,15.7 -3.773,21.534c-2.515,5.834 -5.993,10.501 -10.435,14.001c-4.442,3.5 -9.525,5.986 -15.251,7.457c-5.726,1.471 -11.799,2.207 -18.221,2.207Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M642.434,322.351c-5.994,-0 -12.014,-0.584 -18.061,-1.75c-6.047,-1.167 -11.612,-2.892 -16.696,-5.175c-5.083,-2.282 -9.177,-5.073 -12.281,-8.37c-3.103,-3.297 -4.655,-7.127 -4.655,-11.49c-0,-5.58 1.873,-10.044 5.619,-13.392c3.745,-3.348 8.133,-4.921 13.164,-4.718c3.96,0.102 7.919,0.888 11.879,2.359c3.96,1.471 8,2.917 12.121,4.337c4.12,1.421 8.268,2.131 12.441,2.131c4.174,-0 7.064,-0.507 8.669,-1.522c1.606,-1.015 2.409,-2.384 2.409,-4.109c-0,-2.029 -1.124,-3.703 -3.372,-5.022c-2.247,-1.319 -5.083,-2.334 -8.508,-3.044l-7.867,-1.826c-8.133,-1.826 -15.411,-3.881 -21.833,-6.163c-6.421,-2.283 -11.478,-5.327 -15.17,-9.131c-3.693,-3.805 -5.539,-8.903 -5.539,-15.295c0,-7.001 2.034,-12.707 6.101,-17.121c4.067,-4.413 9.578,-7.634 16.535,-9.664c6.957,-2.029 14.716,-3.043 23.278,-3.043c8.776,-0 16.482,0.862 23.117,2.587c6.636,1.725 11.8,4.21 15.492,7.457c3.692,3.247 5.538,7.203 5.538,11.87c0,4.972 -1.418,8.852 -4.254,11.642c-2.836,2.791 -6.609,4.186 -11.318,4.186c-3.103,-0 -6.341,-0.508 -9.712,-1.522c-3.371,-1.015 -6.903,-2.004 -10.596,-2.968c-3.692,-0.964 -7.625,-1.446 -11.799,-1.446c-3.746,0 -6.582,0.533 -8.509,1.598c-1.926,1.066 -2.889,2.461 -2.889,4.185c-0,2.131 1.284,3.704 3.853,4.718c2.568,1.015 6.796,2.232 12.682,3.653l8.99,1.978c7.385,1.725 13.86,3.805 19.425,6.239c5.565,2.435 9.9,5.631 13.004,9.588c3.103,3.957 4.655,9.131 4.655,15.523c0,7.711 -1.926,13.976 -5.779,18.795c-3.853,4.819 -9.204,8.345 -16.054,10.577c-6.849,2.232 -14.876,3.348 -24.08,3.348Z"
                      style={{ fillRule: "nonzero" }}
                    />
                    <path
                      d="M733.94,321.59c-5.245,-0 -10.248,-0.457 -15.011,-1.37c-4.762,-0.913 -8.936,-2.663 -12.521,-5.25c-3.586,-2.587 -6.422,-6.341 -8.509,-11.262c-2.087,-4.921 -3.13,-11.388 -3.13,-19.403c-0,-7.204 1.016,-13.393 3.05,-18.567c2.033,-5.174 4.468,-9.283 7.304,-12.327c2.836,-3.044 5.432,-4.921 7.786,-5.631l-0.802,-2.891l-2.73,-0c-4.923,-0 -8.802,-1.497 -11.638,-4.49c-2.837,-2.993 -4.308,-7.076 -4.415,-12.251c-0.107,-5.072 1.311,-9.131 4.254,-12.174c2.943,-3.044 6.876,-4.566 11.799,-4.566l57.633,0c11.452,0 17.178,5.073 17.178,15.219c-0,4.565 -1.392,8.217 -4.174,10.957c-2.783,2.739 -7.117,4.109 -13.004,4.109l-33.231,-0c-3.96,-0 -5.94,2.181 -5.94,6.544l0,11.414c5.351,-1.116 10.943,-2.435 16.776,-3.957c5.833,-1.522 11.372,-2.283 16.616,-2.283c5.03,0 8.803,1.04 11.318,3.12c2.515,2.08 3.772,4.895 3.772,8.446c0,3.652 -1.257,6.519 -3.772,8.598c-2.515,2.08 -6.288,3.171 -11.318,3.272c-5.244,0.102 -10.81,-0.608 -16.696,-2.13c-5.886,-1.522 -11.505,-2.841 -16.856,-3.957l-0,19.936c-0,1.928 0.562,3.272 1.685,4.033c1.124,0.761 2.917,0.482 5.378,-0.837c5.352,-2.942 10.596,-5.301 15.733,-7.076c5.137,-1.776 10.167,-2.664 15.09,-2.664c6.957,0 12.228,1.725 15.813,5.175c3.586,3.449 5.378,7.964 5.378,13.544c0,5.986 -1.899,10.602 -5.699,13.849c-3.799,3.246 -9.926,4.87 -18.381,4.87l-28.736,-0Z"
                      style={{ fillRule: "nonzero" }}
                    />
                  </svg>
                </span>
                {/* <span> */}
                <p className={`${openSans.className} ${styles["logo-tag"]}`}>
                  Building better websites for small businesses.
                </p>
                <Button background="white" color={"#202020"}>
                  Get started today
                </Button>
              </div>
            </div>
            <div className={`${styles["footer-right"]}`}>
              Useful Links
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <Divider spacing="20px" color="#404040" />
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fafafa" }}>
              Copyright © 2024 | Comethouse Design | All Rights Reserved
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
