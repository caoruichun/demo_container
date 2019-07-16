function Ball(options) {  
    this._init(options)
}
Ball.prototype = {
    _init: function (options) {  
        this.parentId= options.parentId;
        this.left = options.left;
        this.top = options.top;
        this.r = 60;
        this.bgColor = options.bgColor || 'red';
        // 小球变化的量
        this.dX = _.random(-5,5);
        this.dY = _.random(-5,5);
        this.dR = _.random(1,3);//小球变化的量
    },
    render:function () {  
        var parentId = document.getElementById(this.parentId);
        var childNode = document.createElement('div');

        childNode.style.position = 'absolute';
        childNode.style.left = this.left + 'px';
        childNode.style.top = this.top + 'px';
        childNode.style.width = this.r + 'px';
        childNode.style.height = this.r + 'px';
        childNode.style.borderRadius = '50%';
        childNode.style.backgroundColor = this.bgColor;

        parentId.appendChild(childNode);
    },
    update:function(){
        this.left+=this.dX;
        this.top+=this.dY;
        this.r -= this.dR;
        if(this.r<=0){
            this.r=0;
            ballArr = _.without(ballArr,this);
        }
    }
}