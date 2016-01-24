var stalk = require('../')

var json = {
  nodes: [
    {name: 'karissa', image: '/images/github.ico', href: 'http://github.com/karissa'},
    {name: '@captainkmac', image: '/images/twitter.ico'},
    {name: 'karissamck', image: '/images/linkedin.ico'},
    {name: 'karissa.mckelvey', image: '/images/facebook.ico'},
    {name: 'indiana', image: '/images/indiana.ico'},
    {name: 'usopendata', image: '/images/usopendata.ico'},
    {name: 'dat', image: '/images/dat.png'},
    {name: 'taskforce.is', image: '/images/taskforce.ico'},
    {name: 'brassliberation', image: '/images/blo.gif'},
    {name: 'debtcollective', image: '/images/dc.png'},
    {name: 'keybase', image: '/images/keybase.ico'},
    {name: 'oakland', image: '/images/oaktree.png'},
    {name: 'you', image: '/images/laptop.png', cl: 'you'},
    {name: 'thewyattact', image: '/images/hat-purple.png'}
  ],
  links: [
    {source: 1, target: 2, value: 1},
    {source: 2, target: 3, value: 1},
    {source: 3, target: 2, value: 1},
    {source: 3, target: 4, value: 1},
    {source: 4, target: 1, value: 1},
    {source: 10, target: 0, value: 1},

    {source: 7, target: 9, value: 1},
    {source: 6, target: 0, value: 1},
    {source: 6, target: 5, value: 10},

    {source: 8, target: 11, value: 1},

    {source: 1, target: 9, value: 5},
    {source: 2, target: 4, value: 1},
    {source: 2, target: 5, value: 2},

    {source: 3, target: 11, value: 2},
    {source: 7, target: 11, value: 2},
    {source: 12, target: 0, value: 1},
    {source: 13, target: 11, value: 10}

  ]
}

stalk(json, {el: '#graph'})
