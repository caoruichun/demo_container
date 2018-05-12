//旋转时间间隔

/**
 * Created by Bian on 2017/4/19.
 */
//开始轨迹
var orbit={
    //初始化运行
    init:function(selector){
        this.elements=document.querySelectorAll(selector||"[data-orbit]");

        //设置更新间隔
        this.setupIntervals();
    },

    //旋转时间间隔
    setupIntervals:function(){
        var self=this;
        this.elements.forEach(function(e1){
            self.update(e1);
            this.interval=setInterval(function(){
                self.update(e1);
            },5000);
        });
    },

    //3d旋转轨道
    update:function(e1) {
        var min = -1;
        var max = 1;

        //得到旋转的值
        var rotate = [
            (Math.floor(Math.random() * (max - min + 1) + min) + '.' + (Math.floor(Math.random() * 9) + 1)),
            (Math.floor(Math.random() * (max - min + 1) + min) + "." + (Math.floor(Math.random() * 9) + 1))
        ];

        //设置transform
        e1.style.webkitTransform='rotate3d('+rotate[0]+','+rotate[1]+',0,1deg)';
        e1.style.MozTransform='rotate3d('+rotate[0]+','+rotate[1]+',0,1deg)';
        e1.style.msTransform='rotate3d('+rotate[0]+','+rotate[1]+',0,1deg)';
        e1.style.OTransform='rotate3d('+rotate[0]+','+rotate[1]+',0,1deg)';
        e1.style.transform='rotate3d('+rotate[0]+','+rotate[1]+',0,1deg)';
    }
}

//执行函数
orbit.init();