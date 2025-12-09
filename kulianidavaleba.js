//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს ,
//  თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function Cheknum(m=0, n=0){
    if(m>n){
        return m;
    }else if(m<n){
        return n;
    }else{
        return 0;
    }
}
 console.log(Cheknum(10,8))
 console.log(Cheknum(10,23))
console.log(Cheknum(10,10));


function sumOfNumber(m,n){
    let result=0;
    for (i=m; i<n; i++){
        result = result + i;
    }
    console.log(result)
}
sumOfNumber(5,9)