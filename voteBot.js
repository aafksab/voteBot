window.alert=function(){ };
document.onkeypress=function(e) {
    if(e.keyCode===13)
    {eventFire(vote,'click');}
};
function select() {
    burch=document.getElementById('PDI_answer45765322');
    vote=document.getElementById('pd-vote-button9983940');
    back=document.querySelector('a.pds-return-poll');
};
function eventFire(el, etype) {
    if (el.fireEvent) {el.fireEvent('on'+etype);
    } else {
        var evObj=document.createEvent('Events');
        evObj.initEvent(etype,true,false);
        evObj.which=el;
        i=i+1;
        el.dispatchEvent(evObj);
    }
};
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while(currentTime+miliseconds>=new Date().getTime()){
    }
};

setInterval(function(){
if(i==25){sleep(80000);i=0}
console.log(i);
select();
	sleep(1000);
    try {burch.click();
	sleep(2000);
	eventFire(vote,'click');
	sleep(2000);
	}catch(e){ }},3000);
setInterval(function(){select();
	sleep(1000);
    try {back.click();
	sleep(3000);
	}catch(e){ }},6000,500);