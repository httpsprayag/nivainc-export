import { Fragment } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import {
  MdPersonAdd,
  MdProductionQuantityLimits,
  MdSpaceDashboard,
} from "react-icons/md";

export const landingImages = [
  "assets/images/landing-image-1.webp",
  "assets/images/landing-image-2.webp",
  "assets/images/landing-image-3.webp",
  "assets/images/landing-image-4.webp",
];

export const products = [
  {
    name: "porcelain-tile",
    href: "porcelain-tile",
    image: "/assets/products/porcelain-tile.png",
    id: 1,
  },
  {
    name: "ceramic-tile",
    href: "ceramic-tile",
    image: "/assets/products/ceramic-tile.jpg",
    id: 1,
  },
  {
    name: "outdoor-pvers",
    href: "outdoor-pvers",
    image: "/assets/products/outdoorPavers.png",
    id: 1,
  },
  {
    name: "Counter Tops & Slabs",
    href: "counter-tops-Slabs",
    image: "/assets/products/counterTopsSlabs.png",
    id: 1,
  },
  {
    name: "Subway Tile",
    href: "subway-tile",
    image: "assets/products/SubayTile.jpg",
    id: 1,
  },
  {
    name: "Tile Adhesive & Epoxy",
    href: "adhesive-epoxy",
    image: "assets/products/theAdhesiveaEpoxy.jpg",
    id: 1,
  },
];

export const countingData = [
  {
    title: "Designs",
    count: 1000,
    icon: <MdSpaceDashboard className="text-[125px]" />,
  },
  {
    title: "Clients",
    count: 200,
    icon: <MdProductionQuantityLimits className="text-[125px]" />,
  },
  {
    title: "Countries",
    count: 50,
    icon: <MdPersonAdd className="text-[125px]" />,
  },
];

export const sliderImages = [
  { src: "/assets/images/slider1.jpg" },
  { src: "/assets/images/slider2.jpg" },
  { src: "/assets/images/slider3.jpg" },
  { src: "/assets/images/slider4.jpg" },
  { src: "/assets/images/slider5.jpg" },
];

export const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const blogData = [
  {
    id: 1,
    title: "Niva Inc: Where Elegance Meets Sustainability",
    content:
      "Welcome to Niva Inc, the epitome of elegance and sustainability in tile manufacturing. Our commitment goes beyond creating tiles; we craft timeless spaces that blend artistry with responsibility.",
    date: "05 Nov-2023",
    blogImg: "/assets/images/blogImg1.jpg",
  },
  {
    id: 2,
    title: "History of Morbi Ceramic Industries",
    content:
      "Morbi, Gujarat, evolved from traditional pottery to a major hub for ceramic production in the late 20th century. Abundant natural resources fueled technological advancements, making Morbi a global exporter of ceramic tiles and sanitary ware. The industry faced challenges, including environmental concerns, but adapted through diversification and sustainable practices. Morbi's ceramic sector significantly impacted the regional economy, providing employment and contributing to economic growth.",
    date: "15 July-2023",
    blogImg: "/assets/images/blogImg2.png",
    contentItems: (
      <>
        <ol title="Artisan Excellence:" className="list-disc">
          <li className="list-item mt-1">1. Artisan Excellence:</li>
          <li className="list-item text-gray-500">
            Niva Inc tiles embody meticulous craftsmanship and design ingenuity.
          </li>
          <li className="list-item text-gray-500">
            Signature designs reflect aesthetic appeal and adaptability to
            diverse styles.
          </li>
          <li className="mt-2">2. Quality Assurance:</li>
          <li className="list-item text-gray-500">
            Rigorous quality control measures ensure tiles meet the highest
            standards.
          </li>
          <li className="list-item text-gray-500">
            Niva Inc holds certifications, emphasizing durability and
            sustainability.
          </li>
          <li className="mt-2">3. Global Presence:</li>
          <li className="list-item text-gray-500">
            Niva Inc tiles grace projects globally, catering to varied
            international tastes.
          </li>
          <li className="list-item text-gray-500">
            Success stories and case studies showcase the widespread application
            of our tiles.
          </li>
          <li className="mt-2">4. Sustainability Focus:</li>
          <li className="list-item text-gray-500">
            Niva Inc is committed to environmental responsibility in tile
            production and export.
          </li>
          <li className="list-item text-gray-500">
            Eco-friendly initiatives underscore our dedication to sustainable
            business practices.
          </li>
          <li className="mt-2">5. Efficient Export Process:</li>
          <li className="list-item text-gray-500">
            Niva Inc follows a streamlined export procedure, ensuring compliance
            with international regulations.
          </li>
          <li className="list-item text-gray-500">
            Our logistics ensure timely and secure delivery, establishing a
            reputation for reliability.
          </li>
        </ol>
      </>
    ),
  },

  {
    id: 3,
    title: "Ceramic vs. Porcelain Tiles: Quick Guide to Your Perfect Choice",
    content:
      "Choosing between ceramic and porcelain tiles? Here's a .000brief breakdown:",
    date: "16 Feb-2023",
    blogImg: "/assets/images/blogImg3.png",
    contentItems: (
      <>
        <ol title="Artisan Excellence:" className="list-disc">
          <li className="list-item mt-1">1. Material:</li>
          <li className="list-item text-gray-500">
            Ceramic: Clay, minerals, water; kiln-fired at lower temps.
          </li>
          <li className="list-item text-gray-500">
            Porcelain: High-temperature-fired ceramic, denser and less porous.
          </li>
          <li className="mt-2">2. Durability:</li>
          <li className="list-item text-gray-500">
            Ceramic: Durable but softer, may chip in high-traffic areas.
          </li>
          <li className="list-item text-gray-500">
            Porcelain: Highly durable, resistant to wear and tear.
          </li>
          <li className="mt-2">3. Water Absorption: </li>
          <li className="list-item text-gray-500">
            Ceramic: More porous, best for indoor use.
          </li>
          <li className="list-item text-gray-500">
            Porcelain: Low water absorption, suitable for wet areas and
            outdoors.
          </li>
          <li className="mt-2">4. Application:</li>
          <li className="list-item text-gray-500">
            Ceramic: Indoor use, low-traffic areas.
          </li>
          <li className="list-item text-gray-500">
            Porcelain: Versatile, ideal for both indoor and outdoor spaces.
          </li>
          <li className="mt-2">5. Design Options:</li>
          <li className="list-item text-gray-500">
            Ceramic: Budget-friendly, diverse colors and patterns.
          </li>
          <li className="list-item text-gray-500">
            Porcelain: Mimics natural materials, sophisticated aesthetic.
          </li>
        </ol>
      </>
    ),
  },
];
