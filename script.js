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

		//Ingredients
		let ingredient1 = item.strIngredient1;
		if (item.strIngredient1 === null) {
			ingredient1 = '';
		}
		let ingredient2 = item.strIngredient2;
		if (item.strIngredient2 === null) {
			ingredient2 = '';
		}
		let ingredient3 = item.strIngredient3;
		if (item.strIngredient3 === null) {
			ingredient3 = '';
		}
		let ingredient4 = item.strIngredient4;
		if (item.strIngredient4 === null) {
			ingredient4 = '';
		}
		let ingredient5 = item.strIngredient5;
		if (item.strIngredient5 === null) {
			ingredient5 = '';
		}
		let ingredient6 = item.strIngredient6;
		if (item.strIngredient6 === null) {
			ingredient6 = '';
		}
		let ingredient7 = item.strIngredient7;
		if (item.strIngredient7 === null) {
			ingredient7 = '';
		}
		let ingredient8 = item.strIngredient8;
		if (item.strIngredient8 === null) {
			ingredient8 = '';
		}
		let ingredient9 = item.strIngredient9;
		if (item.strIngredient9 === null) {
			ingredient9 = '';
		}
		let ingredient10 = item.strIngredient10;
		if (item.strIngredient10 === null) {
			ingredient10 = '';
		}
		let ingredient11 = item.strIngredient11;
		if (item.strIngredient11 === null) {
			ingredient11 = '';
		}
		let ingredient12 = item.strIngredient12;
		if (item.strIngredient12 === null) {
			ingredient12 = '';
		}
		let ingredient13 = item.strIngredient13;
		if (item.strIngredient13 === null) {
			ingredient13 = '';
		}
		let ingredient14 = item.strIngredient14;
		if (item.strIngredient14 === null) {
			ingredient14 = '';
		}
		let ingredient15 = item.strIngredient15;
		if (item.strIngredient15 === null) {
			ingredient15 = '';
		}
		//Ingredients

		// Measures
		let measure1 = ' | ' + item.strMeasure1;
		if (item.strMeasure1 === null) {
			measure1 = '';
		}

		let measure2 = ' | ' + item.strMeasure2;
		if (item.strMeasure2 === null) {
			measure2 = '';
		}

		let measure3 = ' | ' + item.strMeasure3;
		if (item.strMeasure3 === null) {
			measure3 = '';
		}

		let measure4 = ' | ' + item.strMeasure4;
		if (item.strMeasure4 === null) {
			measure4 = '';
		}

		let measure5 = ' | ' + item.strMeasure5;
		if (item.strMeasure5 === null) {
			measure5 = '';
		}

		let measure6 = ' | ' + item.strMeasure6;
		if (item.strMeasure6 === null) {
			measure6 = '';
		}

		let measure7 = ' | ' + item.strMeasure7;
		if (item.strMeasure7 === null) {
			measure7 = '';
		}

		let measure8 = ' | ' + item.strMeasure8;
		if (item.strMeasure8 === null) {
			measure8 = '';
		}

		let measure9 = ' | ' + item.strMeasure9;
		if (item.strMeasure9 === null) {
			measure9 = '';
		}

		let measure10 = ' | ' + item.strMeasure10;
		if (item.strMeasure10 === null) {
			measure10 = '';
		}

		let measure11 = ' | ' + item.strMeasure11;
		if (item.strMeasure11 === null) {
			measure11 = '';
		}

		let measure12 = ' | ' + item.strMeasure12;
		if (item.strMeasure12 === null) {
			measure12 = '';
		}

		let measure13 = ' | ' + item.strMeasure13;
		if (item.strMeasure13 === null) {
			measure13 = '';
		}

		let measure14 = ' | ' + item.strMeasure14;
		if (item.strMeasure14 === null) {
			measure14 = '';
		}

		let measure15 = ' | ' + item.strMeasure15;
		if (item.strMeasure15 === null) {
			measure15 = '';
		}
		//Measures

		element.innerHTML += `
            <img src="${image}" alt="Cocktail" class="pic">
            <p>${name}</p>
            <p>${category}</p>
            <p>${alcoholic}</p>
            <p>${instructions}</p>
            <div class="list">
            <ul>
            <li>${ingredient1}${measure1}</li>
            <li>${ingredient2}${measure2}</li>
            <li>${ingredient3}${measure3}</li>
            <li>${ingredient4}${measure4}</li>
            <li>${ingredient5}${measure5}</li>
            <li>${ingredient6}${measure6}</li>
            <li>${ingredient7}${measure7}</li>
            <li>${ingredient8}${measure8}</li>
            <li>${ingredient9}${measure9}</li>
            <li>${ingredient10}${measure10}</li>
            <li>${ingredient11}${measure11}</li>
            <li>${ingredient12}${measure12}</li>
            <li>${ingredient13}${measure13}</li>
            <li>${ingredient14}${measure14}</li>
            <li>${ingredient15}${measure15}</li>
            </ul>
            </div>
            `;
	}
}

const press = 1;
if (press == true) {
	getMessages();
}
