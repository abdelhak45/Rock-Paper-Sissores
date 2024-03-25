let yourChose = document.querySelectorAll(".yourChose img")
let imgOfYourChose = document.getElementById('imgOfYourChose')
let imgOfCumputerChose = document.getElementById('imgOfCumputerChose')
let user = document.getElementById('user')
let winer = document.getElementById('winer')
let userPoint = document.getElementById('userPoint')
let cumputerPoint = document.getElementById('cumputerPoint')
let parent2 = document.querySelector(".parent2")

let wara9 = "/rock paper sissores/peper.jpg"
let mi9ass = "/rock paper sissores/sessors.jpg"
let hajar = "/rock paper sissores/rock-1.jpg"
let c = 0;
let u = 0;


function choseAgain() {
    imgOfYourChose.src = "/rock paper sissores/user.1.png"
    imgOfYourChose.alt = "true"
    imgOfYourChose.title = ""
}

yourChose.forEach((e) => {

    e.onclick = () => {

        if (imgOfYourChose.alt === "true") {

            imgOfYourChose.src = e.src

            imgOfYourChose.title = e.title

            imgOfYourChose.alt = "false"


        }

    }
})

function comparesionBtn() {

    if (imgOfYourChose.alt === "false") {
        let choices =
            [wara9, mi9ass, hajar];

        // Generate a random index
        let randomIndex = Math.floor(Math.random() * choices.length);

        // Get the random choice
        let randomChoice = choices[randomIndex];

        imgOfCumputerChose.src = randomChoice

        choices.map((e) => {
            if (e === randomChoice) {
                imgOfCumputerChose.title = e
            }
        })

        setTimeout(function () {

            // =============================================

            if (imgOfYourChose.title === wara9 && imgOfCumputerChose.title === hajar || imgOfYourChose.title === hajar && imgOfCumputerChose.title === mi9ass || imgOfYourChose.title === mi9ass && imgOfCumputerChose.title === wara9) {

                userPoint.innerHTML = ++u

            }

            if (imgOfYourChose.title === hajar && imgOfCumputerChose.title === wara9 || imgOfYourChose.title === mi9ass && imgOfCumputerChose.title === hajar || imgOfYourChose.title === wara9 && imgOfCumputerChose.title === mi9ass) {

                cumputerPoint.innerHTML = ++c

            }

            //  ========================================================

            if (cumputerPoint.innerHTML === "3") {

                c = 0
                u = 0

                winer.innerHTML = `
        The winer is
        <span style="color: rgb(28, 156, 96);" id="winer"> " Robot " </span>
        `

                parent2.innerHTML = `
            <button style="text-align: center;width: 80%; font-weight: 500; font-size: 20px;color: black;"
            class="btn btn-danger p-2 " onclick="location.reload()">
            Restart
            </button>
            `

            }

            if (userPoint.innerHTML === "3") {

                c = 0
                u = 0

                winer.innerHTML = `
        The winer is
        <span style="color: rgb(28, 156, 96);" id="winer"> " You " </span>
        `

                parent2.innerHTML = `
            <button style="text-align: center;width: 80%; font-weight: 500; font-size: 20px;color: black;"
            class="btn btn-danger p-2 " onclick="location.reload()">
            Restart
            </button>
            `

            }

            //  ========================================================


            imgOfYourChose.src = "/rock paper sissores/user.1.png"

            imgOfCumputerChose.src = "rock paper sissores/robot character.jpg"

            imgOfYourChose.alt = "true"


        }, 1000)
    }
}
