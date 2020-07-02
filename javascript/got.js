$(() => {

    var gotCharacters = fetch('https://www.anapioficeandfire.com/api/characters')
    var gotAllegiances = fetch('https://www.anapioficeandfire.com/api/houses')

    Promise.all([gotCharacters, gotAllegiances])

    .then(responses => {

        responses[0].json;
        responses[1].json;

        return responses;
    })

    .then((data) => {
        console.log(data);
      })
})