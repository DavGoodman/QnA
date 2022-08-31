cardsOpen = [false, false, false]


updateView()
function updateView(){
    document.querySelector(".container").innerHTML = /*HTML*/ `
    <div class="card card-1">
            <h1 class="header">Do You Accept All major Credit Cards?
                <i onclick="openCard(0)" class="fa-solid fa-plus"></i>
            </h1>
            <div class="text-box ${cardsOpen[0] == false? "" : "show-text"}">
                <hr>
                <div>
                    Percte ng anat angngnik, osthitoveles beninetis sindenchess worerte qus
                    tuceme oretavess'siletice ffouroreve ar keaty, vevog clarurle s pometad
                </div>
            </div>
        </div>
        <div class="card card-2">
            <h1 class="header">Do You Support Local Farmers?
                <i onclick="openCard(1)" class="fa-solid fa-plus"></i>
            </h1>
            <div class="text-box ${cardsOpen[1] == false? "" : "show-text"}">
                <hr>
                <div>
                    Thegnmand d-chimavencond intime wony. Wellomand-crs then bllen'ss s, in vemibeon lare en' 
                    wonchen havend pars ethat cll s. ve as s ve, pls ff tha cty mpavand f We
                </div>   
            </div>
        </div>
        <div class="card card-3">
            <h1 class="header">Do You Use Organic Ingredients?
                <i onclick="openCard(2)" class="fa-solid fa-plus"></i>
            </h1>
            <div class="text-box ${cardsOpen[2] == false? "" : "show-text"}">
                <hr>
                <div>
                    colsefod thatind paros habllusore ceticind set Hundeve poue nits s Wony, quagntethe all re had bivabed 
                    outhe eved tigit the d ie ty' to le catomalledestevemang hive de s. hivandeme tenco e corlic
                </div>
            </div>
        </div>`
}

function openCard(card){
    if (cardsOpen[card] == false) {cardsOpen[card] = true}
    else (cardsOpen[card] = false)
    updateView()
}