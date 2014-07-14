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
		
		var captureActive = false
		
		
		var helpBtn = this.helpBtn
		var captureBtn = this.captureBtn
		
		//외부api사용시 true
		var rootApiAccess = true
		
		
		createjs.Ticker.addEventListener("tick", handleTick);
		
		function handleTick(e){
			TimeValue()
		}
		
		
		function TimeValue() {
			timePannel.timeTf.text = timeDraw()
			
			timePannel.timeTf_second.text = S
			
			connectionActiveSy()
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
		captureBtn.addEventListener('click',captureBtnClick)
		//this.connectBtn.addEventListener('click',connectBtnClick)
		//this.closeBtn.addEventListener('click',closeBtnClick)
		
		
		function captureBtnClick(e){
			if(captureActive){
				captureBtn.gotoAndStop(2)
				captureStop()
				captureActive = false
			}else{
				captureBtn.gotoAndStop(1)
				captureStart()
				captureActive = true
			}
		}
		
		
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
		
		
		function connectionActiveSy(){
			
			if(rootApiAccess){
				if(connectActive){
					timePannel.connectionActiveMc.gotoAndStop(2)
				}else{
					timePannel.connectionActiveMc.gotoAndStop(1)
				}
			}
		}
		
		
		
		
		if(rootApiAccess){
		
		 tizen.systeminfo.getPropertyValue("BATTERY", onSuccessDafaultCallback, onErrorCallback);
		 tizen.systeminfo.addPropertyValueChangeListener("BATTERY", onSuccessCallback);
		}
		
		function onSuccessDafaultCallback(battery) {
		     
			timePannel.batteryValueTf.text = (battery.level*100).toString()+"%"
		 }
		
		 function onErrorCallback(error) {
		     console.log("An error occurred " + error.message);
		 }
		
		
		
		function onSuccessCallback(battery) {
		   timePannel.batteryValueTf.text = (battery.level*100).toString()+"%"
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어 7
	this.instance = new lib.test();
	this.instance.setTransform(43.1,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// OutLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(3,1,1).p("A4/4/MAx/AAAMAAAAx/Mgx/AAAg");
	this.shape.setTransform(160,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어 5
	this.captureBtn = new lib.camBtn();
	this.captureBtn.setTransform(49,202.6);

	this.helpBtn = new lib.helpBtn();
	this.helpBtn.setTransform(176.9,202.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.helpBtn},{t:this.captureBtn}]}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(18.8,158.5,611,323);


// symbols:
(lib.testM = function() {
	this.initialize();

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(5,1,1).p("AkzkzIJnAAIAAJnIpnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AkyEzIAAplIJlAAIAAJlg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.3,-33.3,66.6,66.6);


(lib.Hmotion = function() {
	this.initialize();

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AA7ELIAAjpIh2AAIAADpIhpAAIAAoVIBpAAIAADGIB2AAIAAjGIBqAAIAAIVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-26.7,33.2,53.5);


(lib.connetionActive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AibAxIAAhhIE3AAIAABhg");
	this.shape.setTransform(15.6,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("AAHAxIgHgkIAjghIgagcICoAAIAABhgAiwAxIAAhhICQAAIAaAcIgjAhIAHAkg");
	this.shape_1.setTransform(17.8,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,9.8);


(lib.camBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhQDHQhAhKAAh4QgBh8A/hNQA/hMBiAAQASAAARACQAQADAPAHIAABkQgPgGgOgDQgOgDgOAAQg2AAghAvQggAwAABNQAABKAhAuQAiAuA2ABQANAAAPgEQAOgDANgGIAABrQgPAGgPADQgQADgQABQhkAAg/hLg");
	this.shape.setTransform(43,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgwDnIAAkYIgnAAIAAhNIAnAAIAAhoIBhAAIAABoIAnAAIAABNIgnAAIAAEYg");
	this.shape_1.setTransform(47.6,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 레이어 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0033").ss(5,1,1).p("AHWAAQAADCiKCKQiKCKjCAAQjBAAiKiKQiKiKAAjCQAAjBCKiKQCKiKDBAAQDCAACKCKQCKCKAADBg");
	this.shape_2.setTransform(47,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.008)").s().p("AlLFLQiJiJgBjCQABjBCJiKQCKiJDBgBQDCABCJCJQCKCKAADBQAADCiKCJQiJCKjCAAQjBAAiKiKg");
	this.shape_3.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,99,99);


(lib.TimePannel = function() {
	this.initialize();

	// 레이어 1
	this.batteryValueTf = new cjs.Text("100", "23px 'Futura BdCn BT'", "#FF9900");
	this.batteryValueTf.name = "batteryValueTf";
	this.batteryValueTf.textAlign = "center";
	this.batteryValueTf.lineHeight = 25;
	this.batteryValueTf.lineWidth = 47;
	this.batteryValueTf.setTransform(28.8,4.1);

	this.connectionActiveMc = new lib.connetionActive();
	this.connectionActiveMc.setTransform(295.7,12,1,1,0,0,0,15.6,4.9);

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

	this.addChild(this.timeTf,this.timeTf_second,this.connectionActiveMc,this.batteryValueTf);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4.1,320,218.3);


(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.testM();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39.2,x:258,y:95.6},38).to({rotation:0,x:0,y:0},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-33.3,66.6,66.6);


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