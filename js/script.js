const mainId = document.getElementById('mainId');

const cards_list = [{
        id: 1,
        url: '../images/mickey-mouse.png',
        title: 'Mickey Mouse',
        description: 'Mickey Mouse is an American cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime icon and mascot of the Walt'
    },
    {
        id: 2,
        url: '../images/shichan.png',
        title: 'Shinchan',
        description: 'Crayon Shin-chan is a Japanese manga series written and illustrated by Yoshito Usui. Crayon Shin-chan made its first appearance in 1990'
    },
    {
        id: 3,
        url: '../images/jerry.png',
        title: 'Jerry',
        description: 'Created by William Hanna and Joseph Barbera, Jerry is an anthropomorphic (but usually silent) brown house mouse, who first appeared'
    }
]

let total = '';


const getAllCards = () => {
    cards_list.map((cards) => {
        const {
            url,
            title,
            description
        } = cards;
        const card = `
                    <article class= "card">
                        <img class ="card__image" src="${url}" alt="${title}"/>
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </article>
        `
        total += card;
    })
    mainId.innerHTML = total;
}

getAllCards();
