// Setup events
let newmoon = {name: 'New Moon Ceremony', launchDate: new Date("Oct 19, 2021 18:00:00 UTC").getTime(), dateString: 'Tuesday 19 October at 18:00 UTC',  zoomLink: '#', background: 'bg-halo-events-new-moon'};
let meditation1 = {name: 'HALO Meditation', launchDate: new Date("Oct 12, 2021 18:00:00 UTC").getTime(), dateString: 'Tuesday 12 October at 18:00 UTC',  zoomLink: 'test/123', background: 'bg-halo-events-new-moon'};
let masterheart1 = {name: 'HALO Masterheart', launchDate: new Date("Oct 19, 2021 18:00:00 UTC").getTime(), dateString: 'Tuesday 19 October at 18:00 UTC',  zoomLink: '#', background: 'bg-halo-events-balloons'};
let fullmoon = {name: 'Full Moon Ceremony', launchDate: new Date("Oct 21, 2021 17:00:00 UTC").getTime(), dateString: 'Thursday 21 October at 17:00 UTC',  zoomLink: '#', background: 'bg-halo-events-eclipse'};
let meditation2 = {name: 'HALO Meditation', launchDate: new Date("Oct 25, 2021 18:00:00 UTC").getTime(), dateString: 'Tuesday 25 October at 18:00 UTC',  zoomLink: '#', background: 'bg-halo-events-meditate-stone'};
let masterheart2 = {name: 'HALO Masterheart', launchDate: new Date("Nov 2, 2021 18:00:00 UTC").getTime(), dateString: 'Tuesday 2 November at 18:00 UTC',  zoomLink: '#', background: 'bg-halo-events-butterflies'};


//establish current event
let nextEvent = meditation1;
let nextDate = nextEvent.launchDate;


//Set event details
document.getElementById("event-title").innerText = nextEvent.name;
document.getElementById("event-date").innerText = nextEvent.dateString;
let imageLink = document.getElementById("event-image-link");
imageLink.setAttribute('href', nextEvent.zoomLink);
let buttonLink = document.getElementById("event-button-link");
buttonLink.setAttribute('href', nextEvent.zoomLink);
document.querySelector('.background-placeholder').classList.add(nextEvent.background);

// Setup Timer to tick every second
let timer = setInterval(tick, 1000);

function tick () {
    let now = new Date().getTime();

    let t = nextDate - now;

    console.log('time t = ' + t + '\n');

    if (t>0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        console.log('days = ' + days + '\n');

        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
        if (hours < 10) { hours = "0" + hours; }
        console.log('hours = ' + hours + '\n');

        let mins = Math.floor((t % (1000*60*60)) / (1000*60));
        if (mins < 10) {mins  = "0" + mins; }
        console.log('mins = ' + mins + '\n');

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {secs  = "0" + secs; }
        console.log('secs = ' + secs + '\n');

       // Create time string
       let mult = "days";
       if (days < 2) { mult = "day";}
       if (days < 1) { mult = "days";}
       let time = `${days} ${mult} ${hours} : ${mins} : ${secs}`;


        //Set time on document
        document.querySelector('.countdown').innerText = time;

        //15 minutes for the event show button of event
        let minLeft = t/(1000*60);
        if(minLeft < 15) {
            document.querySelector('.event-button').classList.remove('hidden');
        }
    }
    if (t<0) {
        let negativehours = Math.floor(t / (1000*60*60));
        //2 hours after event change the event
        if(t-2) {
            //document.getElementById("set-event-background").classList.remove(nextEvent.background);
            nextEvent 
        }
    }
}