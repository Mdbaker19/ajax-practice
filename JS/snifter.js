(function () {
    const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

    const validIngredients = ["Brandy", "Bourbon", "Whiskey"];
    const brandy = $("#brandy");
    const bourbon = $("#bourbon");
    const whiskey = $("#whiskey");
    // brandy in drink list #11
    // bourbon in list #19
    // whiskey in list #86

    for(let i = 0; i < validIngredients.length; i++) {
        fetch(`${baseURL}${validIngredients[i]}`).then(r => r.json().then((data) => {
            console.log(data);
        }));
    }

    fetch(`${baseURL}${validIngredients[0]}`).then(r => r.json().then((data) => {
        brandy.html(showAll(data.drinks));
    }));
    fetch(`${baseURL}${validIngredients[1]}`).then(r => r.json().then((data) => {
        bourbon.html(showAll(data.drinks));
    }));
    fetch(`${baseURL}${validIngredients[2]}`).then(r => r.json().then((data) => {
        whiskey.html(showAll(data.drinks));
    }));


    function showAll(arr){
        let html = "";
        for(let i = 0; i < arr.length; i++){
            html+=render(arr[i]);
        }
        return html;
    }

    function render(obj) {
        return `<div id="drinkItem">
                    <h3>${obj.strDrink}</h3>
                    <img src="${obj.strDrinkThumb}" alt="drink" id="drinkImg">
                </div>`;
    }

})();