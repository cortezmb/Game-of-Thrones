
    var gotCharacters = fetch('https://www.anapioficeandfire.com/api/characters');
    var gotAllegiances = fetch('https://www.anapioficeandfire.com/api/houses');
    var characterArr = [];
    var allegianceArr = [];

    for (var a = 1; a < 40; a++){

        characterArr.push(fetch(`https://www.anapioficeandfire.com/api/characters?page=${a}&pageSize=50`));
    }

    for (var b = 1; b , 40; b++){

        allegianceArr.push(fetch(`https://www.anapioficeandfire.com/api/houses?page=${b}&pageSize=50`))
    }

    Promise.all(characterArr, allegianceArr)

    .then(responses => {

        return Promise.all(responses.map((response)=>response.json()))
    })

    .then((data) => {
        console.log(data[0]);

        let nameHtml = data.map(nameObj => {
            console.log(nameObj);
            return `<li>${nameObj.name}</li>`
        })

        let ul = document.querySelector('ul');

        ul.innerHTML = nameHtml.arr;
      })
