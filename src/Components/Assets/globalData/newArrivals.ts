import img25s_1 from "./../images/item25s_1.jpg"
import img25s_2 from "./../images/item25s_2.jpg"
import img25b_1 from "./../images/item25b_1.jpg"
import img25b_2 from "./../images/item25b_2.jpg"
import img26s_1 from "./../images/item26s_1.jpg"
import img26s_2 from "./../images/item26s_2.jpg"
import img26b_1 from "./../images/item26b_1.jpg"
import img26b_2 from "./../images/item26b_2.jpg"
import img27s_1 from "./../images/item27s_1.jpg"
import img27s_2 from "./../images/item27s_2.jpg"
import img27s_3 from "./../images/item27s_3.jpg"
import img27b_1 from "./../images/item27b_1.jpg"
import img27b_2 from "./../images/item27b_2.jpg"
import img27b_3 from "./../images/item27b_3.jpg"
import img28s_1 from "./../images/item28s_1.jpg"
import img28s_2 from "./../images/item28s_2.jpg"
import img28s_3 from "./../images/item28s_3.jpg"
import img28b_1 from "./../images/item28b_1.jpg"
import img28b_2 from "./../images/item28b_2.jpg"
import img28b_3 from "./../images/item28b_3.jpg"

let newArrivals = [
  {
    id: 25,
    name: "Flap Over Casual Bag",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Jelly Bean", img: img25s_1, color: '#d76a49'},
      {id: 2, name: "Deer", img: img25s_2, color: '#c07e68'},
    ],
    newPrice: 107,
    oldPrice: 110,
    bigImgs: [img25b_1, img25b_2],
    sizes: ["S", "M", "L", "ML"],
    color: "Orange",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 26,
    name: "Winter Knee Length Belt Coat",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Dust Storm", img: img26s_1, color: '#e0cdc7'},
      {id: 2, name: "English Lavender", img: img26s_2, color: '#ae8e9d'},
    ],
    newPrice: 91,
    oldPrice: 98,
    bigImgs: [img26b_1, img26b_2],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 27,
    name: "Double Handle Tote Bag",
    category: "Women",
    smallImgs: [
      {id: 1, name: "Water", img: img27s_1, color: '#d0eff4'},
      {id: 2, name: "Chinese White", img: img27s_2, color: '#dbe3e6'},
      {id: 3, name: "Ash Gray", img: img27s_3, color: '#adbeb6'},
    ],
    newPrice: 100,
    oldPrice: 102,
    bigImgs: [img27b_1, img27b_2, img27b_3],
    sizes: ["S", "M", "L", "ML"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 28,
    name: "Winter Wear Woolen Scarf",
    category: "Men",
    smallImgs: [
      {id: 1, name: "Strikemaster ", img: img28s_1, color: '#9c698a'},
      {id: 2, name: "Granny Smith ", img: img28s_2, color: '#899d9b'},
      {id: 3, name: "Sandrift", img: img28s_3, color: '#b4907f'},
    ],
    newPrice: 215,
    oldPrice: 230,
    bigImgs: [img28b_1, img28b_2, img28b_3],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    info: {style: "casual", composition: "cotton", weight: "0.3kg", dimensions: "80 × 30 × 120 cm",},
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
];

export default newArrivals;
