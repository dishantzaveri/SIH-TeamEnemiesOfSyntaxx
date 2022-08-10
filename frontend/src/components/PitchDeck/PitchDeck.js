import React from "react";
import pptxgen from "pptxgenjs";
import { Slide, Presentation, render, Image, Shape, Text } from "react-pptx";
export const PitchDeck = () => {
  let pptx = new pptxgen();
  let slide = pptx.addSlide();

  const downloadPPT = () => {
    slide.addText("React Demo!", {
      x: 1,
      y: 0.5,
      w: "80%",
      h: 1,
      fontSize: 36,
      align: "center",
      fill: { color: "D3E3F3" },
      color: "008899",
    });

    slide.addText("PpptxGenJS version:", {
      x: 0,
      y: 5.3,
      w: "100%",
      h: 0.33,
      align: "center",
      fill: { color: "E1E1E1" },
      color: "A1A1A1",
    });
    pptx.writeFile({ fileName: "pptxgenjs-demo-react.pptx" });
  };
  return (
    <>
      <button onClick={() => downloadPPT()}>Download PPT</button>
    </>
  );
};
