$(document).ready(function (){

    const chuck = $.ajax("http://api.icndb.com/jokes/random");

    function logJoke(){
        chuck.done((data) => {
            $(".content").html(renderJoke(data));
        });
    }

    const codeQuote = $.ajax("http://quotes.stormconsultancy.co.uk/random.json");

    function logQuote(){
        codeQuote.done(data => {
            $(".content").html(renderQuote(data));
        });
    }

    let count = 0;

    $("#next").on("click", function (){
        if(count % 2 === 0){
            logJoke();
        } else {
            logQuote();
        }
        count++;
    });

    $("#previous").on("click", function (){
        if(count % 2 === 0){
            logJoke();
        } else {
            logQuote();
        }
        count++;
    });





    function renderJoke(data){
        let html = `<div class="card"><h1>Chuck Norris</h1>`;
        html += `<p class="info">${data.value.joke}</p>`;
        return html;
    }
    function renderQuote(data){
        let html = `<div class="card"><h1>${data.author}</h1>`;
        html += `<p class="info">${data.quote}</p>`;
        return html;
    }






});