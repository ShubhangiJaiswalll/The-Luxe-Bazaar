const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product");

dotenv.config();

const products = [
  {
    name: "Glow Ritual Serum",
    category: "Beauty & Skincare",
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviews: 248,
    badge: "BESTSELLER",
    image: "/products/Glow Ritual Serum.jpeg",
    stock: 25,
    description: "A lightweight serum for everyday glow and soft hydrated skin.",
  },
  {
    name: "Boss Babe Blazer",
    category: "Fashion",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 415,
    badge: "NEW",
    image: "/products/Boss Babe Blazer.jpeg",
    stock: 12,
    description: "A classy structured blazer for premium everyday styling.",
  },
  {
    name: "Satin Co-ord Set",
    category: "Fashion",
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 189,
    badge: "TRENDING",
    image: "/products/Satin Co-ord Set.jpeg",
    stock: 18,
    description: "A soft satin co-ord set with elegant luxury vibes.",
  },
  {
    name: "Velvet Mini Bag",
    category: "Accessories",
    price: 999,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 132,
    badge: "HOT",
    image: "/products/Velvet Mini Bag.jpeg",
    stock: 20,
    description: "A compact velvet mini bag for evening and brunch looks.",
  },
  {
    name: "Pearl Hair Clip",
    category: "Accessories",
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    reviews: 96,
    badge: "NEW",
    image: "/products/Pearl Hair Clip.jpeg",
    stock: 30,
    description: "Elegant pearl clips for a soft Pinterest-style hair look.",
  },
  {
    name: "Luxury Sunscreen SPF50",
    category: "Beauty & Skincare",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 310,
    badge: "BESTSELLER",
    image: "/products/Luxury Sunscreen SPF50.jpeg",
    stock: 22,
    description: "A lightweight SPF50 sunscreen for daily protection and glow.",
  },
  {
    name: "Hydra Cream Moisturizer",
    category: "Beauty & Skincare",
    price: 649,
    originalPrice: 799,
    rating: 4.7,
    reviews: 221,
    badge: "TRENDING",
    image: "/products/Hydra Cream Moisturizer.jpeg",
    stock: 26,
    description: "A hydrating moisturizer for smooth, soft and fresh skin.",
  },
  {
    name: "Minimal Muse Watch",
    category: "Accessories",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 178,
    badge: "PREMIUM",
    image: "/products/Minimal Muse Watch.jpeg",
    stock: 14,
    description: "A minimal luxury watch for classy everyday styling.",
  },
  {
    name: "Pastel Tote Bag",
    category: "Accessories",
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviews: 147,
    badge: "HOT",
    image: "/products/Pastel Tote Bag.jpeg",
    stock: 16,
    description: "A cute pastel tote bag for college, work and daily outings.",
  },
  {
    name: "Ivory Linen Shirt",
    category: "Fashion",
    price: 1199,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 264,
    badge: "NEW",
    image: "/products/Ivory Linen Shirt.jpeg",
    stock: 19,
    description: "A clean ivory linen shirt for minimal luxury outfits.",
  },
  {
    name: "Soft Girl Dress",
    category: "Fashion",
    price: 1699,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 352,
    badge: "BESTSELLER",
    image: "/products/Soft Girl Dress.jpeg",
    stock: 13,
    description: "A soft aesthetic dress with effortless feminine charm.",
  },
  {
    name: "Vitamin C Glow Toner",
    category: "Beauty & Skincare",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 203,
    badge: "TRENDING",
    image: "/products/Vitamin C Glow Toner.jpeg",
    stock: 24,
    description: "A refreshing toner designed to brighten and prep the skin.",
  },
  {
    name: "Everyday Nude Lip Tint",
    category: "Beauty & Skincare",
    price: 399,
    originalPrice: 549,
    rating: 4.8,
    reviews: 281,
    badge: "HOT",
    image: "/products/Everyday Nude Lip Tint.jpeg",
    stock: 35,
    description: "A soft nude lip tint for everyday natural glam.",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Seed error:", error.message);
    process.exit(1);
  }
};

seedProducts();