// user defined 

function greetings(){
    console.log("Hi bunny");
}

function greetings(name){
    console.log(`Hi ${name}`);
}

greetings()
greetings('Hunny')

// anonymous

// 1. arrow 
const add = () => {
    return 2 + 5;
};
console.log(add());


Arr=[1,2,4,5,4,3,6,7,9]
//2. map
let newArr = Arr.map((ele) => {
    return ele ** 2;
});
console.log(newArr);


//3. Filter
let newArr2 = Arr.filter((ele)=>{
    return ele<3;
});
console.log(newArr2);

//4. Reduce
let newArr3 = Arr.reduce((curr , prev)=>{
    return curr+prev;
});
console.log(newArr3);


// async await 

async function greetingsnew(){
    console.log('Hi Js');

    await setTimeout(()=>{
        console.log('Hello Js');
    },2000);
};
greetingsnew(); 
    
// promises
