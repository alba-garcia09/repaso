const disneyCharacter= [
    {name:'Sharpay', family:'Disney', isEvil:false},
    {name:'Gabriella', family:'Disney', isEvil:true},
    {name:'Hannah', family:'Disney', isEvil:false},
    {name:'Rico', family:'Disney', isEvil:true},
]

function isEvil(people) {
    const evilPeople=[];
    for (let i = 0; i < people.length; i++) {
        if(people[i].isEvil==true){
            evilPeople.push(people[i].name)
        }
        
    }
    return evilPeople
}

const disneyCharacterEvil= isEvil(disneyCharacter)
console.log(disneyCharacterEvil);
