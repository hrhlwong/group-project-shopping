import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Casual Striped Blouse with Peplum Hem",
    category: "women",
    image: p1_img,
    new_price: 300.0,
    old_price: 580.5,
    description: "A stylish striped blouse featuring flutter sleeves and a peplum hem, perfect for casual outings."
  },
  {
    id: 2,
    name: "Elegant Overlap Collar Top",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "An elegant top with a striped pattern and overlap collar, designed for comfort and style."
  },
  {
    id: 3,
    name: "Striped Summer Flutter Blouse",
    category: "women",
    image: p3_img,
    new_price: 160.0,
    old_price: 200.5,
    description: "A lightweight striped blouse with flutter sleeves, ideal for summer days."
  },
  {
    id: 4,
    name: "Sophisticated Peplum Blouse",
    category: "women",
    image: p4_img,
    new_price: 120.0,
    old_price: 150.0,
    description: "A sophisticated blouse featuring a peplum hem and a flattering striped design."
  },
  {
    id: 5,
    name: "Chic Overlap Collar Blouse",
    category: "women",
    image: p5_img,
    new_price: 45.0,
    old_price: 120.5,
    description: "A chic and versatile blouse with a striped pattern and overlap collar."
  },
  {
    id: 6,
    name: "Flutter Sleeve Stripe Top",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish striped top with flutter sleeves, perfect for a casual yet polished look."
  },
  {
    id: 7,
    name: "Striped Day-Out Blouse",
    category: "women",
    image: p7_img,
    new_price: 185.0,
    old_price: 220.5,
    description: "A comfortable striped blouse with a peplum hem, great for day outings."
  },
  {
    id: 8,
    name: "Feminine Striped Peplum Top",
    category: "women",
    image: p8_img,
    new_price: 35.0,
    old_price: 80.5,
    description: "A feminine striped top featuring a peplum hem and flutter sleeves."
  },
  {
    id: 9,
    name: "Modern Striped Casual Blouse",
    category: "women",
    image: p9_img,
    new_price: 125.0,
    old_price: 150.5,
    description: "A modern blouse with a striped design, ideal for casual or semi-formal occasions."
  },
  {
    id: 10,
    name: "Peplum Hem Overlap Top",
    category: "women",
    image: p10_img,
    new_price: 45.0,
    old_price: 100.5,
    description: "An overlap collar top with a peplum hem, offering a perfect balance of style and comfort."
  },
  {
    id: 11,
    name: "Relaxed Fit Striped Blouse",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A relaxed-fit striped blouse that pairs well with jeans or skirts for a laid-back look."
  },
  {
    id: 12,
    name: "Sophisticated Flutter Sleeve Top",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A sophisticated top featuring flutter sleeves and a striped pattern."
  },
  {
    id: 13,
    name: "Green Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A trendy bomber jacket with a solid green colour and slim-fit design, perfect for any occasion."
  },
  {
    id: 14,
    name: "Casual Green Zippered Jacket",
    category: "men",
    image: p14_img,
    new_price: 185.0,
    old_price: 220.5,
    description: "A casual zippered jacket in green, combining functionality and style."
  },
  {
    id: 15,
    name: "Versatile Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 75.0,
    old_price: 120.5,
    description: "A versatile bomber jacket with a sleek, solid green design and comfortable fit."
  },
  {
    id: 16,
    name: "Green Zipped Slim Jacket",
    category: "men",
    image: p16_img,
    new_price: 205.0,
    old_price: 300.5,
    description: "A zippered slim-fit jacket, perfect for layering and keeping warm."
  },
  {
    id: 17,
    name: "Men's Urban Style Jacket",
    category: "men",
    image: p17_img,
    new_price: 45.0,
    old_price: 120.5,
    description: "An urban-style bomber jacket in green, designed for contemporary fashion."
  },
  {
    id: 18,
    name: "Solid Green Full-Zip Jacket",
    category: "men",
    image: p18_img,
    new_price: 45.0,
    old_price: 110.5,
    description: "A full-zip jacket with a solid green colour, suitable for casual wear."
  },
  {
    id: 19,
    name: "Men's Fashion Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A fashionable bomber jacket in green, perfect for men seeking a stylish outerwear option."
  },
  {
    id: 20,
    name: "Slim-Fit Green Bomber",
    category: "men",
    image: p20_img,
    new_price: 235.0,
    old_price: 300.5,
    description: "A slim-fit bomber jacket in green, combining style with functionality."
  },
  {
    id: 21,
    name: "Contemporary Green Jacket",
    category: "men",
    image: p21_img,
    new_price: 49.0,
    old_price: 120.5,
    description: "A contemporary green jacket with a full-zip design for everyday use."
  },
  {
    id: 22,
    name: "Comfortable Men's Jacket",
    category: "men",
    image: p22_img,
    new_price: 285.0,
    old_price: 420.5,
    description: "A comfortable jacket in solid green, ideal for casual outings."
  },
  {
    id: 23,
    name: "Durable Zippered Jacket",
    category: "men",
    image: p23_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "A durable zippered jacket in green, offering warmth and a sleek look."
  },
  {
    id: 24,
    name: "Men's Solid Green Jacket",
    category: "men",
    image: p24_img,
    new_price: 585.0,
    old_price: 720.5,
    description: "A solid green jacket with a slim fit, suitable for various occasions."
  },
  {
    id: 25,
    name: "Orange Colourblocked Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 125.0,
    old_price: 180.5,
    description: "A vibrant orange sweatshirt with colourblock details, perfect for boys."
  },
  {
    id: 26,
    name: "Vivid Orange Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A vivid orange hooded sweatshirt featuring stylish colourblock patterns."
  },
  {
    id: 27,
    name: "Trendy Boys' Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 45.0,
    old_price: 120.5,
    description: "A trendy sweatshirt with a hood and orange colourblock design."
  },
  {
    id: 28,
    name: "Hooded Colourblocked Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 285.0,
    old_price: 220.5,
    description: "A hooded sweatshirt in orange, perfect for boys who love a sporty look."
  },
  {
    id: 29,
    name: "Bold Orange Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 65.0,
    old_price: 120.5,
    description: "A bold sweatshirt with a hood and a vibrant colourblock design."
  },
  {
    id: 30,
    name: "Stylish Kids' Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 35.0,
    old_price: 120.5,
    description: "A stylish sweatshirt for kids, featuring a hood and colourblock patterns."
  },
  {
    id: 31,
    name: "Playful Boys' Orange Hoodie",
    category: "kid",
    image: p31_img,
    new_price: 135.0,
    old_price: 180.5,
    description: "A playful orange hoodie for boys with colourblock patterns for a cheerful look."
  },
  {
    id: 32,
    name: "Vibrant Colourblocked Hoodie",
    category: "kid",
    image: p32_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "A vibrant hoodie with bold orange and contrasting colourblock patterns."
  },
  {
    id: 33,
    name: "Orange Sweatshirt for Boys",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "An orange sweatshirt designed for boys, featuring trendy colourblock details."
  },
  {
    id: 34,
    name: "Sporty Kids' Orange Hoodie",
    category: "kid",
    image: p34_img,
    new_price: 45.0,
    old_price: 120.5,
    description: "A sporty orange hoodie with colourblock patterns, perfect for active kids."
  },
  {
    id: 35,
    name: "Dynamic Boys' Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 175.0,
    old_price: 220.5,
    description: "A dynamic sweatshirt for boys with bold orange and playful design elements."
  },
  {
    id: 36,
    name: "Chic Colourblocked Hoodie",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A chic hoodie for kids, featuring a stylish orange colourblock pattern."
  }  
];

export default all_product;
