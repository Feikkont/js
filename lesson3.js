//задиние 1
function simpleNumber (num) {
    if( num < 2 ) return false;
    var count = 2;
    while(count < num) {
        if(num % count === 0) {
            return false;
        }
        count++;
    }
    return true;
}

function getSimple(max) {
    var i = 0;
    var list = [];

    while (i < max) {
        if(simpleNumber(i)) list.push(i);
        i++;
    }
    console.log(list);
}

getSimple(100)


//Задание 3


basket = [{name:'Товар 1', price:543 , count:3} , {name:'Товар 2' , price:365, count:5}];

sum=0;


function countBasketPrice(x) {

    for (var i = 0; i < basket.length; i++){
        sum =(basket[0].price * basket[0].count)+(basket[1].price *basket[1].count);

    }

    return sum;
}
console.log('стоимость заказа: ' + countBasketPrice(basket) + 'руб');
