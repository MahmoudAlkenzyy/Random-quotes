let generateBtn = document.getElementById('generateBtn');
let quoteContant = document.getElementById('quoteContant');

var quotes = [
    {
        contant: `Be yourself; everyone else is already taken`,
        writer: '― Oscar Wilde',
    },
    {
        contant: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth`,
        writer: '― William W. Purkey',
    },
    {
        contant: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        writer: '― Dr. Seuss',
    },
    {
        contant: `A friend is someone who knows all about you and still loves you.`,
        writer: '― Elbert Hubbard',
    },
    {
        contant: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
        writer: '― Martin Luther King ',
    },
];
function randomNumGenrator() {
    return (randomNum = Math.floor(Math.random() * 5));
}
var indexNum = 0;
generateBtn.onclick = function () {
    var randomNum = randomNumGenrator();

    console.log(indexNum);
    while (indexNum == randomNum) {
        var randomNum = randomNumGenrator();
    }

    indexNum = randomNum;
    quoteContant.innerHTML = ` <h3><strong> "</strong>${quotes[indexNum].contant}<strong> "</strong></h3>
    <p>${quotes[indexNum].writer}</p>`;
};
