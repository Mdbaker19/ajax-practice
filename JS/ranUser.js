$(document).ready(function (){
    const url = "https://randomuser.me/api/";
    function getUser() {
        fetch(url).then(r => r.json()).then(d => {
            let obj = d.results[0];
            $("#profileArea").html(render(obj));
        });
    }
    window.onload = function (){
        getUser();
    }

    $("#new").on("click", getUser);

    function render(obj){
        return `<div class="card">
                    <div class="name">
                        <h1>${obj.name.title}. ${obj.name.first} ${obj.name.last}</h1>
                    </div>
                    <div class="info">
                        <div class="pic">
                            <img src="${obj.picture.large}">
                        </div>
                        <div class="contact">
                            <h5>AGE: ${obj.dob.age}</h5>
                            <h5>DOB: ${format(obj.dob.date)}</h5>
                            <h5>Cell: ${obj.cell}</h5>
                            <h5>Email: ${obj.email}</h5>
                            <h5>UN: ${obj.login.username}</h5>
                            <h5>Password: ${obj.login.password}</h5>
                        </div>
                    </div>
                    <div class="location">
                        <h2>${obj.location.country}</h2>
                        <h2>${obj.location.state}, ${obj.location.city}</h2>
                        <h2>${obj.location.postcode}</h2>
                        <h2>${obj.location.street.number} ${obj.location.street.name}</h2>
                    </div>
                </div>`
    }

    function format(date){
        return date.substring(0, 10);
    }


});