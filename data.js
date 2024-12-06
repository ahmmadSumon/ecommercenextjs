const menClothingItems = [
    {
      id:'1',
      name: "Classic White T-Shirt",
      description: "A timeless white t-shirt made from organic cotton.",
      price: 25.00,
      imageUrl:"/products/tshirt2.jpg",
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 2,
      name: "Denim Jacket",
      description: "A stylish denim jacket with a modern fit.",
      price: 60.00,
      imageUrl:'/products/denim jacket.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 3,
      name: "Black Skinny Jeans",
      description: "Comfortable and versatile black skinny jeans.",
      price: 40.00,
      imageUrl: '/products/skinnyjeans.jpg',
      sizes: ["28", "30", "32", "34", "36"],
      category: "Men"
    },
    {
      id: 4,
      name: "Leather Boots",
      description: "Premium leather boots for a rugged look.",
      price: 80.00,
      imageUrl: '/products/leatherboots.jpg',
      sizes: ["7", "8", "9", "10", "11"],
      category: "Men"
    },
    {
      id: 5,
      name: "Sports Hoodie",
      description: "A comfortable hoodie for sports and casual wear.",
      price: 35.00,
      imageUrl: '/products/sportshoodie.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 6,
      name: "Chino Pants",
      description: "Smart-casual chino pants available in multiple colors.",
      price: 50.00,
      imageUrl: '/products/chino.jpg',
      sizes: ["28", "30", "32", "34", "36"],
      category: "Men"
    },
    {
      id: 7,
      name: "Graphic T-Shirt",
      description: "A t-shirt with a cool graphic design.",
      price: 30.00,
      imageUrl: '/products/whittshirt.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 8,
      name: "Puffer Jacket",
      description: "A warm puffer jacket for cold weather.",
      price: 100.00,
      imageUrl: '/products/puff.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 9,
      name: "Casual Shorts",
      description: "Comfortable and stylish casual shorts.",
      price: 25.00,
      imageUrl: '/products/shorts.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 10,
      name: "Leather Belt",
      description: "A high-quality leather belt for everyday use.",
      price: 20.00,
      imageUrl:'/products/belt.jpg',
      sizes: ["M", "L", "XL"],
      category: "Men"
    }
  ];
  const womenClothingItems = [
    {
      id: 11,
      name: "Floral Summer Dress",
      description: "A light and breezy dress perfect for summer days.",
      price: 45.00,
      imageUrl: '/products/su.jpg',
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 12,
      name: "Woolen Scarf",
      description: "A cozy woolen scarf to keep you warm in winter.",
      price: 20.00,
      imageUrl: '/products/woolenscarf.jpg',
      sizes: ["One Size"],
      category: "Women"
    },
    {
      id: 13,
      name: "Leather Handbag",
      description: "A stylish leather handbag for daily use.",
      price: 70.00,
      imageUrl: '/products/highheels.jpg',
      sizes: ["One Size"],
      category: "Women"
    },
    {
      id: 14,
      name: "High Heels",
      description: "Elegant high heels for special occasions.",
      price: 90.00,
      imageUrl: '/products/highheels.jpg',
      sizes: ["6", "7", "8", "9"],
      category: "Women"
    },
    {
      id: 15,
      name: "Yoga Pants",
      description: "Comfortable and flexible yoga pants.",
      price: 35.00,
      imageUrl: '/products/yogapants.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Women"
    },
    {
      id: 16,
      name: "Silk Blouse",
      description: "A luxurious silk blouse for a sophisticated look.",
      price: 55.00,
      imageUrl: '/products/silkblouse.jpg',
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 17,
      name: "Denim Skirt",
      description: "A classic denim skirt for casual outings.",
      price: 40.00,
      imageUrl: '/products/denimskirt.jpg',
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 18,
      name: "Winter Coat",
      description: "A warm and stylish winter coat.",
      price: 120.00,
      imageUrl: '/products/wintercoat.jpg',
      sizes: ["S", "M", "L", "XL"],
      category: "Women"
    },
    {
      id: 19,
      name: "Running Shoes",
      description: "Lightweight and comfortable running shoes.",
      price: 80.00,
      imageUrl:'/products/runningshoe.jpg',
      sizes: ["6", "7", "8", "9"],
      category: "Women"
    },
    {
      id: 20,
      name: "Maxi Dress",
      description: "A beautiful maxi dress for any occasion.",
      price: 65.00,
      imageUrl: '/products/maxi.jpg',
      sizes: ["S", "M", "L"],
      category: "Women"
    }
  ];
  const kidsClothingItems = [
    {
      id: 21,
      name: "Kids' T-Shirt",
      description: "A cute t-shirt with fun graphics.",
      price: 15.00,
      imageUrl: '/products/kidstshirt.jpg',
      sizes: ["XS", "S", "M"],
      category: "Kids"
    },
    {
      id: 22,
      name: "Kids' Jeans",
      description: "Comfortable and durable jeans for kids.",
      price: 25.00,
      imageUrl:'/products/kidsjean.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 23,
      name: "Kids' Sneakers",
      description: "Stylish sneakers for everyday wear.",
      price: 30.00,
      imageUrl:'/products/kidssneaker.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 24,
      name: "Kids' Hoodie",
      description: "A cozy hoodie for kids.",
      price: 20.00,
      imageUrl: '/products/kidshoodie.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 25,
      name: "Kids' Shorts",
      description: "Comfortable shorts for kids to play in.",
      price: 15.00,
      imageUrl: '/products/kidsshort.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 26,
      name: "Kids' Dress",
      description: "A cute and colorful dress for kids.",
      price: 25.00,
      imageUrl: '/products/kidsdress.jpg',
      sizes: ["XS", "S", "M"],
      category: "Kids"
    },
    {
      id: 27,
      name: "Kids' Pajamas",
      description: "Soft and comfortable pajamas for kids.",
      price: 20.00,
      imageUrl:'/products/kidspajams.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 28,
      name: "Kids' Raincoat",
      description: "A waterproof raincoat for kids.",
      price: 35.00,
      imageUrl: '/products/kidsraincoat.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 29,
      name: "Kids' Winter Boots",
      description: "Warm and durable winter boots for kids.",
      price: 40.00,
      imageUrl: '/products/kidsboot.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 30,
      name: "Kids' Sun Hat",
      description: "A cute sun hat to protect kids from the sun.",
      price: 12.00,
      imageUrl: '/products/kidshat.jpg',
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    }
  ];

const allProducts = [
    ...menClothingItems,
    ...womenClothingItems,
    ...kidsClothingItems,
  ];
  export { menClothingItems, womenClothingItems, kidsClothingItems, allProducts };