"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import Rating from "@mui/material/Rating";
import Image from "next/image";
export default function CarouselComponent({ images }) {
  return (
    <Carousel
      swipe
      duration={500}
      animation="slide"
      fullHeightHover
      navButtonsAlwaysVisible
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        height: "380px",
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="flex items-center justify-center mt-2">
          <div className="w-full  p-4 text-center">
            <Image src={image.imageURL} alt="Image of a Computer" width={400} height={200} style={{ borderRadius: "20px" }} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
