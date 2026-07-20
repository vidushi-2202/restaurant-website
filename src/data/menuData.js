export const menuCategories = [
  { id: "all", name: "Full Menu" },
  { id: "tasting", name: "Le Voyage (Tasting)" },
  { id: "starters", name: "Les Entrées" },
  { id: "mains", name: "Les Plats" },
  { id: "desserts", name: "Les Desserts" },
  { id: "cellar", name: "La Cave (Wines)" }
];

export const menuItems = [
  // Tasting Menu (Le Voyage)
  {
    id: "taste-1",
    category: "tasting",
    name: "Golden Ostra Caviar",
    description: "Meyer lemon crème fraîche, toasted brioche, chive oil, gold leaf garnish.",
    price: 95,
    dietary: ["Gluten-Free Option Available"],
    tag: "Signature",
    image: "/images/caviar.jpg"
  },
  {
    id: "taste-2",
    category: "tasting",
    name: "Hokkaido Scallops",
    description: "Pan-seared scallops, black truffle emulsion, sunchoke purée, micro-herbs.",
    price: 85,
    dietary: ["Gluten-Free"],
    tag: "Award Winner",
    image: "/images/scallops.jpg"
  },
  {
    id: "taste-3",
    category: "tasting",
    name: "A5 Miyazaki Wagyu",
    description: "Charcoal grilled wagyu beef, smoked eggplant purée, matsutake jus, charred scallion.",
    price: 180,
    dietary: ["Gluten-Free"],
    tag: "Rare Selection",
    image: "/images/wagyu.jpg"
  },

  // Starters (Les Entrées)
  {
    id: "start-1",
    category: "starters",
    name: "Foie Gras Torchon",
    description: "Spiced fig compote, port wine reduction, toasted artisanal brioche.",
    price: 48,
    dietary: [],
    tag: "Classic French",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "start-2",
    category: "starters",
    name: "Heirloom Beetroot Carpaccio",
    description: "Whipped goat cheese, candied pistachios, aged balsamic, wild watercress.",
    price: 32,
    dietary: ["Vegetarian", "Gluten-Free"],
    tag: "Organic",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "start-3",
    category: "starters",
    name: "Wild Mushroom Velouté",
    description: "Porcini cream, pickled shimeji mushrooms, truffle foam, rosemary brioche.",
    price: 36,
    dietary: ["Vegetarian"],
    tag: "Chef's Special",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
  },

  // Mains (Les Plats)
  {
    id: "main-1",
    category: "mains",
    name: "Glazed Atlantic Turbot",
    description: "Saffron potato scales, braised fennel, champagne lobster reduction.",
    price: 68,
    dietary: ["Gluten-Free"],
    tag: "Ocean Catch",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-2",
    category: "mains",
    name: "Heritage Duck Breast",
    description: "Spiced honey glaze, parsnip mousseline, tart cherry reduction, roasted baby root vegetables.",
    price: 62,
    dietary: ["Gluten-Free"],
    tag: "House Special",
    image: "https://images.unsplash.com/photo-1514944224746-6bba5b09e5c2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-3",
    category: "mains",
    name: "Carcassonne Lamb Loin",
    description: "Herb-crusted roasted lamb, artichoke barigoule, sweet garlic purée, natural lamb jus.",
    price: 72,
    dietary: [],
    tag: "Seasonal Choice",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts (Les Desserts)
  {
    id: "dess-1",
    category: "desserts",
    name: "The Golden Sphere",
    description: "Dark chocolate shell, warm salted caramel pour-over, hazelnut praline mousse, vanilla bean gelato.",
    price: 28,
    dietary: ["Vegetarian"],
    tag: "Visual Experience",
    image: "/images/dessert-sphere.jpg"
  },
  {
    id: "dess-2",
    category: "desserts",
    name: "Deconstructed Meyer Lemon Tart",
    description: "Lemon curd, toasted Italian meringue shards, citrus shortbread crumble, basil sorbet.",
    price: 24,
    dietary: ["Vegetarian"],
    tag: "Refined",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80"
  },

  // Wines (La Cave)
  {
    id: "wine-1",
    category: "cellar",
    name: "Dom Pérignon Brut 2013",
    description: "Champagne, France. Intensely vibrant, rich stone fruit notes with toasted almond finish.",
    price: 450,
    dietary: ["Vegan friendly"],
    tag: "Grand Cru",
    image: "https://images.unsplash.com/photo-1594487017942-d6efc5836be0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wine-2",
    category: "cellar",
    name: "Château Margaux 2015",
    description: "Bordeaux, France. Full-bodied, velvety tannins, black currant, cedar, and violet aroma.",
    price: 850,
    dietary: ["Vegan friendly"],
    tag: "First Growth",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  }
];

export const specialties = [
  {
    id: "spec-1",
    name: "Pan-Seared Hokkaido Scallops",
    category: "Les Entrées",
    description: "Hand-harvested sea scallops, caramelized to perfection, nested on sunchoke purée and drizzled with a decadent Périgord truffle emulsion.",
    image: "/images/scallops.jpg",
    price: "$85"
  },
  {
    id: "spec-2",
    name: "A5 Miyazaki Wagyu Beef",
    category: "Les Plats",
    description: "Miyazaki Wagyu, charcoal seared for a melt-in-your-mouth texture. Served with organic smoked eggplant and a rich wild matsutake glaze.",
    image: "/images/wagyu.jpg",
    price: "$180"
  },
  {
    id: "spec-3",
    name: "The Golden Sphere",
    category: "Les Desserts",
    description: "A luxury showstopper. A Valrhona dark chocolate dome melted table-side with hot salted caramel sauce to reveal praline mousse.",
    image: "/images/dessert-sphere.jpg",
    price: "$28"
  }
];
