/**
 * Defines the object array of junk food items
 */
 const junkFood =[{id: 1,
    name: 'Doritos',
    calories: {
      totalCalories: 200,
      Fat: '10.8 g',
      Sodium: '79 mg',
      Potassium: '239 mg',
      Carbohydrate: '22.8 g',
      Protein: '2.8 g'
    },
    ingredients: 'Monosodium glutamate, Whole corn, Vegetable oil, Salt',
    sideeffects: ['Heart Disease, ', 'Weight gain, ','Obesity, High blood pressure'],
    facts: 'Everyone knows that when you buy Doritos, you’re bound to finish the entire bag—and it’s no surprise. The recipe for the popular chip was specially designed so that no single flavor overpowers another. When foods lack a dominant flavor, people are less apt to feel full and, in turn, consume more, say researchers. What’s more, one of the first ingredients on the food’s label is monosodium glutamate (MSG), an additive that’s been known to increase appetite, and make foods taste more appetizing, according to a study in Physiology and Behavior. And if you thought that Dorito breath was just a coincidental side effect of munching on the snack, think again. The powerful savory taste lingering in your mouth is an example of a tactic called “long hang-time flavor” that’s used to lure snackers into going back for more. With all of these factors working against you, it’s really no wonder you’re defenseless when Doritos come around.',
    image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/145746414/nacho-cheese-doritos.jpg'
   },{
     id: 2,
     name: 'Sugary Cereal',
     calories: {
       totalCalories: 379,
       Fat: '7 g',
       Sodium: '6 mg',
       Potassium: '398 mg',
       Carbohydrate: '68 g',
       Protein: '13 g'
     },
     ingredients: 'Butylated Hydroxytoluene, Butylated Hydroxyanisole, Added sugar',
     sideeffects: ['Unstable fluctuation in blood sugar levels,', ' Diabetes,',' Weight gain'],
     facts: 'Most Cereals Are Loaded With Sugar and Refined Carbs. Added sugar may very well be the single worst ingredient in the modern diet. It is making us fat and unhealthy. There’s no sugar-coating it: sugar wreaks havoc on the body. Consuming too much of the white stuff can lead to obesity, which often causes other health problems like diabetes and heart disease. And many cereals pack more sugar into one bowl than you’ll find in a Boston Cream Donut! To make matters worse, many popular varieties like Frosted Flakes, Fruity Pebbles, and Honey Smacks are also laced with Butylated Hydroxytoluene (BHT) or BHA (Butylated Hydroxyanisole), ingredients that are banned in the UK, Australia, New Zealand, Japan, and much of Europe because they are thought to be carcinogenic. We’re also big fans of these 20 Worst “Healthy” Cereals.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/975060607/sugary-cereal.jpg'
   },{
     id: 3,
     name: 'Deep Fried Foods',
     calories: {
       totalCalories: 218,
       Fat: '12 g',
       Sodium: '77 mg',
       Potassium: '239 mg',
       Carbohydrate: '1.8 g',
       Protein: '30 g'
     },
     ingredients: 'High heat, meat steak laden with hormones and antibiotics',
     sideeffects: ['Heart Disease, ', 'Diabetes, ','Obesity'],
     facts: 'Fried chicken, fried calamari, pork rinds, chicken-fried steak. You won’t ever see these items marked as an “Eat This.” Besides the high fat and calorie content, the main issue with these fried foods is that they contain high levels of inflammatory Advanced Glycation End products, or AGEs. These compounds form when animal-derived products are cooked at high temperatures for a prolonged period of time. According to a 2015 review published in the journal Advances in Nutrition, experts concluded that “sustained exposure to [AGEs] gradually erodes native defenses, setting the stage for abnormally high [oxidative stress] and inflammation, the precursors of disease.”',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/300716660/fried-calamari.jpg'
   },{
     id: 4,
    name: 'Diet Sodas',
    calories: {
      totalCalories: 41,
      Fat: '0 g',
      Sodium: '4 mg',
      Potassium: '3 mg',
      Carbohydrate: '11 g',
      Protein: '0 g'
    },
    ingredients: 'Caramel coloring, Bisphenol A (BPA), aspartame',
    sideeffects: ['Dehydration, ', 'Kidney Harm, ','Brittle Bones'],
    facts: 'What do artificial colors, flame retardants, and waist-widening fake sugars all have in common? They’re ingredients in all your favorite diet fizzy drinks. Nearly all popular diet sodas contain aspartame, an artificial sweetener that raises glucose levels, overloading the liver and causing the excess to convert into fat, according to a study in Applied Physiology, Nutrition, and Metabolism. And that’s not all: The 4-MEI found in the caramel coloring in brown beverages like Coca-Cola and Dr. Pepper has been proven to increase the rate of cancerous and benign tumors in rats as shown by the National Toxicology Program and has been labeled by the International Agency for Research on Cancer as a possible carcinogen for humans.',
    image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/117447734/glasses-soda.jpg'
   },{
     id: 5,
     name: 'Hot Dogs',
     calories: {
       totalCalories: 290,
       Fat: '11 g',
       Sodium: '69 mg',
       Potassium: '179 mg',
       Carbohydrate: '86.8 g',
       Protein: '32.8 g'
     },
     ingredients: 'Meat trimmings, Preservatives, paprika, Flavorings',
     sideeffects: ['Heart Disease,', 'Weight gain,','Obesity,, High blood pressure'],
     facts: 'There are plenty of good reasons not to eat hot dogs—their high levels of sodium and carcinogen-producing nitrates are just two—but if you need another, here you go. The BBQ staple is also preserved with sodium phosphates: an ingredient that even McDonald’s scrapped from their menu. Studies published in the journals FASEB and Aging have connected high levels of serum phosphates (due to dietary consumption) to higher rates of heart disease, chronic kidney disease, weak bones, and accelerated aging.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/433244712/ketchup-hot-dog.jpg'
    },{
     id: 6,
     name: 'Chicken Nuggets',
     calories: {
       totalCalories: 296,
       Fat: '21 g',
       Sodium: '557 mg',
       Potassium: '79 mg',
       Carbohydrate: '16.8 g',
       Protein: '15 g'
     },
     ingredients: 'Boneless chicken, Preservatives, Salt, Autolyzed yeast,',
     sideeffects: ['Heart Disease,', 'Weight gain,','Obesity,, High blood pressure'],
     facts: 'Chicken nuggets all start with chicken but also contain several synthetic ingredients from diglycerides to Red #40 to carrageenan. These chemicals help make overly-processed foods like chicken nuggets possible because that’s what keeps the (very few) organic materials in the nuggets from going bad (or looking weird) after days spent traveling on the road or months in the freezer. But even if you buy them at the grocery store, you might not be safe. Check out our exclusive report of The Most Popular Chicken Nuggets—Ranked!',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/340536388/chicken-nuggets.jpg'
    },{
     id: 7,
     name: 'Deli Meats',
     calories: {
       totalCalories: 353,
       Fat: '32 g',
       Sodium: '293 mg',
       Potassium: '209 mg',
       Carbohydrate: '2.8 g',
       Protein: '13 g'
     },
     ingredients: 'Meat, Pickles, Tomatoes, Flavorings',
     sideeffects: ['kidney Disease,', 'Weight gain,','Obesity,, High blood pressure'],
     facts: 'The deli meats you use to make your lunch may be putting your life at risk. How? Consider this: just 2 of those thinly-sliced pieces of meat can contain more sodium than a bag of pretzels, and upwards of 680 milligrams! (And who only uses 2 slices…?) A diet high in sodium puts many at risk for high blood pressure (hypertension) and heart disease, and with the average American consuming 3,400 milligrams of sodium each day, according to the American Heart Association, you should try to choose lower-sodium options whenever they are available.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/980685267/deli-sandwich-worse-than-cheetoes.jpg'
   },{
     id: 8,
     name: 'Flavored Rice',
     calories: {
       totalCalories: 250,
       Fat: '21 g',
       Sodium: '870 mg',
       Potassium: '23 mg',
       Carbohydrate: '40 g',
       Protein: '7 g'
     },
     ingredients: 'Rice, Diglycerides, Corn syrup , Flavorings',
     sideeffects: ['Heart Disease, ', 'Dehydration, ', 'High blood pressure'],
     facts: 'Instead of eating those preservative-laden pre-seasoned rice mixes, you can easily save both your money and your health by making a batch of easy-to-prepare brown rice. Brown rice is not only filling, but a good source of resistant starch, which researchers at South Dakota State University have linked to improvements in gut bacteria, potentially lowering consumers’ risk of diabetes and obesity along the way. If you’re not a fan of unseasoned rice, try adding some healthy toppings, like a little heart-healthy olive oil, metabolism-boosting chili pepper, or antioxidant-rich spices, like sage, basil, and oregano.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/510941505/brown-rice-dish.jpg'
   },{
     id: 9,
     name: 'Doughnuts',
     calories: {
       totalCalories: 452,
       Fat: '25 g',
       Sodium: '326 mg',
       Potassium: '201 mg',
       Carbohydrate: '51 g',
       Protein: '4.9 g'
     },
     ingredients: 'Bread flour, Whole milk, Eggs, Preservatives',
     sideeffects: ['Heart Disease', 'Weight gain','Obesity, High blood pressure'],
     facts: 'Short for polyoxyethylene-(20)-sorbitan monostearate, this emulsifier is widely used in the food industry. Made of corn, palm oil, and petroleum, this gooey mix can’t spoil, and it often replaces dairy products in baked goods. It’s commonly contaminated with 1,4 dioxane, a chemical which has been shown to cause cancer in animals and could in humans as well, according to a study in Toxicology and Applied Pharmacology.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/301900791/chocolate-donut.jpg'
   },{
     id: 10,
     name: 'Baked Goods',
     calories: {
       totalCalories: 265,
       Fat: '10 g',
       Sodium: '59 mg',
       Potassium: '139 mg',
       Carbohydrate: '56.8 g',
       Protein: '42.8 g'
     },
     ingredients: 'White flour, Preservatives, Sugar, Margarine',
     sideeffects: ['Weight gain','Obesity, High blood pressure'],
     facts: 'Banned in the United Kingdom and Canada, potassium bromate is still lurking in some U.S. foods such as pizza, wraps, rolls, bread crumbs, and bagel chips, according to a 2015 analysis by the non-profit Environmental Working Group (EWG). The issue? A 1982 study found the dough strengthener induced tumors in rats and led the EPA to conclude bromate is a “probable human carcinogen.” It’s also been linked to kidney failure and cell deterioration, according to a 2001 toxicological review of bromate by the EPA. While the FDA has encouraged bakers to voluntarily stop using it since 1991, the EWG found evidence of it lurking in 86 different products, including GOYA’s Disco Dough sheets for empanadas.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/808499710/roll-butter.jpg'
   },{
     id: 11,
     name: 'Muffins',
     calories: {
       totalCalories: 377,
       Fat: '16 g',
       Sodium: '339 mg',
       Potassium: '115 mg',
       Carbohydrate: '54 g',
       Protein: '4.5 g'
     },
     ingredients: 'White flour, Preservatives, Sugar, Butter',
     sideeffects: ['Weight gain','Diabetes, High blood pressure'],
     facts: 'Can someone explain to us why a product that’s packed in a box marked “Baked Fresh Daily” contains at least two preservatives? Entenmann’s isn’t the only one with misleading labelling. Otis Spunkmeyer Muffins look healthy coming in at 210 calories per serving—and then you see there are two servings per muffin. Typically, store-bought muffins contain over 400 calories and a third of the day’s fat, and eating half now and “saving the rest for later” is near impossible—likely because foods rich in carbs, fat and sugar can be downright addicting. A University of Montreal study found that mice who had been fed diets with high levels of those very nutrients displayed withdrawal symptoms and were more sensitive to stressful situations after they were put on a healthier diet. Plus, many commercial muffins are also spiked with waist-widening soybean oil, and trans-fat containing mono- and diglycerides.',
     image: 'https://www.eatthis.com/wp-content/uploads/media/images/ext/268616006/bran-muffins.jpg'
   }];

/**
 * Returns all the junk food objects
 * @return {Array} The junkfood array
 */
  const getAllfoods = () => junkFood;

export {getAllfoods};
