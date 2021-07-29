const API_Key = "ed790403a9414a93a8dfcb0488c970e0"; //Api key

const query = "pasta"; //The requirement which recipies you want to show//
const ShowPasta = document.querySelector('.ShowPasta'); //target the div whose class name 'ShowPasta'



fetch(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&query=${query}`).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);

    data.results.forEach(results => {
        ShowPasta.innerHTML += `
        <div class="card-container   ">
                    <div class="card mt-5 mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class=" col-6">
                                <div class="card-body">
        
                                    <h3 class="card-title">${results.title}</h3>
        
                                    <p class="desc card-text">Delicious Mouth watering pasta recipies make your own pasta at home with simple recipy</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button type="button" class="btn btn-danger ">Get Recipes</button> <br> <br>
                                    <a class="link text-danger" href="#">License: CC BY-SA 3.0</a>
                                </div>
        
                            </div>
                            <div class=" col-6 ">
                                <span class="icon"><i class="fa fa-bookmark-o" aria-hidden="true"></i></span>
                                <img src="${results.image}" class="card-img" alt="Pasta-img">
                            </div>
                        </div>
                    </div>
        
        `

    });


})






// <div class="card mb-3" style="max-width: 540px;">
// <div class="row no-gutters">
//     <div class="col-md-4">
//         <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img" alt="...">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">Spicy Pasta</h5>
//             <p class="card-text">Mouth watering Spicy Pasta ready to eat it come and grab yours!</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//     </div>
// </div>
// </div>