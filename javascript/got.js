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

        let nameHtml = data.map(nameObj => {

            return `<li> ${nameObj.name}</li>`
        })

        let ul = document.querySelector('ul');

        ul.innerHTML = nameHtml.arr
      })
})