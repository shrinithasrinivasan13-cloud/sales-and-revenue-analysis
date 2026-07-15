const ctx=document.getElementById("salesChart");

new Chart(ctx,{
type:"bar",

data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[

{
label:"Sales",

data:[12000,15000,18000,22000,25000,28000],

backgroundColor:[
"red",
"blue",
"green",
"orange",
"purple",
"skyblue"
]
}

]
},

options:{
responsive:true
}

});