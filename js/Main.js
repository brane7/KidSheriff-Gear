(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var H =''
		var M = ''
		var S =''
		var timePannel = this.timePannel
		timePannel.timeTf.text = timeDraw()
		timePannel.timeTf_second.text = S
		
		
		var helpBtn = this.helpBtn
		
		createjs.Ticker.addEventListener("tick", handleTick);
		
		function handleTick(e){
			TimeValue()
		}
		
		
		function TimeValue() {
			timePannel.timeTf.text = timeDraw()
			
			timePannel.timeTf_second.text = S
			
			
		}
		
		
		
		
		
		
		//유니크 텍스트 붙여줌 
		function timeDraw() {
			var date = new Date();
			H = (date.getHours() > 9) ? date.getHours() : '0' + date.getHours();
			M = (date.getMinutes() > 9) ? date.getMinutes() : '0' + date.getMinutes();
			S = (date.getSeconds() > 9) ? date.getSeconds() : '0' + date.getSeconds();
			var timeTxt = H.toString() +":"+ M.toString()// + S.toString();
		
			return timeTxt;
		}
		
		
		helpBtn.addEventListener('click',helpBtnClick)
		this.connectBtn.addEventListener('click',connectBtnClick)
		this.closeBtn.addEventListener('click',closeBtnClick)
		
		
		function helpBtnClick(e){
			helpBtn.gotoAndPlay(2)
			fetch()
			
			
		}
		
		function connectBtnClick(e){
			connect()
		}
		
		function closeBtnClick(e){
			disconnect()
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// OutLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(3,1,1).p("A4/4/MAx/AAAMAAAAx/Mgx/AAAg");
	this.shape.setTransform(160,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// guide
	this.closeBtn = new lib.helpBtn();
	this.closeBtn.setTransform(261.8,249.6,1,1,0,0,0,47,47);

	this.connectBtn = new lib.helpBtn();
	this.connectBtn.setTransform(59.3,249.6,1,1,0,0,0,47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.connectBtn},{t:this.closeBtn}]}).wait(1));

	// 레이어 5
	this.helpBtn = new lib.helpBtn();
	this.helpBtn.setTransform(112.5,202.6);

	this.timeline.addTween(cjs.Tween.get(this.helpBtn).wait(1));

	// TimePannel
	this.timePannel = new lib.TimePannel();
	this.timePannel.setTransform(51.5,50.5,1,1,0,0,0,51.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.timePannel).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");
	this.shape_1.setTransform(160,160);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.5,158.5,323,323);


// symbols:
(lib.TimePannel = function() {
	this.initialize();

	// 레이어 1
	this.timeTf_second = new cjs.Text("59", "40px 'Futura BdCn BT'", "#FFFFFF");
	this.timeTf_second.name = "timeTf_second";
	this.timeTf_second.textAlign = "center";
	this.timeTf_second.lineHeight = 42;
	this.timeTf_second.lineWidth = 81;
	this.timeTf_second.setTransform(266.9,157.7);

	this.timeTf = new cjs.Text("01:33", "130px 'Futura BdCn BT'", "#FFFFFF");
	this.timeTf.name = "timeTf";
	this.timeTf.textAlign = "center";
	this.timeTf.lineHeight = 132;
	this.timeTf.lineWidth = 316;
	this.timeTf.setTransform(158,22.8);

	this.addChild(this.timeTf,this.timeTf_second);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,22.8,320,199.6);


(lib.Hmotion = function() {
	this.initialize();

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AA7ELIAAjpIh2AAIAADpIhpAAIAAoVIBpAAIAADGIB2AAIAAjGIBqAAIAAIVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-26.7,33.2,53.5);


(lib.helpBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// 레이어 7
	this.instance = new lib.Hmotion();
	this.instance.setTransform(46.9,47.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},6).wait(1));

	// 레이어 5
	this.instance_1 = new lib.Hmotion();
	this.instance_1.setTransform(46.9,47.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},6).to({scaleX:1.43,scaleY:1.43,alpha:0},9).wait(1));

	// 레이어 3
	this.instance_2 = new lib.Hmotion();
	this.instance_2.setTransform(46.9,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.43,scaleY:1.43,alpha:0},9).wait(7));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlLFLQiJiJgBjCQABjBCJiKQCKiJDBgBQDCABCJCJQCKCKAADBQAADCiKCJQiJCKjCAAQjBAAiKiKgAA6AoIAADpIBqAAIAAoVIhqAAIAADFIh2AAIAAjFIhpAAIAAIVIBpAAIAAjpg");
	this.shape.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// 레이어 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0033").ss(5,1,1).p("AHWAAQAADCiKCKQiKCKjCAAQjBAAiKiKQiKiKAAjCQAAjBCKiKQCKiKDBAAQDCAACKCKQCKCKAADBg");
	this.shape_1.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,99,99);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;