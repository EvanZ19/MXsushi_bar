export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  image?: string; // optional path under /public
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const popularRolls: MenuItem[] = [
  {
    name: "Dragon Roll",
    price: "$11.99",
    desc: "Filled with crab meat and cucumber. Topped with BBQ eel, avocado, and sesame seeds. Dressed with eel sauce.",
    image: "/dragon-roll.png",
  },
  {
    name: "Black Dragon Roll",
    price: "$14.99",
    desc: "Filled with tempura shrimp and crab meat. Topped with a layer of BBQ eel, red tobiko, and sesame seeds. Dressed with eel sauce.",
    image: "/black-dragon-roll.png",
  },
  {
    name: "Rainbow Roll",
    price: "$11.99",
    desc: "Filled with crab meat and cucumber. Topped with fresh salmon, tuna, red snapper, shrimp, and avocado. Dressed with eel sauce.",
    image: "/rainbow-roll.png",
  },
  {
    name: "Spicy Tuna Roll",
    price: "$8.99",
    desc: "Filled with spicy tuna, avocado, and cucumber. Topped with orange masago and sesame seeds. Dressed with spicy mayo.",
    image: "/spicy-tuna-roll.png",
  },
  {
    name: "California-Crunchy Roll",
    price: "$10.49",
    desc: "Avocado, cream cheese and crab meat. Topped with bread crumbs. Dressed with eel sauce.",
    image: "/california-crunchy-roll.png",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Miss Jalapeño",
        price: "$8.99",
        desc: "Tempura-battered fried jalapeños stuffed with shrimp, spicy tuna, and cream cheese. Dressed with sesame seeds, spicy mayo and eel sauce.",
      },
      {
        name: "Tempura Shrimp",
        price: "$6.00",
        desc: "Tempura-battered fried jumbo shrimp. Served with spicy mayo and eel sauce.",
      },
      {
        name: "Onigiri",
        price: "$5.00",
        desc: "A rice ball with crab meat and cream cheese, served with a side of eel sauce.",
      },
      {
        name: "Tempura Avocado",
        price: "$9.49",
        desc: "Tempura fried avocado stuffed with crab meat and spicy tuna. Dressed with spicy mayo and eel sauce.",
      },
    ],
  },
  {
    id: "cooked-rolls",
    title: "Cooked Sushi Rolls",
    note: "All ingredients cooked.",
    items: [
      {
        name: "Crunchy Roll",
        price: "$10.49",
        desc: "Boiled shrimp, cucumber, crab meat. Topped with bread crumbs, red tobiko. Dressed with eel sauce.",
      },
      {
        name: "Spicy Crunchy Roll",
        price: "$10.49",
        desc: "Spicy crab meat, topped with bread crumbs. Dressed with spicy mayo and eel sauce.",
      },
      {
        name: "California-Crunchy Roll",
        price: "$10.49",
        desc: "Avocado, cream cheese and crab meat. Topped with bread crumbs. Dressed with eel sauce.",
      },
      {
        name: "Obe Roll",
        price: "$10.99",
        desc: "Spicy crab meat and shrimp. Topped with crab sticks. Dressed with sriracha sauce.",
      },
      {
        name: "Crobe Roll",
        price: "$11.99",
        desc: "Spicy crab meat and shrimp. Topped with crab sticks and bread crumbs. Dressed with sriracha sauce.",
      },
      {
        name: "Shaggy Roll",
        price: "$9.49",
        desc: "Avocado, cucumber and crab sticks. Dressed with spicy mayo.",
      },
      {
        name: "Crazy Crab Roll",
        price: "$10.49",
        desc: "Crab meat, topped with crab sticks and bread crumbs. Dressed with eel sauce.",
      },
      {
        name: "Californian Roll",
        price: "$7.99",
        desc: "Avocado, cream cheese and crab meat. Topped with sesame seeds.",
      },
      {
        name: "Fried Cali Roll",
        price: "$10.99",
        desc: "A fried roll with avocado, cream cheese and crab meat. Topped with bread crumbs. Dressed with eel sauce.",
      },
      {
        name: "Los Angeles Roll",
        price: "$7.99",
        desc: "Crab sticks, avocado, and cucumber. Topped with orange masago.",
      },
      {
        name: "Vegan Roll",
        price: "$9.49",
        desc: "Seaweed salad, avocado, and cucumber.",
      },
      { name: "Dragon Roll", price: "$11.99", desc: "Crab meat and cucumber, topped with BBQ eel, avocado and sesame seeds. Dressed with eel sauce." },
      {
        name: "Green Dragon Roll",
        price: "$10.49",
        desc: "Spicy crab, topped with a layer of avocado and sesame seeds. Dressed with spicy mayo.",
      },
      {
        name: "Black Dragon Roll",
        price: "$14.99",
        desc: "Tempura shrimp and crab meat, topped with a layer of BBQ eel, red tobiko and sesame seeds. Dressed with eel sauce.",
      },
      {
        name: "Sweet Shrimp Roll",
        price: "$10.99",
        desc: "Crab meat and cucumber, topped with a layer of shrimp. Dressed with sweet shrimp sauce.",
      },
      {
        name: "Mango Roll",
        price: "$10.49",
        desc: "Crab meat and cream cheese, topped with a layer of fresh mango.",
      },
      {
        name: "Grilled Salmon Roll",
        price: "$14.99",
        desc: "Avocado and crab meat, topped with torch-grilled salmon, BBQ seasoning, sesame seeds and red tobiko. Dressed with eel sauce.",
      },
      {
        name: "Sweet Dream Roll",
        price: "$10.99",
        desc: "Cream cheese and crab meat, topped with a layer of bread crumbs. Dressed with sweet shrimp sauce and eel sauce.",
      },
      {
        name: "Spider Roll",
        price: "$11.49",
        desc: "Soft shell crab, cucumber, avocado and orange masago. Dressed with eel sauce.",
      },
      {
        name: "Spicy Crab Roll",
        price: "$10.49",
        desc: "Crab sticks, cucumber and avocado, topped with a layer of spicy crab meat.",
      },
      {
        name: "Caterpillar Roll",
        price: "$11.49",
        desc: "Spicy crab meat and shrimp, topped with a layer of avocado and bread crumbs. Dressed with spicy mayo and eel sauce.",
      },
      {
        name: "X'mas Roll",
        price: "$11.99",
        desc: "A fried roll with crab sticks, shrimp, jalapeño strips, cream cheese and sesame seeds. Dressed with spicy mayo and eel sauce.",
      },
      {
        name: "Merry Roll",
        price: "$11.99",
        desc: "A fried roll with crab sticks, salmon, cream cheese and sesame seeds. Dressed with shrimp sauce and eel sauce.",
      },
      {
        name: "What-a-Chicken Roll",
        price: "$10.49",
        desc: "Fried teriyaki chicken, topped with crab meat and sesame seeds. Dressed with eel sauce.",
      },
      {
        name: "Tempura Shrimp Roll",
        price: "$11.49",
        desc: "Tempura shrimp and crab meat, topped with crab sticks and sesame seeds. Dressed with spicy mayo.",
      },
      {
        name: "Tiger Eyes Roll",
        price: "$11.99",
        desc: "Tempura-battered fried salmon, cream cheese, red tobiko and crab meat. Dressed with eel and sweet shrimp sauce.",
      },
    ],
  },
  {
    id: "raw-rolls",
    title: "Raw Sushi Rolls",
    note: "Contain ingredients that are not cooked.",
    items: [
      {
        name: "Rainbow Roll",
        price: "$11.99",
        desc: "Crab meat and cucumber, topped with fresh salmon, tuna, red snapper, shrimp, avocado. Dressed with eel sauce.",
      },
      {
        name: "Red Dragon Roll",
        price: "$14.99",
        desc: "Tempura shrimp, crab meat, topped with a layer of fresh tuna and red tobiko. Dressed with spicy mayo.",
      },
      {
        name: "Philadelphia Roll",
        price: "$8.99",
        desc: "Fresh salmon, cream cheese, and avocado. Topped with orange masago.",
      },
      {
        name: "Pink Roll",
        price: "$14.99",
        desc: "Spicy crab meat, topped with a layer of fresh salmon and red tobiko. Dressed with spicy mayo.",
      },
      {
        name: "Spicy Tuna Roll",
        price: "$8.99",
        desc: "Spicy tuna, avocado, and cucumber. Topped with orange masago and sesame seeds. Dressed with spicy mayo.",
      },
      {
        name: "Spicy Salmon Roll",
        price: "$8.99",
        desc: "Spicy salmon, avocado, and cucumber. Topped with orange masago and sesame seeds. Dressed with spicy mayo.",
      },
      {
        name: "Sunset Roll",
        price: "$13.99",
        desc: "Tempura shrimp and crab meat, topped with a layer of spicy tuna and red tobiko. Dressed with spicy mayo.",
      },
      {
        name: "Pokebowl",
        price: "$13.99",
        desc: "Sushi rice, salmon, tuna, red snapper, seaweed salad, red tobiko, sesame seeds, dressed with spicy mayo and eel sauce.",
      },
    ],
  },
  {
    id: "nigiri",
    title: "Nigiri",
    note: "Fresh seafood on rice balls. $2.50/pc, starting at 4pc.",
    items: [
      { name: "Tuna", price: "$2.50/pc" },
      { name: "Salmon", price: "$2.50/pc" },
      { name: "Red Snapper", price: "$2.50/pc" },
      { name: "Crab Sticks", price: "$2.50/pc" },
      { name: "Eel", price: "$2.50/pc" },
      { name: "Shrimp", price: "$2.50/pc" },
    ],
  },
  {
    id: "sashimi",
    title: "Sashimi",
    note: "Thick raw fish slices — priced 4pc / 6pc / 8pc.",
    items: [
      { name: "Red Snapper", price: "$6.99 / $8.99 / $10.99" },
      { name: "Salmon", price: "$7.99 / $10.99 / $13.99" },
      { name: "Tuna", price: "$8.99 / $11.99 / $14.99" },
    ],
  },
  {
    id: "teriyaki",
    title: "Teriyaki Grill Combos",
    note: "A freshly cooked meal with our signature teriyaki sauce, onions, broccoli, zucchini and cabbage, served with fried rice, noodles, or steamed rice.",
    items: [
      { name: "Chicken Teriyaki", price: "$8.99" },
      { name: "Beef Teriyaki", price: "$10.99" },
      { name: "Shrimp Teriyaki", price: "$10.99" },
      { name: "Chicken & Shrimp Teriyaki", price: "$9.99" },
      { name: "Chicken & Beef Teriyaki", price: "$9.99" },
      { name: "Beef & Shrimp Teriyaki", price: "$10.99" },
      { name: "Add Chicken (8oz)", price: "$4" },
      { name: "Add Beef (8oz)", price: "$5" },
      { name: "Add Shrimp (8oz)", price: "$5" },
      { name: "Add Onions (6oz)", price: "$2" },
      { name: "Add Broccoli (6oz)", price: "$2" },
      { name: "Add Zucchini (6oz)", price: "$2" },
      { name: "Add Cabbage (8oz)", price: "$2" },
    ],
  },
  {
    id: "kids",
    title: "Kid's Meal",
    note: "A freshly cooked small-sized meal with our signature teriyaki sauce, broccoli, and fried rice, noodles, or steamed rice.",
    items: [
      { name: "Chicken", price: "$7.99" },
      { name: "Beef", price: "$8.99" },
      { name: "Shrimp", price: "$8.99" },
    ],
  },
  {
    id: "bento",
    title: "Bento Box",
    note: "All ingredients cooked.",
    items: [
      {
        name: "Bento Deluxe",
        price: "$19.99",
        desc: "Obe roll (4pc), BBQ eel nigiri (2pc), chicken and shrimp teriyaki with broccoli and onions, takuan slices (2pc), steamed rice topped with a sunny egg.",
      },
      {
        name: "Bento California",
        price: "$17.99",
        desc: "Californian roll (4pc), chicken teriyaki with onions and broccoli, crab nigiri (2pc), takuan slices (2pc), steamed rice topped with a sunny egg.",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Eggrolls (chicken)", price: "$1.25 each" },
      { name: "Sauces (2oz)", price: "$1/cup" },
      { name: "Steamed Rice", price: "$1.99 / $3.99" },
      { name: "Fried Rice", price: "$2.99 sm / $4.98 lg" },
      { name: "Shrimp Fried Rice", price: "$7.99 / $10.99" },
      { name: "Noodles", price: "$2.99 sm / $4.98 lg" },
      { name: "Steamed Cabbage", price: "$2.49/cup" },
      { name: "Sautéed Zucchini", price: "$2.49/cup" },
      { name: "Seaweed Salad", price: "$2.99 sm / $5.98 lg" },
    ],
  },
];
