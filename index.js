$(function(){
    var i = 0;
    lunBo();
    function lunBo() {
        $(".lun >img").hide();
        $(".div").hide();
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