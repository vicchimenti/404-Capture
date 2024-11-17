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


        function autoFillAndSubmit() {

            document.getElementById('referrer-url').value = (info.origin) ? info.origin : "Z-Direct Link";
            document.getElementById('referrer-hostname').value = (info.hostname) ? info.hostname : "Z-Local Host";
            document.getElementById('current-page').value = (info.current) ? info.current : "Z-No Page Info";
            document.getElementsByClassName('pull-right')[0].click();
   
        }


        window.onload = setTimeout(() => {

            autoFillAndSubmit();

        }, 2000);


    } catch (err) {
        document.write(err);
    }
});