(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/circle_0.png", id:"circle_0"},
		{src:"images/circle_1.png", id:"circle_1"},
		{src:"images/circle_2.png", id:"circle_2"},
		{src:"images/link.png", id:"link"},
		{src:"images/nolink.png", id:"nolink"},
		{src:"images/offBtn.png", id:"offBtn"},
		{src:"images/onBtn.png", id:"onBtn"}
	]
};

// stage content:
(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var m =''
		var d=''
		var daySt = ''
		var daySpell = ['MON','TUE','WED','THU','FRI','SAT','SUN']
		
		
		
		
		var hour = ''
		var min = ''
		
		
		var timePannel = this.timePannel
		
		var captureActive = false
		
		
		var helpBtn = this.helpBtn
		var captureBtn = this.captureBtn
		
		//외부api사용시 true
		var rootApiAccess = true
		
		var date = new Date();
		
		createjs.Ticker.addEventListener("tick", handleTick);
		
		function handleTick(e){
			TimeValue()
		}
		
		
		function TimeValue() {
		
			timePannel.dayTf.text = dateDraw()
			
			connectionActiveSy()
		
			
			hour = date.getHours();
			
			 if (hour>12) {
			  hour = hour-12;
				 if (hour<10) { 
					 hour = "0"+hour; 
				 }
				 chour = "PM"
			 } else {
				if (hour<10) { 
					hour = "0"+hour; 
				}
				chour = "AM"
			 }
			 
			 min = date.getMinutes();
			 if (min<10) {
			  min = "0"+min;
			 }
			
			 timePannel.ampmTf.text = chour
			 timePannel.timeTf_hour.text = hour
			 timePannel.timeTf_min.text = min
			 	
			
			
		}
		
		
		
		
		
		//유니크 텍스트 붙여줌 
		function dateDraw() {
			var date = new Date();
			m = date.getMonth()+1;
			d = date.getDate();
			daySt = daySpell[date.getDay()-1]
			
			var dateTxt = m+"-"+d+" "+daySt;
			return dateTxt;
		}
		
		
		helpBtn.addEventListener('click',helpBtnClick)
		
		
		
			
		
		var captureTimeOut = ''
		
		
		function captureStop_Chain(){
			helpBtn.gotoAndStop(2)
			captureStop()
			captureActive = false
		}
		
		function captureStart_Chain(){
			helpBtn.gotoAndStop(1)
			captureStart()
			captureActive = true
		}
		
		
		
		
		function helpBtnClick(e){
			
			helpBtn.gotoAndPlay(2)
			startGPSFn()
			
			
			if(captureActive){
				
				circleMotion(false)
				captureStop_Chain()
				
				//clearTimeout()
			}else{
				circleMotion(true)
				captureStart_Chain(captureTimeOut)
				//captureTimeOut = setTimeout(captureStop_Chain, 60000);
				
			}
			
			
			
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
		
				
		function circleMotion($active){
			if($active){
					cjs.Tween.get(timePannel.circleMc).to({alpha:0}, 500);
					cjs.Tween.get(timePannel.circleSecond).to({alpha:1}, 500);
					timePannel.circleSecond.gotoAndPlay(1)
			}else{
				
					cjs.Tween.get(timePannel.circleMc).to({alpha:1}, 500);
					cjs.Tween.get(timePannel.circleSecond).to({alpha:0}, 500);
					timePannel.circleSecond.gotoAndStop(0)
		         
			}
		}
		
		
		
		
		
		if(rootApiAccess){
		
		 tizen.systeminfo.getPropertyValue("BATTERY", onSuccessDafaultCallback, onErrorCallback);
		 tizen.systeminfo.addPropertyValueChangeListener("BATTERY", onSuccessCallback);
		}
		
		function onSuccessDafaultCallback(battery) {
		     batteryMotion(battery)
		 }
		
		 function onErrorCallback(error) {
		     console.log("An error occurred " + error.message);
		 }
		
		
		
		function onSuccessCallback(battery) {
		  batteryMotion(battery)
		}
		
		
		function batteryMotion($battery){
			console.log($battery.level)
			timePannel.batteryMc.batteryChar.scaleX = $battery.level
			 timePannel.batteryMc.batteryValueTf.text = ($battery.level*100).toString()+"%"
			
			if($battery.level < 0.2){
				timePannel.batteryMc.batteryChar.gotoAndStop(1)
			}else{
				timePannel.batteryMc.batteryChar.gotoAndStop(0)
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어 5
	this.helpBtn = new lib.helpBtn();
	this.helpBtn.setTransform(127.9,204.2);

	this.timeline.addTween(cjs.Tween.get(this.helpBtn).wait(1));

	// TimePannel
	this.timePannel = new lib.TimePannel();
	this.timePannel.setTransform(51.5,50.5,1,1,0,0,0,51.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.timePannel).wait(1));

	// bg
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,51.9,635.3,515.1);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.circle_0 = function() {
	this.initialize(img.circle_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.circle_1 = function() {
	this.initialize(img.circle_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.circle_2 = function() {
	this.initialize(img.circle_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.link = function() {
	this.initialize(img.link);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,15);


(lib.nolink = function() {
	this.initialize(img.nolink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,15);


(lib.offBtn = function() {
	this.initialize(img.offBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.onBtn = function() {
	this.initialize(img.onBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.트윈6 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_2();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.트윈5 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_2();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.트윈4 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_0();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.트윈3 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_0();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.트윈2 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_1();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.트윈1 = function() {
	this.initialize();

	// 레이어 1
	this.instance = new lib.circle_1();
	this.instance.setTransform(-160,-160);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.심볼2 = function() {
	this.initialize();

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AgkDEQgQgQAAgVQAAgWAQgPQAPgQAVAAQAWAAAQAQQAPAPAAAWQAAAVgPAQQgQAPgWABQgVgBgPgPgAgkh5QgQgQAAgUQAAgWAQgQQAPgPAVgBQAWABAQAPQAPAQAAAWQAAAUgPAQQgQAQgWAAQgVAAgPgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-21.2,10.7,42.4);


(lib.helpBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 5
	this.instance = new lib.offBtn();

	this.instance_1 = new lib.onBtn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.connetionActive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 3
	this.instance = new lib.link();

	this.instance_1 = new lib.nolink();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,15);


(lib.circleMc = function() {
	this.initialize();

	// 레이어 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(163,163,163,0.988)").s().p("AudOeQl/mAgBoeQABodF/mAQGAl/IdgBQIeABGAF/QGAGAAAIdQAAIemAGAQmAGAoeAAQodAAmAmAgAt3t4QlxFwAAIIQAAIJFxFwQFvFwIIAAQIJAAFwlwQFwlwAAoJQAAoIlwlwQlwlwoJAAQoIAAlvFwg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131,-131,262,262);


(lib.batteryChar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73D743").s().p("AiAAbIAAg1IEBAAIAAA1g");
	this.shape.setTransform(-12.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiAAbIAAg1IEBAAIAAA1g");
	this.shape_1.setTransform(-12.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-2.8,25.9,5.6);


(lib.심볼1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.심볼2();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},30).to({alpha:0},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-21.2,10.7,42.4);


(lib.circleSecond2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_82 = function() {
		this.gotoAndPlay("re")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82).call(this.frame_82).wait(1));

	// circle_0.png
	this.instance = new lib.트윈3("synched",0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.트윈4("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({_off:true,alpha:1},16).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},16).to({alpha:0},22).wait(40));

	// circle_1.png
	this.instance_2 = new lib.트윈1("synched",0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.트윈2("synched",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true,alpha:1},20).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},20).to({alpha:0},22).wait(20));

	// circle_2.png
	this.instance_4 = new lib.트윈5("synched",0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.트윈6("synched",0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({_off:true,alpha:1},20).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},20).to({alpha:0},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.batteryMc = function() {
	this.initialize();

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgIgYIARAAIAAAxIgRAAg");
	this.shape.setTransform(13.7,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiNgpIEbAAIAABTIkbAAg");
	this.shape_1.setTransform(29.3,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAZIAAgxIARAAIAAAxg");
	this.shape_2.setTransform(13.7,-4.4);

	// 레이어 1
	this.batteryChar = new lib.batteryChar();
	this.batteryChar.setTransform(42.2,-4.3);

	this.batteryValueTf = new cjs.Text("100", "23px 'Futura BdCn BT'", "#FF9900");
	this.batteryValueTf.name = "batteryValueTf";
	this.batteryValueTf.textAlign = "center";
	this.batteryValueTf.lineHeight = 25;
	this.batteryValueTf.lineWidth = 47;
	this.batteryValueTf.setTransform(79.3,-91);

	this.addChild(this.batteryValueTf,this.batteryChar,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.8,-91,95.2,91.9);


(lib.TimePannel = function() {
	this.initialize();

	// onCircle
	this.circleSecond = new lib.circleSecond2();
	this.circleSecond.setTransform(160.2,159.8);
	this.circleSecond.alpha = 0;

	// secondCircle
	this.circleMc = new lib.circleMc();
	this.circleMc.setTransform(285.8,284.7,1,1,0,0,0,125,125);

	// dayTf
	this.ampmTf = new cjs.Text("PM", "20px 'NanumGothic'", "#FFFFFF");
	this.ampmTf.name = "ampmTf";
	this.ampmTf.textAlign = "center";
	this.ampmTf.lineHeight = 22;
	this.ampmTf.lineWidth = 85;
	this.ampmTf.setTransform(71.8,102.2);

	this.dayTf = new cjs.Text("", "20px 'NanumGothic'", "#FFFFFF");
	this.dayTf.name = "dayTf";
	this.dayTf.textAlign = "center";
	this.dayTf.lineHeight = 22;
	this.dayTf.lineWidth = 120;
	this.dayTf.setTransform(218.6,102.2);

	// batteryValueTf
	this.batteryMc = new lib.batteryMc();
	this.batteryMc.setTransform(254.7,34,1.495,1.495,0,0,0,7.7,4);

	// connectionActiveMc
	this.connectionActiveMc = new lib.connetionActive();
	this.connectionActiveMc.setTransform(28.7,16.7,1,1,0,0,0,15.6,4.9);

	// timeTf_second
	this.timeTf_second = new cjs.Text("59", "40px 'Futura BdCn BT'", "#FFFFFF");
	this.timeTf_second.name = "timeTf_second";
	this.timeTf_second.textAlign = "center";
	this.timeTf_second.lineHeight = 42;
	this.timeTf_second.lineWidth = 81;
	this.timeTf_second.setTransform(377,342.2);

	// timeTf
	this.instance = new lib.심볼1();
	this.instance.setTransform(158.2,162.8);

	this.timeTf_min = new cjs.Text("", "70px 'NanumGothic'", "#FFFFFF");
	this.timeTf_min.name = "timeTf_min";
	this.timeTf_min.textAlign = "center";
	this.timeTf_min.lineHeight = 72;
	this.timeTf_min.lineWidth = 148;
	this.timeTf_min.setTransform(226.9,119.1);

	this.timeTf_hour = new cjs.Text("", "70px 'NanumGothic'", "#FFFFFF");
	this.timeTf_hour.name = "timeTf_hour";
	this.timeTf_hour.textAlign = "center";
	this.timeTf_hour.lineHeight = 72;
	this.timeTf_hour.lineWidth = 152;
	this.timeTf_hour.setTransform(83.6,119.1);

	this.addChild(this.timeTf_hour,this.timeTf_min,this.instance,this.timeTf_second,this.connectionActiveMc,this.batteryMc,this.dayTf,this.ampmTf,this.circleMc,this.circleSecond);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,-108.1,421.2,515.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;