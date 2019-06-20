//Задание 1
function getObject() {

    var object = {
        number: +prompt('Введите число: '),
        units: 0,
        ten: 0,
        hundreds: 0,
    };
    if(object.number < 1 || object.number >999){
        console.log('Вы ввели число за диапазоном 0 - 999');
        return object;
    }
        else{
            object.units = Math.floor(object.number % 10);
            object.ten = Math.floor(object.number / 10 % 10);
            object.hundreds = Math.floor(object.number / 100 % 10);
            return object;
        }
}
console.log(getObject(this.number));



