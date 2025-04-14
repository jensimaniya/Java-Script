let products = [
  {
    id: 1,
    title: "Women's Watches GUESS",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "Women",
    price: 9.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mo6bSxXXM4yJtA735kyj8SEhfEz1DePCug&s",
  },
  {
    id: 2,
    title: "Mens Shirts",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "Men's Wear",
    price: 19.99,
    img: "https://www.louisphilippe.com/blog/wp-content/uploads/2022/10/blog15.jpg",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    img: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    img: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    img: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
    price: 79.99,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    img: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
    price: 2499.99,
    img: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
    price: 299.99,
    img: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    img: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
    price: 799.99,
    img: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  },
  {
    id: 16,
    title: "Apple",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
    price: 1.99,
    img: "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
  },
  {
    id: 17,
    title: "Purse for Girls",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "Girls Necessary",
    price: 12.99,
    img: "https://m.media-amazon.com/images/I/5191yJDCplS._AC_UY1000_.jpg",
  },
  {
    id: 18,
    title: "Cat Food",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    category: "groceries",
    price: 8.99,
    img: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
  },
  {
    id: 19,
    title: "Girls Necessary",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "Girls Necessary",
    price: 9.99,
    img: "https://m.media-amazon.com/images/I/61d406hJ-lL.jpg",
  },
  {
    id: 20,
    title: "Cooking Oil",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "groceries",
    price: 4.99,
    img: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const uiMaker = (products) => {
  temp = "";
  for (let i = 0; i < products.length; i++) {
    temp += `
        <div>
        <img src="${products[i].img}">
        <p>${products[i].id}</p>
        <h3>${products[i].title}</h3>
        <p>${products[i].description}</p>
        <p>${products[i].category}</p>
        <p>$ ${products[i].price}</p>
        <button onclick="addToCart(${products[i].id})">Add to Cart</button>

        </div>`;
  }
  document.getElementById("productShow").innerHTML = temp;
  localStorage.setItem("cart", JSON.stringify(cart));
};

uiMaker(products);

const addToCart = (productId) => {
  let product = products.find((item) => item.id === productId);
  let existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    // Increase quantity if product already exists in cart
    alert("product is already in your cart");
    existingProduct.quantity += 1;
  } else {
    // Add new product to cart with quantity 1
    alert("product add to cart");
    product.quantity = 1;
    cart.push(product);
  }

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

//   const goToCart = () => {
//     document.getElementById("productShow").style.display = "none";
//     document.getElementById("cartPage").style.display = "block";
//     displayCart();
//   };

//   const goBackToProducts = () => {
//     document.getElementById("cartPage").style.display = "none";
//     document.getElementById("productShow").style.display = "block";
//   };
