import "./index.sass"


export default function Catalog() {
$(".catalog__filters-select--district").on('click', () => {
 //console.log(11);
 $(".district__dropdown").toggleClass("open");
});

}

// $(".catalog__filters-select--district").on('click', () => {
//     console.log(11);
//     $(".district__dropdown").addClass("open");
// });

// $("body").on("click", ()=> console.log(12));

// document.addEventListener("click", function() {
//     console.log(12)
// });

// let cont = document.getElementsByClassName("catalog__filters-select--district")[0];
// console.log(cont);



//const drop = document.getElementsByClassName('district__dropdown');

// district.addEventListener("click", ()=> {
//     console.log(12)
// });