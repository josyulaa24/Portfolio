(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AdvertisementBistro_HTML5 Canvas_atlas_1", frames: [[0,0,1920,1920]]},
		{name:"AdvertisementBistro_HTML5 Canvas_atlas_2", frames: [[0,0,1920,1363]]},
		{name:"AdvertisementBistro_HTML5 Canvas_atlas_3", frames: [[0,0,1344,1680]]},
		{name:"AdvertisementBistro_HTML5 Canvas_atlas_4", frames: [[0,815,625,625],[627,815,625,625],[0,0,813,813]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Background = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bistro = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Duck1 = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.GooseBackground = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pasta = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Samosa = function() {
	this.initialize(img.Samosa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4500,2975);


(lib.Taco = function() {
	this.initialize(ss["AdvertisementBistro_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bistro();
	this.instance.setTransform(-479.15,-514,1.5333,1.6448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.1,-514,958.3,1028);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bistro();
	this.instance.setTransform(-479.15,-514,1.5333,1.6448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.1,-514,958.3,1028);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GooseBackground();

	this.instance_1 = new lib.GooseBackground();
	this.instance_1.setTransform(1344,0);

	this.instance_2 = new lib.GooseBackground();
	this.instance_2.setTransform(1344,1680);

	this.instance_3 = new lib.GooseBackground();
	this.instance_3.setTransform(0,1680);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,2688,3360), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Background();
	this.instance.setTransform(0,0,0.3464,0.3464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,216.5,216.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Samosa();
	this.instance.setTransform(55.9,0,0.0726,0.0726,14.9849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,371.7,293.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Pasta();
	this.instance.setTransform(0,110.95,0.2233,0.2233,-14.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,525.1,525.1), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Taco();
	this.instance.setTransform(0,0,0.1657,0.1657);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,318.2,225.9), null);


(lib.Goose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Goose
	this.instance = new lib.Duck1();
	this.instance.setTransform(0,1303.05,1,1,-29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({rotation:12.2043,x:235.05,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1110.6,2007.2);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ORDER \nNOW", "13px 'Impact'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.parent = this;
	this.text.setTransform(1.95,-54.8,4.6992,3.9809);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00003C").s().p("A+TLkIAA3HMA8nAAAIAAXHg");
	this.shape.setTransform(1.95,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.3,-71.7,630,848);


// stage content:
(lib.AdvertisementBistro_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.instance = new lib.Button();
	this.instance.setTransform(353.2,801.7,0.9585,1);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({alpha:1},5).wait(20));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnnrEIIriUIGkYdIorCUg");
	var mask_graphics_64 = new cjs.Graphics().p("EgvdAt5MBYVgPGMAGmAmgMhYVAPGg");
	var mask_graphics_65 = new cjs.Graphics().p("EgvSArjMBYigN5MAGDAmmMhYiAN5g");
	var mask_graphics_66 = new cjs.Graphics().p("EgvHApZMBYugMrMAFhAmrMhYuAMrg");
	var mask_graphics_67 = new cjs.Graphics().p("Egu7AniMBY4gLcMAE/AmwMhY4ALcg");
	var mask_graphics_68 = new cjs.Graphics().p("EguvAmvMBZCgKOMAEdAm0MhZCAKOg");
	var mask_graphics_69 = new cjs.Graphics().p("EguiAl/MBZKgJAMAD7Am4MhZKAI/g");
	var mask_graphics_70 = new cjs.Graphics().p("Egt4AknMBZdgFUMACUAnAMhZdAFTg");
	var mask_graphics_71 = new cjs.Graphics().p("EgtJAjmMBZmgBnMAAtAnDMhZmABog");
	var mask_graphics_72 = new cjs.Graphics().p("EgtPBIsMAA6gnDMBZlACFMgA6AnDg");
	var mask_graphics_73 = new cjs.Graphics().p("EgtbBF6MAChgm/MBZbAFxMgChAm/g");
	var mask_graphics_74 = new cjs.Graphics().p("EgrrBH6MABXgnCMBZjADHMgBWAnCg");
	var mask_graphics_75 = new cjs.Graphics().p("Egp9BJ7MAANgnEMBZnAAcMgANAnEg");
	var mask_graphics_76 = new cjs.Graphics().p("EgptAjwMBZmgCOMAA+AnDMhZmACOg");
	var mask_graphics_77 = new cjs.Graphics().p("EgpvAkdMBZfgE5MACIAnAMhZeAE5g");
	var mask_graphics_78 = new cjs.Graphics().p("EgpvAlMMBZSgHkMADTAm7MhZTAHkg");
	var mask_graphics_79 = new cjs.Graphics().p("EgptAl8MBZCgKOMAEcAm0MhZBAKNg");
	var mask_graphics_80 = new cjs.Graphics().p("EgptAl8MBZCgKNMAEcAmzMhZBAKNg");
	var mask_graphics_131 = new cjs.Graphics().p("EgptAl8MBZCgKNMAEcAmzMhZBAKNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78.925,y:858.2}).wait(64).to({graphics:mask_graphics_64,x:-198.5511,y:540.1447}).wait(1).to({graphics:mask_graphics_65,x:-73.4947,y:525.6505}).wait(1).to({graphics:mask_graphics_66,x:39.2664,y:512.3878}).wait(1).to({graphics:mask_graphics_67,x:135.1971,y:500.9931}).wait(1).to({graphics:mask_graphics_68,x:178.6751,y:496.2603}).wait(1).to({graphics:mask_graphics_69,x:217.5003,y:491.8207}).wait(1).to({graphics:mask_graphics_70,x:252.1756,y:483.8355}).wait(1).to({graphics:mask_graphics_71,x:271.3992,y:477.7757}).wait(1).to({graphics:mask_graphics_72,x:287.0833,y:478.5159}).wait(1).to({graphics:mask_graphics_73,x:297.6899,y:484.3112}).wait(1).to({graphics:mask_graphics_74,x:302.3355,y:480.1411}).wait(1).to({graphics:mask_graphics_75,x:306.2518,y:475.9113}).wait(1).to({graphics:mask_graphics_76,x:312.6749,y:478.7407}).wait(1).to({graphics:mask_graphics_77,x:319.2218,y:482.9312}).wait(1).to({graphics:mask_graphics_78,x:325.3969,y:487.0594}).wait(1).to({graphics:mask_graphics_79,x:331.3333,y:491.1218}).wait(1).to({graphics:mask_graphics_80,x:331.3463,y:491.1442}).wait(51).to({graphics:mask_graphics_131,x:331.3463,y:491.1442}).wait(21));

	// Bistro
	this.instance_1 = new lib.Bistro();
	this.instance_1.setTransform(-115,149,1.5333,1.6448);

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(364.15,663);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(364.15,663);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},64).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance_3}]},6).to({state:[]},3).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({_off:true},6).wait(21));

	// Pasta
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(550.95,1405.2,1,1,14.9983,0,0,262.1,262.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(1).to({regX:262.5,regY:262.5,rotation:12.3892,x:551.35,y:1340.65},0).wait(1).to({rotation:9.7795,x:551.3,y:1275.9},0).wait(1).to({rotation:7.1698,x:551.35,y:1211.1},0).wait(1).to({rotation:4.56,y:1146.3},0).wait(1).to({rotation:1.9503,y:1081.6},0).wait(1).to({rotation:-0.6594,y:1016.85},0).wait(1).to({rotation:-3.2691,x:551.3,y:952},0).wait(1).to({rotation:-5.8788,x:551.35,y:887.2},0).wait(1).to({rotation:-8.4885,y:822.45},0).wait(1).to({regX:262,regY:262.6,rotation:-8.4861,x:551.05,y:822.4},0).wait(1).to({regX:262.5,regY:262.5,rotation:-9.5684,x:551.5,y:814.25},0).wait(1).to({rotation:-10.65,y:806.35},0).wait(1).to({rotation:-11.7316,x:551.45,y:798.4},0).wait(1).to({rotation:-12.8132,y:790.45},0).wait(1).to({rotation:-13.8948,y:782.45},0).wait(1).to({rotation:-14.9764,x:551.5,y:774.55},0).wait(1).to({rotation:-16.058,x:551.45,y:766.6},0).wait(1).to({rotation:-17.1396,y:758.7},0).wait(1).to({rotation:-18.2212,x:551.5,y:750.7},0).wait(1).to({rotation:-19.7947,x:549.9,y:750.75},0).wait(1).to({rotation:-21.3682,x:548.35,y:750.7},0).wait(1).to({rotation:-22.9417,x:546.75,y:750.75},0).wait(1).to({rotation:-24.5152,x:545.2,y:750.7},0).wait(1).to({rotation:-26.0887,x:543.65,y:750.65},0).wait(1).to({rotation:-27.6622,x:542.1,y:750.7},0).wait(1).to({rotation:-32.0863,y:805.3},0).wait(1).to({rotation:-36.5104,y:869.7},0).wait(1).to({rotation:-40.9345,x:542,y:945.55},0).wait(1).to({rotation:-45.3585,x:541.95,y:1038.6},0).wait(1).to({rotation:-49.7826,y:1157.6},0).wait(1).to({rotation:-54.2067,x:541.9,y:1305.15},0).wait(1).to({rotation:-58.6308,y:1487.5},0).wait(93).to({_off:true},1).wait(18));

	// Goose
	this.instance_5 = new lib.Goose();
	this.instance_5.setTransform(360.65,1589.25,0.9999,0.9999,9.6907,0,0,553.1,1473.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:555.3,regY:1003.6,scaleX:1,scaleY:1,rotation:12.7517,x:466.55,y:952},0).wait(1).to({rotation:15.8122,x:490.8,y:812.55},0).wait(1).to({rotation:18.8727,x:514.75,y:701.85},0).wait(1).to({rotation:21.9331,x:538.3,y:614.75},0).wait(1).to({rotation:24.9936,x:561.3,y:546.5},0).wait(1).to({rotation:28.054,x:583.75,y:492.95},0).wait(1).to({rotation:31.1145,x:605.45,y:450.55},0).wait(1).to({rotation:34.175,x:626.6,y:416.2},0).wait(1).to({rotation:37.2354,x:646.9,y:387.45},0).wait(1).to({rotation:40.2959,x:666.35,y:362.2},0).wait(1).to({rotation:43.3563,x:685,y:339.15},0).wait(1).to({rotation:46.4168,x:702.75,y:317.35},0).wait(1).to({regX:554.4,regY:1472.9,scaleX:0.9999,scaleY:0.9999,rotation:46.4172,x:360.7,y:640.05},0).wait(1).to({regX:555.3,regY:1003.6,scaleX:1,scaleY:1,rotation:46.9278,x:704.1,y:317.1},0).wait(1).to({rotation:47.4388,x:706.9,y:317},0).wait(1).to({rotation:47.9498,x:709.75,y:316.85},0).wait(1).to({rotation:48.4608,x:712.55},0).wait(1).to({rotation:48.9718,x:715.35,y:316.75},0).wait(1).to({rotation:49.4828,x:718.05,y:316.8},0).wait(1).to({rotation:49.9938,x:720.7,y:316.75},0).wait(1).to({rotation:50.5048,x:723.35,y:316.8},0).wait(1).to({rotation:51.0159,x:726,y:316.85},0).wait(1).to({rotation:51.5269,x:728.65,y:316.95},0).wait(1).to({rotation:52.0379,x:731.2,y:317.05},0).wait(1).to({rotation:52.5489,x:733.8,y:317.1},0).wait(1).to({rotation:53.0599,x:736.3,y:317.25},0).wait(1).to({rotation:53.5709,x:738.85,y:317.5},0).wait(1).to({rotation:54.0819,x:741.3,y:317.65},0).wait(1).to({rotation:54.5929,x:743.7,y:317.9},0).wait(1).to({rotation:55.1039,x:746.1,y:318.15},0).wait(2).to({regX:554,regY:1472.2,scaleX:0.9999,scaleY:0.9999,rotation:55.1032,x:360.7,y:585.1},0).wait(1).to({regX:555.3,regY:1003.6,rotation:46.8163,x:703.25,y:275.95},0).wait(1).to({rotation:39.5009,x:659.75,y:255.9},0).wait(1).to({rotation:33.1569,x:618.1,y:257.9},0).wait(1).to({rotation:27.7962,x:580.4,y:275.9},0).wait(1).to({rotation:23.4069,x:548.05,y:304.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.9891,x:522.1,y:340.2},0).wait(1).to({regX:552.6,regY:1470.7,scaleX:0.9999,scaleY:0.9999,rotation:18.9993,x:360.7,y:770.85},0).wait(1).to({regX:555.3,regY:1003.6,rotation:24.3279,x:555.55,y:331.4},0).wait(1).to({rotation:27.903,x:581.6,y:316.2},0).wait(1).to({rotation:33.9647,x:623.9,y:299},0).wait(1).to({regX:552.6,regY:1470.8,rotation:34,x:360.7,y:685},0).wait(109));

	// Taco
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(40.1,1390.9,1,1,0,0,0,159.1,112.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(1).to({rotation:2.9999,x:40.15,y:1304.3},0).wait(1).to({rotation:5.9998,y:1217.8},0).wait(1).to({rotation:8.9998,y:1131.2},0).wait(1).to({rotation:11.9997,x:40.1,y:1044.65},0).wait(1).to({rotation:14.9996,x:40.15,y:958.1},0).wait(1).to({rotation:17.9995,x:40.1,y:871.45},0).wait(1).to({rotation:20.9994,x:40.15,y:784.9},0).wait(1).to({rotation:23.9994,y:698.4},0).wait(1).to({rotation:26.9993,x:40.1,y:611.85},0).wait(1).to({rotation:29.9992,x:40.15,y:525.25},0).wait(1).to({regX:159,regY:113,x:40.1,y:525.2},0).wait(1).to({regX:159.1,regY:112.9,rotation:31.4991,x:40.25,y:516},0).wait(1).to({rotation:32.999,y:506.9},0).wait(1).to({rotation:34.4989,y:497.75},0).wait(1).to({rotation:35.9988,y:488.6},0).wait(1).to({rotation:37.4987,x:40.2,y:479.45},0).wait(1).to({rotation:38.9986,x:40.25,y:470.3},0).wait(1).to({rotation:40.4985,x:40.3,y:461.15},0).wait(1).to({rotation:41.9984,y:452.05},0).wait(1).to({rotation:43.4983,x:40.25,y:442.9},0).wait(1).to({rotation:44.9982,x:40.2,y:433.8},0).wait(1).to({rotation:46.4959,x:43,y:429.6},0).wait(1).to({rotation:47.9936,x:45.8,y:425.4},0).wait(1).to({rotation:49.4912,x:48.6,y:421.25},0).wait(1).to({rotation:50.9889,x:51.35,y:417},0).wait(1).to({rotation:52.4866,x:54.2,y:412.85},0).wait(1).to({rotation:54.0278,x:59.8,y:419.65},0).wait(1).to({rotation:55.569,x:65.35,y:426.5},0).wait(1).to({rotation:57.1102,x:70.95,y:433.25},0).wait(1).to({rotation:58.6514,x:76.5,y:440.05},0).wait(1).to({rotation:60.1926,x:82.1,y:446.85},0).wait(1).to({rotation:66.8112,x:82.05,y:498.2},0).wait(1).to({rotation:73.4297,y:559.05},0).wait(1).to({rotation:80.0483,y:630.05},0).wait(1).to({rotation:86.6668,y:714.45},0).wait(1).to({rotation:93.2853,x:82.1,y:818.95},0).wait(1).to({rotation:99.9039,x:82.05,y:959.05},0).wait(1).to({rotation:106.5225,x:82,y:1154.35},0).wait(1).to({rotation:113.141,x:82.05,y:1456.15},0).wait(91).to({_off:true},1).wait(18));

	// Samosa
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(116.4,1325.05,1,1,0,0,0,185.8,146.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).wait(1).to({regX:185.9,regY:146.6,rotation:1.4999,x:116.55,y:1247.8},0).wait(1).to({rotation:2.9998,y:1192.9},0).wait(1).to({rotation:4.4997,y:1153.6},0).wait(1).to({rotation:5.9996,y:1124.75},0).wait(1).to({rotation:7.4995,x:116.5,y:1102.6},0).wait(1).to({rotation:8.9993,y:1084.3},0).wait(1).to({rotation:10.4992,x:116.55,y:1067.95},0).wait(1).to({rotation:11.9991,x:116.5,y:1052.5},0).wait(1).to({rotation:13.499,x:116.55,y:1037.3},0).wait(1).to({rotation:14.9989,x:116.5,y:1022.1},0).wait(1).to({regX:186.6,regY:145.7,rotation:14.9983,x:116.55,y:1022.3},0).wait(1).to({regX:185.9,regY:146.6,rotation:16.0674,x:115.65,y:1018.4},0).wait(1).to({rotation:17.1359,x:115.6,y:1013.9},0).wait(1).to({rotation:18.2044,y:1009.4},0).wait(1).to({rotation:19.2729,y:1004.95},0).wait(1).to({rotation:20.3414,y:1000.4},0).wait(1).to({rotation:21.4099,x:115.55,y:995.95},0).wait(1).to({rotation:22.4784,y:991.4},0).wait(1).to({rotation:24.6337,x:115.5,y:994.2},0).wait(1).to({rotation:26.789,y:997},0).wait(1).to({rotation:28.9443,x:115.45,y:999.8},0).wait(1).to({rotation:37.9442,x:115.35,y:1042.25},0).wait(1).to({rotation:46.944,y:1097.65},0).wait(1).to({rotation:55.9439,y:1172.65},0).wait(1).to({rotation:64.9437,y:1285.8},0).wait(1).to({rotation:73.9436,y:1454.65},0).wait(96).to({_off:true},1).wait(18));

	// BistroCircle
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(352.2,661.2,1,1,0,0,0,108.2,108.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).wait(1).to({scaleX:1.5972,scaleY:1.5972,x:352.1,y:661.1},0).wait(1).to({scaleX:2.1945,scaleY:2.1945},0).wait(1).to({scaleX:2.7917,scaleY:2.7917,x:352.05,y:661.05},0).wait(1).to({scaleX:3.3889,scaleY:3.3889,x:352.1},0).wait(1).to({scaleX:3.9862,scaleY:3.9862,x:352.05,y:661},0).wait(1).to({scaleX:3.879,scaleY:3.879,x:352.1,y:661.05},0).wait(1).to({scaleX:3.7718,scaleY:3.7718},0).wait(1).to({scaleX:3.7934,scaleY:3.7934},0).wait(1).to({scaleX:3.815,scaleY:3.815},0).wait(1).to({scaleX:3.8366,scaleY:3.8366,x:352.05,y:661},0).wait(1).to({scaleX:3.8582,scaleY:3.8582},0).wait(1).to({scaleX:3.8798,scaleY:3.8798,x:352.1,y:661.05},0).wait(5).to({regY:108.5,x:352.45,y:661.25},0).wait(96));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("EgEyA5OQn3n3AArGQAArHH3n2QH1n3LHAAQLGAAH3H3QH2H2AALHQAALGn2H3Qn3H2rGAAQrHAAn1n2g");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgiAA+PQu8u9AA1IQAA1JO8u8QO9u8VIAAQVIAAO9O8QO8O8AAVJQAAVIu8O9Qu9O81IAAQ1IAAu9u8g");
	var mask_1_graphics_43 = new cjs.Graphics().p("Eg1MBDQQ2D2DAA/KQAA/KWD2DQWC2DfKABQfLgBWCWDQWDWDAAfKQAAfK2DWDQ2CWC/LABQ/KgB2C2Cg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EhGUBIRUgdJgdJAAAgpNUAAAgpLAdJgdJUAdIgdJApMAAAUApNAAAAdIAdJUAdJAdJAAAApLUAAAApNgdJAdJUgdIAdJgpNAAAUgpMAAAgdIgdJg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EhXdBXeUgkPgkPAAAgzPUAAAgzOAkPgkPUAkPgkOAzOAAAUAzPAAAAkPAkOUAkOAkPAABAzOUgABAzPgkOAkPUgkPAkOgzPAABUgzOgABgkPgkOg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EhhcBhdUgoXgoYAAAg5FUAAAg5EAoXgoYUAoYgoXA5EAAAUA5FAAAAoYAoXUAoXAoYAAAA5EUAAAA5FgoXAoYUgoYAoXg5FAAAUg5EAAAgoYgoXg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EhhcBhdUgoXgoYAAAg5FUAAAg5EAoXgoYUAoYgoXA5EAAAUA5FAAAAoYAoXUAoXAoYAAAA5EUAAAA5FgoXAoYUgoYAoXg5FAAAUg5EAAAgoYgoXg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EhhcBhdUgoXgoYAAAg5FUAAAg5EAoXgoYUAoYgoXA5EAAAUA5FAAAAoYAoXUAoXAoYAAAA5EUAAAA5FgoXAoYUgoYAoXg5FAAAUg5EAAAgoYgoXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:262.125,y:416.425}).wait(1).to({graphics:mask_1_graphics_42,x:339.825,y:493.9375}).wait(1).to({graphics:mask_1_graphics_43,x:353.45,y:571.45}).wait(1).to({graphics:mask_1_graphics_44,x:353.825,y:648.9625}).wait(1).to({graphics:mask_1_graphics_45,x:354.2,y:661.3}).wait(1).to({graphics:mask_1_graphics_46,x:352.7067,y:661.3452}).wait(79).to({graphics:mask_1_graphics_125,x:352.7067,y:661.3452}).wait(26).to({graphics:mask_1_graphics_151,x:352.7067,y:661.3452}).wait(1));

	// GooseBg
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(1081,-136,1,1,0,0,0,1344,1680);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).wait(1).to({x:1075.3,y:-129.95},0).wait(1).to({x:1069.55,y:-123.95},0).wait(1).to({x:1063.8,y:-117.95},0).wait(1).to({x:1058.1,y:-111.95},0).wait(1).to({x:1052.35,y:-105.95},0).wait(1).to({x:1046.6,y:-99.95},0).wait(1).to({x:1040.85,y:-93.95},0).wait(1).to({x:1035.15,y:-87.95},0).wait(1).to({x:1029.4,y:-81.95},0).wait(1).to({x:1023.65,y:-75.9},0).wait(1).to({x:1017.9,y:-69.9},0).wait(1).to({x:1012.2,y:-63.9},0).wait(1).to({x:1006.45,y:-57.9},0).wait(1).to({x:1000.7,y:-51.9},0).wait(1).to({x:994.95,y:-45.9},0).wait(1).to({x:989.25,y:-39.9},0).wait(1).to({x:983.5,y:-33.9},0).wait(1).to({x:977.75,y:-27.9},0).wait(1).to({x:972.05,y:-21.9},0).wait(1).to({x:966.3,y:-15.85},0).wait(1).to({x:960.55,y:-9.85},0).wait(1).to({x:954.8,y:-3.85},0).wait(1).to({x:949.1,y:2.15},0).wait(1).to({x:943.35,y:8.15},0).wait(1).to({x:937.6,y:14.15},0).wait(1).to({x:931.85,y:20.15},0).wait(1).to({x:926.15,y:26.15},0).wait(1).to({x:920.4,y:32.15},0).wait(1).to({x:914.65,y:38.15},0).wait(1).to({x:908.9,y:44.2},0).wait(1).to({x:903.2,y:50.2},0).wait(1).to({x:897.45,y:56.2},0).wait(1).to({x:891.7,y:62.2},0).wait(1).to({x:886,y:68.2},0).wait(1).to({x:880.25,y:74.2},0).wait(1).to({x:874.5,y:80.2},0).wait(1).to({x:868.75,y:86.2},0).wait(1).to({x:863.05,y:92.2},0).wait(1).to({x:857.3,y:98.2},0).wait(1).to({x:851.55,y:104.25},0).wait(1).to({x:845.8,y:110.25},0).wait(1).to({x:840.1,y:116.25},0).wait(1).to({x:834.35,y:122.25},0).wait(1).to({x:828.6,y:128.25},0).wait(1).to({x:822.85,y:134.25},0).wait(1).to({x:817.15,y:140.25},0).wait(1).to({x:811.4,y:146.25},0).wait(1).to({x:805.65,y:152.25},0).wait(1).to({x:799.95,y:158.25},0).wait(1).to({x:794.2,y:164.3},0).wait(1).to({x:788.45,y:170.3},0).wait(1).to({x:782.7,y:176.3},0).wait(1).to({x:777,y:182.3},0).wait(1).to({x:771.25,y:188.3},0).wait(1).to({x:765.5,y:194.3},0).wait(1).to({x:759.75,y:200.3},0).wait(1).to({x:754.05,y:206.3},0).wait(1).to({x:748.3,y:212.3},0).wait(1).to({x:742.55,y:218.3},0).wait(1).to({x:736.8,y:224.35},0).wait(1).to({x:731.1,y:230.35},0).wait(1).to({x:725.35,y:236.35},0).wait(1).to({x:719.6,y:242.35},0).wait(1).to({x:713.9,y:248.35},0).wait(1).to({x:708.15,y:254.35},0).wait(1).to({x:702.4,y:260.35},0).wait(1).to({x:696.65,y:266.35},0).wait(1).to({x:690.95,y:272.35},0).wait(1).to({x:685.2,y:278.35},0).wait(1).to({x:679.45,y:284.4},0).wait(1).to({x:673.7,y:290.4},0).wait(1).to({x:668,y:296.4},0).wait(1).to({x:662.25,y:302.4},0).wait(1).to({x:656.5,y:308.4},0).wait(1).to({x:650.75,y:314.4},0).wait(1).to({x:645.05,y:320.4},0).wait(1).to({x:639.3,y:326.4},0).wait(1).to({x:633.55,y:332.4},0).wait(1).to({x:627.85,y:338.4},0).wait(1).to({x:622.1,y:344.45},0).wait(1).to({x:616.35,y:350.45},0).wait(1).to({x:610.6,y:356.45},0).wait(1).to({x:604.9,y:362.45},0).wait(1).to({x:599.15,y:368.45},0).wait(1).to({x:593.4,y:374.45},0).wait(1).to({x:587.65,y:380.45},0).wait(1).to({x:581.95,y:386.45},0).wait(1).to({x:576.2,y:392.45},0).wait(1).to({x:570.45,y:398.45},0).wait(1).to({x:564.7,y:404.5},0).wait(1).to({x:559,y:410.5},0).wait(1).to({x:553.25,y:416.5},0).wait(1).to({x:547.5,y:422.5},0).wait(1).to({x:541.8,y:428.5},0).wait(1).to({x:536.05,y:434.5},0).wait(1).to({x:530.3,y:440.5},0).wait(1).to({x:524.55,y:446.5},0).wait(1).to({x:518.85,y:452.5},0).wait(1).to({x:513.1,y:458.5},0).wait(1).to({x:507.35,y:464.55},0).wait(1).to({x:501.6,y:470.55},0).wait(1).to({x:495.9,y:476.55},0).wait(1).to({x:490.15,y:482.55},0).wait(1).to({x:484.4,y:488.55},0).wait(1).to({x:478.65,y:494.55},0).wait(1).to({x:472.95,y:500.55},0).wait(1).to({x:467.2,y:506.55},0).wait(1).to({x:461.45,y:512.55},0).wait(1).to({x:455.7,y:518.55},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-169.4,419.3,1404.2,1789.3999999999999);
// library properties:
lib.properties = {
	id: '0B442EDE81F4AF40A54BC85984F6227F',
	width: 720,
	height: 1280,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Samosa.png", id:"Samosa"},
		{src:"images/AdvertisementBistro_HTML5 Canvas_atlas_1.png", id:"AdvertisementBistro_HTML5 Canvas_atlas_1"},
		{src:"images/AdvertisementBistro_HTML5 Canvas_atlas_2.png", id:"AdvertisementBistro_HTML5 Canvas_atlas_2"},
		{src:"images/AdvertisementBistro_HTML5 Canvas_atlas_3.png", id:"AdvertisementBistro_HTML5 Canvas_atlas_3"},
		{src:"images/AdvertisementBistro_HTML5 Canvas_atlas_4.png", id:"AdvertisementBistro_HTML5 Canvas_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B442EDE81F4AF40A54BC85984F6227F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;