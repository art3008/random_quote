const quotes = {
    "Mark Twain": 'The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity.',
    "Seneca":'While we are postponing, life speeds by',
    "Galsworthy":'If you do not think about the future, you cannot have one',
    "Aristotle":'The roots of education are bitter, but the fruit is sweet.',
    "Herbert Spencer":'The great aim of education is not knowledge but action.',
    "William James":'Education is a progressive discovery of our own ignorance. ',
    "Oscar Wilde":'Always forgive your enemies; nothing annoys them so much',    
}


function getRandomQuote() {

    
    let authors = Object.keys(quotes) // Получаем массив ключей
    let author = authors[Math.floor(Math.random() * authors.length)] // Находим случайную автора
    let quote = quotes[author] // находим цитату случайного автора (author)

    document.getElementById('quote_text').innerText = quote 
    document.getElementById('quote_author').innerText = author 

    
}