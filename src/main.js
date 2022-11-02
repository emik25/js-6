let students = ['Aziz', 'Saidbek', 'Shaxzod', 'Emil', 'Ozod']

alert(`
    ${students[0]}        
    ${students[1]}        
    ${students[2]}        
    ${students[3]}        
    ${students[4]}        
`)

let name = prompt('What is your name?')

if(students.includes(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())){
    name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
    let index = students.indexOf(name)
    console.log(students);
    students.splice(index, 1)
    console.log(students);
}else{
    console.log('We have not this name in our array');
}