const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root=document.getElementById('root')
    const name='FreeLancers';
    const h1=document.createElement('h1');
    h1.innerText=name;
    root.append(h1);
    const ul=document.createElement('h4');
    ul.innerHTML="Name"+"\u00A0\u00A0\u00A0\u00A0\u00A0"+"Age"+"\u00A0\u00A0\u00A0\u00A0\u00A0"+"Occupation";
    root.appendChild(ul);
    
    for(let i=0;i<users.length;i++){
       const list=document.createElement('li');
       let s=users[i].name.trim().length;
       console.log(s);
       let blankspace='';
       for(let i=s;i<=9;i++){
           blankspace+='\u00A0';
       }
       list.innerHTML=`${users[i].name.trim()}${blankspace}${users[i].age}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${users[i].occupation}`;
       root.appendChild(list);
}
}
//call the main function
main();