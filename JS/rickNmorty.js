$(document).ready(function (){
   const url = "https://rickandmortyapi.com/api/";

   function getAllChars(counter){
      fetch(`${url}character/?page=${counter}`).then((r) => r.json()).then(data => {
         console.log(data.results);
         for(let i = 0; i < data.results.length; i++) {
            $(".chars")[0].insertAdjacentHTML("beforeend", render(data.results[i]));
         }
      }).catch(err => console.error(err));
   }


   for (let i = 1; i < 35; i++) {
      getAllChars(i);
   }

   function render(obj){
      return  `<div>
                    <h1>${obj.name}</h1>
              </div>`
   }
   
});