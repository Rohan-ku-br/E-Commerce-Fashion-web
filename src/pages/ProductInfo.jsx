import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Products = [
  {
    id: 71,
    name: "Single Breasted Formal Blazer",
    image:
      "https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A sleek, sustainable men's blazer crafted for formal elegance.",
    price: "$129.99",
  },
  {
    id: 72,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1624988991840-2861588dbd6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },
  {
    id: 73,
    name: "Women's Elegance Collection",
    image:
      "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly women's wear with a touch of sophistication.",
    price: "$89.99",
  },
  {
    id: 74,
    name: "Kids' Playwear",
    image:
      "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable and sustainable clothing for active little ones.",
    price: "$49.99",
  },
  {
    id: 75,
    name: "Natural Beauty Essentials",
    image:
      "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Organic beauty products for a radiant, natural glow.",
    price: "$34.99",
  },
  {
    id: 76,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://media.istockphoto.com/id/1269573617/photo/eco-friendly-cutlery-consisting-of-plates-bowls-trays-wooden-spoon-biodegradable-cutlery-for.jpg?s=2048x2048&w=is&k=20&c=nuGIqfYLj2qLQ9rGu3_teDYkPA2aajEY_2SpLBYw7Ds=",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },
  {
    id: 77,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },
  {
    id: 78,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },
  {
    id: 79,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },
  {
    id: 80,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1741943716275-2eaf11f4e918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwamVhbnN8ZW58MHx8MHx8fDA%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },

  {
    id: 81,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1571115637329-40ce3401d0f3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },

  {
    id: 82,
    name: "Home & Kitchen Eco-Set",
    image:
      "https://images.unsplash.com/photo-1579892876770-461a88bd87df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eco-friendly essentials to elevate your home experience.",
    price: "$74.99",
  },

  {
    id: 11,
    name: "All in one face makeup kit for women",
    description:
      "All in one face makeup kit for women, make in india, easy to use",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/463528812/eap3g_512.avif?width=512",
    alt: "Makeup kit",
  },
  {
    id: 12,
    name: "Dhyota Silicone Eyeliner Tool for Women",
    description:
      "Dhyota Silicone Eyeliner Tool for Women – Multipurpose Eye Makeup Tool for Eyeliner",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/533957013/dh6bi_512.avif?width=512",
    alt: "Eyeliner Tool for Women",
  },
  {
    id: 13,
    name: "Fixer Spary ,Primer,Conceller,Beauty Blinder ( puff )",
    description:
      "Fixer Spary ,Primer,Conceller,Beauty Blinder for Women – Multipurpose Eye Makeup Tool for Eyeliner",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/425250690/rujzo_512.avif?width=512",
    alt: "Fixer spray",
  },
  {
    id: 14,
    name: "Fixer Spray, Bottle Primer",
    description:
      "Fixer Spray, Bottle Primer, Foundation, Compact Powder, Countour stick",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/515832624/qcqsf_512.avif?width=512",
    alt: "Casual Sneakers",
  },
   {
    id: 15,
    name: "LIPSIP New Light Shades 4in1 Matte Lipsticks - (Pack of 4)",
    description: "LIPSIP New Light Shades 4in1 Matte Lipsticks - (Pack of 4) Fixer Spray, Bottle Primer, Foundation, Compact Powder, Countour stick",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/438642840/c2gsj_512.avif?width=512",
  },
  {
    id: 16,
    name: "Long Lasting Liquid Matte Non Transfer Lipsticks",
    description: "Long Lasting Liquid Matte Non Transfer Lipsticks(pack of 8) Add to Cart Buy Now 1 Similar Products Waterproof Long Lasting Liquid Matte Non Transfer Lipsticks(pack of 8)",
    price: "$79.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/490737582/4nqdv_512.avif?width=512",
  },
  {
    id: 17,
    name: "3 Sheets Metallic Golden Freckles Face Tattoo",
    description: "3 Sheets Metallic Golden Freckles Face Tattoo Stickers Creative Gold Freckle Art Stickers for Makeup and Parties",
    price: "$59.99",
    oldPrice: "$89.00",
    image: "https://images.meesho.com/images/products/540923888/ftvis_512.avif?width=512",
  },
   {
    id: 18,
    name: "All in one face makeup kit for women",
    description: "All in one face makeup kit for women, make in india, easy to use",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.meesho.com/images/products/463528812/eap3g_512.avif?width=512",
    alt: "Makeup kit",
  },
  {
    id: 128,
    name: "Natural Hairline Powder",
    description: "Natural Hairline Powder, Hair Shading Sponge Pen, Hairline Shadow Powder Stick, Quick Root Touch-Up, Eyebrow Stamp (Black) pack of 1pi",
    price: "$69.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/444782315/6pmb9_512.avif?width=512",
  },
    {
    id: 129,
    name: "Fixer Spary ,Primer,Conceller,Beauty Blinder ( puff )",
    description: "Fixer Spary ,Primer,Conceller,Beauty Blinder for Women – Multipurpose Eye Makeup Tool for Eyeliner",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.meesho.com/images/products/425250690/rujzo_512.avif?width=512",
    alt: "Fixer spray",
  },
   {
    id: 150,
    name: "LIPSIP New Light Shades 4in1 Matte Lipsticks - (Pack of 4)",
    description: "LIPSIP New Light Shades 4in1 Matte Lipsticks - (Pack of 4) Fixer Spray, Bottle Primer, Foundation, Compact Powder, Countour stick",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/438642840/c2gsj_512.avif?width=512",
  },
  {
    id: 151,
    name: "Dhyota Silicone Eyeliner Tool for Women",
    description: "Dhyota Silicone Eyeliner Tool for Women – Multipurpose Eye Makeup Tool for Eyeliner",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.meesho.com/images/products/533957013/dh6bi_512.avif?width=512",
    alt: "Eyeliner Tool for Women",
  },

  {
    id: 21,
    name: "Ss knife set with chopping board",
    description:
      "Name : ss knife set with chopping board Color : Silver Material : Stainless Steel Net Quantity (N) : Pack Of 6 Product Breadth : 9 Cm Product Height : 1.5 Cm Product Length : 10 Cm Product Weight : 0.2 Type : Kitchen Knife Sets ss knife set with chopping board",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/354643588/mmxek_512.avif?width=512",
    alt: "Knife ",
  },
  {
    id: 22,
    name: "Compact Chopper with Blades effortlessly Chopping Big Size Kitchen",
    description:
      "Chopper with Blades effortlessly Chopping Big Size Kitchen set with chopping board",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/224092807/bjr0t_512.avif?width=512",
    alt: "compact Chopper",
  },
  {
    id: 23,
    name: "WINGER Combo of straight peeler and and 2 vegetable cutter ",
    description:
      "WINGER Combo of straight peeler and and 2 vegetable cutter 2 in 1 Vegetable & Fruit Multi Cutter & Peeler",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/331337160/enuzv_512.avif?width=512",
    alt: "cutter",
  },
  {
    id: 24,
    name: "Trendy chopping board/cutting board/wood cutting board",
    description:
      "Trendy chopping board/cutting board/wood WINGER Combo of straight peeler and and 2 vegetable cutter 2 in 1 Vegetable & Fruit Multi Cutter & Peeler",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/393940265/dwmqx_512.avif?width=512",
    alt: "cutting board",
  }, {
    id: 25,
    name: "SAHAJA TRADERS PRESENT GALACE COTTON BEST SELLING Double BEDSHEETS KING SIZE",
    description: "SAHAJA TRADERS PRESENT GALACE COTTON BEST SELLING Double BEDSHEETS KING SIZE(85*85) BEDSHEETS WITH 2 PILLOW COVER,FLAT BEDSHEETS , FANCY BEDSHEETS , COTTON BEDSHEETS ,POLYCOTTON BEDSHEETS,GALACE COTTON BEDSHEETS",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/522359833/4ar91_512.avif?width=512",
  },
  {
    id: 26,
    name: "Multi size Food sealing clips",
    description: "Multi size Food sealing clips | food bag clips| plastic food sealer for kitchen| bag clips| plastic sealing clips(Set of 18)",
    price: "$29.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/440637041/pfg9s_512.avif?width=512",
  },
  {
    id: 27,
    name: "500ml 2 in 1 Olive Oil Sprayer and Oil Dispenser Bottle for Kitchen",
    description: "500ml 2 in 1 Olive Oil Sprayer and Oil Dispenser Bottle for Kitchen, Glass Oil Bottle with Premium Nozzle, Oil Sprayer for Air Fryer, Salad,BBQ,Roasting (Multi Color) (Pack of 1)",
    price: "$79.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/436444456/tyvjs_512.avif?width=512",
  },
  {
    id: 28,
    name: "Oven Top Cover",
    description: "Oven Top Cover | Non-Woven Microwave Oven Top Cover with 4 Utility Pockets | Oven Cover for Kitchen Décor 14x36 inch",
    price: "$19.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/541710664/8321z_512.avif?width=512",
  },
  {
    id: 201,
    name: "Ss knife set with chopping board",
    description:
      "Name : ss knife set with chopping board Color : Silver Material : Stainless Steel Net Quantity (N) : Pack Of 6 Product Breadth : 9 Cm Product Height : 1.5 Cm Product Length : 10 Cm Product Weight : 0.2 Type : Kitchen Knife Sets ss knife set with chopping board",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/354643588/mmxek_512.avif?width=512",
  },
   {
    id: 202,
    name: "Trendy chopping board/cutting board/wood cutting board",
    description: "Trendy chopping board/cutting board/wood WINGER Combo of straight peeler and and 2 vegetable cutter 2 in 1 Vegetable & Fruit Multi Cutter & Peeler",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/393940265/dwmqx_512.avif?width=512",
  },
 
  {
    id: 203,
    name: "Compact Chopper with Blades effortlessly Chopping Big Size Kitchen",
    description: "Chopper with Blades effortlessly Chopping Big Size Kitchen set with chopping board",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/224092807/bjr0t_512.avif?width=512",
  }, {
    id: 204,
    name: "SAHAJA TRADERS PRESENT GALACE COTTON BEST SELLING Double BEDSHEETS KING SIZE",
    description: "SAHAJA TRADERS PRESENT GALACE COTTON BEST SELLING Double BEDSHEETS KING SIZE(85*85) BEDSHEETS WITH 2 PILLOW COVER,FLAT BEDSHEETS , FANCY BEDSHEETS , COTTON BEDSHEETS ,POLYCOTTON BEDSHEETS,GALACE COTTON BEDSHEETS",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/522359833/4ar91_512.avif?width=512",
  },

  {
    id: 31,
    name: "Fancy Boys Top & Bottom Sets",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/443187772/gtjgk_512.avif?width=512",
    alt: "Men's Classic Shirt",
  },
  {
    id: 32,
    name: "KEESOR Round Neck PRINTED T-shirt with Shorts | Boys Casual T-shirt Shorts Set",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/502686128/u1etp_512.avif?width=512",
    alt: "Slim Fit Jeans",
  },
  {
    id: 33,
    name: "Kidis Land Stylish Kids Clothing Sets",
    description: "Premium kids cloting sets and style all day long",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/554273347/aylcc_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 34,
    name: "Boys combo set",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/543179963/g5poi_512.avif?width=512",
    alt: "Casual Sneakers",
  },{
    id: 35,
    name: "Venton New Design Baby mosquito net foldable new Sleeping Bags & Togs",
    description: "Venton New Design Baby mosquito net foldable new Sleeping Bags & Togs Versatile sneakers for comfort and style all day long.",
    price: "$56.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/181620737/g2ygr_512.avif?width=512",
  },
  {
    id: 36,
    name: "Mosquito Net for Baby",
    description: "Mosquito Net for Baby, Safe & Easy Use , Color-Blue, Size : 135cmx65cmx65cm baby Mosquito Net",
    price: "$49.99",
    oldPrice: "$89.00",
    image: "https://images.meesho.com/images/products/205969613/u9nwb_512.avif?width=512",
  },
  {
    id: 37,
    name: "Goyoku Modern Kids Caps",
    description: "Goyoku Modern Kids Caps for Winter Soft 100% Woolen Caps for Baby Boys & Baby Girls (Products for New Born Baby 6 to 20 Month) Multicolor.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/375757143/tdo88_512.avif?width=512",
  },
  {
    id: 38,
    name: "Goyoku Modern Kids Caps",
    description: "Goyoku Modern Kids Caps for Winter Soft 100% Woolen Caps for Baby Boys & Baby Girls (Products for New Born Baby 6 to 20 Month) Multicolor",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/383855878/hohhl_512.avif?width=512",
  },
   {
    id: 39,
    name: "Boys combo set",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/543179963/g5poi_512.avif?width=512",
  },
  {
    id: 334,
    name: "Venton New Design Baby mosquito net foldable new Sleeping Bags & Togs",
    description: "Venton New Design Baby mosquito net foldable new Sleeping Bags & Togs Versatile sneakers for comfort and style all day long.",
    price: "$56.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/181620737/g2ygr_512.avif?width=512",
  },
  {
    id: 333,
    name: "Kidis Land Stylish Kids Clothing Sets",
    description: "Premium kids cloting sets and style all day long",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.meesho.com/images/products/554273347/aylcc_512.avif?width=512",
  },
   {
    id: 335,
    name: "Fancy Boys Top & Bottom Sets",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.meesho.com/images/products/443187772/gtjgk_512.avif?width=512",
  },

  {
    id: 41,
    name: "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/441070939/rzuyp_512.avif?width=512",
    alt: "Women's Classic Shirt",
  },
  {
    id: 42,
    name: "KURTI",
    description: "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/191005346/mocgn_512.avif?width=360",
    alt: "Slim Fit Jeans",
  },
  {
    id: 43,
    name: "Rayon Printed Kurta Set With Dupatta",
    description:
      "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set Rayon Printed Kurta Set With Dupatta",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/519996287/y5mid_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 44,
    name: "Black Kurti",
    description:
      "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set Rayon Printed Kurta Set With Dupatta",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/397953982/lq6a2_512.avif?width=512",
    alt: "Casual Sneakers",
  },
  {
    id: 45,
    name: "Women Wrinkle Crush Palazzo PLAZZO Pack of 2",
    description: "Women Wrinkle Crush Palazzo PLAZZO Pack of 2 Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set Rayon Printed Kurta Set With Dupatta",
    price: "$51.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/412858576/ppa4d_512.avif?width=512",
  },
  {
    id: 46,
    name: "Stretch High Waisted ",
    description: "Stretch High Waisted Two Button Up Flared Dobby Denim Skirt For Women & Girls Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set Rayon Printed Kurta Set With Dupatta",
    price: "$29.99",
    oldPrice: "$101.00",
    image: "https://images.meesho.com/images/products/440343758/oxp3n_512.avif?width=512",
  },
  {
    id: 47,
    name: "Women's Cotton Printed Regular Fit Shorts",
    description: "Women's Cotton Printed Regular Fit Shorts (Combo of 3).Regular Fit Cotton Short for Gym and Home Wear.(Combo Pack Of 3)",
    price: "$32.99",
    oldPrice: "$101.00",
    image: "https://images.meesho.com/images/products/539830256/4njnn_512.avif?width=512",
  },
  {
    id: 48,
    name: "Soften High Waist Women denim Skirt ",
    description: "Soften High Waist Women denim Skirt Stretch High Waisted Two Button Up Flared Dobby ",
    price: "$63.99",
    oldPrice: "$130.00",
    image: "https://images.meesho.com/images/products/507671402/yb5xg_512.avif?width=512",
  },
  {
    id: 49,
    name: "Stylish gingham women skirt ",
    description: "Soften High Waist Women denim Skirt Stretch High Waisted Two Button Up Flared Dobby ",
    price: "$63.99",
    oldPrice: "$130.00",
    image: "https://images.meesho.com/images/products/336015586/s8quo_512.avif?width=512",
  },
  {
    id: 111,
    name: "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.meesho.com/images/products/441070939/rzuyp_512.avif?width=512",
  },
  {
    id: 113,
    name: "Stretch High Waisted ",
    description: "Stretch High Waisted Two Button Up Flared Dobby Denim Skirt For Women & Girls Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set Rayon Printed Kurta Set With Dupatta",
    price: "$29.99",
    oldPrice: "$101.00",
    image: "https://images.meesho.com/images/products/440343758/oxp3n_512.avif?width=512",
  },
  {
    id:112,
    name: "KURTI",
    description: "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.meesho.com/images/products/191005346/mocgn_512.avif?width=360",
  },
  {
    id: 1,
    name: "Men's Classic Shirt",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/383857316/f4ypd_512.avif?width=512",
    alt: "Men's Classic Shirt",
  },
  {
    id: 2,
    name: "KEESOR Men Tshirt|Men Printed Round neck Tshirt|Men Graphic print Tshirt",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/503007534/bt8eo_512.avif?width=512",
    alt: "Slim Fit Jeans",
  },
  {
    id: 3,
    name: "MENS OVERSIZE TEES",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/481484866/xtrjc_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 4,
    name: "CHHOTE NAWAB Men's Geometric Regular Polo Teal Tshirts",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/430702252/uigxu_512.avif?width=512",
    alt: "Casual Sneakers",
  },
  {
    id: 5,
    name: "MEN SELF DESIGN POLO T SHIRT FOR MEN AND BOYS",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/544486003/lhyv7_512.avif?width=512",
    alt: "Men's Classic Shirt",
  },
  {
    id: 6,
    name: "FOXGLOW Men Fashion Cotton Blend T-Shirt ",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/563822664/osdem_512.avif?width=512",
    alt: "Slim Fit Jeans",
  },
  {
    id: 7,
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/538291130/ekbjj_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 8,
    name: "100% COTTON STYLISH JACKET FOR MEN",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/541471993/ag17k_512.avif?width=512",
    alt: "Casual Sneakers",
  },
  {
    id: 9,
    name: "Men's Regular Fit Washed Full Sleeve Denim Jacket",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/541117151/iwy7q_512.avif?width=512",
    alt: "Men's Classic Shirt",
  },
  {
    id: 10,
    name: "Tranding boys men blue pant | non stretchable",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/542460767/3izor_512.avif?width=512",
    alt: "Slim Fit Jeans",
  },
  {
    id: 11,
    name: "Casual Men Track Pants Combo",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/122102209/f29yy_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 12,
    name: "Stylish Men's Casual Shorts",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/538637536/ch9kn_512.avif?width=512",
    alt: "Casual Sneakers",
  },
  {
    id: 13,
    name: "Men Denim Slim Fit Stretchable Jeans",
    description:
      "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/229299286/klpbs_512.avif?width=512",
    alt: "Men's Classic Shirt",
  },
  {
    id: 14,
    name: "KIPEKEE Premium Elegant Men Formal Trouser Pant",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/493792935/dhcwr_512.avif?width=512",
    alt: "Slim Fit Jeans",
  },
  {
    id: 15,
    name: "Stylish Track Pants for Men",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/497079521/3zaj0_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 16,
    name: "Pack of 2 Men Solid Grey, Black Track Pants",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/544213484/nmoqv_512.avif?width=512",
    alt: "Casual Sneakers",
  },
];

const ProductInfo = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id === parseInt(id));
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImage, setCurrentImage] = useState(product?.image);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }
    console.log(`Buying ${product.name} (Size: ${selectedSize})`);
  };

  const sizes = ["S", "M", "L", "XL"];
  const relatedProducts = Products.filter((p) => p.id !== parseInt(id)).slice(
    0,
    4
  );

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/men"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Back to the Collection
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-24 pt-27 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={currentImage || product.image}
                alt={product.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <span className="text-white font-medium">Zoom In</span>
              </motion.div>
            </motion.div>
            <div className="flex gap-2 justify-center">
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`${product.alt} thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                      currentImage === img
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                    onClick={() => setCurrentImage(img)}
                    whileHover={{ scale: 1.1 }}
                  />
                )
              )}
            </div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-green-600">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.button
                  onClick={handleBuyNow}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white jelly-hover px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Buy now"
                >
                  Buy Now
                </motion.button>
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    isAddedToCart ? "bg-green-600" : "bg-gray-800"
                  } text-white px-6 py-3 rounded-lg font-medium jelly-hover hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center`}
                  disabled={isAddedToCart}
                  aria-label={isAddedToCart ? "Added to cart" : "Add to cart"}
                >
                  {isAddedToCart ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </motion.button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Product Details
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Material:{" "}
                    {product.name.includes("Cotton")
                      ? "100% Cotton"
                      : product.name.includes("Denim")
                      ? "Denim Blend"
                      : "Premium Fabric"}
                  </li>
                  <li>
                    Fit:{" "}
                    {product.name.includes("Slim") ? "Slim Fit" : "Regular Fit"}
                  </li>
                  <li>Care Instructions: Machine washable, tumble dry low</li>
                  <li>Origin: Made in India</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Shipping & Returns
                </h3>
                <p className="text-gray-600">
                  Free shipping on orders over $100. 30-day return policy for
                  unused items.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((related, index) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/product/${related.id}`}>
                  <img
                    src={related.image}
                    alt={related.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {related.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-green-600 font-bold">
                        {related.price}
                      </span>
                      {related.oldPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          {related.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          <p className="text-gray-600">
            No reviews yet. Be the first to review this product!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductInfo;