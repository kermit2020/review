// JavaScript Document


//--------404page01 start--------
$(function () {

    var path = "M0,140c0,0,442-10,572-50S988,0,1148,0s442,50,572,90s416,50,576.5,50s442.5-9,572.5-49.5S3281,0,3441,0 s442,51,572,90.5s419,49.5,579,49.5";
    var walkerObj = document.getElementById("pa404boat01");
    var walkers = [];


    function AnimateWalker(walker) {
        this.pathAnimator = new PathAnimator(path);
        this.walker = walker;
        this.reverse = false;
        this.speed = 12;
        this.easing = '';
        this.startOffset = null;
    };

    AnimateWalker.prototype = {
        start: function () {
            this.startOffset = (this.reverse || this.speed < 0) ? 100 : 0; // if in reversed mode, then animation should start from the end, I.E 100%
            this.pathAnimator.context = this; // just a hack to pass the context of every Walker inside it's pathAnimator
            this.pathAnimator.start(this.speed, this.step, this.reverse, this.startOffset, this.finish, this.easing);
        },
        step: function (point, angle) {
            this.walker.style.cssText = "top:" + (point.y - 100) + "px;" +
                    "left:" + (point.x - 69) + "px;" +
                    "transform:rotate(" + angle + "deg);" +
                    "-webkit-transform:rotate(" + angle + "deg);";
        },

        finish: function () {
            this.start();
        },

        resume: function () {
            this.pathAnimator.start(this.speed, this.step, this.reverse, this.pathAnimator.percent, this.finish, this.easing);
        }
    };

    function generateWalker(walkerObj) {
        var newAnimatedWalker = new AnimateWalker(walkerObj);
        walkers.push(newAnimatedWalker);
        return newAnimatedWalker;
    };
    generateWalker(walkerObj).start();



});
//--------404page01 end--------
