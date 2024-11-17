document.addEventListener('DOMContentLoaded', function() {


    // get referrer
    function getReferrer () {

        return document.referrer.toString();
    }

    // get hostname
    function getHostname () {

        let host = document.referrer;

        return host.split('/')[2];
    }

    // get current page
    function getCurrentPage () {

        return window.location.href.toString();
    }


    // Main
    try {

        // content dictionary
        let info = {

            origin: getReferrer(),
            current: getCurrentPage(),
            hostname: getHostname(),
      
        };

        console.log("hostname: " + info.hostname);
        console.log("referrer: " + info.origin);
        console.log("current: " + info.current);
        // let hostString = info.hostname.split('/')[2];

        function autoFillAndSubmit() {

            // Fill in form fields
            document.getElementById('referrer-url').value = info.origin;
            document.getElementById('referrer-hostname').value = info.hostname;
            document.getElementById('current-page').value = info.current;
            document.getElementsByClassName('pull-right')[0].click();
   
        }



        // Call the function when needed, e.g., on page load
        window.onload = setTimeout(() => {
            autoFillAndSubmit();
            // console.log("Delayed for 1.5 seconds");
        }, 2000);




        

    } catch (err) {
        document.write(err);
    }
});