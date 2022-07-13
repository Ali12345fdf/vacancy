const job__content = document.querySelector('.job__content')
let job__info = [
    {
        id: 0,
        companyName: 'Q-Codez',
        title: 'Back-End Developer',
        featured: true,
        conditions : ['1d ago','Full Time','Remote'],
        tags : ['Python','Django','PHP','HTML']
    },
    {
        id: 1,
        companyName: 'OGOGO',
        title: 'Front-End Developer',
        featured: true,
        conditions : ['2m ago','Full Time','Remote'],
        tags : ['Frontend','HTML','CSS','JS']
    },
    {
        id: 2,
        companyName: 'Geeck-Tech',
        title: 'JS Developer',
        featured: false ,
        conditions : ['6w ago','Part Time','Remote'],
        tags : ['Frontend','Vue','React','MobX']
    },    {
        id: 3,
        companyName: 'Geeck-Tech',
        title: 'JS Developer',
        featured: false ,
        conditions : ['6w ago','Part Time','Remote'],
        tags : ['Frontend','Vue','React','MobX']
    },    {
        id: 4,
        companyName: 'Geeck-Tech',
        title: 'JS Developer',
        featured: false ,
        conditions : ['6w ago','Part Time','Remote'],
        tags : ['Frontend','Vue','React','MobX']
    },
]



for (let i = 0; i < job__info.length; i++) {
    job__content.innerHTML +=`
    <div data-id='${job__info[i].id}' class="job__item flex">
    <div class="job__left flex">
        <div class="job__avatar"></div>
        <div class="job__info">
            <div class="job__top flex">
                <h2 class="job__company">
                    ${job__info[i].companyName}
                </h2>
                ${job__info[i].featured ? '<div class="job__featured"> FEATURED!</div>' :''}
            </div>
            <div class="job__center">
                <h2 class="job__title">
                ${job__info[i].title}
                </h2>
            </div>
            <div class="job__bottom">
                <ul class="job__details flex">
                </ul>
            </div>
        </div>
    </div>
    <div class="job__right">
        <ul class="job__tags flex">
        </ul>
    </div>
    </div>`
    const job__details = document.querySelectorAll('.job__details')
    for (let j = 0; j < job__info[i].conditions.length; j++) {   
        job__details[i].innerHTML += `
        <li class="job__detail">
        <a href="#" class="job__condition">${job__info[i].conditions[j]}</a>
        </li>
        `
    }        
    const job__tags = document.querySelectorAll('.job__tags');
    for (let j = 0; j < job__info[i].tags.length; j++) {   
        job__tags[i].innerHTML += `
        <li class="job__tag">
        <a href="#" class="job__link">${job__info[i].tags[j]}</a>
        </li>
        `
    }
}


const job__item = document.querySelectorAll('.job__item')
job__item.forEach((item) => {
    item.addEventListener('click',() => {
        
        job__info = job__info.filter((el) => {
            return el.id === item.attributes[0].value 
        })
        job__content.removeChild(item)
    })
})