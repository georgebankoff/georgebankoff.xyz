import React from "react";
// import Image from "https://esm.sh/react-image-enlarger";
import "./App.css";

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
    <h1 className="header">
        <span className="clip">George Bankoff</span>
      </h1>
      <div className="spaced">
        <div>
          <p className="intro">
          I made this website using React to post photos that I took as part of an Astrophotography workshop in Maine, which was led by Babak Tafreshi, one of the leading night sky photographers. I took all of these images myself using a Canon Rebel T7 and a Canon EOS 5D Mark III, with a fisheye lens and a 16-35mm telescope lens that I borrowed from my friend (Alfonso).
          </p>
        </div>
        <div>
          <img src="/dipper-trail.jpg" className="image"></img>
          <p className="description">
          This is a composite star trail photo of the sky. You can see Ursa Major (the Big Dipper) in the center at the bottom of the sky, and the stars rotating around Polaris in the upper right. To create this effect, I captured 407 exposures over about 3 hours, and converted all of my raw photos into TIFFs, and then stacked them using a computer program called StarStax. I then removed satellite streaks from the image using Photoshop.
          </p>
        </div>
        <div>
          <img src="/moon.jpg" className="image"></img>
          <p className="description">
          This is a picture of the Moon, Jupiter, and Pleiades. I had to stay up late for this one to wait for the moon to rise over the trees. This was shot with the 5D Mark III and the fisheye lens at 30 seconds.
          </p>
        </div>
        <div>
          <img src="/moon-trail.jpg" className="image"></img>
          <p className="description">
            This is a composite star trail photo of the same frame of the previous photo over a couple hours. You can see the Moon rising. I had gone to bed as the Moon had started to rise and set my camera to capture 30-second exposures on repeat for 3 hours. Since the 5D Mark III has a full sensor, it distorts the real image when used with the fisheye lens, so you can see the ellipse around Polaris is not perfectly circular, which looks really cool. The warping also makes for a sort of gradient of density of stars, with the concentric trails being closer together in the middle of the frame and farther apart towards the edges. Since I wasn't able to adjust the exposure to make the Moon clearer while I was gone, it produced this cool effect, making the moon seem like it is a flame in the sky.
          </p>
        </div>
        <div>
          <img src="/long.jpg" className="image"></img>
          <p className="description">
            This is a 30-minute exposure of the sky, with Polaris at the top of the frame. Framing Polaris off center makes the image less symmetrical and a little more interesting in my opinion.
          </p>
        </div>
        <div>
          <img src="/eddie-exposed.jpg" className="image"></img>
          <p className="description">
            This is a light painting of me with an artistic representation of my dog, Eddie, in front of the Milky Way. It is a 30-second exposure. This one took me a few tries. It's like a very advanced selfie where I had to use a flashlight in the dark to draw a picture of my dog while my shutter was open. The first couple of tries were ok, but his legs were too long. This one came out well. I drew Eddie then illuminated myself for half a second wiht my phone's flashlight. If you look closely, you can see that my left knee is very bright, because that is where I was hiding the flashlight.
          </p>
        </div>
      </div>
      <div className="black">
      <div className="about">
        <div>
          <h1 className="about-heading">About Me</h1>
          <p className="about-text">
            I am a high school student at Sidwell Friends school. I have lived in DC my whole life. I am driven by trying to understand things ... Physics, and specifically astrophysics, is one of my passions. I learned photography to be able to capture the beauty of the universe and learn about it.
          </p>
        </div>
        <img src="/portrait.jpeg" className = "portrait"></img>
      </div>
      </div>
    </div>
  );
}

export default HomePage;