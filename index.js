const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

let products = [
  {
    id: "80d8e7a1",
    name: "accent chair",
    stock: 2,
    featured: true,
    price: 25999,
    image: "https://kept.com.ua/image/hy2I/product-1.jpg",
    images: [
      {
        id: "attub6EG88kJKuYs8",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2I/product-1.jpg",
        filename: "product-4.jpeg",
        size: 49641,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attaeT2Dex98o2jfW",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
        filename: "extra-1.jpeg",
        size: 102108,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attWsZasaaRD1P7mm",
        width: 1000,
        height: 714,
        url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
        filename: "extra-2.jpeg",
        size: 84418,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 50,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 717,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attTvaiDcADaAItLw",
        width: 1000,
        height: 650,
        url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
        filename: "extra-3.jpeg",
        size: 107838,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 55,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 788,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attdxQmF0aCH5I32F",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
        filename: "extra-4.jpeg",
        size: 99481,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    reviews: 27,
    stars: 4.2,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "comfy maf",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "80d8e546",
    name: "accent chair",
    stock: 2,
    featured: true,
    price: 25999,
    image: "https://kept.com.ua/image/hy2I/product-1.jpg",
    images: [
      {
        id: "attub6EG88kJKuYs8",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2I/product-1.jpg",
        filename: "product-4.jpeg",
        size: 49641,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attaeT2Dex98o2jfW",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
        filename: "extra-1.jpeg",
        size: 102108,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attWsZasaaRD1P7mm",
        width: 1000,
        height: 714,
        url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
        filename: "extra-2.jpeg",
        size: 84418,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 50,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 717,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attTvaiDcADaAItLw",
        width: 1000,
        height: 650,
        url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
        filename: "extra-3.jpeg",
        size: 107838,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 55,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 788,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attdxQmF0aCH5I32F",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
        filename: "extra-4.jpeg",
        size: 99481,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    reviews: 27,
    stars: 4.2,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "comfy maf",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "80d8e4t4",
    name: "accent chair",
    stock: 2,
    featured: true,
    price: 25999,
    image: "https://kept.com.ua/image/hy2I/product-1.jpg",
    images: [
      {
        id: "attub6EG88kJKuYs8",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2I/product-1.jpg",
        filename: "product-4.jpeg",
        size: 49641,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2I/product-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attaeT2Dex98o2jfW",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
        filename: "extra-1.jpeg",
        size: 102108,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2H/product-1-1.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attWsZasaaRD1P7mm",
        width: 1000,
        height: 714,
        url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
        filename: "extra-2.jpeg",
        size: 84418,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 50,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 717,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2J/product-1-2.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attTvaiDcADaAItLw",
        width: 1000,
        height: 650,
        url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
        filename: "extra-3.jpeg",
        size: 107838,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 55,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 788,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2K/product-1-3.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: "attdxQmF0aCH5I32F",
        width: 1000,
        height: 667,
        url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
        filename: "extra-4.jpeg",
        size: 99481,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 54,
            height: 36,
          },
          large: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 768,
            height: 512,
          },
          full: {
            url: "https://kept.com.ua/image/hy2L/product-1-4.jpg",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    reviews: 27,
    stars: 4.2,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "comfy maf",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
];

app.get("/api/products", (request, response) => {
  response.json(products);
});

app.get("/api/products/:id", (request, response) => {
  const id = request.params.id;
  const product = products.find((product) => product.id === id);
  if (product) {
    response.json(product);
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
