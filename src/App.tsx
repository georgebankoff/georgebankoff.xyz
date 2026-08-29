import React from "react";
// import Image from "https://esm.sh/react-image-enlarger";
import "./App.css";
import "./ComponentsList.css";
import StarryNight from "./StarryNight";

// function SingleSource() {
//   const [zoomed, setZoomed] = React.useState(false);

//   return (
//     <Image
//       style={{ width: "200px", height: "auto" }}
//       zoomed={zoomed}
//       src="/moon.jpg"
//       onClick={() => setZoomed(true)}
//       onRequestClose={() => setZoomed(false)}
//     />
//   );
// }

function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      <h1 className="page-title" id="projects-title">
        Projects
      </h1>
      <article className="project">
        <h2 className="header">Electric Go-Kart Project</h2>
        <a
          href="https://cad.onshape.com/documents/30826ce72678de87a3030163/w/d03a12ae59ca6e45fa57a4e4/e/749916287025791471a0d653?renderMode=0&uiState=68ec21d4b94f26ff8b2c91ce"
          target="_blank"
          rel="noopener noreferrer"
          className="onshape-link"
          title="View 3D CAD model on Onshape"
          aria-label="View the go-kart CAD model on Onshape"
        >
          <img
            src="/onshape-logo-RGB_KO.svg"
            alt=""
            className="onshape-icon"
            draggable={false}
            aria-hidden="true"
          />
        </a>
        <div className="fill">
          <div className="image-row">
            <img
              src="/chassis.png"
              alt="Go-kart chassis"
              className="image chassis-image"
            />
            <img
              src="/assembly.png"
              alt="Go-kart assembly"
              className="image assembly-image"
            />
          </div>
        </div>
        <div className="intro-block">
          <p className="intro">
            I designed and began to build an electric go-kart. I have wanted to
            build a go-kart for a long time. It's just a classic project that's
            both challenging and fulfilling, because you end up with something
            fun. I spent a while researching the best way to go about making a
            go-kart from scratch and ended up watching many videos and reading
            many blog posts of other people's projects. I chose a frame design
            from one particular video, which was very aligned with what I had in
            mind.
          </p>
          <p className="intro">
            I modeled the frame after the design in{" "}
            <a href="https://www.youtube.com/watch?v=XczJJEDjXrA">this video</a>
            {" "}
            and made custom modifications based on the size of my own body. One
            key difference in my design is that I am planning on mounting the
            rear axle bearings on top of the frame instead of underneath to
            minimize the ride height.
          </p>
          <p className="intro">
            If I were to design another kart, I would definitely ditch the live
            axle and have one motor on each wheel to enable things like torque
            vectoring.
          </p>
          <p className="intro">
            Most of the frame is made of 1/2" x 0.12" carbon steel square tubing
            (A500/A513).
          </p>
          <div className="components-panel">
            <h3 className="components-title">Components</h3>

            <div className="components-grid">
              <div className="component-category">
                <span className="category-label">Electrical</span>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Motor</span>
                    <span className="component-detail">QS138 90h v3</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Controller</span>
                    <span className="component-detail">EM-260</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Batteries</span>
                    <span className="component-detail">
                      SPIM08HP — 20s6p config, 72V, 48AH, 200A max continuous
                    </span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">BMS</span>
                    <span className="component-detail">
                      Battery management system
                    </span>
                  </div>
                </div>
              </div>

              <div className="component-category">
                <span className="category-label">Drivetrain</span>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Live axle kit</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Bearings</span>
                    <span className="component-detail">UCP 206</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Steering kit</span>
                  </div>
                </div>
              </div>

              <div className="component-category">
                <span className="category-label">Suspension &amp; Wheels</span>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Rear suspension</span>
                    <span className="component-detail">RFY Shocks</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Front suspension kit</span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Front hubs</span>
                    <span className="component-detail">
                      ATV-style, 4 stud, 110mm bolt pattern
                    </span>
                  </div>
                </div>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Wheels / tires</span>
                    <span className="component-detail">
                      Standard 4×110mm ATV wheels (Facebook Marketplace)
                    </span>
                  </div>
                </div>
              </div>

              <div className="component-category">
                <span className="category-label">Other</span>
                <div className="component-item">
                  <span className="pixel-bullet" />
                  <div>
                    <span className="component-name">Seat</span>
                    <span className="component-detail">
                      3D-printed in sections, joined with M3 all-thread &amp;
                      soldering-iron welded. Draft included in the Onshape file.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="intro">
            I plan on ordering the custom hinge parts and the custom motor mount
            from an online website that offers plasma cutting. I have started
            the welding and am excited for the full assembly.
          </p>
        </div>
      </article>
      <article className="project">
        <h2 className="header">Astrophotography Project</h2>
        <div className="intro-block">
          <p className="intro">
            These are photos that I took as part of an Astrophotography workshop
            in Maine in the summer of 2023. The program was led by Babak
            Tafreshi, one of the leading night sky photographers. I took and
            processed all of these images myself using a Canon Rebel T7 and a
            Canon EOS 5D Mark III, with a fisheye lens and a 16-35mm telescope
            lens that I borrowed from my friend (Alfonso).
          </p>
        </div>
        <div className="fill">
          <img
            src="/dipper-trail.jpg"
            className="image"
            alt="Composite star trail photo showing Ursa Major and stars rotating around Polaris"
          >
          </img>
          <p className="fill-description">
            A composite star trail photo of the sky. You can (if you look
            closely) see Ursa Major (the Big Dipper) in the center at the bottom
            of the sky, and the stars rotating around Polaris in the upper
            right. To create this effect, I captured 407 exposures over about 3
            hours, and converted all of my raw photos into TIFFs, and then
            stacked them using a computer program called StarStax. I then
            removed satellite streaks from the image using Photoshop.
          </p>
        </div>
        <div className="fill">
          <img
            src="/moon.jpg"
            className="image"
            alt="The Moon rising near Jupiter and the Pleiades, captured with a fisheye lens at 30 seconds"
          >
          </img>
          <p className="fill-description">
            A picture of the Moon, Jupiter, and Pleiades. I had to stay up late
            for this one to wait for the moon to rise over the trees. This was
            shot with the 5D Mark III and the fisheye lens at 30 seconds.
          </p>
        </div>
        <div className="fill">
          <img
            src="/moon-trail.jpg"
            className="image"
            alt="Composite star trail photo showing the Moon rising over a few hours, with concentric trails warped by a fisheye lens"
          >
          </img>
          <p className="fill-description">
            A composite star trail photo of the same frame of the above photo
            over a couple hours. You can see the Moon rising. I had gone to bed
            as the Moon had started to rise and set my camera to capture
            30-second exposures on repeat for 3 hours. Since the 5D Mark III has
            a full sensor, it distorts the real image when used with the fisheye
            lens, so you can see the ellipse around Polaris is not perfectly
            circular, which looks really cool. The warping also makes for a sort
            of gradient of density of stars, with the concentric trails being
            closer together in the middle of the frame and farther apart towards
            the edges. Since I wasn't able to adjust the exposure to make the
            Moon clearer while I was gone, it produced this cool effect, making
            the moon seem like it is a flame in the sky.
          </p>
        </div>
        <div className="fill">
          <img
            src="/long.jpg"
            className="image"
            alt="Single 30-minute exposure of the night sky with Polaris framed off-center near the top"
          >
          </img>
          <p className="fill-description">
            A single 30-minute exposure of the sky, with Polaris at the top of
            the frame. Framing Polaris off center makes the image less
            symmetrical and a little more interesting in my opinion. Since it's
            not a composite like the ones above, it doesn't look as clear, but
            it is at least less processed and more pure in a sense.
          </p>
        </div>
        <div className="fill">
          <img
            src="/eddie-exposed.jpg"
            className="image"
            alt="Light-painted self portrait with a flashlight-drawn outline of a dog in front of the Milky Way, 30-second exposure"
          >
          </img>
          <p className="fill-description">
            A light painting of me with an artistic representation of my dog,
            Eddie, in front of the Milky Way. It's a 30-second exposure. This
            one took me a few tries. It's like a very advanced selfie where I
            had to use a flashlight in the dark to draw a picture of my dog
            while my shutter was open. The first couple of tries were ok, but
            his legs were too long. This one came out well. I drew Eddie then
            illuminated myself for half a second with my phone's flashlight. If
            you look closely, you can see that my left knee is very bright,
            because that is where I was hiding the flashlight.
          </p>
        </div>
      </article>
    </section>
  );
}

type View = "home" | "projects";

function ProjectScrollbar() {
  const thumbRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = document.documentElement;
    let hideTimeout = 0;
    let animationFrame = 0;

    function updateThumb(show: boolean) {
      const thumb = thumbRef.current;
      if (!thumb) return;

      const viewportHeight = window.innerHeight;
      const scrollHeight = root.scrollHeight;
      const trackHeight = viewportHeight - 16;

      if (scrollHeight <= viewportHeight) {
        thumb.hidden = true;
        return;
      }

      thumb.hidden = false;
      const thumbHeight = Math.max(
        48,
        (viewportHeight / scrollHeight) * trackHeight,
      );
      const maxScroll = scrollHeight - viewportHeight;
      const maxThumbTravel = trackHeight - thumbHeight;
      const thumbTop = 8 + (window.scrollY / maxScroll) * maxThumbTravel;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${thumbTop}px)`;

      if (show) {
        thumb.classList.add("is-visible");
        window.clearTimeout(hideTimeout);
        hideTimeout = window.setTimeout(() => {
          thumb.classList.remove("is-visible");
        }, 700);
      }
    }

    function handleScroll() {
      updateThumb(true);
    }

    root.classList.add("projects-scroll");
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    animationFrame = window.requestAnimationFrame(() => updateThumb(false));

    return () => {
      root.classList.remove("projects-scroll");
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="project-scrollbar" aria-hidden="true">
      <div className="project-scrollbar-thumb" ref={thumbRef} />
    </div>
  );
}

export function HomePage() {
  const [view, setView] = React.useState<View>("home");

  function showView(nextView: View) {
    setView(nextView);
    window.scrollTo(0, 0);
  }

  return (
    <div className={`site-shell ${view === "projects" ? "projects-view" : ""}`}>
      {view === "projects" && (
        <>
          <StarryNight />
          <ProjectScrollbar />
        </>
      )}
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <button
            type="button"
            className="nav-name"
            onClick={() =>
              showView("home")}
            aria-current={view === "home" ? "page" : undefined}
          >
            George Bankoff
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => showView("projects")}
            aria-current={view === "projects" ? "page" : undefined}
          >
            Projects
          </button>
        </nav>
      </header>

      <main>
        {view === "home"
          ? (
            <section className="home-section" aria-label="About George Bankoff">
              <img
                src="/linkedin.jpeg"
                className="profile-photo"
                alt="George Bankoff"
                draggable={false}
              />
              <div className="bio-content">
                <p>
                  I am studying engineering at Dartmouth and physics
                  at Skidmore College. I have otherwise lived in Washington, DC
                  my whole life. I am driven by trying to understand things and
                  solving problems.<br></br>
                  I am currently interested in physical AI.
                </p>
                <p className="email">
                  <a href="mailto:georgebankoff@gmail.com">
                    georgebankoff@gmail.com
                  </a>
                </p>
              </div>
            </section>
          )
          : <ProjectsPage />}
      </main>
    </div>
  );
}

export default HomePage;
