const body=document.body;
const container=document.createElement('div')
container.classList.add('border','border-dark','container');
const row1=document.createElement('div');
row1.classList.add('border','border-dark','row');
const row2=document.createElement('div');
row2.classList.add('border','border-dark','row');

body.append(container);
container.append(row1)
container.append(row2)

const response=[{Name:'Hammad',Description:'I want to become a full stack developer'},{Name:'Waleed',Description:'I want to become a React js developer'},{Name:'yasir',Description:'I want to become a laravel developer'}]
// let myArr = [ "Abdul Rehmnan" , "alkdjflkajds" , "kajdflkajsdf"]


const responseclick=[{Name:'Click on Hammad'},{Name:'Click on Waleed'},{Name:'Click on Yasir'}]


for(let items of response){
console.log(items)    
for (const key in items) {
    const col6=document.createElement('div')
    col6.classList.add('border','border-dark','col-6');
    col6.innerText=items[key]
    row1.append(col6)
    
}
}

