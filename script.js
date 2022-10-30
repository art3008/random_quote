const author = {
    "Mark Twain": 'The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity.',
    "Seneca":'While we are postponing, life speeds by',
    "Galsworthy":'If you do not think about the future, you cannot have one',
    "Aristotle":'The roots of education are bitter, but the fruit is sweet.',
    "Herbert Spencer":'The great aim of education is not knowledge but action.',
    "William James":'Education is a progressive discovery of our own ignorance. ',
    "Oscar Wilde":'Always forgive your enemies; nothing annoys them so much',
    "Seneca":'While we are postponing, life speeds by',
    "Seneca":'While we are postponing, life speeds by',
    "Seneca":'While we are postponing, life speeds by',
    "Seneca":'While we are postponing, life speeds by',
    "Seneca":'While we are postponing, life speeds by',
    "Seneca":'While we are postponing, life speeds by',
    // randomVal: function() {
    //     let arrayObj = Object.keys(author)
    //     let random = Math.floor(Math.random() * arrayObj.length)
    //     return arrayObj[random]
    // }
    
}

function getHello() {
    document.getElementById('quote_text').innerText = author[getRandomKey()]
    // console.log(Object.keys(author).length);
    // console.log(author[`${getRandomKey()}`]);
    
    // console.log(getRandomKey());
}


function getRandomKey() {

    
    let arrayObj = Object.keys(author)
    let random = Math.floor(Math.random() * arrayObj.length)
    return arrayObj[random];
    
}