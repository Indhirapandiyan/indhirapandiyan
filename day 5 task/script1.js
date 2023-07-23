let json=[{
    "id":"indhirapandiyan1",
    "task":"zen portal task",
    "mail":"indhirapandiyan2315@gmail.com"
},
{
    "id":"indhirapandiyan2",
    "task":"zen portal task",
    "mail":"indhirapandiyan2315@gmail.com"
}
];
// for loop
for(let i = 0; i < json.length; i++){
    let obj=json[i];

    console.log(obj.id);
    console.log(obj.task);
    console.log(obj.mail);
}

// for Each
json.forEach(function(obj){
    console.log(obj.mail);
});

// for in
for(let key in json){
    if(json.hasOwnProperty(key)){
        console.log(json[key].id);
    }
}

// for of
let text="";
for(let x of json[key].id){
    text += x;
}
console.log(text);