const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.startCloudTimer = functions.https.onCall((req) => {
    let key = '';
    const ref = admin.database().ref();

    const temp = new Promise(function() {
        ref.child('coffeePots').once('value', function(snapshot){
            snapshot.forEach(function(child){
                const coffeePot = JSON.parse(JSON.stringify(child));
                if(coffeePot.deliverer.uid === req.uid) {
                    key = child.key;
                    console.log(key);
                }
            })
        })
    })

    console.log(key);
    const finish = false;
    // Converts minutes to ms
    const convert = req.timer * 60000;
    // Set the date we're counting down to
    const countDownDate = new Date().getTime()  + convert;

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get todays date and time
        const now = new Date().getTime();

        // Find the distance between now an the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const result = minutes + 'm' + seconds + 's';
        console.log(result);

        ref = admin.database().ref(`coffeePots/${key}`)
        .update({ currTime: result });

        if(minutes <= 0 && seconds <= 0) {
            finish = true;
            clearInterval(x);
        }
    }, 1000);
})
