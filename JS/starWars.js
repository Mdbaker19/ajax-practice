$("#searchArea").hide();
$(document).ready(function (){
    let time = 8;
    let countDown = setInterval(reduce, 1000);
    function reduce(){
        time--;
        $("#counter").html(time);
        if(time < 1){
            clearInterval(countDown);
            $("#startingMessage").fadeOut(300);
            $("#searchArea").css("backgroundColor", "white").fadeIn(300);
            $("input").css({
                "backgroundColor": "white",
                "border": "1px solid black"
            });
        }
    }

    let input = document.getElementById("search");

    input.addEventListener("input", function (){
        let value = input.value.toLowerCase();
        characters.forEach((person) => {
            if(person.name.toLowerCase().includes(value)){
                render(person);
            }
        });
    });

    function render(data){
        let html = "";
        html += `<div class="personArea">`;
        html += `<h2>${data.name}</h2>`;
        html += `<p>Height: ${data.height}</p>`;
        // html += `<p>${data.eyeColor}`;
        html += `<p>Hair Color: ${data.hairColor}</p>`;
        // for(let i = 0; i < data.films.length; i++){
        //     html += `<p>${data.films[i]}</p>`;
        // }
        html += `</div>`;
        $("#characterRendering").html(html);
    }




    const main = "https://swapi.dev/api/";
    let characters = [];

    $.ajax(`${main}people/1/`).done((data) => {
        console.log(data);
    });

    for (let j = 1; j < 84; j++) {
        if (j === 17) {
            continue;
        }
        $.ajax(`https://swapi.dev/api/people/${j}`).done((data) => {
            let character = {
                name: data.name,
                DOB: data.birth_year,
                eyeColor: data.eye_color,
                hairColor: data.hair_color,
                gender: data.gender,
                height: data.height,
            }
            characters.push(character);
        }).fail(function (ajax, status, error) {
            console.log(`error is: ${error}`);
            console.log(`ajax request is: ${ajax}`);
            console.log(`status is: ${status}`);
        });
    }
});