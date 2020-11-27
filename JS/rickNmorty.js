$(document).ready(function (){
   const url = "https://rickandmortyapi.com/api/";

   function getAllChars(counter){
      fetch(`${url}character/?page=${counter}`).then((r) => r.json()).then(data => {
         // console.log(data.results);
         for(let i = 0; i < data.results.length; i++) {
            $(".chars")[0].insertAdjacentHTML("beforeend", render(data.results[i]));
         }
      }).catch(err => console.error(err));
   }

   function searchChars(counter){
      $(".chars")[0].innerHTML = "";
      fetch(`${url}character/?page=${counter}`)
          .then((r) => r.json())
          .then((data) => {
               data.results.forEach((obj) => {
                  if($("#searchChars").val().length < 1){
                     $(".chars")[0].innerHTML += render(obj);
                  } else if(obj.name.toLowerCase().includes($("#searchChars").val().toLowerCase())){
                     $(".chars")[0].innerHTML += render(obj);
                  }
               })
      }).catch(err => console.error(err));
   }

   $("#searchChars").on("input", function (){
      for(let i = 1; i < 35; i++){
         searchChars(i);
      }
   });

   for (let i = 1; i < 35; i++) {
      getAllChars(i);
   }

   function render(obj){
      return  `<div class="card">
                    <h3># ${obj.id} -- ${obj.name}</h3>
                    <h4><strong>${obj.status}</strong></h4>
                    <img src="https://rickandmortyapi.com/api/character/avatar/${obj.id}.jpeg" alt="character_Image" width="200px" height="200px">
                    <h6>Location: ${obj.location.name}</h6>
              </div>`
   }
   
});