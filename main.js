let yourChose = document.querySelectorAll(".yourChose img")
let imgOfYourChose = document.getElementById('imgOfYourChose')
let imgOfCumputerChose = document.getElementById('imgOfCumputerChose')
let user = document.getElementById('user')
let winer = document.getElementById('winer')
let userPoint = document.getElementById('userPoint')
let cumputerPoint = document.getElementById('cumputerPoint')
let parent2 = document.querySelector(".parent2")

let wara9 = "http://127.0.0.1:5503/rock%20paper%20sissores/peper.jpg"
let mi9ass = "http://127.0.0.1:5503/rock%20paper%20sissores/sessors.jpg"
let hajar = "http://127.0.0.1:5503/rock%20paper%20sissores/rock-1.jpg"
let c = 0;
let u = 0;



function choseAgain() {
    imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"
}

yourChose.forEach((e) => {

    e.onclick = () => {

        if (imgOfYourChose.src == "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png") {

            imgOfYourChose.src = e.src

        }

    }
})

function comparesionBtn() {

    if (imgOfYourChose.src !== "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png") {
        let choices =
            [wara9, mi9ass, hajar];

        // Generate a random index
        let randomIndex = Math.floor(Math.random() * choices.length);

        // Get the random choice
        let randomChoice = choices[randomIndex];

        imgOfCumputerChose.src = randomChoice
        setTimeout(function () {

            if (imgOfYourChose.src === wara9 && imgOfCumputerChose.src === hajar || imgOfYourChose.src === hajar && imgOfCumputerChose.src === mi9ass || imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === wara9) {

                imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

                imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

                userPoint.innerHTML = ++u
            }

            // if (imgOfYourChose.src === hajar && imgOfCumputerChose.src === mi9ass) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            //     userPoint.innerHTML = ++u
            // }

            // if (imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === wara9) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            //     userPoint.innerHTML = ++u
            // }

            // =================================================

            if (imgOfYourChose.src === hajar && imgOfCumputerChose.src === wara9 || imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === hajar || imgOfYourChose.src === wara9 && imgOfCumputerChose.src === mi9ass) {

                imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

                imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

                cumputerPoint.innerHTML = ++c
            }

            // if (imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === hajar) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            //     cumputerPoint.innerHTML = ++c
            // }

            // if (imgOfYourChose.src === wara9 && imgOfCumputerChose.src === mi9ass) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            //     cumputerPoint.innerHTML = ++c
            // }

            // ==========================================================

            if (imgOfYourChose.src === hajar && imgOfCumputerChose.src === hajar || imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === mi9ass || imgOfYourChose.src === wara9 && imgOfCumputerChose.src === wara9) {

                imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

                imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            }

            // if (imgOfYourChose.src === mi9ass && imgOfCumputerChose.src === mi9ass) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            // }

            // if (imgOfYourChose.src === wara9 && imgOfCumputerChose.src === wara9) {

            //     imgOfYourChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/user.1.png"

            //     imgOfCumputerChose.src = "http://127.0.0.1:5503/rock%20paper%20sissores/robot%20character.jpg"

            // }

            // ======================================================================
            // ======================================================================
            //     =================           other if          ===============
            // ======================================================================
            // ======================================================================

            if (cumputerPoint.innerHTML === "3") {

                c = 0
                u = 0

                winer.innerHTML = `
                The winer is
                <span style="color: rgb(28, 156, 96);" id="winer"> " Robot " </span>
                `

                parent2.innerHTML = `
                    <button style="text-align: center;width: 80%; font-weight: 500; font-size: 20px;color: black;"
                    class="btn btn-danger p-2 " onclick="restart()">
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
                    class="btn btn-danger p-2 " onclick="restart()">
                    Restart
                    </button>
                    `

            }

        }, 2000)

    }

}
function restart() {

    userPoint.innerHTML = "0"
    cumputerPoint.innerHTML = "0"
    winer.innerHTML = ""

    parent2.innerHTML = `
    <div class="yourChose">
    <img src="/rock paper sissores/peper.jpg" loading="lazy" width="60" alt="">
    <img src="/rock paper sissores/sessors.jpg" loading="lazy" width="60" alt="">
    <img src="/rock paper sissores/rock-1.jpg" loading="lazy" width="60" alt="">
</div>

<div style="display: flex;justify-content: space-evenly; align-items: center;">
    <button
        style="text-align: center;width: 80%;margin-top: 10px; font-weight: 500; color: black;"
        class="btn btn-primary p-2 " onclick="comparesionBtn()">
        Conparison
    </button>
    <button class="btn btn-dark mt-2" style=" font-size: 20px;" onclick="choseAgain()">
        <i class="fa-solid fa-rotate"></i>
    </button>
</div>
    `

    winer.innerHTML = `
        Wining By 3 Points
    `
}

