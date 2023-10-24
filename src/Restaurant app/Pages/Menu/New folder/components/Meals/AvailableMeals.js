import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import briyani from '../../Images/briyani.jpg';
import naan from '../../Images/naan.jpg';
import meal from '../../Images/meal.jpg';
import parotta from '../../Images/parotta.jpg';

const DUMMY_MEALS = [
    {
      id: 'm1',
      img: briyani,
      name: 'Chicken Briyani',
      description: 'Along with Bread Halwa,Onion Raita, & Egg',
      price: 180,
      status:'In Queue',
    },
    {
      id: 'm2',
      img: naan,
      name: 'Naan',
      description: 'Along with Paneer Butter Masala',
      price: 80,
      status:'In Queue',
    },
    {
      id: 'm3',
      img: meal,
      name: 'Full Meals',
      description: 'With Mutton & Chicken Gravy',
      price: 100,
      status:'In Queue',
    },
    {
      id: 'm4',
      img: parotta,
      name: 'Parottas',
      description: 'With Egg stuffed & Gravy',
      price: 50,
      status:'In Queue',
    },
  ];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => ( 
    <MealItem  
      key={meal.id} 
      id={meal.id}
      img={meal.img}
      name={meal.name} 
      description={meal.description} 
      price={meal.price} 
      />
    ));
      
        

    return (
        <section className={classes.meals}>
            <Card><ul>
                {mealsList}
            </ul></Card>
        </section>

    );
};

export default AvailableMeals;