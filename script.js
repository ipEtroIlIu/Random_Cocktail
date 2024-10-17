async function getMessages() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const element = document.querySelector(".page");
    element.innerHTML = "";
  
    for (const item of data.drinks) {
      const name = item.strDrink;
      const category = item.strCategory;
      const alcoholic = item.strAlcoholic;
      const instructions = item.strInstructions;

//Ingredients
      const ingredient1 = item.strIngredient1;
      const ingredient2 = item.strIngredient2;
      const ingredient3 = item.strIngredient3;
      const ingredient4 = item.strIngredient4;
      const ingredient5 = item.strIngredient5;
      const ingredient6 = item.strIngredient6;
      const ingredient7 = item.strIngredient7;
      const ingredient8 = item.strIngredient8;
      const ingredient9 = item.strIngredient9;
      const ingredient10 = item.strIngredient10;
      const ingredient11 = item.strIngredient11;
      const ingredient12 = item.strIngredient12;
      const ingredient13 = item.strIngredient13;
      const ingredient14 = item.strIngredient14;
      const ingredient15 = item.strIngredient15;
//Ingredients

//Measures
      const measure1 = "| " + item.strMeasure1; 
      const measure2 = "| " + item.strMeasure2;
      const measure3 = "| " + item.strMeasure3;
      const measure4 = "| " + item.strMeasure4;
      const measure5 = "| " + item.strMeasure5;
      const measure6 = "| " + item.strMeasure6;
      const measure7 = "| " + item.strMeasure7;
      const measure8 = "| " + item.strMeasure8;
      const measure9 = "| " + item.strMeasure9;
      const measure10 = "| " + item.strMeasure10;
      const measure11 = "| " + item.strMeasure11;
      const measure12 = "| " + item.strMeasure12;
      const measure13 = "| " + item.strMeasure13;
      const measure14 = "| " + item.strMeasure14;
      const measure15 = "| " + item.strMeasure15;
//Measures

     element.innerHTML += `<div><p>${name}</p><p>${category}</p><p>${alcoholic}</p><p>${instructions}</p></div><div></div><ul>
<li>${ingredient1} ${measure1}</li>
<li>${ingredient2} ${measure2}</li>
<li>${ingredient3} ${measure3}</li>
<li>${ingredient4} ${measure4}</li>
<li>${ingredient5} ${measure5}</li>
<li>${ingredient6} ${measure6}</li>
<li>${ingredient7} ${measure7}</li>
<li>${ingredient8} ${measure8}</li>
<li>${ingredient9} ${measure9}</li>
<li>${ingredient10} ${measure10}</li>
<li>${ingredient11} ${measure11}</li>
<li>${ingredient12} ${measure12}</li>
<li>${ingredient13} ${measure13}</li>
<li>${ingredient14} ${measure14}</li>
<li>${ingredient15} ${measure15}</li>
</ul></div><br>`;
    }
  }
  getMessages();