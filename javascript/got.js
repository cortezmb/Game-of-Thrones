$(()=> {

    var characterArr = [];
    var allegianceArr = [];

    for (var a = 1; a < 40; a++){

        characterArr.push(fetch(`https://www.anapioficeandfire.com/api/characters?page=${a}&pageSize=50`));    
    }

    // for (var b = 1; b < 40; b++){

    //     allegianceArr.push(fetch(`https://www.anapioficeandfire.com/api/houses?page=${b}&pageSize=45`));
    // }    
    //, allegianceArr
    Promise.all(characterArr) 

    .then(responses => {

        return Promise.all(responses.map((response)=>response.json()))
    })
    
    .then((data) => {

        console.log(data)
        var newArr = data.reduce(nameObj, [])
        function nameObj(total, name){
            return total.concat(name)
        }

        var html = newArr.map(nameObj => {
            console.log(nameObj);
            return `<li>${nameObj.name}</li>`;
        })
        let ul = document.getElementById('name');
        ul.innerHTML = html;
    })
})
   
