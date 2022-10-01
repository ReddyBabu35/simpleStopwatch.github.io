var msec=00,sec=0,min=0;
var tr;
var stage="s";
document.getElementById("digits").innerHTML="00: 00: 00";

document.getElementById("start").onclick=()=>{
   function tim()
{
    //for running the timer................

    if (stage=="s"){
        document.getElementById("start").innerHTML="PAUSE";
        stage="p";
    document.getElementById("digits").style.color="green";
    let end=false
    const count=()=>{
        if (msec>=99){
            if (sec>=59){
                if (min>=59){
                    document.getElementById("digits").innerHTML=`59: 59: 99`;
                    min=0;
                    sec=0;
                    msec=0;
                    end=true
                    clearInterval(tr);
                    return
                }
                min++;
                sec=0;
            }
            else{
                sec++;
                msec=0;
            }
        }else{
            msec++;
            
        }
    document.getElementById("digits").innerHTML=`${String(min).padStart(2,'0')}: ${String(sec).padStart(2,'0')}: ${String(msec).padStart(2,'0')}`;
    }
    tr=setInterval(count,10);
    console.log(`${min}: ${sec}: ${msec}`)
    }

    else if (stage=="p")
    {

    //for pausing the timer..............................

        stage="r";
    document.getElementById("digits").style.color="yellow";
    document.getElementById("start").innerHTML="RESUME";
    clearInterval(tr);
    }
 
    else if(stage=="r")
    {
        
    //for resuming the timer.............................

    stage="s";
    document.getElementById("digits").style.color="green";
    document.getElementById("start").innerHTML="PAUSE";
    tim();
    }
}


    tim();
        
    }


//FOR RESETING THE TIMER.............................

document.getElementById("reset").onclick=()=>{
    let sure=confirm("want to reset?");
   
    if (sure){
    stage="s"
   document.getElementById("start").innerHTML="START";
    clearInterval(tr);
    min=0;
    sec=0;
    msec=0;
    document.getElementById("digits").innerHTML=`${String(min).padStart(2,'0')}: ${String(sec).padStart(2,'0')}: ${String(msec).padStart(2,'0')}`;
    
    document.getElementById('sp').style.textAlign='center';
    const dup=document.createElement("li");
    const cnt=document.createTextNode("💚💖");
    dup.setAttribute("id","noStamp");
    dup.appendChild(cnt);


    document.getElementById("sp").replaceChildren(dup);
    isNoStampPresent=true;
    i=1;}
    // else{
    //     tim();
    // }

}

//for making the laps...............................

var i=1;
var isNoStampPresent=true;
document.getElementById("lapp").onclick=()=>{
    if (stage=="p"){
    lapfun()}

}

const lapfun=()=>{ 
    const ul=document.getElementById('sp');
    if (isNoStampPresent)
    {
        isNoStampPresent=false;
        document.getElementById("noStamp").remove();
    }

    const ele=document.createElement("li");
    const node=document.createTextNode(`${String(i).padStart(2,'0')}:...............>${String(min).padStart(2,'0')}: ${String(sec).padStart(2,'0')}: ${String(msec).padStart(2,'0')} <...................`);
    ele.appendChild(node);
    ul.appendChild(ele);
    i++;


    

}



