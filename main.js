!function(n){var t={};function a(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=n,a.c=t,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)a.d(e,c,function(t){return n[t]}.bind(null,c));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="",a(a.s=0)}([function(n,t){var a=document.getElementById("city"),e=document.getElementById("result"),c=document.getElementById("0"),d=[document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5"),document.getElementById("6")];document.querySelector("form").addEventListener("submit",function(n){var t;fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(a.value,"&days=7&key=65b5d56aedbd4e16ae6fcd9db9627a41")).then(function(n){if(n.status>200)t=!0,d.forEach(function(n){n.innerHTML=""}),e.innerHTML='\n            <div class="center-align error">\n                <p>Please enter valid city name.</p>\n            </div>',setTimeout(function(){e.innerHTML=""},1200);else if(200===n.status)return t=!1,n.json()}).then(function(n){if(console.log(n),!t){d.forEach(function(n){n.innerHTML=""});var a=document.querySelector(".carousel");M.Carousel.init(a);e.innerHTML="\n            <div>\n                <h2>".concat(n.city_name,", ").concat(n.country_code,"</h2>\n                <p>Vremenska zona: ").concat(n.timezone,"</p>\n                <p>Širina: ").concat(n.lat,"<br>\n                Dužina: ").concat(n.lon,"</p>      \n            </div>\n            "),d.forEach(function(t){!function(t){t.innerHTML+='\n                <div class="cards">\n                    <img src="icons/'.concat(n.data[t.id].weather.icon,'.png">\n                    <h5 class="bold">').concat(n.data[t.id].weather.description,'</h5>\n                    <p><span class="bold">Datum: </span>').concat(n.data[t.id].datetime,'</p>\n                    <p><span class="bold">Izlazak sunca: </span>').concat(Math.floor((n.data[t.id].sunrise_ts-n.data[t.id].ts)/3600),":").concat(Math.round((n.data[t.id].sunrise_ts-n.data[t.id].ts)%3600/60),' am<br>\n                       <span class="bold">Zalazak sunca: </span>').concat(Math.floor((n.data[t.id].sunset_ts-n.data[t.id].ts)/3600),":").concat(Math.round((n.data[t.id].sunset_ts-n.data[t.id].ts)%3600/60),' pm</p>\n                    <p><span class="bold">Prosječna temperatura: </span>').concat(Math.floor((n.data[t.id].max_temp+n.data[t.id].min_temp)/2),' C°<br>\n                       <span class="bold">Max temp: </span>').concat(n.data[t.id].max_temp,' C°<br>\n                       <span class="bold">Min temp: </span>').concat(n.data[t.id].min_temp,' C°</p>\n                    <p><span class="bold">Vjetar: </span>').concat(n.data[t.id].wind_cdir,", ").concat(Math.round(n.data[t.id].wind_spd)," km/h</p>\n                </div>\n            ")}(t)})}}),fetch("https://api.weatherbit.io/v2.0/current?city=".concat(a.value,"&days=7&key=65b5d56aedbd4e16ae6fcd9db9627a41")).then(function(n){if(n.status>200)t=!0,c.innerHTML="",e.innerHTML='\n                <div class="center-align error">\n                    <p>Please enter valid city name.</p>\n                </div>',setTimeout(function(){e.innerHTML=""},1200);else if(200===n.status)return t=!1,n.json()}).then(function(n){if(console.log(n.data),!t){c.innerHTML="";var a=new Date,e=["January","February","March","April","May","June","July","August","September","October","November","December"],d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];(o=c).innerHTML+='\n                        <div class="cards">\n                            <img src="icons/'.concat(n.data[o.id].weather.icon,'.png">\n                            <h5 class="bold">').concat(n.data[o.id].weather.description,'</h5>\n                            <p><span class="bold">Datum: </span>').concat(d[a.getDay()],", ").concat(e[a.getMonth()],". ").concat(a.getDate(),". ").concat(a.getFullYear(),'</p>\n                            <p><span class="bold">Izlazak sunca: </span>').concat(n.data[o.id].sunrise,' am<br>\n                            <span class="bold">Zalazak sunca: </span>').concat(n.data[o.id].sunset,' pm</p>\n                            <p><span class="bold">Temperatura: </span>').concat(n.data[o.id].temp,' C°<br>\n                            <span class="bold">Subjektivni osjećaj: </span>').concat(n.data[o.id].app_temp,' C°</p>\n                            <p><span class="bold">Vjetar: </span>').concat(n.data[o.id].wind_cdir_full,", ").concat(Math.round(n.data[o.id].wind_spd),' km/h<br>\n                            <span class="bold">Pritisak: </span>').concat(n.data[o.id].pres,'mb<br>\n                            <span class="bold">Vlažnost: </span>').concat(n.data[o.id].rh,'%<br>\n                            <span class="bold">UV index: </span>').concat(n.data[o.id].uv,"%</p>\n                        </div>\n                    ")}var o}),n.preventDefault()})}]);
