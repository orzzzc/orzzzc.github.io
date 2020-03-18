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
<button style=\"font-size: 24px\" onclick=\"ORZINF()\" id=\"orzbutton\">膜拜zzc</button>\
<div style=\"font-size: 50px;background:rgba(255,255,255,0.7);width:auto\" id=\"orzTimes\"></div>\
<div style=\"font-size: 24px;\" id=\"zzcsays\"></div>\
<div style=\"font-size: 24px;\" id=\"zzcsays2\"></div>\
<br>\
<button style=\"font-size: 24px\" onclick=\"XINTUADD()\" id=\"xintubutton\">信徒 0 名[1 信仰]</button>\
  \
<button style=\"font-size: 24px\" onclick=\"JIAOTANGADD()\" id=\"jiaotangbutton\">教堂 0 座[2 信仰]</button>\
<div style=\"font-size: 24px;\" id=\"information1\">信仰 0</div>\
";
allcookie();
   document.title="膜拜zzc";
}
var obj=new Date();
var orzCount=0,orzDelta=1,dianji=0,cjresttime=0,lastcj=0,lastmb=0,tttt=0;
var xinyang=0,xintu=0,xintucost=1,jiaotang=0,jiaotangcost=2;
var flag=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
var sayslist=new Array("我太强了","我txdy","你们怎么这么菜啊","这些黑题都是些sb题，我随便切","IOI太简单了，我都不屑于AK","我吊打你们","我是最强的","我无敌了","我rank1稳了","ZJOI都是送分题","IMO好多sb题","多项式太简单了","我是神仙","你们怎么学OI的，这么简单的题都不会","我又发明了一种算法","我怎么这么强","这10k+的模拟我用记事本写一遍过","CF3800+太简单了");
function ORZINF(){
    obj=new Date();
    orzCount+=orzDelta;
    orzCount+=(xintu*orzDelta);
    dianji+=1;
    flag[0]=1;
    if(cjresttime==1)if(obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds()-lastcj>=8)cjresttime=0;
    if(cjresttime==0)document.getElementById("zzcsays2").innerHTML="";
    if(orzCount<10000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+orzCount+' 次';
    else if(orzCount<10000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000)+'.'+Math.floor(orzCount/100)%10+'k 次';
    else if(orzCount<10000000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000)+'.'+Math.floor(orzCount/100000)%10+Math.floor(orzCount/10000)%10+'m 次';
    else if(orzCount<10000000000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000000)+'.'+Math.floor(orzCount/100000000)%10+Math.floor(orzCount/10000000)%10+'b 次';
    else if(orzCount<10000000000000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000000000)+'.'+Math.floor(orzCount/100000000000)%10+Math.floor(orzCount/10000000000)%10+'t 次';
    else if(orzCount<10000000000000000000)document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000000000000)+'.'+Math.floor(orzCount/100000000000000)%10+Math.floor(orzCount/10000000000000)%10+'q 次';
    else document.getElementById("orzTimes").innerHTML='已膜拜zzc '+Math.floor(orzCount/1000000000000000000)+'.'+Math.floor(orzCount/100000000000000000)%10+Math.floor(orzCount/10000000000000000)%10+'Q 次';
    if(dianji%10==0)document.getElementById("zzcsays").innerHTML='zzc：'+sayslist[Math.floor(Math.random()*sayslist.length)];
    if(orzCount>=50)if(flag[1]==1)flag[1]=0,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=1000)if(flag[2]==1)flag[2]=0,orzDelta*=4,flag[0]=0,xinyang+=1;
    if(orzCount>=8000)if(flag[3]==1)flag[3]=0,orzDelta*=2.5,flag[0]=0,xinyang+=1;
    if(orzCount>=35000)if(flag[4]==1)flag[4]=0,orzDelta*=1.6,flag[0]=0,xinyang+=1;
    if(orzCount>=100000)if(flag[5]==1)flag[5]=0,orzDelta*=1.25,flag[0]=0,xinyang+=1;
    if(orzCount>=200000)if(flag[6]==1)flag[6]=0,orzDelta*=2,flag[0]=0,xinyang+=1;
    if(orzCount>=500000)if(flag[7]==1)flag[7]=0,orzDelta*=2.5,flag[0]=0,xinyang+=1;
    if(orzCount>=1000000)if(flag[8]==1)flag[8]=0,orzDelta*=3,flag[0]=0,xinyang+=1;
    if(orzCount>=3000000)if(flag[14]==1)flag[14]=0,orzDelta*=1.6,flag[0]=0,xinyang+=1;
    if(orzCount>=7500000)if(flag[15]==1)flag[15]=0,orzDelta*=2.5,flag[0]=0,xinyang+=1;
    if(orzCount>=20000000)if(flag[16]==1)flag[16]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=50000000)if(flag[17]==1)flag[17]=0,orzDelta*=1.8,flag[0]=0,xinyang+=1;
    if(orzCount>=150000000)if(flag[18]==1)flag[18]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=450000000)if(flag[19]==1)flag[19]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=1000000000)if(flag[20]==1)flag[20]=0,orzDelta*=1.5,flag[0]=0,xinyang+=1;
    if(orzCount>=2500000000)if(flag[21]==1)flag[21]=0,orzDelta*=2,flag[0]=0,xinyang+=1;
    if(orzCount>=6000000000)if(flag[22]==1)flag[22]=0,orzDelta*=2.5,flag[0]=0,xinyang+=1;
    if(orzCount>=20000000000)if(flag[23]==1)flag[23]=0,orzDelta*=1.2,flag[0]=0,xinyang+=1;
    if(orzCount>=50000000000)if(flag[24]==1)flag[24]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=120000000000)if(flag[25]==1)flag[25]=0,orzDelta*=1.2,flag[0]=0,xinyang+=1;
    if(orzCount>=300000000000)if(flag[26]==1)flag[26]=0,orzDelta*=1.5,flag[0]=0,xinyang+=1;
    if(orzCount>=800000000000)if(flag[27]==1)flag[27]=0,orzDelta*=2,flag[0]=0,xinyang+=1;
    if(orzCount>=2500000000000)if(flag[28]==1)flag[28]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=9000000000000)if(flag[29]==1)flag[29]=0,orzDelta/=3,orzDelta*=5,flag[0]=0,xinyang+=1;
    if(orzCount>=30000000000000)if(flag[30]==1)flag[30]=0,orzDelta*=1.5,flag[0]=0,xinyang+=1;
    if(orzCount>=100000000000000)if(flag[31]==1)flag[31]=0,orzDelta*=2,flag[0]=0,xinyang+=1;
    if(orzCount>=280000000000000)if(flag[32]==1)flag[32]=0,orzDelta*=1.8,flag[0]=0,xinyang+=1;
    if(orzCount>=700000000000000)if(flag[33]==1)flag[33]=0,orzDelta/=3,orzDelta*=4,flag[0]=0,xinyang+=1;
    if(orzCount>=1800000000000000)if(flag[34]==1)flag[34]=0,orzDelta*=2.5,flag[0]=0,xinyang+=1;
    if(orzCount>=5500000000000000)if(flag[35]==1)flag[35]=0,orzDelta*=3,flag[0]=0,xinyang+=1;
    if(orzCount>=25000000000000000)if(flag[36]==1)flag[36]=0,orzDelta*=1.5,flag[0]=0,xinyang+=1;
    if(dianji>=500)if(flag[9]==1)flag[9]=0,document.getElementById("zzcsays2").innerHTML='获得成就 狂热LV.1：点击膜拜按钮500次<br>单次点击膜拜数翻倍',orzDelta*=2,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    if(dianji>=2000)if(flag[10]==1)flag[10]=0,document.getElementById("zzcsays2").innerHTML='获得成就 狂热LV.2：点击膜拜按钮2000次<br>单次点击膜拜数翻倍',orzDelta*=2,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    if(dianji>=5000)if(flag[11]==1)flag[11]=0,document.getElementById("zzcsays2").innerHTML='获得成就 狂热LV.3：点击膜拜按钮5000次<br>单次点击膜拜数翻倍',orzDelta*=2,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    if(dianji>=15000)if(flag[37]==1)flag[37]=0,document.getElementById("zzcsays2").innerHTML='获得成就 狂热LV.4：点击膜拜按钮15000次<br>单次点击膜拜数翻倍',orzDelta*=2,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    tttt=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds()-lastmb;
    if(tttt>=5)if(tttt<6)if(flag[12]==1)flag[12]=0,document.getElementById("zzcsays2").innerHTML='获得成就 虔诚LV.1<br>单次点击膜拜数变为原来的3倍',orzDelta*=3,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    if(tttt>=12)if(tttt<13)if(flag[12]==0)if(flag[13]==1)flag[13]=0,document.getElementById("zzcsays2").innerHTML='获得成就 虔诚LV.2<br>单次点击膜拜数变为原来的4倍',orzDelta*=4,flag[0]=0,cjresttime=1,lastcj=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();    
    lastmb=obj.getHours()*3600+obj.getMinutes()*60+obj.getSeconds();
    if(flag[0]==0){
        setCookie('xinyangcookie',xinyang);
        document.getElementById("information1").innerHTML='信仰 '+xinyang;
        if(orzDelta<10000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+orzDelta+' 次';
        else if(orzDelta<10000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000)+'.'+Math.floor(orzDelta/100)%10+'k 次';
        else if(orzDelta<10000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000)+'.'+Math.floor(orzDelta/100000)%10+'m 次';
        else if(orzDelta<10000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000)+'.'+Math.floor(orzDelta/100000000)%10+'b 次';
        else if(orzDelta<10000000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000)+'.'+Math.floor(orzDelta/100000000000)%10+'t 次';
        else if(orzDelta<10000000000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000000)+'.'+Math.floor(orzDelta/100000000000000)%10+'q 次';
        else document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000000000)+'.'+Math.floor(orzDelta/100000000000000000)%10+'Q 次';
    }
    setCookie('dianjicookie',dianji);
    setCookie('orzcookie',orzCount);
}
function allcookie(){
        orzCount=getCookie('orzcookie');
        dianji=getCookie('dianjicookie');
        xinyang=getCookie('xinyangcookie');
        xintu=getCookie('xintucookie');
        jiaotang=getCookie('jiaotangcookie');
        for(var i=0; i<jiaotang; i++) {
            jiaotangcost*=1.5;
            jiaotangcost=Math.floor(jiaotangcost);
        }
    document.getElementById("zzcsays").innerHTML='zzc：'+sayslist[Math.floor(Math.random()*sayslist.length)];
    if(orzCount>=50)if(flag[1]==1)flag[1]=0,orzDelta*=5;
    if(orzCount>=1000)if(flag[2]==1)flag[2]=0,orzDelta*=4;
    if(orzCount>=8000)if(flag[3]==1)flag[3]=0,orzDelta*=2.5;
    if(orzCount>=35000)if(flag[4]==1)flag[4]=0,orzDelta*=1.6;
    if(orzCount>=100000)if(flag[5]==1)flag[5]=0,orzDelta*=1.25;
    if(orzCount>=200000)if(flag[6]==1)flag[6]=0,orzDelta*=2;
    if(orzCount>=500000)if(flag[7]==1)flag[7]=0,orzDelta*=2.5;
    if(orzCount>=1000000)if(flag[8]==1)flag[8]=0,orzDelta*=3;
    if(orzCount>=3000000)if(flag[14]==1)flag[14]=0,orzDelta*=1.6;
    if(orzCount>=7500000)if(flag[15]==1)flag[15]=0,orzDelta*=2.5;
    if(orzCount>=20000000)if(flag[16]==1)flag[16]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=50000000)if(flag[17]==1)flag[17]=0,orzDelta*=1.8;
    if(orzCount>=150000000)if(flag[18]==1)flag[18]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=450000000)if(flag[19]==1)flag[19]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=1000000000)if(flag[20]==1)flag[20]=0,orzDelta*=1.5;
    if(orzCount>=2500000000)if(flag[21]==1)flag[21]=0,orzDelta*=2;
    if(orzCount>=6000000000)if(flag[22]==1)flag[22]=0,orzDelta*=2.5;
    if(orzCount>=20000000000)if(flag[23]==1)flag[23]=0,orzDelta*=1.2;
    if(orzCount>=50000000000)if(flag[24]==1)flag[24]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=120000000000)if(flag[25]==1)flag[25]=0,orzDelta*=1.2;
    if(orzCount>=300000000000)if(flag[26]==1)flag[26]=0,orzDelta*=1.5;
    if(orzCount>=800000000000)if(flag[27]==1)flag[27]=0,orzDelta*=2;
    if(orzCount>=2500000000000)if(flag[28]==1)flag[28]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=9000000000000)if(flag[29]==1)flag[29]=0,orzDelta/=3,orzDelta*=5;
    if(orzCount>=30000000000000)if(flag[30]==1)flag[30]=0,orzDelta*=1.5;
    if(orzCount>=100000000000000)if(flag[31]==1)flag[31]=0,orzDelta*=2;
    if(orzCount>=280000000000000)if(flag[32]==1)flag[32]=0,orzDelta*=1.8;
    if(orzCount>=700000000000000)if(flag[33]==1)flag[33]=0,orzDelta/=3,orzDelta*=4;
    if(orzCount>=1800000000000000)if(flag[34]==1)flag[34]=0,orzDelta*=2.5;
    if(orzCount>=5500000000000000)if(flag[35]==1)flag[35]=0,orzDelta*=3;
    if(orzCount>=25000000000000000)if(flag[36]==1)flag[36]=0,orzDelta*=1.5;
        document.getElementById("information1").innerHTML='信仰 '+xinyang;
        if(orzDelta<10000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+orzDelta+' 次';
        else if(orzDelta<10000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000)+'.'+Math.floor(orzDelta/100)%10+'k 次';
        else if(orzDelta<10000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000)+'.'+Math.floor(orzDelta/100000)%10+'m 次';
        else if(orzDelta<10000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000)+'.'+Math.floor(orzDelta/100000000)%10+'b 次';
        else if(orzDelta<10000000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000)+'.'+Math.floor(orzDelta/100000000000)%10+'t 次';
        else if(orzDelta<10000000000000000000)document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000000)+'.'+Math.floor(orzDelta/100000000000000)%10+'q 次';
        else document.getElementById("orzbutton").innerHTML='膜拜zzc '+Math.floor(orzDelta/1000000000000000000)+'.'+Math.floor(orzDelta/100000000000000000)%10+'Q 次';
    xintucost=1;
    if(xintu>=(jiaotang+5)*3)xintucost=100000000000000000000;
    else if(xintu>=(jiaotang+4)*3)xintucost=10;
    else if(xintu>=(jiaotang+3)*3)xintucost=5;
    else if(xintu>=(jiaotang+2)*3)xintucost=3;
    else if(xintu>=(jiaotang+1)*3)xintucost=2;
    document.getElementById("information1").innerHTML='信仰 '+xinyang;
    document.getElementById("jiaotangbutton").innerHTML='教堂 '+jiaotang+' 座['+jiaotangcost+' 信仰]';
    document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名['+xintucost+' 信仰]';
    if(xintucost==100000000000000000000)document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名[请先增添教堂]';
}
function XINTUADD(){if(xinyang>=xintucost){
    xinyang-=xintucost;
    xintu+=1;
    xintucost=1;
    if(xintu>=(jiaotang+5)*3)xintucost=100000000000000000000;
    else if(xintu>=(jiaotang+4)*3)xintucost=10;
    else if(xintu>=(jiaotang+3)*3)xintucost=5;
    else if(xintu>=(jiaotang+2)*3)xintucost=3;
    else if(xintu>=(jiaotang+1)*3)xintucost=2;
    document.getElementById("information1").innerHTML='信仰 '+xinyang;
    document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名['+xintucost+' 信仰]';
    if(xintucost==100000000000000000000)document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名[请先增添教堂]';
setCookie('xintucookie',xintu);
}}
function JIAOTANGADD(){if(xinyang>=jiaotangcost){
    xinyang-=jiaotangcost;
    jiaotang+=1;
    jiaotangcost*=1.5;
    jiaotangcost=Math.floor(jiaotangcost);
    xintucost=1;
    if(xintu>=(jiaotang+5)*3)xintucost=100000000000000000000;
    else if(xintu>=(jiaotang+4)*3)xintucost=10;
    else if(xintu>=(jiaotang+3)*3)xintucost=5;
    else if(xintu>=(jiaotang+2)*3)xintucost=3;
    else if(xintu>=(jiaotang+1)*3)xintucost=2;
    document.getElementById("information1").innerHTML='信仰 '+xinyang;
    document.getElementById("jiaotangbutton").innerHTML='教堂 '+jiaotang+' 座['+jiaotangcost+' 信仰]';
    document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名['+xintucost+' 信仰]';
    if(xintucost==100000000000000000000)document.getElementById("xintubutton").innerHTML='信徒 '+xintu+' 名[请先增添教堂]';
setCookie('jiaotangcookie',jiaotang);
}}
function setCookie(cname,cvalue)
{
  var ddd=new Date();
  ddd.setTime(ddd.getTime()+(24*60*60*365*1000));
  var expires = "expires="+ddd.toGMTString();
  document.cookie = cname+"="+cvalue + "; " + expires;
}
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return Number(c.substring(name.length,c.length));
  }
  return 0;
}