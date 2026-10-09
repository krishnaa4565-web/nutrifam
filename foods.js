// Estimated nutrition values (approximate, NOT lab-verified). Format: name|portion|kcal|P|C|F
const FOOD_DATA=`#Breakfast
Idli|1 piece|60|2|12|0
Sambar|1 bowl|150|7|20|4
Idli + sambar|2 idli + 1 bowl|270|11|44|4
Plain dosa|1 medium|180|4|28|6
Masala dosa|1|350|7|50|12
Rava dosa|1|220|5|32|8
Mysore masala dosa|1|400|8|52|17
Uttapam|1 medium|200|5|30|6
Onion uttapam|1|230|6|32|8
Medu vada|1|150|4|18|7
Uddina vada|1 small|30|1|4|1
Batata vada|1|150|3|18|7
Poha|1 bowl|200|4|30|7
Vegetable poha|1 bowl|220|5|33|7
Upma|1 bowl|200|5|30|6
Sabudana khichdi|1 bowl|300|5|50|9
Thalipeeth|1 medium|180|5|25|6
Thepla|1|120|3|18|4
Plain paratha|1|180|4|25|7
Aloo paratha|1|250|5|35|9
Puri|1|100|2|12|5
Chole bhature|1 serving|500|15|65|20
Misal pav|1 plate|400|15|55|14
Vada pav|1|250|6|35|10
Dhokla|1 piece|50|2|8|1
Khandvi|1 serving|150|6|18|6
Moong chilla|1|120|7|16|3
Besan chilla|1|150|6|18|5
Bread omelette|1 serving|280|13|28|12
Boiled eggs|2|150|13|1|10
#Rice & meals
Cooked rice|1 bowl|200|4|44|0
Cooked rice|1 full plate|250|5|55|1
Dal|1 small bowl|120|7|18|3
Dal|1 large bowl|200|11|30|5
Dal-rice|1 plate|350|12|60|7
Dal-rice with ghee|1 plate|400|12|60|12
Varan|1 bowl|130|7|18|3
Dal tadka|1 bowl|180|8|20|8
Khichdi|1 bowl|250|9|40|6
Rajma|1 bowl|220|12|32|5
Chole|1 bowl|240|11|35|6
Matki usal|1 bowl|180|10|25|4
Moong curry|1 bowl|180|12|28|2
Chana curry|1 bowl|220|11|35|4
Vegetable pulao|1 plate|300|6|50|8
Jeera rice|1 plate|280|5|48|7
Veg biryani|1 plate|350|7|55|11
Chicken biryani|1 plate|500|28|60|17
Egg fried rice|1 plate|400|12|55|14
Veg fried rice|1 plate|350|7|55|10
Curd rice|1 bowl|250|7|40|6
#Roti & bread
Chapati|1 medium|70|2|12|2
Roti|1 medium|120|3|20|3
Phulka|1|70|2|14|1
Roti with ghee|1|110|2|12|6
Pav|1|100|3|19|1
Bread|1 slice|80|3|14|1
Brown bread|1 slice|75|3|13|1
Naan|1|260|8|45|6
Butter naan|1|320|8|45|12
Bhakri|1 medium|180|5|35|3
Bhatura|1|250|6|35|10
#Vegetables
Gavar bhaji|1 bowl|70|3|10|3
Bhindi bhaji|1 bowl|100|3|12|5
Palak bhaji|1 bowl|80|4|10|3
Aloo bhaji|1 bowl|150|3|25|5
Mix veg|1 bowl|130|4|18|5
Baingan bhaji|1 bowl|120|3|15|6
Cabbage bhaji|1 bowl|90|3|12|4
Cauliflower bhaji|1 bowl|100|4|12|4
Lauki bhaji|1 bowl|70|2|10|3
Pumpkin bhaji|1 bowl|90|2|15|3
Methi bhaji|1 bowl|80|4|10|3
Green peas|1 bowl|130|8|20|2
Corn|1 bowl|150|5|30|2
Cucumber|1 medium|15|1|4|0
Tomato|1 medium|20|1|4|0
Onion|1 small|30|1|7|0
Mixed salad|1 bowl|50|2|10|0
#Paneer & dairy
Paneer|100 g|280|18|3|22
Paneer|50 g|140|9|2|11
Paneer bhurji|1 bowl|300|18|8|22
Palak paneer|1 bowl|330|18|12|23
Paneer tikka|1 serving|280|18|10|19
Shahi paneer|1 bowl|350|15|15|27
Milk|1 glass, 250 ml|150|8|12|8
Toned milk|1 glass, 250 ml|125|8|12|5
Curd|1 bowl|100|5|7|5
Greek yogurt|1 bowl|120|10|8|5
Cheese|1 slice|70|4|1|6
Butter|1 tsp|35|0|0|4
Ghee|1 tsp|45|0|0|5
Cream|1 tbsp|50|0|1|5
#Fruits
Banana|1 medium|90|1|23|0
Apple|1 medium|95|0|25|0
Mango|1 medium|130|1|35|0
Watermelon|1 bowl|50|1|12|0
Papaya|1 bowl|60|1|15|0
Orange|1|60|1|15|0
Mosambi|1|50|1|12|0
Guava|1|70|2|15|1
Pomegranate|1 bowl|120|2|27|1
Grapes|1 bowl|100|1|26|0
Chikoo|1|80|1|20|1
Pineapple|1 bowl|80|1|21|0
Avocado|100 g|160|2|9|15
Dragon fruit|1 medium|100|2|22|0
Strawberries|1 bowl|50|1|12|0
Pear|1 medium|100|1|27|0
Kiwi|1|45|1|11|0
Coconut water|1 glass|45|0|11|0
#Toast & sandwiches
Avocado toast|2 bread + avocado|350|8|40|18
Cheese chilli toast|2 slices|300|12|30|14
Butter toast|2 slices|220|6|28|9
Garlic bread|2 pieces|200|5|25|9
Veg sandwich|1|250|8|35|8
Cheese sandwich|1|350|12|35|17
Paneer sandwich|1|350|15|35|14
Peanut butter toast|2 slices|300|12|35|12
#Milkshakes & drinks
Banana milkshake|1 glass|200|7|35|5
Oreo milkshake|1 glass|300|7|45|10
Oats milkshake|1 glass|250|9|35|8
Mango shake|1 glass|220|7|35|6
Sweet lassi|1 glass|220|6|35|6
Plain lassi|1 glass|150|6|18|5
Tak / buttermilk|1 glass|40|2|4|1
Lemon sarbat|1 glass|50|0|13|0
Tea with milk and sugar|1 cup|70|2|10|2
Coffee with milk and sugar|1 cup|80|3|11|3
Black coffee|1 cup|5|0|1|0
Hot chocolate|1 cup|180|5|28|6
Sattu drink|1 glass|200|10|30|5
Soft drink|1 can, 330 ml|140|0|35|0
Packaged fruit juice|1 glass|120|1|28|0
#Nuts & spreads
Almonds|10|70|3|3|6
Cashews|10|90|3|5|7
Walnuts|2 halves|25|1|1|2.5
Pistachios|10|40|1.5|2|3
Peanuts|1 handful|170|7|6|14
Roasted chana / futane|1 bowl|180|9|30|3
Peanut butter|1 tbsp|95|4|3|8
Honey|1 tbsp|65|0|17|0
Chikki|1 piece|60|2|7|3
Dates|2|45|0|12|0
Raisins|1 tbsp|30|0|8|0
Flax seeds|1 tbsp|55|2|3|4
#Vegetarian protein
Soya chunks, dry|50 g|170|25|17|1
Soya chunks curry|1 bowl|250|20|15|10
Soya sticks|1 bowl|200|6|18|12
Protein powder|1 scoop|120|24|3|2
#Snacks
Potato chips|1 small packet|150|2|15|9
Banana chips|1 bowl|200|2|25|11
Popcorn|1 bowl|150|3|18|7
Samosa|1|150|3|18|8
Kachori|1|180|4|22|9
Pakoda|1 serving|200|5|20|12
French fries|1 serving|300|4|40|14
Waffle|1|200|4|25|9
Potato spiral|1|250|4|35|12
Biscuits|2|70|1|10|3
Chocolate bar|1 small bar|200|3|25|10
Ice cream|1 scoop|140|3|18|6
Maggi|1 prepared packet|300|7|45|10
Veg momos|6|300|10|40|10
Spring roll|1|150|3|18|7
Frankie|1|350|10|45|14
#Fast food
Veg burger|1|350|10|45|14
Cheese burger|1|450|15|45|22
Pizza|1 slice|250|10|30|10
Pav bhaji|1 plate|400|10|55|15
Veg noodles|1 plate|400|9|55|15
Pasta in red sauce|1 plate|350|10|55|8
Pasta in white sauce|1 plate|450|12|50|20
Veg Manchurian|1 plate|350|7|40|17
Hakka noodles|1 plate|400|9|55|15
Fried rice|1 plate|350|7|55|10
#Desserts
Gulab jamun|1|120|2|18|5
Rasgulla|1|100|2|20|1
Jalebi|2 pieces|180|1|35|5
Ladoo|1|150|3|20|7
Barfi|1 piece|120|3|15|6
Cake|1 slice|300|4|40|14
Brownie|1|250|3|35|12
Kulfi|1|180|5|25|7
Falooda|1 glass|350|7|55|12
Rabdi falooda|1 glass|450|9|65|17
Fruit custard|1 bowl|200|5|35|5
Kheer|1 bowl|220|6|35|7
Shrikhand|1 bowl|250|7|35|9
Chocolate mousse|1 bowl|300|5|30|18
#Chicken
Chicken breast, cooked|100 g|165|31|0|4
Chicken curry|1 bowl|280|25|8|16
Chicken tikka|1 serving|250|30|5|12
Tandoori chicken|1 leg piece|220|28|3|11
Grilled chicken|1 serving|250|35|2|11
Fried chicken|1 piece|300|22|15|17
Chicken kebab|1 serving|250|25|5|13
Chicken 65|1 serving|350|25|15|22
Butter chicken|1 bowl|350|25|10|23
Chicken korma|1 bowl|350|25|10|24
Chicken soup|1 bowl|120|12|8|4
Chicken sandwich|1|350|22|35|12
#Eggs
Boiled egg|1|75|6|1|5
Omelette|2 eggs|180|13|2|13
Egg bhurji|1 serving|220|14|5|16
Egg curry|2 eggs + gravy|250|14|10|17
Egg roll|1|300|12|35|12
#Fish & seafood
Grilled fish|100 g|150|26|0|5
Fish curry|1 bowl|250|22|8|14
Fried fish|1 piece|250|22|10|14
Salmon, cooked|100 g|200|22|0|12
Pomfret, grilled|100 g|150|22|0|7
Surmai, grilled|100 g|170|24|0|8
Prawns, cooked|100 g|100|24|0|1
Prawn curry|1 bowl|250|22|10|13
Fried prawns|100 g|220|20|12|10
Crab, cooked|100 g|100|20|0|2
Squid, cooked|100 g|175|18|8|7
Fish biryani|1 plate|450|25|55|13
#Mutton & other meat
Mutton curry|1 bowl|350|25|8|24
Mutton biryani|1 plate|550|25|65|20
Seekh kebab|1 serving|250|22|5|16
Beef steak, cooked|100 g|250|26|0|16
#Chocolates & sweets
Nankhatai|1 piece|95|1|12|5
Nankhatai|3 pieces|285|3|36|15
Kunafa chocolate (Dubai style)|1 piece (30 g)|160|2|15|10
Kunafa chocolate (Dubai style)|1 bar (100 g)|530|7|50|33
Cadbury Dairy Milk Silk|1 bar (60 g)|330|4.5|35|20
Cadbury Dairy Milk|1 bar (50 g)|265|3.5|28|15
KitKat|4-finger bar|210|2.5|26|11
5 Star|1 bar|100|1|16|3.5
Dark chocolate|2 squares (20 g)|115|1.5|9|8
Nutella|1 tbsp|100|1|11|6
Oreo biscuits|3|160|1.5|25|7
Parle-G|4 biscuits|90|1.5|16|2
Good Day biscuit|2|90|1|12|4
Kaju katli|1 piece|50|1|7|2.5
Rasmalai|1 piece|180|5|20|9
Gajar halwa|1 bowl|300|5|40|13
Moong dal halwa|1 bowl|350|7|40|18
Peda|1|90|2|13|3
Sheera|1 bowl|280|4|42|11
Puran poli|1|250|5|42|7
Modak|1|150|2|22|6
Mishti doi|1 bowl|180|5|28|5
Apple crumble|1 serving|300|3|45|13
#Street food & chaat
Pani puri|6 pieces|200|3|30|8
Bhel puri|1 plate|250|6|38|9
Sev puri|1 plate|300|5|35|15
Dahi puri|1 plate|280|6|35|12
Aloo tikki|1|120|2|16|6
Aloo tikki chaat|1 plate|320|7|40|15
Samosa chaat|1 plate|350|7|42|17
Papdi chaat|1 plate|300|6|40|13
Dabeli|1|290|6|42|11
Paneer kathi roll|1|420|15|45|20
Chicken kathi roll|1|400|20|42|17
Sev|1 handful (30 g)|150|4|13|9
Mathri|1|70|1|8|4
Roasted makhana|1 bowl|100|3|20|1
#More meals & breads
Rumali roti|1|90|3|17|1
Tandoori roti|1|120|4|23|1.5
Kulcha|1|200|5|34|5
Missi roti|1|150|5|22|5
Lachha paratha|1|250|5|32|11
Dal makhani|1 bowl|300|11|28|16
Kadhi|1 bowl|180|6|16|10
Aloo gobi|1 bowl|150|4|18|7
Baingan bharta|1 bowl|140|3|14|8
Paneer butter masala|1 bowl|400|16|14|31
Veg kolhapuri|1 bowl|250|6|18|17
Sprouts salad|1 bowl|120|9|20|1
Boiled chana|1 bowl|210|11|35|3.5
Oats porridge|1 bowl|200|7|32|4
Muesli with milk|1 bowl|300|9|50|7
Granola bar|1 bar|150|3|22|6
Appe|3 pieces|180|4|28|6
Masala chai|1 cup|90|2.5|13|3
Cold coffee|1 glass|220|6|30|8
Energy drink|1 can|110|0|27|0
#Protein foods
Soya chaap (tandoori / malai)|1 stick|200|14|10|11
Soya chaap curry|1 bowl|280|18|14|16
Soya chaap roll|1|380|16|42|16
Tofu|100 g|145|16|3|8
Whey protein shake|1 scoop in water|120|24|3|2
Protein bar (store-bought, edit)|1 bar|200|20|20|7
Sattu|2 tbsp (30 g)|110|6|18|2
Hung curd|1 bowl|120|10|6|6
Soya milk|1 glass, 250 ml|110|8|8|5
Almond milk|1 glass, 250 ml|40|1|2|3
Egg white|1|17|3.6|0.2|0
Egg white omelette|3 whites|60|11|1|0
#Alcohol (adult, optional)
Beer|1 glass, 330 ml|140|1|11|0
Light beer|1 glass, 330 ml|100|1|5|0
Wine|1 glass, 150 ml|125|0|4|0
Whisky, 30 ml|1 small measure|70|0|0|0
Rum, 30 ml|1 small measure|70|0|0|0
#Sauces & extras
Mayonnaise|1 tbsp|70|0|1|7
Tomato ketchup|1 tbsp|20|0|5|0
Green chutney|1 tbsp|20|1|3|0
Coconut chutney|1 tbsp|50|1|3|4
Pickle|1 tbsp|30|0|2|3
Sugar|1 tsp|20|0|5|0
Oil|1 tsp|45|0|0|5
Olive oil|1 tsp|40|0|0|4.5`;
const FOODS=(()=>{let c='',o=[];FOOD_DATA.split('\n').forEach((l,i)=>{if(l[0]==='#'){c=l.slice(1);return}const a=l.split('|');o.push({id:'b'+i,name:a[0],s:a[1],k:+a[2],p:+a[3],c:+a[4],f:+a[5],cat:c})});return o})();
