import food1 from "../components/images/sliderImagesv2/food1.jpg";
import food2 from "../components/images/sliderImagesv2/food2.jpg";
import food3 from "../components/images/sliderImagesv2/food3.jpg";
import food4 from "../components/images/sliderImagesv2/food4.jpg";

import chef1 from "../components/images/chefimage/Joel-Robuchon.jpg";
import chef2 from "../components/images/chefimage/jemieolif.jpg";
import chef3 from "../components/images/chefimage/gordonram.jpeg";
import chef4 from "../components/images/chefimage/Pierre-Gagnaire.jpg";
export const recipeDetailCards = [
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "20Min",
    foodImage: food1.src,
    servings: "4",
    foodCategory: "Pasta",
    foodOrigin: "Italy",
    summary:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt doloribus eveniet amet a distinctio quidem earum pariatur repellat id dolorum molestiae perspiciatis nobis ullam cumque, tenetur impedit assumenda rerum!",
    ingredients: [
      {
        name: "Pasta",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Tomato",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Olive oil",
        ingredientsImage: food1.src,
        quantity: "20ml",
      },
      {
        name: "Salt",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Pepper",
        ingredientsImage: food1.src,
        quantity: "150g",
      },
    ],
    instructions: [
      {
        step1: "Cut the pasta into bite-sized pieces.",
        step2: "Heat up the olive oil in a pan.",
        step3: "Add the garlic, tomato, and salt.",
        step4: "Cook until the garlic is fragrant.",
        step5: "Add the pasta and cook until the sauce thickens.",
        step6: "Season with pepper.",
        step7: "Serve immediately.",
      },
    ],
    nuttritions: [
      {
        name: "Calories",
        value: "200g",
      },
      {
        name: "Protein",
        value: "20g",
      },
      {
        name: "Fat",
        value: "20g",
      },
      {
        name: "Carbs",
        value: "20g",
      },
    ],
  },
];

export const cards = [
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "20Min",
    foodImage: food1.src,
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Medium",
    time: "5Min",
    foodImage: food2.src,
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Hard",
    time: "1Hour",
    foodImage: food3.src,
    role: "chef",
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "25Min",
    foodImage: food4.src,
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "20Min",
    foodImage: food1.src,
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Medium",
    time: "5Min",
    foodImage: food2.src,
    role: "chef",
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Hard",
    time: "1Hour",
    foodImage: food3.src,
  },
  {
    title: "Spaghetti Lasagna",
    difficulty: "Easy",
    time: "25Min",
    foodImage: food4.src,
  },
];

export const chefMainCard = [
  {
    chefImage: chef4.src,
    name: "Joel Robuchon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, mollitia iure voluptas earum porro aliquid cum quae quasi, sequi, laborum at et excepturi quam voluptate!",
    userRole: "Famous Chef",
    socialMedia: [
      {
        facebook: "https://www.facebook.com/",
        tiktok: "https://www.tiktok.com/",
        followers: "100k",
        following: "100k",
      },
    ],
    recipe: [
      {
        image: food1.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Pizza Margharita",
        tags: ["#Easy", " #Spicy"],
      },
      {
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Spaghetti Oglio Olio",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        image: food3.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Fried Chicken",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        image: food4.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "lemon squash",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Gado Gado jakarta",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
    ],
    chefCards: [
      {
        chefImage: chef3.src,
      },
      {
        chefImage: chef2.src,
      },
      {
        chefImage: chef1.src,
      },
      {
        chefImage: chef4.src,
      },
      {
        chefImage: chef2.src,
      },
      {
        chefImage: chef1.src,
      },
    ],
  },
];
