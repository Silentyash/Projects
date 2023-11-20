import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";
import classes from "./AvailabeMeals.module.css";



const DUMMY_MEALS = [
  {
    id: "i1",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with chicken.",
    price: 14.99,
  },
  {
    id: "i2",
    name: "Biryani",
    description: "Fragrant rice dish with spices and meat (or vegetables).",
    price: 12.99,
  },
  {
    id: "i3",
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor.",
    price: 13.49,
  },
  {
    id: "i4",
    name: "Paneer Tikka",
    description: "Cubed paneer cheese marinated and grilled with spices.",
    price: 11.99,
  },
  {
    id: "i5",
    name: "Chole Bhature",
    description: "Chickpea curry served with deep-fried bread.",
    price: 10.99,
  },
  {
    id: "i6",
    name: "Samosa",
    description: "Deep-fried pastry filled with spiced potatoes and peas.",
    price: 6.99,
  },
  {
    id: "i7",
    name: "Dal Makhani",
    description: "Creamy black lentil curry cooked with butter and cream.",
    price: 11.49,
  },
  {
    id: "i8",
    name: "Aloo Paratha",
    description: "Whole wheat flatbread stuffed with spiced potatoes.",
    price: 8.99,
  },
  {
    id: "i9",
    name: "Rogan Josh",
    description: "Lamb curry with aromatic spices.",
    price: 15.99,
  },
  {
    id: "i10",
    name: "Gulab Jamun",
    description: "Sweet milk solids dumplings in sugar syrup.",
    price: 7.49,
  },
  {
    id: "i11",
    name: "Mutton Korma",
    description: "Slow-cooked mutton in a rich and creamy curry.",
    price: 16.99,
  },
  {
    id: "i12",
    name: "Veg Biryani",
    description: "Fragrant rice dish with mixed vegetables and spices.",
    price: 11.49,
  },
  {
    id: "i13",
    name: "Chicken Tikka Masala",
    description: "Tender chicken pieces in a creamy tomato-based sauce.",
    price: 14.49,
  },
  {
    id: "i14",
    name: "Pani Puri",
    description:
      "Hollow fried balls filled with spicy tamarind water and chutney.",
    price: 5.99,
  },
  {
    id: "i15",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango puree and spices.",
    price: 3.99,
  },
  {
    id: "i16",
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach gravy.",
    price: 10.49,
  },
  {
    id: "i17",
    name: "Chicken Kebab",
    description: "Skewered and grilled marinated chicken pieces.",
    price: 12.99,
  },
  {
    id: "i18",
    name: "Tandoori Naan",
    description: "Oven-baked soft bread with garlic and butter.",
    price: 4.49,
  },
  {
    id: "i19",
    name: "Fish Curry",
    description: "Spicy curry with tender fish pieces.",
    price: 13.99,
  },
  {
    id: "i20",
    name: "Mango Pickle",
    description: "Homemade tangy and spicy mango pickle.",
    price: 5.49,
  },
];

const AvailableMeals = () => {
    
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id= {meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
