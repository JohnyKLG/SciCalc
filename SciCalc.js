function setMem(){
    localStorage.setItem('shift', 'off');
    localStorage.setItem('alpha', 'off')
}
fb = document.getElementsByTagName("fnct")[0].getElementsByTagName("button");
cb = document.getElementsByTagName("cnsl")[0].getElementsByTagName("button");
function hold(){
    var x = document.getElementById("hold").style;
    var l = document.getElementById("light").style;
    if(x.left == '-1px'){
        x.left='auto';
        x.right='-1px';
        l.left='-1px';
        l.right='auto';
        for(i = 0; i < fb.length; i++){
            fb[i].style.borderColor='#403838';
            fb[i].style.color='#403838';
        }
        for(i = 0; i < cb.length; i++){
            cb[i].style.borderColor='#403838';
            cb[i].style.color='#403838';
        }
    }else{
        x.left='-1px';
        x.right='auto';
        l.left='-1px';
        l.right='auto';
        for(i = 0; i < fb.length; i++){
            fb[i].style.borderColor='#555';
            fb[i].style.color='#777';
        }
        for(i = 0; i < cb.length; i++){
            cb[i].style.borderColor='#555';
            cb[i].style.color='#777';
        }
    }
}
function light(){
    var x = document.getElementById("light").style;
    if(x.left == '-1px'){
        bfb = fb[0].style.borderColor;
        cfb = fb[0].style.color;
        bcb = cb[0].style.borderColor;
        ccb = cb[0].style.color;
        x.left='auto';
        x.right='-1px';
        for(i = 0; i < fb.length; i++){
            fb[i].style.borderColor='rgb(38, 125, 136)';
            fb[i].style.color='rgb(38, 125, 136)';
        }
        for(i = 0; i < cb.length; i++){
            cb[i].style.borderColor='rgb(38, 125, 136)';
            cb[i].style.color='rgb(38, 125, 136)';
        }
    }else{
        x.left='-1px';
        x.right='auto';
        for(i = 0; i < fb.length; i++){
            fb[i].style.borderColor=bfb;
            fb[i].style.color=cfb;
        }
        for(i = 0; i < cb.length; i++){
            cb[i].style.borderColor=bcb;
            cb[i].style.color=ccb;
        }
    }
}
shfitBC = document.getElementsByClassName("shift")[0].style.borderColor;
alphaBC = document.getElementsByClassName("alpha")[0].style.borderColor;
function shift(){
    if(localStorage.getItem('shift') == 'off'){
        localStorage.setItem('shift', 'on');
        shfitBC = "rgb(134, 124, 27)";
        localStorage.setItem('alpha', 'off');
        alphaBC = "#555";
    }else{
        localStorage.setItem('shift', 'off');
        shfitBC = "#555";
    }
}
function alpha(){
    if(localStorage.getItem('alpha') == 'off'){
        localStorage.setItem('alpha', 'on');
        alphaBC = "rgb(182, 33, 137)";        
        localStorage.setItem('shift', 'off');
        shfitBC = "#555";
    }else{
        localStorage.setItem('alpha', 'off');
        alphaBC = "#555";
    }
}
var sto,mshift;
function calc(b){
    var hold = document.getElementById("hold").style;
    var dspl = document.getElementsByTagName("dspl")[0];
    var dsplb = document.getElementsByTagName("res")[0];
    if(hold.left == '-1px'){
        if(b == 'D'){
            dspl.innerHTML = '';
            dsplb.innerHTML = '0';
        }else{
            if(b == '='){
                dspl.innerHTML = '';
            }else{
                if(b == 'E'){
                    dspl.innerHTML = dspl.innerHTML.substring(0,(dspl.innerHTML.length - 1));
                    if(eval(dspl.innerHTML) >> '0'){
                        dsplb.innerHTML = eval(dspl.innerHTML);
                    }else{
                        dsplb.innerHTML = '0';
                    }
                }else{
                    if(b == 'A'){
                        dspl.innerHTML = dsplb.innerHTML;
                    }else{
                        if(b == 'X'){
                            dspl.innerHTML = '10<sup>'+dsplb.innerHTML+'</sup>';
                            dsplb.innerHTML = Math.pow(10 , dsplb.innerHTML);
                        }else{
                            if(b == 'STO'){
                                if(localStorage.getItem('shift') == 'off'){
                                    dspl.innerHTML = 'Store '+dsplb.innerHTML+'?';
                                    sto = dsplb.innerHTML;
                                    dsplb.innerHTML = 'Select M';
                                }else if(localStorage.getItem('shift') == 'on'){
                                    dspl.innerHTML = '';
                                    dsplb.innerHTML = 'Select M';
                                    mshift = 'on';
                                }
                            }else{
                                if(sto > '0'){
                                    dspl.innerHTML = 'Please wait...';
                                    dsplb.innerHTML = 'Stored '+sto+' in M'+b;
                                    localStorage.setItem("mem"+b, sto);
                                    setTimeout(function(){
                                        dspl.innerHTML = sto;
                                        dsplb.innerHTML = sto;
                                        sto = '0';                                        
                                    }, 2000);
                                }else{
                                    if(mshift == 'on'){
                                        dspl.innerHTML = localStorage.getItem("mem"+b);
                                        dsplb.innerHTML = localStorage.getItem("mem"+b);
                                        mshift = 'off';
                                    }else{
                                        dspl.innerHTML += b;
                                        dsplb.innerHTML = eval(dspl.innerHTML);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
