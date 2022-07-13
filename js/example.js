const job__content = document.querySelector('.job__content')
const job__info = [
    {
        id: 0,
        companyName: 'Q-Codez',
        title: 'Back-End Developer',
        featured: true,
        conditions : ['1d ago','Full Time','Remote']
    },
    {
        id: 1,
        companyName: 'OGOGO',
        title: 'Front-End Developer',
        featured: true,
        conditions : ['2m ago','Full Time','Remote']

    },
    {
        id: 2,
        companyName: 'Geeck-Tech',
        title: 'JS Developer',
        featured: false ,
        conditions : ['6w ago','Part Time','Remote']
    },
    
]


// const ol = document.querySelector('ol')


// for (let i = 0; i < job__info.length; i++) {
//     ol.innerHTML += `
//     <li>${job__info[i].conditions}</li>`
// }