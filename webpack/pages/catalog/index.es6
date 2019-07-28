import "./index.sass"


export default function Catalog() {
 const $dropdown = $(".district__dropdown");
 const $droppar = $(".catalog__filters-select--district");

$droppar.on('click', (e) => {

 $(e.target).find(".district__dropdown").toggleClass("open");

});

$(document).on('click', (e) => {
 if(!$droppar.is(e.target) && $dropdown.hasClass('open') && $droppar.has(e.target).length === 0){
  $dropdown.removeClass('open');
 }
});


}
