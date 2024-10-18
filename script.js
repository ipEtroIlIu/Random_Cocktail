async function getMessages() {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	const element = document.querySelector('.page');
	element.innerHTML = '';

	for (const item of data.drinks) {
		const name = item.strDrink;
		const category = item.strCategory;
		const alcoholic = item.strAlcoholic;
		const instructions = item.strInstructions;
		const image = item.strDrinkThumb;

		let ingredients = [];
		ingredients.push(item.strIngredient1);
		ingredients.push(item.strIngredient1);
		ingredients.push(item.strIngredient2);
		ingredients.push(item.strIngredient3);
		ingredients.push(item.strIngredient4);
		ingredients.push(item.strIngredient5);
		ingredients.push(item.strIngredient6);
		ingredients.push(item.strIngredient7);
		ingredients.push(item.strIngredient8);
		ingredients.push(item.strIngredient9);
		ingredients.push(item.strIngredient10);
		ingredients.push(item.strIngredient11);
		ingredients.push(item.strIngredient12);
		ingredients.push(item.strIngredient13);
		ingredients.push(item.strIngredient14);
		ingredients.push(item.strIngredient15);

		let measures = [];
		measures.push(item.strMeasure1);
		measures.push(item.strMeasure2);
		measures.push(item.strMeasure3);
		measures.push(item.strMeasure4);
		measures.push(item.strMeasure5);
		measures.push(item.strMeasure6);
		measures.push(item.strMeasure7);
		measures.push(item.strMeasure8);
		measures.push(item.strMeasure9);
		measures.push(item.strMeasure10);
		measures.push(item.strMeasure11);
		measures.push(item.strMeasure12);
		measures.push(item.strMeasure13);
		measures.push(item.strMeasure14);
		measures.push(item.strMeasure15);

		let manual = '';
		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i]) {
				manual += `<li>${ingredients[i]}${measures[i] ? ' | ' + measures[i] : ''}</li>`;
			}
		}

		element.innerHTML += ` 
      <img src="${image}" alt="Your drink image" class="picture"> 
      <div class="info" id="info">
      <div class="txt">
      <p>Name: ${name}</p> 
      <p>Category: ${category}</p> 
      <p>Type: ${alcoholic}</p>
	  <p>Ingredients:</p>
	  <ul> 
      ${manual}
      </ul>  
      <p>Instruction: ${instructions}</p>
      </div> 
      </div>
      `;
	}
}

getMessages();
