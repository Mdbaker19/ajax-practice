$(document).ready(function (){
    let quoteArr = [];
    $.ajax("http://quotes.stormconsultancy.co.uk/quotes.json").done((data) => {
        for(let i = 0; i < data.length; i++){
            let quote = {}
                quote.a = data[i].author;
                quote.q = data[i].quote;
                quoteArr.push(quote);
        }
    });

    function getJoke(){
        $.ajax("http://api.icndb.com/jokes/random").done((data) => {
            $(".content").html(renderJoke(data));
        });
    }

    function getQuote() {
        let random = Math.floor(Math.random() * quoteArr.length-1)+1;
        $(".content").html(renderQuote(quoteArr[random]));
    }


    $("#pullJoke").on("click", getJoke);

    $("#pullQuote").on("click", getQuote);

    function renderJoke(obj){
        let html = `<div class="card"><h1>Random Joke</h1>`;
        html += `<p class="info">${obj.value.joke}</p>`;
        html += `</div>`;
        return html;
    }
    function renderQuote(obj){
        let html = `<div class="card"><h1>${obj.a}</h1>`;
        html += `<p class="info">${obj.q}</p>`;
        html += `</div>`;
        return html;
    }
});