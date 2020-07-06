$(()=> {

    //Character Name Loop
    var characterArr = [];   
    for (var a = 1; a < 40; a++){

        characterArr.push(fetch(`https://www.anapioficeandfire.com/api/characters?page=${a}&pageSize=50`));             
    }

    Promise.all(characterArr) 

    .then(responses => {

        return Promise.all(responses.map((response) => response.json()))
    })
    
    .then((data) => {

        console.log(data)
        var nameArr = data.reduce(nameObj, [])
        function nameObj(total, name, allegiances){
            return total.concat(name, allegiances)
        }  
        
        var html = nameArr.map(nameObj => {
            console.log(nameObj);
            return `<li id="character">${nameObj.name}</li> <a>House: ${nameObj.allegiances}</a>`;
        })
        let ul = document.getElementById('name');
        ul.innerHTML = html;
    })

    //House Name Loop
    // var allegiancesArr = [];
    // for (var b = 1; b < 40; b++){

    //     // allegiancesArr.push(fetch(`https://www.anapioficeandfire.com/api/houses?page=${b}&pageSize=50`));
    // }    

    // Promise.all(allegiancesArr)

    // .then(responses => {

    //     return Promise.all(responses.map((response) => response.json()))
    // })

    // .then((data) => {

        // var allegiancesArr = data.reduce(allegiancesObj, []);
        // function allegiancesObj(total, allegiances){
        //     console.log("allegiances");
        //     return total.concat(allegiances)
        // }

        // var html2 = allegiancesArr.map(allegiancesObj => {
        //     console.log('html');
        //     return `<li>${allegiancesObj.allegiances}</li>`;
        // })
        // let li = document.getElementsByTagName('character');
        // li.appendChild = html2;
        // console.log('li');
    // })

    //Click Event
    // let getName = document.getElementById('name');
    // getName.addEventListener('click', (e) => {

    //     alert("Hello World!");
    // })
})
   
