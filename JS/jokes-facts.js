$(document).ready(function (){

    const chuck = $.ajax("http://api.icndb.com/jokes/random");

    chuck.done((data) => {
        console.log(data);
    });

    const codeQuote = $.ajax("http://quotes.stormconsultancy.co.uk/random.json");

    codeQuote.done(data => {
        console.log(data);
    });


});