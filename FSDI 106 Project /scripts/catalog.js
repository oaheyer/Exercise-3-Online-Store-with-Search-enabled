
/** Global Variables */
var items = [
    {
        code: "L3232",
        title: "Quantum Computing Technology",
        price: 150.00,
        description: "Quantum computing is essentially harnessing and exploiting the amazing laws of quantum mechanics to process information. A traditional computer uses long strings of “bits,” which encode either a zero or a one. A quantum computer, on the other hand, uses quantum bits, or qubits.",
        category: "Computing",
        rating: 4,
        image: "img1.png"


    },

{
    code: "M4545",
    title: "S-400 Missile System",
    price: 160.00,
    description: "The S-400 Triumph, previously known as the S-300PMU-3, is an anti-aircraft weapon system developed in the 1990s by Russia's Almaz Central Design Bureau as an upgrade of the S-300 family. It has been in service with the Russian Armed Forces since 2007.",
    category: "Anti-aircraft Weapon System",
    rating: 5,
    image: "img2.jpeg"

},

{
    code: "C5550",
    title: "CAIG Wing Loong",
    price: 130.00,
    description: "The Chengdu Pterodactyl I, also known as Wing Loong, is a Medium-Altitude Long-Endurance unmanned aerial vehicle, developed by the Chengdu Aircraft Industry Group in the People's Republic of China.",
    category: "Air Space Defense",
    rating: 4,
    image: "img3.jpg"


},


{
    code: "N1010",
    title: "Fifth Generation Cellular Network Technology",
    price: 120.00,
    description: "5G is the fifth generation cellular network technology. The industry association 3GPP defines any system using 5G NR software as, 5G, a definition that came into general use by late 2018. Others may reserve the term for systems that meet the requirements of the ITU IMT-2020.",
    category: "Cellular Network Technology",
    rating: 4,
    image: "img5.jpeg"
},


];

/** Functions */

function displayCatalog(){
    //  /**
    //  * Travel the array
    //  * get each element form tge array
    //  * display the element into the DOM (html)
    //  * /
    
    for (var i = 0; i < items.length; i++){
        var product = items[i];

        // var pLayout = "<div><h4>" + product + "</h4> </div>";
        var pLayout = `<div class="item">
        <img src="images/${product.image}">
        <h4>${product.title}</h4>
        <h6>${product.price}</h6>
        <p>${product.description}</P>
        <button class="btn btn-sm btn-info"> Add to Chart </button>
        </div>`;

        console.log(i, pLayout);

        $("#catalog").append(pLayout);
    }
}


function init() {
    console.log("Catalog Page");

    displayCatalog();
}

/** Initalization */
window.onload = init;