import "./index.sass"

export default function Feedback() {

    ymaps.ready(init);

    function init(){
        const myMap = new ymaps.Map("map", {
            center: [48.019698, 37.818654],
            zoom: 13
        });

    }

}