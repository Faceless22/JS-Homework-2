"use strict";

//1
var a = '1';
if (a === '1'){
    console.log('Верно');
} else{
    console.log('Не верно');
}


//2
var item = true;
if(item !== true){
    console.log('Верно');
}else{
    console.log('Не верно');
}

item = false;
(item !== true)? console.log('Да') : console.log('Нет');


//3
var a = 2;
if(a > 0 && a < 4){
    console.log('Верно');
}else{
    console.log('Не верно');
}


//4
var a = 6, b = 8;
if(a > 3 && a < 12 || b >= 7 && b < 15){
    console.log('Верно');
}else{
    console.log('Не верно');
}


//5
var month = 4, season = '';

if(month == 12 || month <=2){
   season = 'Зима';
}
if(month >= 3 && month <= 5){
   season = 'Весна';
}
if(month >= 6 && month <= 8){
   season = 'Лето';
}
if(month >= 9 && month <= 11){
   season = 'Осень';
}
console.log(season);


//6
for (var i = 0; i <= 100; i++){
    if(i % 2 !==1){
        console.log(i);
    }
}


