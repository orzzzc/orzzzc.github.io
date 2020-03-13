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
var obj=new Date();
var orzCount=0,orzDelta=1,dianji=0,changedianji=1,cjresttime=0,lastcj=0;
var flag=new Array(1,1,1,1,1,1,1,1,1);
var sayslist=new Array("我太强了","我txdy","你们怎么这么菜啊","这些黑题都是些sb题，我随便切","IOI太简单了，我都不屑于AK","我吊打你们","我是最强的","我无敌了","我rank1稳了");
function ORZINF(){
    obj=new Date();
    orzCount+=orzDelta;
    dianji+=1;
    if(cjresttime==1)if(obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds()-lastcj>=5)cjresttime=0;
    if(cjresttime==0)document.getElementById("zzcsays2").innerHTML="";
    if(orzCount<10000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+orzCount+' 次';
    else if(orzCount<10000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000)+'.'+Math.floor(orzCount/100)%10+'k 次';
    else document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000)+'.'+Math.floor(orzCount/100000)%10+Math.floor(orzCount/10000)%10+'m 次';
    if(dianji%5==changedianji)document.getElementById("zzcsays").innerHTML='zzc：'+sayslist[Math.floor(Math.random()*sayslist.length)],changedianji=0;
    if(orzCount>=50)if(flag[1]==1)flag[1]=0,orzDelta*=5,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=1000)if(flag[2]==1)flag[2]=0,orzDelta*=4,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=10000)if(flag[3]==1)flag[3]=0,orzDelta*=2.5,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=40000)if(flag[4]==1)flag[4]=0,orzDelta*=1.6,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=100000)if(flag[5]==1)flag[5]=0,orzDelta*=1.25,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=200000)if(flag[6]==1)flag[6]=0,orzDelta*=2,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=500000)if(flag[7]==1)flag[7]=0,orzDelta*=2.5,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=1000000)if(flag[8]=1)flag[8]=0,orzDelta*=3,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次";
    if(orzCount>=100000000000000000000) {
        document.getElementById("mainarea").innerHTML="<h1 style=\"color:red\" align=\"center\">zzc:你这个菜鸡别膜我了，反正也不可能变得像我这么强<br>我还要去THU吊打集训队，还要去MIT秒题<br>（zzc说着走起了路准备离开）</h1><br><br><div id=\"walkzzc\" align=\"center\"></div><br><button style=\"font-size: 24px\" onclick=\"last_orz()\" id=\"lastorz\">继续膜拜...</button>";
    }
    if(dianji==1000)document.getElementById("zzcsays2").innerHTML='获得成就 狂热：点击膜拜按钮1000次<br>单次点击膜拜数翻倍',orzDelta*=2,document.getElementById("orzbutton").innerHTML="膜拜zzc "+orzDelta+" 次",cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
}

function last_orz() {
    document.getElementById("mainarea").innerHTML="<h1 style=\"color:red\">你被zzc秒了<br><br>被秒乃蒟蒻常事<br>请蒟蒻重新来过！<br></h1>";
}
