// ОБЬЕКТЫ
let car = {
    color: 'red',
    maxSped: 250,
    audio: {//обьект в обьекте
        brand: 'Sony',
        speaker: 12
    }
        
};



if(car.color == 'red') {
    console.log('Автомобиль красныЙ');
}else if(car.color == 'green') {
    console.log('Автомобиль зелёный');
}else{
    console.log('цвет не определён');
}
// изменить green на red

//car.color = 'red';

//или

//let carProp = 'color';
//car[carProp] = 'red';

console.log(typeof car);
console.log(car);



console.log(typeof car.color);
console.log(car.color);

console.log(typeof car.audio.brand);// Выести обратится к свойству
console.log(car.audio.brand);

console.log(typeof car.audio);// Выести вложенный обьект целиком
console.log(car.audio);

//ФУНКЦИИ

console.log('1',car.color);

car.color = 'green';
console.log('1',car.color);

// что бы создать функцию мы даём ей имя (что делает) а затем в фигурных скобках пишем инструкции

function colorReset() {
    car.color ='red';
    console.log(car.color);
}
//ВЫЗВАТЬ ФУНКЦИЮ, без скобок функция не запустится
colorReset();
// в круглых скобках указываются ВХОДНЫЕ ПАРАМЕТРЫ
let car1 = {
    color: 'red',
};
let car2 = {
    color: 'green',
};

//colorChange(car1);
colorChange(car2);

function colorChange(theCar) {
    theCar.color ='yellow';  
}

console.log("Car1:" + car1.color);
console.log("Car2:" + car2.color);

//Вызов фунции можно через переменную
//вызов без скобок называется обращение
// со скобками -вызов запуск
 let car3 = {
     maxSpeed: 240,
 };

 let speed = speedChange;//обращение

 speed();// -вызов запуск исполнение

 function speedChange() {
     console.log('Вызов фунции в которой нужно вывести console.log(car3.maxSpeed); через переменную Скорость:',car3.maxSpeed);
 }


 // Вызов можно сделать и из обьекта car
 let car4 = {
    maxSpeed: 280,
    update: speedChanges// Создадим свойство update, со значением и именем функции
    // присвоим свойству нашу функцию без скобок - мы обращаемся
};

car4.update();// -вызов запуск исполнение

function speedChanges() {
    console.log('Вызов фунции в которой нужно вывести console.log(car4.maxSpeed); через Свойство в обьекте update:',car4.maxSpeed);
}
//Присвоение имени парамету если забудять указать параметр в скобках
function watch(message = 'DKA_DEVELOP') {
    console.log(message);// undefined по умолчанию если не укажем параметр
}
//
watch();