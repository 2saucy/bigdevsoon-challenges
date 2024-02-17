import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { PiMedalThin, PiWalletThin } from "react-icons/pi";

interface Recipe {
  image: string;
  name: string;
  description: string;
  totalTime: string;
  level: string;
  badget: string;
  ingredients: Array<string>;
  instructions: Array<string>;
}

const Page = () => {
  const recipe: Recipe = {
    image: "/assets/100-days-challenge/day-5/coffee.jpeg",
    name: "Sweet Iced Coffee with Coconut Milk",
    description:
      "Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop.",
    totalTime: "10 minutes",
    level: "Easy",
    badget: "Under $2",
    ingredients: [
      "3 tablespoon Espresso coffee powder",
      "1 cup off the boil water",
      "1 cup Coconut milk",
    ],
    instructions: [
      "Boil some water and let sit  for 1-2 minutes.",
      "Put the coffee grounds into a cafetière and pour in the water.",
      "Let the coffee steep for 5 minutes then slowly press down the plunger on your Cafetière.",
      "Pour the coffee into a jug, allow to cool then chill for several hours.",
      "Whisk in the coconut milk and condensed milk and serve over plenty of ice.",
      "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.",
    ],
  };

  return <Recipe {...recipe} />;
};

export default Page;

const Recipe = ({
  image,
  name,
  description,
  totalTime,
  level,
  badget,
  ingredients,
  instructions,
}: Recipe) => {
  return (
    <main className="relative flex min-h-screen antialiased max-md:flex-col md:flex-row">
      <img
        className="object-cover max-md:h-[35vh] max-md:min-w-full md:min-h-full md:w-1/3"
        src={image}
      />
      <div className="space-y-4 bg-white px-8 py-4 max-md:w-full md:absolute md:left-1/2 md:top-8 md:w-2/3 md:-translate-x-1/2 lg:w-1/2">
        <div className="flex items-center gap-2">
          <FaStar className="text-[#ffa51b]" />
          <FaStar className="text-[#ffa51b]" />
          <FaStar className="text-[#ffa51b]" />
          <FaStar className="text-[#ffa51b]" />
          <FaStar className="text-[#ffa51b]" />
          <span className="ml-2 ">(189)</span>
        </div>
        <h1 className="font-bold max-lg:text-3xl max-sm:text-2xl lg:text-4xl">
          {name}
        </h1>
      </div>
      <section className="space-y-6 p-8 text-sm md:mt-44">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 max-sm:flex-col sm:flex-row">
            <CiClock2 className="h-6 w-6" />
            <div className="whitespace-nowrap max-md:text-xs">
              <p className=" uppercase">Total time</p>
              <p className=" font-semibold text-[#ffa51b]">{totalTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col sm:flex-row">
            <PiMedalThin className="h-6 w-6" />
            <div className="whitespace-nowrap max-sm:text-xs">
              <p className="uppercase">Level</p>
              <p className=" font-semibold text-[#ffa51b]">{level}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col sm:flex-row">
            <PiWalletThin className="h-6 w-6" />
            <div className="whitespace-nowrap max-sm:text-xs">
              <p className=" uppercase">Badget</p>
              <p className=" font-semibold text-[#ffa51b]">{badget}</p>
            </div>
          </div>
        </div>
        <p className="mb-8 italic font-semibold">{description}</p>
        <div className="space-y-2">
          <h2 className="font-bold uppercase">Ingredients</h2>
          {ingredients.map((ingredient) => (
            <div className="flex items-center gap-2" key={ingredient}>
              <input type="checkbox" />
              <label>{ingredient}</label>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h2 className="font-bold uppercase">Instructions</h2>
          <ol className="space-y-2">
            {instructions.map((instruction, i) => (
              <li key={i}>{`${i + 1}. ${instruction}`}</li>
            ))}
          </ol>
        </div>
      </section>
      <div className="absolute z-10 w-[20%] bg-black p-2 text-xs font-bold uppercase text-white shadow-md max-lg:hidden lg:bottom-6">
        {name}
      </div>
    </main>
  );
};
