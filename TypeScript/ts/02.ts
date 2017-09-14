for(var i =0 ;i<5;i++){
     console.log(i)
}

for(var m=0;m<5;m++){
    setTimeout(function(){
        console.log(m)
    },100)
}

for(var n=0;n<5;n++){

   (function() {
       setTimeout(function(){
        console.log(n)
    },100)

   })()
}

for (let i = 0; i < 5 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
for (let i = 0; i < 5 ; i++) {
    setTimeout(function() {console.log(i); }, 100);
}