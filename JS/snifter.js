// (function () {
    const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

    const glass = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g="

    // fetch(`${url}`).then(r => r.json().then(console.log));



    const validIngredients = ["Brandy", "Bourbon", "Whiskey"];
    let allDrinks = [];
    // for(let i = 0; i < validIngredients.length; i++) {
    //     fetch(`${glass}${validIngredients[0]}_snifter`).then(r => r.json().then( (d) => {
    //         console.log(d);
    //     }))

    // }


    // for(let i = 0; i < allSnifters.length; i++){
    //
    //     fetch(`${url}${allSnifters[i]}`).then(r => r.json().then(console.log));
    // }




    const brandy = $("#brandy");
    const bourbon = $("#bourbon");
    const whiskey = $("#whiskey");
    // brandy in drink list #11
    // bourbon in list #19
    // whiskey in list #86

    for(let i = 0; i < validIngredients.length; i++) {
        fetch(`${baseURL}${validIngredients[i]}`).then(r => r.json().then((data) => {
            fillIdList(data.drinks);
        }));
    }
    let drinkIds = [];
    function fillIdList(arr) {
        for(let i = 0; i < arr.length; i++){
            drinkIds.push(arr[i].idDrink);
        }
        if(drinkIds.length > 35) {
            logInfo(drinkIds);
        }
    }

    let fullInfo = [];
    let specificInfo = [];

    function logInfo(arr) {
        for (let i = 0; i < arr.length; i++) {
            fetch(`${url}${arr[i]}`).then(r => {
                r.json().then(d => {
                    fullInfo.push(d.drinks[0]);
                    let main = d.drinks[0];
                    let thisDrink = {
                        name: main.strDrink,
                        glass: main.strGlass,
                        ingredients : getIngredients(main),
                        instructions: main.strInstructions
                    }

                    specificInfo.push(thisDrink);
                })
            })
        }
        console.log(specificInfo);
    }

    function getIngredients(obj){
        let out = [];
        if(obj.strIngredient1 != null){
            out.push(obj.strIngredient1 +" "+ obj.strMeasure1);
        }
        if(obj.strIngredient2 != null){
            out.push(obj.strIngredient2 +" "+ obj.strMeasure2);
        }
        if(obj.strIngredient3 != null){
            out.push(obj.strIngredient3 +" "+ obj.strMeasure3);
        }
        if(obj.strIngredient4 != null){
            out.push(obj.strIngredient4 +" "+ obj.strMeasure4);
        }
        if(obj.strIngredient5 != null){
            out.push(obj.strIngredient5 +" "+ obj.strMeasure5);
        }
        if(obj.strIngredient6 != null){
            out.push(obj.strIngredient6 +" "+ obj.strMeasure6);
        }
        if(obj.strIngredient7 != null){
            out.push(obj.strIngredient7 +" "+ obj.strMeasure7);
        }
        if(obj.strIngredient8 != null){
            out.push(obj.strIngredient8 +" "+ obj.strMeasure8);
        }
        if(obj.strIngredient9 != null){
            out.push(obj.strIngredient9 +" "+ obj.strMeasure9);
        }
        if(obj.strIngredient10 != null){
            out.push(obj.strIngredient10 +" "+ obj.strMeasure10);
        }
        if(obj.strIngredient11 != null){
            out.push(obj.strIngredient11 +" "+ obj.strMeasure11);
        }
        if(obj.strIngredient12 != null){
            out.push(obj.strIngredient12 +" "+ obj.strMeasure12);
        }
        if(obj.strIngredient13 != null){
            out.push(obj.strIngredient13 +" "+ obj.strMeasure13);
        }
        if(obj.strIngredient14 != null){
            out.push(obj.strIngredient14 +" "+ obj.strMeasure14);
        }
        if(obj.strIngredient15 != null){
            out.push(obj.strIngredient15 +" "+ obj.strMeasure15);
        }
        return out;
    }



    // fetch(`${baseURL}${validIngredients[0]}`).then(r => r.json().then((data) => {
    //     brandy.html(showAll(data.drinks));
    //     // console.log()
    // }));
    // fetch(`${baseURL}${validIngredients[1]}`).then(r => r.json().then((data) => {
    //     bourbon.html(showAll(data.drinks));
    // }));
    // fetch(`${baseURL}${validIngredients[2]}`).then(r => r.json().then((data) => {
    //     whiskey.html(showAll(data.drinks));
    // }));


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

// })();