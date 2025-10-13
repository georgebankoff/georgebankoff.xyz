import React from "react";
// import Image from "https://esm.sh/react-image-enlarger";
import "./App.css";
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

export function HomePage() {
  return (
    <div className="App">
      <StarryNight />
      <h1 className="header">George Bankoff</h1>
      <div className="divider"></div>
      <h2 className="header">Electric Go-Kart Project</h2>
      <a
        href="https://cad.onshape.com/documents/30826ce72678de87a3030163/w/d03a12ae59ca6e45fa57a4e4/e/749916287025791471a0d653?renderMode=0&uiState=68ec21d4b94f26ff8b2c91ce"
        target="_blank"
        rel="noopener noreferrer"
        className="onshape-link"
        title="View 3D CAD model on Onshape"
      >
        <img
          src="/onshape-logo-RGB_KO.svg"
          alt="Onshape"
          className="onshape-icon"
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
          The whole design is based heavily on the one in{" "}
          <a href="https://www.youtube.com/watch?v=XczJJEDjXrA">this video</a>.
          I modeled the frame after the design in this video and made custom
          modifications based on the size of my own body. One difference in my
          design is that I am planning on mounting the rear axle bearings on top
          of the frame instead of underneath to minimize the ride height.
        </p>
        <p className="intro">
          Most of the frame is made of 1/2" x 0.12" carbon steel square tubing
          (A500/A513).
        </p>
        <div className="intro">
          <p>Components:</p>
          <ul>
            <li>Motor: QS138 90h v3</li>
            <li>Controller: EM-260</li>
            <li>
              Batteries: SPIM08HP (in a 20s6p configuration, making 72V, 48AH,
              with a max continuous output of 200A)
            </li>
            <li>BMS</li>
            <li>Live axle kit</li>
            <li>The bearings are UCP 206</li>
            <li>Steering kit</li>
            <li>Rear suspension: RFY Shocks</li>
            <li>Front suspension kit</li>
            <li>
              Front hubs (I'm using ATV-style wheels: 4 stud, 110mm diameter
              bolt pattern)
            </li>
            <li>
              Wheels/tires (I got on Facebook Marketplace. They're pretty
              standard 4x110mm ATV wheels)
            </li>
            <li>
              Seat: I'm planning on 3d-printing a seat (a draft of it is
              included in the Onshape file) by printing it in multiple parts and
              connecting them with M3 all-thread and welding them together with
              a soldering iron.
            </li>
          </ul>
        </div>
        <p className="intro">
          I plan on ordering the custom hinge parts and the custom motor mount
          from an online website that offers plasma cutting.
        </p>
      </div>
      <div className="divider"></div>
      <h2 className="header">Astrophotography Project</h2>
      <div className="intro-block">
        <p className="intro">
          These are photos that I took as part of an Astrophotography workshop
          in Maine in the summer of 2023. The program was led by Babak Tafreshi,
          one of the leading night sky photographers. I took and processed all
          of these images myself using a Canon Rebel T7 and a Canon EOS 5D Mark
          III, with a fisheye lens and a 16-35mm telescope lens that I borrowed
          from my friend (Alfonso).
        </p>
      </div>
      <div className="fill">
        <img src="/dipper-trail.jpg" className="image" alt=""></img>
        <p className="fill-description">
          This is a composite star trail photo of the sky. You can (if you look
          closely) see Ursa Major (the Big Dipper) in the center at the bottom
          of the sky, and the stars rotating around Polaris in the upper right.
          To create this effect, I captured 407 exposures over about 3 hours,
          and converted all of my raw photos into TIFFs, and then stacked them
          using a computer program called StarStax. I then removed satellite
          streaks from the image using Photoshop.
        </p>
      </div>
      <div className="fill">
        <img src="/moon.jpg" className="image" alt=""></img>
        <p className="fill-description">
          This is a picture of the Moon, Jupiter, and Pleiades. I had to stay up
          late for this one to wait for the moon to rise over the trees. This
          was shot with the 5D Mark III and the fisheye lens at 30 seconds.
        </p>
      </div>
      <div className="fill">
        <img src="/moon-trail.jpg" className="image" alt=""></img>
        <p className="fill-description">
          This is a composite star trail photo of the same frame of the above
          photo over a couple hours. You can see the Moon rising. I had gone to
          bed as the Moon had started to rise and set my camera to capture
          30-second exposures on repeat for 3 hours. Since the 5D Mark III has a
          full sensor, it distorts the real image when used with the fisheye
          lens, so you can see the ellipse around Polaris is not perfectly
          circular, which looks really cool. The warping also makes for a sort
          of gradient of density of stars, with the concentric trails being
          closer together in the middle of the frame and farther apart towards
          the edges. Since I wasn't able to adjust the exposure to make the Moon
          clearer while I was gone, it produced this cool effect, making the
          moon seem like it is a flame in the sky.
        </p>
      </div>
      <div className="fill">
        <img src="/long.jpg" className="image" alt=""></img>
        <p className="fill-description">
          This is a single 30-minute exposure of the sky, with Polaris at the
          top of the frame. Framing Polaris off center makes the image less
          symmetrical and a little more interesting in my opinion. Since it's
          not a composite like the ones above, it doesn't look as clear, but it
          is at least less processed and more pure in a sense.
        </p>
      </div>
      <div className="fill">
        <img src="/eddie-exposed.jpg" className="image" alt=""></img>
        <p className="fill-description">
          This is a light painting of me with an artistic representation of my
          dog, Eddie, in front of the Milky Way. It is a 30-second exposure.
          This one took me a few tries. It's like a very advanced selfie where I
          had to use a flashlight in the dark to draw a picture of my dog while
          my shutter was open. The first couple of tries were ok, but his legs
          were too long. This one came out well. I drew Eddie then illuminated
          myself for half a second with my phone's flashlight. If you look
          closely, you can see that my left knee is very bright, because that is
          where I was hiding the flashlight.
        </p>
      </div>
      {/* <div className="blocks">
        <div>
          <img src="/eddie-exposed.jpg" className="image"></img>
          <p className="description">
            This is a light painting of me with an artistic representation of my dog, Eddie, in front of the Milky Way. It is a 30-second exposure. This one took me a few tries. It's like a very advanced selfie where I had to use a flashlight in the dark to draw a picture of my dog while my shutter was open. The first couple of tries were ok, but his legs were too long. This one came out well. I drew Eddie then illuminated myself for half a second with my phone's flashlight. If you look closely, you can see that my left knee is very bright, because that is where I was hiding the flashlight.
          </p>
        </div>
        <div>
          <img src="/george.jpg" className="image"></img>
          <p className="description">
            This is a 30-minute exposure of the sky, with Polaris at the top of the frame. Framing Polaris off center makes the image less symmetrical and a little more interesting in my opinion.
          </p>
        </div>
      </div> */}
      <div className="space"></div>
      <div className="black">
        <div className="about">
          <div>
            <h1 className="about-heading">About Me</h1>
            <p className="about-text">
              I am a Physics student at Skidmore College. I have otherwise lived
              in Washington, DC my whole life. I am driven by trying to
              understand things and solving problems ... Physics is one of my
              passions. I learned astrophotography to be able to capture the
              beauty of the universe and learn about it.
            </p>
          </div>
          <img src="/portrait.jpeg" className="portrait" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
