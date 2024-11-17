document.addEventListener('DOMContentLoaded', function() {

    
    function getReferrer () {

        return document.referrer.toString();
    }


    function getHostname () {

        let host = document.referrer;

        return host.split('/')[2];
    }


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


        // console.log("hostname: " + info.hostname);
        // console.log("referrer: " + info.origin);
        // console.log("current: " + info.current);


        function autoFillAndSubmit() {

            document.getElementById('referrer-url').value = (info.origin) ? info.origin : "Direct Link";
            document.getElementById('referrer-hostname').value = (info.hostname) ? info.hostname : "Local Host";
            document.getElementById('current-page').value = (info.current) ? info.current : "No Page Info";
            document.getElementsByClassName('pull-right')[0].click();
   
        }


        window.onload = setTimeout(() => {

            autoFillAndSubmit();

        }, 2000);


    } catch (err) {
        document.write(err);
    }
});