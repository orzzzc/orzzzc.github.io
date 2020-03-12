function orzzzc() {
    document.getElementById("mainarea").innerHTML="\
<span style=\"font-size: 48px;color: #FF0000\">zzc txdy!</span>\
</p>\
<div id=\"orz\" align=\"center\"><p align=\"center\">\
<button style=\"font-size: 24px;\" onclick=\"orzorz()\">\
开始膜拜\
</button>\
</div>\
";
}
function orzorz() {
    document.getElementById("orz").innerHTML="\
<p style=\"margin:10px\">\
<span style=\"font-size: 40px; color: #FF0000\">\
</span>\
</p>\
<button style=\"font-size: 24px\" onclick=\"ORZINF()\" id=\"orzbutton\">膜拜zzc 1 次</button>\
<div style=\"font-size: 50px;background:rgba(255,255,255,0.7);width:auto\" id=\"orzTimes\"></div>\
<div style=\"font-size: 24px;\" id=\"zzcsays\"></div>\
<div style=\"font-size: 24px;\" id=\"zzcsays2\"></div>\
";
    document.title="膜拜zzc";
}
var orzCount=0,orzDelta=1,says2_restTime=0,dianji=5;
var sayslist=new Array("我太强了","我txdy","你们怎么这么菜啊","这些黑题都是些sb题，我随便切","IOI太简单了，我都不屑于AK","我吊打你们","我是最强的","我无敌了");
function ORZINF() {
	var says2_restTime_Default=50;
    orzCount+=orzDelta;
    dianji+=1;
    if(orzCount<10000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+orzCount+' 次';
    if(orzCount>=10000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000)+'.'+Math.floor(orzCount/100)%10+'k 次';
    if(dianji>=5)document.getElementById("zzcsays").innerHTML='zzc：'+sayslist[Math.floor(Math.random()*sayslist.length)],dianji-=5;
    if(orzCount==50)orzDelta=5,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount==1000)orzDelta=20,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount==10000)orzDelta=30,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount==40000)orzDelta=50,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount==100000)orzDelta=100,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=100000000000000000000) {
        document.getElementById("mainarea").innerHTML="<h1 style=\"color:red\" align=\"center\">zzc:你这个菜鸡别膜我了，反正也不可能变得像我这么强<br>我还要去THU吊打集训队，还要去MIT秒题<br>（zzc说着走起了路准备离开）</h1><br><br><div id=\"walkzzc\" align=\"center\"></div><br><button style=\"font-size: 24px\" onclick=\"last_orz()\" id=\"lastorz\">继续膜拜...</button>";
    }
}

function last_orz() {
    document.getElementById("mainarea").innerHTML="<h1 style=\"color:red\">你被zzc秒了<br><br>被秒乃蒟蒻常事<br>请蒟蒻重新来过！<br></h1>";
}
