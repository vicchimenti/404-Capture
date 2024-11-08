
$( document ).ready(function() {
  var linkURL = window.location.href;
  var referrer = document.referrer;
  var blnInsiteReferral = false;
  var blnSearchReferral = false;
  var searchEngineName = "this search engine";

  blnInsiteReferral =((referrer.indexOf("https://www.seattleu.edu")>=0)||(referrer.indexOf("https://cms.seattleu.edu") >=0));

  if (referrer) {
    if ((referrer.indexOf("ask.co")>0)||(referrer.indexOf("google.co")>0)||(referrer.indexOf("baidu.co")>0)||(referrer.indexOf("bing.co")>0)||(referrer.indexOf("yahoo.co")>0))  {
      blnSearchReferral=true;
      if((referrer.indexOf("ask.co")>0)){searchEngineName = "Ask.com";}
      if((referrer.indexOf("google.co")>0)){searchEngineName = "Google";}
      if((referrer.indexOf("baidu.co")>0)){searchEngineName = "Baidu";}
      if((referrer.indexOf("bing.co")>0)){searchEngineName = "Bing";}
      if((referrer.indexOf("yahoo.co")>0)){searchEngineName = "Yahoo";}
    } 
  }

  if (!document.referrer) {
    document.getElementById("message").innerHTML = "<h2>This page doesn't exist.</h2><p>This may be due to a mistyped address, an outdated bookmark or a publication with an incorrect URL. </p>";
  }
  else if (blnInsiteReferral) {
    document.getElementById("message").innerHTML = "<h2>This page doesn't exist at this URL.</h2><p>The page may have been moved or deleted. We'll get this fixed soon.</p>";
  }
  else if (blnSearchReferral) {
    document.getElementById("message").innerHTML = "<h2>This page doesn't exist at this URL.</h2><p>The page may have been moved or deleted. It appears " + searchEngineName + "  has an outdated listing for us.<p>";
  }
  else {
    document.getElementById("message").innerHTML = "<h2>This page doesn't exist at this URL.</h2><p>Please notify the referring website's owner.<p>";
  }

  function updateForm() {
    var URLofReferrer = document.getElementById("URLofReferrer");
    var BrokenLinkTo = document.getElementById("BrokenLinkTo");
    if (URLofReferrer)
      URLofReferrer.value = document.referrer;
    if (BrokenLinkTo)
      BrokenLinkTo.value = linkURL;
    if (!document.referrer)
      $(".js-elements-container div:nth-of-type(1)").css("display", "block");
  }

  setTimeout(function() {
    updateForm();
  }, 2000);

  $("#wrapperFor404").on('DOMSubtreeModified', function() {
    updateForm();
  });

});

<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" type="text/javascript"></script>
<!-- Second bootstrap to override formbank's -->