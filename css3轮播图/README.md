纯css3写的轮播动画效果
.num:hover{background: #00f;}
.num:hover,#photos:hover{animation-play-state: paused;-webkit-animation-play-state: paused;-moz-animation-play-state: paused;}
.num:nth-child(2){margin-right: 30px}
.num:nth-child(3){margin-right: 60px}
.num:nth-child(4){margin-right: 90px}
#a1:hover~#photos{animation:ma1 .5s ease-out forwards;}
#a2:hover~#photos{animation:ma2 .5s ease-out forwards;}
#a3:hover~#photos{animation:ma3 .5s ease-out forwards;}
#a4:hover~#photos{animation:ma4 .5s ease-out forwards;}
@keyframes ma1 {100%{margin-left:-0px;}}
@keyframes ma2 {100%{margin-left:-400px;}}
@keyframes ma3 {100%{margin-left:-800px;}}
@keyframes ma4 {100%{margin-left:-1200px;}}


 <div id="frame">
        <a href="javascript:void(0)" id="a4" class="num">4</a>
        <a href="javascript:void(0)" id="a3" class="num">3</a>
        <a href="javascript:void(0)" id="a2" class="num">2</a>
        <a href="javascript:void(0)" id="a1" class="num">1</a>
        <div id="photos" class="play">
            <img src="1.jpg" alt="">
            <img src="2.jpg" alt="">
            <img src="3.jpg" alt="">
            <img src="4.jpg" alt="">
            <ul id="dis">
                <li>图片1的介绍</li>
                <li>图片2的介绍</li>
                <li>图片3的介绍</li>
                <li>图片4的介绍</li>
            </ul>
        </div>
    </div>
