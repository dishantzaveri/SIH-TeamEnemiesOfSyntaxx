import React from "react";
import pptxgen from "pptxgenjs";
import { Slide, Presentation, render, Image, Shape, Text } from "react-pptx";
import { fields, format } from "../../app/pitchdeckFields";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const getStyle = (field) => {
  switch (field) {
    case "problems":
      return [
        {
          constant: 1,
          row: false,
          style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 26,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "black",
            // path:"",
            
          }
        },
        {
          constant: 1,
          row: false,
          style: {
            x: 1,
            y: 2,
            w: "80%",
            h: 1,
            fontSize: 18,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "FFFFFF",
          }
        }
      ];
    case "solution":
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "#3c3c3c" },
            color: "#b4b4b4",
          }
        },
      ]
    case "marketValidation":
      return [
        {
          constant: 5,
          row: true,
          style: {
            x: 2.5,
            y: 2.5,
            w: "20%", 
            fontSize: 36,
            align: "center",
            color: "black",
          }
        },
        {
          constant: 5,
          row: true,
          style: {
            x: 2.5,
            y: 3.5,
            w: "20%",  
            fontSize: 18,
            align: "center",     
            color: "black",
          }
        }
      ]
    case "marketSize":
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2,
            w: 2,
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "008899" },
            color: "black",
          }
        },
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 4,
            w: "20%",
            h: 2,
            fontSize: 17,
            align: "center",
            color: "black",
          }
        },
      ]
    case 'product':
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "30%",
            h: 1.5,
            fontSize: 25,
            align: "center",
            fill: { color: "#3c3c3c" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
          }
        },
      ]
    case 'businessModel':
      return [
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
      ]
    case 'competition':
      return [
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
      ]
    case 'competitiveAdvantage':
      return [
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
        {
          constant: 3,
          row: true,
          style: {
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
          }
        },
      ]
    default:
      break;
  }
}

export const PitchDeck = () => {
  let pptx = new pptxgen();
  const formData = useSelector(state => state.pitchdeck);
  const downloadPPT = () => {
    let slides = []
    Object.keys(format).forEach((i) => {
      let object = {}
      object[i] = pptx.addSlide();
      slides.push(object)
    })
    slides.forEach(x => {
      let slide = (Object.values(x)[0])

      if(Object.keys(x)[0]!=="Info") {
        // slide.addImage({ path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg", x: 0.27, y: 2.8, w: 2.97, h: 2.9 });
        console.log(Object.keys(x));
        if(Object.keys(x)[0]==="Problems"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.NO-_Db3m4SCn2ZZKXf9XawHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        } else if(Object.keys(x)[0]==="Solution"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.NO-_Db3m4SCn2ZZKXf9XawHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        // }
        // else if(Object.keys(x)[0]==="Market Validation"){
        //   slide.addImage({ path: "https://cdn0.iconfinder.com/data/icons/vector-huge-black-icons/60/3d_bar_chart-512.png",  x: 0, y: 2, w: 2, h: 2 });
        }else if(Object.keys(x)[0]==="Market Validation"){
          slide.addImage({ path: "https://image.shutterstock.com/image-photo/tunnel-columns-black-white-photo-260nw-212145013.jpg",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Market Size"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.AvCM8d6s-F07YbPxpP-9pQHaEM?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Product"){
          slide.addImage({ path: "https://th.bing.com/th/id/R.a453f8c7759d67e06359349825853753?rik=10LjBhJuw%2bk4%2bg&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-10%2fGrey-Abstract-Widescreen-Wallpapers-28669.jpg&ehk=ig6I%2brX3%2bH9sRCfOgtPXfvN7QVq%2fIaNG1wHVbn2h6zE%3d&risl=&pid=ImgRaw&r=0",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Business Model"){
          slide.addImage({ path: "https://th.bing.com/th/id/R.c7d384cc668f6a070e5f5e0c33f388d3?rik=76ozJMcfXug8uQ&riu=http%3a%2f%2ffreedesignfile.com%2fupload%2f2017%2f06%2fBlack-with-whtie-and-gray-background-vector.jpg&ehk=e6dboONk%2f80GrL2a8NwbE4vUNP1zKa%2bbsT%2fF77sv%2bnE%3d&risl=&pid=ImgRaw&r=0",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Competition"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.-rO7NC0JPex5e_5f2AWJ8QHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Competitive Advantages"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.-rO7NC0JPex5e_5f2AWJ8QHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }
        slide.addText(Object.keys(x)[0], {
          x: 1,
          y: 0.5,
          w: "80%",
          h: 1,
          fontSize: 36,
          align: "center",
          fill: { color: "black" },
          color: "#FFFFFF",
        })
      } else{ slide.addImage({ path: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/flickr/12606903574_6c726bd69d_o.jpg?resize=717&ssl=1", x: 0, y: 0, w: 10, h: 6 });
      }
      format[Object.keys(x)[0]].forEach(y => {
        Object.values(fields).filter(z => z.id === y).forEach(z => {
          // console.log(z, formData[z.id], Array.isArray(formData[z.id]))
          if(Array.isArray(formData[z.id])) {
            // console.log(formData[z.id])
            formData[z.id].forEach((a, i) => {
              // console.log(z.id)
              const style = getStyle(z.id)
              // console.log(Object.values(a))
              if(Object.values(a).length > 1) {
                Object.values(a).forEach((b, j) => {
                  // console.log(style)
                  let z = {
                    ...style[j].style,
                    y: !style[j].row ? style[j].style.y + style[j].constant * i : style[j].style.y,
                    x: style[j].row ? style[j].style.x + style[j].constant * i : style[j].style.x,
                  }
                  // console.log(z)
                  slide.addText(b, z)
                })
              } else {  
                let z = {
                  ...style[0].style,
                  y: !style[0].row ? style[0].style.y + style[0].constant * i : style[0].style.y,
                  x: style[0].row ? style[0].style.x + style[0].constant * i : style[0].style.x,
                }
                console.log(z)
                slide.addText(Object.values(a)[0], z)
              }
            })
          } else slide.addText(formData[z.id], z['style'])
        })
      })
    })
    // slide 1
    // slide.addText("Name of Company", {
    //   x: 1,
    //   y: 1.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "e4eef7" },
    //   color: "008899",
    // });
    // slide.addText("Description", {
    //   x: 1,
    //   y: 2.8,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 23,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });

    // // slide 2
    // slide2.addText("Problems", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide2.addText("1. Problem 1", {
    //   x: 1,
    //   y: 1.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 26,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide2.addText("Description about problem 1", {
    //   x: 1,
    //   y: 2,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 18,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide2.addText("2. Problem 2", {
    //   x: 1,
    //   y: 2.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 26,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide2.addText("Description about problem 2", {
    //   x: 1,
    //   y: 3,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 18,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide2.addText("3. Problem 3", {
    //   x: 1,
    //   y: 3.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 26,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide2.addText("Description about problem 3", {
    //   x: 1,
    //   y: 4,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 18,
    //   align: "left",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide2.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });

    // // slide 3
    // slide3.addText("Solutions", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide3.addText("Description about the solution", {
    //   x: 1,
    //   y: 1.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide3.addText("Solution 1 box", {
    //   x: 1,
    //   y: 2.5,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide3.addText("Solution 2 box", {
    //   x: 4,
    //   y: 2.5,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide3.addText("Solution 3 box", {
    //   x: 7,
    //   y: 2.5,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide3.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });

    // // slide 4
    // slide4.addText("Market Validation", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide4.addText("630,000", {
    //   x: 1.5,
    //   y: 2.5,
    //   w: "20%", 
    //   fontSize: 36,
    //   align: "center",
    //   color: "008899",
    // });
    // slide4.addText("17,000", {
    //   x: 6.5,
    //   y: 2.5,
    //   w: "20%",
    //   fontSize: 36,
    //   align: "center",
    //   color: "008899",
    // });

    // slide4.addText("some description", {
    //   x: 1.5,
    //   y: 3.5,
    //   w: "20%",  
    //   fontSize: 18,
    //   align: "center",     
    //   color: "000000",
    // });
    // slide4.addText("some description", {
    //   x: 6.5,
    //   y: 3.5,
    //   w: "20%",     
    //   fontSize: 18,
    //   align: "center",    
    //   color: "000000",
    // });

    // // slide 5
    // slide5.addText("Market Size", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide5.addText("1.9 Billion+", {
    //   x: 1,
    //   y: 2,
    //   w: 2,
    //   h: 2,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "008899" },
    //   color: "ffffff",
    // });
    // slide5.addText("532M", {
    //   x: 4.5,
    //   y: 2.5,
    //   w: 1.5,
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "008899" },
    //   color: "ffffff",
    // });
    // slide5.addText("10.6M", {
    //   x: 7.5,
    //   y: 3,
    //   w: 1,
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "008899" },
    //   color: "ffffff",
    // });
    // slide5.addText("some description", {
    //   x: 1,
    //   y: 3.9,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 17,
    //   align: "center",
    //   color: "000000",
    // });
    // slide5.addText("some description", {
    //   x: 4.2,
    //   y: 3.9,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 17,
    //   align: "center",
    //   color: "000000",
    // });
    // slide5.addText("some description about it", {
    //   x: 7,
    //   y: 3.9,
    //   w: "20%",
    //   h: 2,
    //   fontSize: 17,
    //   align: "center",
    //   color: "000000",
    // });

    // // slide 6
    // slide6.addText("Product", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide6.addText("Description about the Product", {
    //   x: 1,
    //   y: 1.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide6.addText("Image 1", {
    //   x: 1,
    //   y: 2.5,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    //   // shadow:"000000"
    // });
    // slide6.addText("Image 2", {
    //   x: 3.5,
    //   y: 3,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide6.addText("Image 3", {
    //   x: 6,
    //   y: 3.5,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide6.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });

    // // slide 7
    // slide7.addText("Business Model", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide7.addText("Description about the Business Model", {
    //   x: 1,
    //   y: 1.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide7.addText("10M", {
    //   x: 1,
    //   y: 2.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    //   // shadow:"000000"
    // });
    // slide7.addText("Share of Market", {
    //   x: 1,
    //   y: 3.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 20,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    //   border:"blue",
    //   // shadow:"000000"
    // });
    // slide7.addText("$20", {
    //   x: 4,
    //   y: 2.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide7.addText("Average Fee", {
    //   x: 4,
    //   y: 3.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 20,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    //   border:"blue",
    // });
    // slide7.addText("$200M", {
    //   x: 7,
    //   y: 2.5,
    //   w: "20%",
    //   h: 1.2,
    //   fontSize: 25,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   borderRadius:"50%",
    //   color: "008899",
    //   border:"blue",
    // });
    // slide7.addText("REVENUE", {
    //   x: 7,
    //   y: 3.5,
    //   w: "20%",
    //   h: 1.2,
    //   fontSize: 20,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   borderRadius:"50%",
    //   color: "000000",
    //   border:"blue",
    // });
    // slide7.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });


    // // slide 8
    // slide8.addText("Market Adoption", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide8.addText("Events", {
    //   x: 0.5,
    //   y: 1.5,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    //   // shadow:"000000"
    // });
    // slide8.addText("Events Desc", {
    //   x: 0.5,
    //   y: 3,
    //   w: "30%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    //   border:"blue",
    //   // shadow:"000000"
    // });
    // slide8.addText("Partnerships", {
    //   x: 3.5,
    //   y: 1.5,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide8.addText("Partnerships Desc", {
    //   x: 3.5,
    //   y: 3,
    //   w: "30%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    //   border:"blue",
    // });
    // slide8.addText("Craigslist", {
    //   x: 6.5,
    //   y: 1.5,
    //   w: "30%",
    //   h: 1.5,
    //   fontSize: 25,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide8.addText("Image", {
    //   x: 7.5,
    //   y: 3,
    //   w: "10%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "000000",
    //   border:"blue",
    // });
    // slide8.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });


    // // slide 9
    // slide9.addText("Competition", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide9.addText("Image 1", {
    //   x: 1,
    //   y: 2,
    //   w: "10%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   // shadow:"000000"
    // });
    // slide9.addText("Expensive", {
    //   x: 2.2,
    //   y: 2,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   // shadow:"000000"
    // });
    // slide9.addText("Image 2", {
    //   x: 6,
    //   y: 2,
    //   w: "10%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Expensive", {
    //   x: 7.2,
    //   y: 2,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Image 3", {
    //   x: 1,
    //   y: 3.5,
    //   w: "10%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Expensive", {
    //   x: 2.2,
    //   y: 3.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Image 4", {
    //   x: 6,
    //   y: 3.5,
    //   w: "10%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Expensive", {
    //   x: 7.2,
    //   y: 3.5,
    //   w: "20%",
    //   h: 1,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "008899",
    //   border:"blue",
    // });
    // slide9.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });


    // // slide 10
    // slide10.addText("Competitive Advantages", {
    //   x: 1,
    //   y: 0.5,
    //   w: "80%",
    //   h: 1,
    //   fontSize: 36,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 1 box", {
    //   x: 1,
    //   y: 2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 1 desc", {
    //   x: 1,
    //   y: 2.7,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Adv 2 box", {
    //   x: 4,
    //   y: 2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 2 desc", {
    //   x: 4,
    //   y: 2.7,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Adv 3 box", {
    //   x: 7,
    //   y: 2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 3 desc", {
    //   x: 7,
    //   y: 2.7,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Adv 4 box", {
    //   x: 1,
    //   y: 3.5,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 4 desc", {
    //   x: 1,
    //   y: 4.2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Adv 5 box", {
    //   x: 4,
    //   y: 3.5,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 5 desc", {
    //   x: 4,
    //   y: 4.2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Adv 6 box", {
    //   x: 7,
    //   y: 3.5,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 20,
    //   align: "center",
    //   fill: { color: "D3E3F3" },
    //   color: "008899",
    // });
    // slide10.addText("Adv 6 desc", {
    //   x: 7,
    //   y: 4.2,
    //   w: "20%",
    //   h: 0.5,
    //   fontSize: 15,
    //   align: "center",
    //   // fill: { color: "D3E3F3" },
    //   color: "000000",
    // });
    // slide10.addText("Enemies Of Syntax", {
    //   x: 0,
    //   y: 5.3,
    //   w: "100%",
    //   h: 0.33,
    //   align: "center",
    //   fill: { color: "E1E1E1" },
    //   color: "A1A1A1",
    // });


    // end 
    pptx.writeFile({ fileName: "pptxgenjs-demo-react.pptx" });
  };
  return (
    <>
      <Link to='/pitchdeck-form'>back</Link>
      <button onClick={() => downloadPPT()}>Download PPT</button>
    </>
  );
};
