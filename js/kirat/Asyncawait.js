// To avoid callback hell, we use async await
//More simpler ways are also there to avoid callback hell like promises, generators etc
//Async await is a syntactic sugar over promises


setTimeout(() => {
    console.log("I am in settimeout");
},4000);


console.log("I am in main"); //settimeout will be executed after 4 seconds
//main will be executed first
//settimeout is good for async programming
//settimeout is not good for callback hell

