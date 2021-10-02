// Setup End Date for Countdown
let launchDate = new Date("Oct 9, 2021 15:00:00 UTC").getTime();

// Setup Timer to tick every second
let timer = setInterval(tick, 1000);

function tick () {
    let now = new Date().getTime();

    let t = launchDate - now;

    if (t>0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor((t % (1000*60*60)) / (1000*60));
        if (mins < 10) {mins  = "0" + mins; }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {secs  = "0" + secs; }

        // Create time string
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        //Set time on document
        document.querySelector('.countdown').innerText = time;

        //15 minutes for the event show button of event
        let minLeft = t/(1000*60);
        if(minLeft < 15) {
            document.querySelector('.event-button').classList.remove('hidden');
        }


    }
}