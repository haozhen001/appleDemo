$(function(){
    var i = 0;
    lunBo();
    function lunBo() {
        if(i==0){
            $(".lun").css({"background-color":"white"});
        }else if(i==1){

        }else if(i==2){
            $(".lun").css({"background-color":"rgba(255, 255, 255, 0.877)"});
        }else if(i==3){
            $(".lun").css({"background-color":"#efeeee"});
        }
        //隐藏标题
        $(".div").hide();
        //动画效果
        $(".div").eq(i).show("fold",1000);
        $(".lun >img").eq(i).show("drop",500);
        
        $(".second > ul > li").eq(i).animate({
            width:"50px"
        },8000);
        ++i;
        if(i > 3){
            i=0;
            function delay(){
                $(".second > ul > li").animate({
                    width:"0px"
                },0)
            }
            setTimeout(delay,8000);
            }
    }
    setInterval(lunBo,8500);
})