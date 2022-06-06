function sidenav(){var e=document.getElementById("menu");"✖"===e.value?(e.value="x",document.getElementById("sidenavbox").style.width="75vw",document.getElementById("main").style.opacity="0.5",navigator.vibrate(30)):(e.value="✖",document.getElementById("sidenavbox").style.width="0vw",document.getElementById("main").style.opacity="1",navigator.vibrate(30))}
function google(){let e=document.getElementById("searchbox").value;if(null!=e&&""!=e&&""!=e)open("https://www.google.com/search?q="+e),window.navigator.vibrate([20]);else{let e=prompt("Input what you want to search on google");null!=e&&""!=e&&""!=e&&(open("https://www.google.com/search?q="+e),window.navigator.vibrate([20]))}}
function bing(){let e=
document.getElementById("searchbox").value;if(null!=e&&""!=e&&""!=e)open("https://www.bing.com/search?q="+e)
,window.navigator.vibrate([20]);
else{let e=prompt("Input what you want to search on google");null!=e&&""!=e&&""!=e&&(open("https://www.bing.com/search?q="+e),window.navigator.vibrate([20]))}}
function whatsapp(){var e=document.getElementById("searchbox").value;if(document.getElementById("searchbox").value,e>=6e9&&e<1e10)location.replace("whatsapp://send/?phone=91"+e+"&text=hii"),window.navigator.vibrate([30]);else if(NaN!=e&&" "!=e&&""!=e)navigator.vibrate(30),location.replace("whatsapp://send?text="+e);else{let e=window.prompt("please ! Enter 10 digit Numbers, only valid phone number. To send msg on whatsapp");e>=6e9&&e<1e10&&(location.replace("whatsapp://send/?phone=91"+e+"&text=hii"),window.navigator.vibrate([30]))}}
function youtube(){let e=document.getElementById("searchbox").value;if(null!=e&&" "!=e&&""!=e)open("https://m.youtube.com/results?sp=mAEA&search_query="+e),navigator.vibrate(30);else{let e=prompt("Type what you to search on youtube");null!=e&&" "!=e&&""!=e&&(open("https://m.youtube.com/results?sp=mAEA&search_query="+e),navigator.vibrate(30))}}
function amazon(){let e=document.getElementById("searchbox").value;if(null!=e&&" "!=e&&""!=e)open("https://www.amazon.in/s?k="+e),navigator.vibrate(30);else{let e=prompt("Type what you to search on amazon");null!=e&&" "!=e&&""!=e&&(open("https://www.amazon.in/s?k="+e),navigator.vibrate(30))}}
function flipkart(){let e=document.getElementById("searchbox").value;if(null!=e&&" "!=e&&""!=e)open("https://www.flipkart.com/search?q="+e),navigator.vibrate(30);else{let e=prompt("Type what you to search on flipkart");null!=e&&" "!=e&&""!=e&&(open("https://www.flipkart.com/search?q="+e),navigator.vibrate(30))}}
function navbar(){console.log("clicked");document.getElementById("navbar_div").style.width="60vw";document.getElementById("body").style.opacity="0.6"}
function closenavbar(){console.log("clicked");document.getElementById("navbar_div").style.width="0vw";document.getElementById("body").style.opacity="1"}

function myFunction(event) {
 var x = event.key;
if(x=="Enter")
{ 
  e= document.getElementById("searchbox").value;if(null!=e&&""!=e&&""!=e)open("https://www.bing.com/search?q="+e)
,window.navigator.vibrate([20]);

}}