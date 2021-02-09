function remSize(){
    let wi = document.documentElement.clientWidth||window.clientWidth
    if(wi>=750){
        wi = 750
    }else if(wi<=320){
        wi = 320
    }
    document.documentElement.style.fontSize = (wi/7.5)+"px"
    
}
remSize()
window.onresize = ()=>{
    remSize()
}