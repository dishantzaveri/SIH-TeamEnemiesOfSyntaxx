import React from "react";
import pptxgen from "pptxgenjs";
import { Slide, Presentation, render, Image, Shape, Text } from "react-pptx";
export const PitchDeck = () => {
  let pptx = new pptxgen();
  let slide = pptx.addSlide();
  let slide2 = pptx.addSlide();
  let slide3 = pptx.addSlide();
  let slide4 = pptx.addSlide();
  let slide5 = pptx.addSlide();
  let slide6 = pptx.addSlide();
  let slide7 = pptx.addSlide();
  let slide8 = pptx.addSlide();
  let slide9 = pptx.addSlide();
  let slide10 = pptx.addSlide();


  const downloadPPT = () => {
    // slide 1
    slide.addText("Name of Company", {
      x: 1,
      y: 1.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "e4eef7" },
      color: "008899",
    });
    slide.addText("Description", {
      x: 1,
      y: 2.8,
      w: "80%",
      h: 1,
      fontSize: 23,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });

    // slide 2
    slide2.addText("Problems", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide2.addText("1. Problem 1", {
      x: 1,
      y: 1.5,
      w: "80%",
      h: 1,
      fontSize: 26,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide2.addText("Description about problem 1", {
      x: 1,
      y: 2,
      w: "80%",
      h: 1,
      fontSize: 18,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide2.addText("2. Problem 2", {
      x: 1,
      y: 2.5,
      w: "80%",
      h: 1,
      fontSize: 26,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide2.addText("Description about problem 2", {
      x: 1,
      y: 3,
      w: "80%",
      h: 1,
      fontSize: 18,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide2.addText("3. Problem 3", {
      x: 1,
      y: 3.5,
      w: "80%",
      h: 1,
      fontSize: 26,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide2.addText("Description about problem 3", {
      x: 1,
      y: 4,
      w: "80%",
      h: 1,
      fontSize: 18,
      align: "left",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide2.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });

    // slide 3
    slide3.addText("Solutions", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide3.addText("Description about the solution", {
      x: 1,
      y: 1.5,
      w: "80%",
      h: 1,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide3.addText("Solution 1 box", {
      x: 1,
      y: 2.5,
      w: "20%",
      h: 2,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide3.addText("Solution 2 box", {
      x: 4,
      y: 2.5,
      w: "20%",
      h: 2,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide3.addText("Solution 3 box", {
      x: 7,
      y: 2.5,
      w: "20%",
      h: 2,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide3.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });

    // slide 4
    slide4.addText("Market Validation", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide4.addText("630,000", {
      x: 1.5,
      y: 2.5,
      w: "20%", 
      fontSize: 36,
      align: "center",
      color: "008899",
    });
    slide4.addText("17,000", {
      x: 6.5,
      y: 2.5,
      w: "20%",
      fontSize: 36,
      align: "center",
      color: "008899",
    });

    slide4.addText("some description", {
      x: 1.5,
      y: 3.5,
      w: "20%",  
      fontSize: 18,
      align: "center",     
      color: "000000",
    });
    slide4.addText("some description", {
      x: 6.5,
      y: 3.5,
      w: "20%",     
      fontSize: 18,
      align: "center",    
      color: "000000",
    });

    // slide 5
    slide5.addText("Market Size", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide5.addText("1.9 Billion+", {
      x: 1,
      y: 2,
      w: 2,
      h: 2,
      fontSize: 25,
      align: "center",
      fill: { color: "008899" },
      color: "ffffff",
    });
    slide5.addText("532M", {
      x: 4.5,
      y: 2.5,
      w: 1.5,
      h: 1.5,
      fontSize: 25,
      align: "center",
      fill: { color: "008899" },
      color: "ffffff",
    });
    slide5.addText("10.6M", {
      x: 7.5,
      y: 3,
      w: 1,
      h: 1,
      fontSize: 25,
      align: "center",
      fill: { color: "008899" },
      color: "ffffff",
    });
    slide5.addText("some description", {
      x: 1,
      y: 3.9,
      w: "20%",
      h: 2,
      fontSize: 17,
      align: "center",
      color: "000000",
    });
    slide5.addText("some description", {
      x: 4.2,
      y: 3.9,
      w: "20%",
      h: 2,
      fontSize: 17,
      align: "center",
      color: "000000",
    });
    slide5.addText("some description about it", {
      x: 7,
      y: 3.9,
      w: "20%",
      h: 2,
      fontSize: 17,
      align: "center",
      color: "000000",
    });

    // slide 6
    slide6.addText("Product", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide6.addText("Description about the Product", {
      x: 1,
      y: 1.5,
      w: "80%",
      h: 1,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide6.addText("Image 1", {
      x: 1,
      y: 2.5,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
      // shadow:"000000"
    });
    slide6.addText("Image 2", {
      x: 3.5,
      y: 3,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide6.addText("Image 3", {
      x: 6,
      y: 3.5,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide6.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });

    // slide 7
    slide7.addText("Business Model", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide7.addText("Description about the Business Model", {
      x: 1,
      y: 1.5,
      w: "80%",
      h: 1,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide7.addText("10M", {
      x: 1,
      y: 2.5,
      w: "20%",
      h: 1,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
      // shadow:"000000"
    });
    slide7.addText("Share of Market", {
      x: 1,
      y: 3.5,
      w: "20%",
      h: 1,
      fontSize: 20,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
      border:"blue",
      // shadow:"000000"
    });
    slide7.addText("$20", {
      x: 4,
      y: 2.5,
      w: "20%",
      h: 1,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide7.addText("Average Fee", {
      x: 4,
      y: 3.5,
      w: "20%",
      h: 1,
      fontSize: 20,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
      border:"blue",
    });
    slide7.addText("$200M", {
      x: 7,
      y: 2.5,
      w: "20%",
      h: 1.2,
      fontSize: 25,
      align: "center",
      fill: { color: "D3E3F3" },
      borderRadius:"50%",
      color: "008899",
      border:"blue",
    });
    slide7.addText("REVENUE", {
      x: 7,
      y: 3.5,
      w: "20%",
      h: 1.2,
      fontSize: 20,
      align: "center",
      // fill: { color: "D3E3F3" },
      borderRadius:"50%",
      color: "000000",
      border:"blue",
    });
    slide7.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });


    // slide 8
    slide8.addText("Market Adoption", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide8.addText("Events", {
      x: 0.5,
      y: 1.5,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
      // shadow:"000000"
    });
    slide8.addText("Events Desc", {
      x: 0.5,
      y: 3,
      w: "30%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
      border:"blue",
      // shadow:"000000"
    });
    slide8.addText("Partnerships", {
      x: 3.5,
      y: 1.5,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide8.addText("Partnerships Desc", {
      x: 3.5,
      y: 3,
      w: "30%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
      border:"blue",
    });
    slide8.addText("Craigslist", {
      x: 6.5,
      y: 1.5,
      w: "30%",
      h: 1.5,
      fontSize: 25,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide8.addText("Image", {
      x: 7.5,
      y: 3,
      w: "10%",
      h: 1,
      fontSize: 15,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "000000",
      border:"blue",
    });
    slide8.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });


    // slide 9
    slide9.addText("Competition", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide9.addText("Image 1", {
      x: 1,
      y: 2,
      w: "10%",
      h: 1,
      fontSize: 15,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      // shadow:"000000"
    });
    slide9.addText("Expensive", {
      x: 2.2,
      y: 2,
      w: "20%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      // shadow:"000000"
    });
    slide9.addText("Image 2", {
      x: 6,
      y: 2,
      w: "10%",
      h: 1,
      fontSize: 15,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Expensive", {
      x: 7.2,
      y: 2,
      w: "20%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Image 3", {
      x: 1,
      y: 3.5,
      w: "10%",
      h: 1,
      fontSize: 15,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Expensive", {
      x: 2.2,
      y: 3.5,
      w: "20%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Image 4", {
      x: 6,
      y: 3.5,
      w: "10%",
      h: 1,
      fontSize: 15,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Expensive", {
      x: 7.2,
      y: 3.5,
      w: "20%",
      h: 1,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "008899",
      border:"blue",
    });
    slide9.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });


    // slide 10
    slide10.addText("Competitive Advantages", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 1 box", {
      x: 1,
      y: 2,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 1 desc", {
      x: 1,
      y: 2.7,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Adv 2 box", {
      x: 4,
      y: 2,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 2 desc", {
      x: 4,
      y: 2.7,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Adv 3 box", {
      x: 7,
      y: 2,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 3 desc", {
      x: 7,
      y: 2.7,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Adv 4 box", {
      x: 1,
      y: 3.5,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 4 desc", {
      x: 1,
      y: 4.2,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Adv 5 box", {
      x: 4,
      y: 3.5,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 5 desc", {
      x: 4,
      y: 4.2,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Adv 6 box", {
      x: 7,
      y: 3.5,
      w: "20%",
      h: 0.5,
      fontSize: 20,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });
    slide10.addText("Adv 6 desc", {
      x: 7,
      y: 4.2,
      w: "20%",
      h: 0.5,
      fontSize: 15,
      align: "center",
      // fill: { color: "D3E3F3" },
      color: "000000",
    });
    slide10.addText("Enemies Of Syntax", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });


    // end 
    pptx.writeFile({ fileName: "pptxgenjs-demo-react.pptx" });
  };
  return (
    <>
      <button onClick={() => downloadPPT()}>Download PPT</button>
    </>
  );
};
