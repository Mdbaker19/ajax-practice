$(document).ready(function (){
   const url = "https://rickandmortyapi.com/api/";
   const charSearchBar = $("#searchChars");
   const charStatusBar = $("#charStatus");
   const contentArea = $(".chars")[0];
   let allCharacters = [];
   let filteredCharacters = [];
   let allCharCount = 0;
   let filteredCharCount = 0;

   function getAllChars(counter){
      fetch(`${url}character/?page=${counter}`).then((r) => r.json()).then(data => {
         console.log(data.results);
         for(let i = 0; i < data.results.length; i++) {
            allCharacters.push(data.results[i]);
            allCharCount++;
            contentArea.insertAdjacentHTML("beforeend", render(data.results[i]));
         }
         $("#amountOfChars").html(allCharCount);
      }).catch(err => console.error(err));
   }

   for (let i = 1; i < 35; i++) {
      getAllChars(i);
   }

   function searchChars(){
      contentArea.innerHTML = "";
      filteredCharCount = 0;
      if(filteredCharacters.length < 1){
         filteredCharacters = allCharacters;
      }
      filteredCharacters.forEach((character) => {
         if(charSearchBar.val().length < 1){
            filteredCharCount++;
            contentArea.innerHTML += render(character);
         } else if(character.name.toLowerCase().includes(charSearchBar.val().toLowerCase())){
            filteredCharCount++;
            contentArea.innerHTML += render(character);
         }
      });
      $("#currentFilteredAmount").html(filteredCharCount);
   }

   function filterLife(){
      filteredCharacters = [];
      contentArea.innerHTML = "";
      filteredCharCount = 0;
      allCharacters.forEach((character) => {
         if(character.status === charStatusBar.val()){
            filteredCharCount++;
            filteredCharacters.push(character);
            contentArea.insertAdjacentHTML("beforeend", render(character));
         }
         $("#currentFilteredAmount").html(filteredCharCount);
      });
   }

   charSearchBar.on("input", function (){
      searchChars();
   });

   charStatusBar.on("change", function (){
      filterLife();
   });

   function render(obj){
      return  `<div class="card">
                    <h2>${obj.name}</h2>
                    <h4><strong>${obj.status}</strong></h4>
                    <img src="https://rickandmortyapi.com/api/character/avatar/${obj.id}.jpeg" class="charImage" alt="character_Image" width="200px" height="200px">
                    <h6>Location: ${obj.location.name}</h6>
              </div>`
   }

});