import React from "react";
import { useState } from "react";
import "./App.css";

export function HomePage() {
  return (
    <div className="App">
      <h1 className="header">
        <span className="clip">George Bankoff</span>
      </h1>
      <p>
        I made this website using React to post photos that I took on a trip to
        Maine with Babak Tafreshi.
      </p>
      <div className="spaced">
        <div>
          <img src="/dipper-trail.webp" className="wanderer"></img>
          <p className="description">
            This is a composite star trail photo of the sky. You can see Ursa
            Major (the Big Dipper) on the bottom left, and the stars rotating
            around Polaris in the upper right.
          </p>{" "}
        </div>
        <div>
          <img src="/moon.webp" className="wanderer"></img>
          <p className="description">
            This is a is a picture of the Moon, Jupiter, and Pleiades.
          </p>
        </div>
        <div>
          <img src="/moon-trail.webp" className="wanderer"></img>
          <p className="description">
            This is a composite star trail photo of the same frame of the
            previous photo over a couple hours. You can see the Moon rising. I
            had gone to bed before the Moon had started to rise, so I wasn't
            able to adjust the exposure to make the Moon clearer.
          </p>
        </div>
        <div>
          <img src="/long.webp" className="wanderer"></img>
          <p className="description">
            This is a 30-minute exposure of the sky, with Polaris just about in
            the center of the frame.
          </p>
        </div>
        <div>
          <img src="/eddie-exposed.webp" className="wanderer"></img>
          <p className="description">
            This is a light painting of me with an artistic representation of my
            dog, Eddie, in front of the Milky Way. It is a 30-second exposure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
