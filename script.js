const drinkName = document.getElementById('fullname');
const listOfDrinks = document.querySelector('.drink-list');

const chooseTheDrink = async(drinktype)=>{
  const cocktailAPI = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinktype}`;
  const response = await fetch(cocktailAPI);
  if(response.status === 200){
    const data = await response.json()
    return data.drinks;
  }
}
const showDrinks = async(ingredients)=>{
  const data = await chooseTheDrink(ingredients);
  for(let value in data){
    const drinkList = document.createElement('li');
    const drinkLink = document.createElement('a');
    drinkLink.setAttribute('href', '#');
    drinkList.appendChild(drinkLink);
    drinkLink.innerHTML = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data[value].strDrink}`;
    listOfDrinks.appendChild(drinkList);
  }
}

const inputDrink = document.querySelector('.nome-bebida');
const btnSearchButton = document.querySelector('.buscar');
btnSearchButton.addEventListener('click', (event=>{
  event.preventDefault();
  showDrinks(inputDrink.value);
}))

 // const drinkImage = document.querySelector('.image');
 //  drinkImage.src = data[1].strDrinkThumb;