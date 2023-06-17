
function writeCards (friends, event) {
    const thankYouMessages = [];
    for(let i = 0; i < friends.length; i++){
        const message = (`Thank you, ${friends[i]}, for the wonderful ${event} gift!`)
        console.log (message)
        thankYouMessages.push(message)
    }
    return thankYouMessages
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


//countdown
function countDown(number){
    while (number >= 0){
        console.log(number--)
    }
}
countDown (10)
