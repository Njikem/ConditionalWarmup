//create variables
let tickets_sold = 300;
let venue_capacity = 1000;
let performance = 'Mercy';
let is_sold_out = true;

if(is_sold_out === true){
    console.log('All is sold out');
}else {
    console.log('Tickets still available');
}

if(tickets_sold / venue_capacity >= 0.9){
    console.log('All sold out');
}else{
    console.log('Tickets on sale now!');
}


if(tickets_sold >= 'venue_capacity'){
    console.log('System Error');
}else if(tickets_sold === 'venue_capacity' && is_sold_out === false){
 console.log('System Error');
}else if(performance === 'Alex' && is_sold_out ===false){
    console.log('System Error');

}else{
    console.log('All Good');
}


special_performance_1 = 'jude';
special_performance_2 = 'Alex Bymoen';
special_performance_3 = 'Delphine';
special_performance_4 = 'Bright';
special_performance_5 = 'Shrek';


if(special_performance_1 === 'Shrek'){
    console.log('Lucky You!');
}else if(special_performance_2 === 'Alex Bymoen'){
    console.log('Lucky You');
}else if(special_performance_3 === '1972 Miami Dolphins'){
    console.log('Lucky You');
}else if(special_performance_4 === 'Alex'){
    console.log('lucky you')
}else if(special_performance_5 === 'Shrek'){
    console.log('Lucky You');
}else{
    console.log('No match');
}