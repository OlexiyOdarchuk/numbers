var input = document.getElementById("number");
var button = document.getElementById("button");
var winimg = document.getElementById("win");
var result = document.getElementById("result");
var x = Math.round(Math.random()*10);
var o = 1
console.log(x)
button.addEventListener("click",
function (){
var n = parseInt(input.value,10);
if(x==n){ result.innerText = "Ви перемогли!" ;
winimg.style.display = "block"
lose.style.display = "none"
if(button.value=="Спроба №1"){ button.value="З першої спроби)"   
}
if(button.value=="Спроба №2"){ button.value="З другої спроби)"   
}
if(button.value=="Спроба №3"){ button.value="З третьої спроби)"   
}
}
if(x!=n && button.value=="Спроба №1" || button.value=="Спроба №2" || button.value=="Спроба №3"){ result.innerText = "Спробуй ще)" ;
input.value=""
        if(x!=n && button.value=="Спроба №3") { button.value="Щоб спробувати ще, натисніть F5";
        }   
    if(x!=n && button.value=="Спроба №2") { button.value="Спроба №3";
    } 
if(x!=n && button.value=="Спроба №1") { button.value="Спроба №2";
}
}
if(x!=n && button.value=="Щоб спробувати ще, натисніть F5"){ result.innerText = "Ви програли(((" ;
lose.style.display = "block"
winimg.style.display = "none"
input.style.display = "none"
}
}
)