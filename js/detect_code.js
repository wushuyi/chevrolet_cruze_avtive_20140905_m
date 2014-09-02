/**
 * Created with JetBrains WebStorm.
 * User: sxbian
 * Date: 13-6-16
 * Time: 上午4:01
 * To change this template use File | Settings | File Templates.
 * 检测代码专用
 */


/***************秒针***********************/


(function() {
    window._CiQ10027 = window._CiQ10027 || [];
    window._CiQ10027.push(['_cookieUseRootDomain', true]);
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.async = true;
    c.charset = 'utf-8';
    c.src = '//collect.cn.miaozhen.com/ca/10027';
    var h = document.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(c, h);
})();


/* 老秒针方法 */
function MzPv( LabelValue ){
		
		window._CiQ10027 = window._CiQ10027 || [];
		window._CiQ10027.push(['_trackEvent', {
		 type: 2,
		 labels:[
		  {'页面名称':LabelValue}
		  ],
		 values: [
		  {'数量':1}
		  ]
		}]);
		console.log('秒针PV:'+LabelValue)
}


function MzEvent ( LabelValue ){
	window._CiQ10027 = window._CiQ10027 || [];
	window._CiQ10027.push(['_trackEvent', {
	 type: 3,
	 labels:[
	  {'按钮名称':LabelValue}
	  ],
	 values: [
	  {'数量':1}
	  ]
	}]);
	window.CClickiV3[10027] && window.CClickiV3[10027]._flushObserver && window.CClickiV3[10027]._flushObserver(function(){});
	console.log('秒针EVENT:'+LabelValue)
}


/* 新秒针完善 by 巫书轶 */
var mz = {
	trycar: function(name, phone, leadsid){
		window._CiQ10027 = window._CiQ10027 || [];
		window._CiQ10027.push(['_trackEvent', {
		type: 1,
		labels:[
		{'姓名': name}
		,{'手机': phone}
		,{'LeadsID': leadsid}
		],
		values: [
		{'数量':1}
		]
		}]);
		window.CClickiV3 && window.CClickiV3[10027] && window.CClickiV3[10027]._flushObserver(function(){});
	}
	,pv: function(pvname){
		window._CiQ10027 = window._CiQ10027 || [];
		window._CiQ10027.push(['_trackEvent', {
		type: 2,
		labels:[
		{'页面名称': pvname}
		],
		values: [
		{'数量':1}
		]
		}]);
		window.CClickiV3 && window.CClickiV3[10027] && window.CClickiV3[10027]._flushObserver(function(){});
		if(mz.isDebug){
			alert('mz pv' + pvname + 'ok!');
		}
	}
	,event: function(eventname){
		window._CiQ10027 = window._CiQ10027 || [];
		window._CiQ10027.push(['_trackEvent', {
		type: 3,
		labels:[
		{'按钮名称': eventname}
		],
		values: [
		{'数量':1}
		]
		}]);
		window.CClickiV3 && window.CClickiV3[10027] && window.CClickiV3[10027]._flushObserver(function(){});
		if(mz.isDebug){
			alert('mz event' + eventname + 'ok!');
		}
	}
	,clickpv: function(element ,pvname){
		$(element).click(function(){
			mz.pv(pvname);
		});
	}
	,clickevent: function(element, eventname){
		$(element).click(function(){
			mz.event(eventname);
		});
	}
	,clickpvlive: function(element ,pvname){
		$(element).live('click', function(){
			mz.pv(pvname);
		});
	}
	,clickeventlive: function(element ,eventname){
		$(element).live('click', function(){
			mz.event(eventname);
		});
	}
    ,switchKV: function(element, pvnames) {

        $(element).live('_MZ_KVSwitch', function(event) {
            event.preventDefault();
            /* Act on the event */
            var _shownItem = (-parseInt($(element).css('left')) * $(element).children().length / $(element).width()) + 1;
            if ( _shownItem >= pvnames.length) {
                _shownItem = 0;
            };
            mz.pv(pvnames[_shownItem]);
            console.log(pvnames[_shownItem]);
        });

        $(element).live('_MZ_KVSwitchInit', function(event) {
            event.preventDefault();
            /* Act on the event */
            var _shownItem = -parseInt($(element).css('left')) * $(element).children().length / $(element).width();
            mz.pv(pvnames[_shownItem]);
            console.log(pvnames[_shownItem]);
        });
    }
	,pgname: '雪佛兰-首页-'
	,isDebug: false
};

var wangfan = window["wangfan"] || {};

/////////////////////////////////////////////////////////////////////////////////////////
// DoubleClick Tracking Code [ver.20130903]
// Created at 2013-09-03 18:17:39
// DC Code Template v1.0
// Total Tracking: 23
// EXAMPLE CODE: 1) wangfan.dc0903("名称"); //立即执行
//               2) wangfan.dc0903("名称", .1);//延迟 0.1 秒执行
/////////////////////////////////////////////////////////////////////////////////////////
wangfan.dc0903 = function(value, delay) {
    var isDebug	= true;
    setTimeout(function(){
        switch(value){
           
            default :
                console.warn("没有找到名称[" + value + "]");
        }
    }, (isNaN(parseFloat(delay)) && isFinite(delay)) ? Math.abs(parseInt(delay*1000)) : 0);
    /////////////$body_append(ifrVal)
    function $body_append(ifrVal){
        var iframe = document.createElement("iframe");
        iframe.src = ifrVal+Math.random()+"?";
        iframe.width = 1;iframe.height = 1;
        iframe.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(iframe);
    }//END FUNCTION $body_append()
}//END FUNCTION wangfan.dc0903()
//////////////////////END FUNCTION wangfan.dc0903////////////////////////////////


var wangfan = window["wangfan"] || {};
wangfan.detect = {};
wangfan.detect.cnNameMap = {malibu:"迈锐宝",aveo:"爱唯欧","cruze":"科鲁兹","cruze-nb":"科鲁兹",captiva:"科帕奇",camaro:"科迈罗",epica:"景程","sail":"赛欧","sail-nb":"赛欧",volt:"沃蓝达",trax:"创酷"}
//pv: /try.html, title: 试驾
wangfan.detect.trackPV=function(pv, title){ //PV
   _gaq.push(['_trackPageview', pv]);
}
wangfan.detect.trackEvent=function(catalog, value){////pv
    _gaq.push(['_trackEvent', catalog,'click',value]);
}
wangfan.detect.admTrackEvent = function(catalog, action, value){
}
wangfan.detect.onCarHomeSceneChange=function(index){//各车型首页,滑动场景切换
    if(window.location.href.indexOf('car-malibu.html')!=-1){
        
    }else{
        
        this.trackPV(__gaRoot + '/'+__gaCarTypeFull__+"/home/page"+index, "车型首页第"+index+"屏");
    }

}
wangfan.detect.onClickCarList=function(car){//在http://m.chevrolet.com.cn/car.html中点击车型
    _gaq.push(['_trackEvent', "carList",'click',car]);
    wangfan.dc0903("全系产品-"+wangfan.detect.cnNameMap[car]);
}
wangfan.detect.onClickTestdriveSubmit = function(car){//点击提交申请试驾按键
    //_gaq.push(['_trackEvent', "testdrive",'click','submit']);
    this.trackEvent("testdrive","申请试驾");
    wangfan.dc0903("申请试驾");
}
wangfan.detect.onClickCarLoadApply = function(){//在车贷套餐上点击立即申请
     this.trackEvent( "车贷套餐", '立即申请');
}
wangfan.detect.onClickCarLoadSubmit = function(){//在车贷套餐上点击提交,/tool/cale-apply.html
     this.trackEvent( "车贷-网上申请", '提交');
}

wangfan.detect.onTouchChangeCarKv = function(dir, kvId){//各车型首页KV切换
    _gaq.push(['_trackEvent', __gaCarType__ + "Home", dir, 'bottom_' + kvId]);
}
wangfan.detect.onClickCarKv = function(idx){//各车型首页KV点击
     _gaq.push(['_trackEvent', __gaCarType__ + "Home", 'click', 'bottom_' + idx]);
}

wangfan.detect.onMediaNewsHash = function(hash, isClick){//media.js中,当hash变化时
    var arr = hash.split("-");
    if(arr.length==2 || arr.length==3){
        __gaCarType__ = arr[0];
        __gaCarType2__ = "";
        _gaq.push(['_trackPageview', __gaRoot +'/'+__gaCarType__+ '/'+arr[1]+ (arr.length==3 ? "/"+arr[2] : "")]);
        if(isClick) _gaq.push(['_trackEvent', __gaCarType__ + "MediaNews", 'click', 'tag_' + arr[1]]);
    }
}
wangfan.detect.onServiceTabChange = function(value){//service
     _gaq.push(['_trackEvent',  "servicePage", 'click', value]);
}
wangfan.detect.onClickColorHNBtn = function(value){
    _gaq.push(['_trackEvent', __gaCarType__ + "Color", 'click',  value+"Btn"]);
    _gaq.push(['_trackPageview', __gaRoot +'/'+__gaCarType__+ "-"+value+"/color"]);
}
wangfan.detect.onClickCarHomPic =function(ele){
    var boxId = ele.parents('.cmnBox').attr("id");
	var picName = $.trim(ele.attr("class").replace("aLightPic", ""));
	if(boxId==null){
		
	}else{
		_gaq.push(['_trackEvent', __gaCarType__+"Home"+__gaCarType2__.toUpperCase(),'click',boxId+'_'+picName]);
	}
}
wangfan.detect.onCruzeNbBtn =function(e){//Cruze车型首页,点击三厢
    _gaq.push(['_trackEvent', __gaCarType__ + "Home", 'click',  "三厢"]);
    this._delayClickLink(e);
}
wangfan.detect.onCruzeHbBtn =function(e){//Cruze车型首页,点击两厢
    _gaq.push(['_trackEvent', __gaCarType__ + "Home", 'click',  "掀背"]);
    this._delayClickLink(e);
}
wangfan.detect.onSailNbBtn =function(e){//Cruze车型首页,点击三厢
    _gaq.push(['_trackEvent', __gaCarType__ + "Home", 'click',  "三厢"]);
    this._delayClickLink(e);
}
wangfan.detect.onSailHbBtn =function(e){//Cruze车型首页,点击两厢
    _gaq.push(['_trackEvent', __gaCarType__ + "Home", 'click',  "两厢"]);
    this._delayClickLink(e);
}
wangfan.detect.onClickVideoPlay =function(name){//Cruze车型首页,点击两厢
    _gaq.push(['_trackEvent', __gaCarType__ + "Video", 'play',  name]);
    
}
wangfan.detect._delayClickLink = function(e){
    e.preventDefault();
    //console.log(e.target.href, e.currentTarget,e);
    setTimeout(function () {//延迟0.1s后跳转
        window.location = e.currentTarget.href;
    }, 200);
}
wangfan.detect.onClickSendToMobile = function(){//在try_success.html页面,点击发送到手机
      this.trackEvent("TestDrivePage",  "发送到手机")
}

wangfan.detect.onClickNavigationNow = function(){//在try_success.html页面,点击立即导航
      this.trackEvent("TestDrivePage",  "立即导航")
}

wangfan.detect.onClickBackInTestDriveSuccess = function(){//在try_success.html页面,点击立即导航
      this.trackEvent("TestDrivePage",  "返回")
}

wangfan.detect.onTestdrvieCarChange = function(ele){//在试驾页面,选择省份
      this.trackEvent("TestDrivePage",  "车型选择")
}

wangfan.detect.onTestdrvieBuyChange = function(ele){//在试驾页面,选择省份
      this.trackEvent("TestDrivePage",  "意向购车时间选择")
}

wangfan.detect.onTestdrvieProvinceChange = function(ele){//在试驾页面,选择省份
      this.trackEvent("TestDrivePage",  "省份选择")
}

wangfan.detect.onTestdrvieDealerChange = function(ele){//在试驾页面,选择省份
      this.trackEvent("TestDrivePage",  "经销商选择")
}

wangfan.detect.getCarTypeByUrl = function(pResultName, pHash){
    var t2 = "";
    var t1 = "";
    var t3 = "";
    if(pHash=="nb" || pHash=="hb"){
        t2 = pHash;
    }
    var cArrType = pResultName.split("-");
    if(cArrType.length>=2){
        if(cArrType[1]=="nb" || cArrType[1]=="hb"){
           t1 = cArrType[0];
           t2 = cArrType[1];
        }else{
            t1 = cArrType[0];
        }
    }else{
        t1 = pResultName;
    }
    return [t1, t2, t2=="" ? t1 : t1+"-"+t2];
}
wangfan.detect.execReg = function(regTemp, value){
    var reg = new RegExp(regTemp.replace("%car%", "(malibu|aveo|cruze|cruze-hb|cruze-nb|captiva|camaro|epica|sail|sail-hb|sail-nb|volt|trax)"));
    return reg.exec(value);
}


/////////////////admaster code
var _smq = _smq || [];
_smq.push(['_setAccount', '296cb86', new Date()]);
//_smq.push(['pageview']);

/*
(function() {
var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;
sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdnmaster.com/sitemaster/sm.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);
})();
*/


/***GA代码公共方法**/
//调用方法

var _gaq = _gaq || [];
_gaq.push(['_setAccount', "UA-30403543-1"]);
_gaq.push(['_setDomainName', (function(){var a = location.host.split(".");a.shift();return a.join(".");})()]); 
//_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'http://www.chevrolet.com.cn/brandsite/js/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();



var __gaCarType__;//ga数据使用的车型名称
var __gaCarType2__;//两厢与三厢区别, hb, nb
var __gaCarTypeFull__;//cruze-hb
var __gaRoot = "";


var ReturnCarName = window.ReturnCarName || (function(){
	var carType = (function(){
		var carArr = [
			["/car.html", "全系车型"],
			["/activity.html", "市场活动"],
			["/news.html", "新闻品牌"],
			["/dealer.html", "查找经销商"],
			["/tool/index.html", "购车工具"],
			["/service.html", "雪佛兰金领结服务"],
			["/red_chalk/index.html", "雪佛兰红粉笔计划"],
			["/century/index.html", "世纪品牌"],
			["malibu","迈锐宝"],
			["aveo","爱唯欧"],
			["cruze","科鲁兹"],
			["captiva","科帕奇"],
			["camaro","科迈罗"],
			["epica","景程"],
			["sail","赛欧"],
			["volt","沃蓝达"],
			["trax","创酷"]
		];
		for( var i = 0 ; i < carArr.length ; i ++){
			if(location.href.indexOf(carArr[i][0]) > -1){
				return carArr[i][1];
				break;	
			}
		};
	})();
	if(carType){
		if(carType == "赛欧"){
			carType = location.href.indexOf('hb') > -1 ? '赛欧两厢' : '赛欧三厢';
		}
		return carType;
	}else{
		return '通用页面';
	}
})();


$(function(){
	
	/////////////////////////秒针////////////////////////////

	if(location.href.indexOf('try') > 0) {
		mz.pv('手机端-'+ReturnCarName+'官网-预约试驾');
	} else if (location.href.indexOf('feature') > 0) {
		mz.pv('手机端-'+ReturnCarName+'官网-配置价格');
	} else if (location.href.indexOf('color') > 0) {
		mz.pv('手机端-'+ReturnCarName+'官网-车色');
	} else if (location.href.indexOf('car-trax_in_360.html') > -1) {
		mz.pv('手机端-'+ReturnCarName+'官网-360-内饰');
	} else if (location.href.indexOf('car-trax_360.html') > -1) {
		mz.pv('手机端-'+ReturnCarName+'官网-360-外观');
	} else if (location.href.indexOf('car-activity') > 0) {
		mz.pv('手机端-'+ReturnCarName+'官网-活动');
	} else if (location.href.indexOf('media-news') > 0) {
		mz.pv('手机端-'+ReturnCarName+'官网-新闻');
	} else if(ReturnCarName == '通用页面'){
		mz.pv('手机端-'+ReturnCarName+'-首页');
	} else if(ReturnCarName == '全系车型'){
		mz.pv('手机端-全系车型-首页');
	} else if(ReturnCarName == '市场活动'){
		mz.pv('手机端-市场活动-首页');
	} else if(ReturnCarName == '新闻品牌'){
		mz.pv('手机端-新闻品牌-首页');
	} else if(ReturnCarName == '查找经销商'){
		mz.pv('手机端-查找经销商-首页');
	} else if(ReturnCarName == '购车工具'){
		mz.pv('手机端-购车工具-首页');
	} else if(ReturnCarName == '雪佛兰金领结服务'){
		mz.pv('手机端-雪佛兰金领结服务-首页');
	} else if(ReturnCarName == '雪佛兰红粉笔计划'){
		mz.pv('手机端-雪佛兰红粉笔计划-首页');
	} else if(ReturnCarName == '世纪品牌'){
		mz.pv('手机端-世纪品牌-首页');
	}else {
		mz.pv('手机端-'+ReturnCarName+'官网-首页');
	}
	
	
	
	/////////////////////////秒针////////////////////////////
    var result;
    
    var _pName = window.location.pathname;
    if(__gaRoot.length>0){
        _pName  =   _pName.substr(__gaRoot.length);
    }
    var _pHash = window.location.hash.replace("#","");
    var _trackPvUrl;
    if(_pName=="/index.html" || _pName=="/"){
        if(_pHash == "car"){
            _trackPvUrl = __gaRoot + '/index/car-list';
            _gaq.push(['_trackPageview', _trackPvUrl]);
        }
        else if(_pHash == "homepage"){
            _trackPvUrl = __gaRoot + '/index.html';
            _gaq.push(['_trackPageview', _trackPvUrl]);
        }
        else if(_pHash == "try"){
            _trackPvUrl = __gaRoot + '/index/test-drive';
            _gaq.push(['_trackPageview', _trackPvUrl]);
        }else{
            _trackPvUrl = __gaRoot + '/index.html';
            _gaq.push(['_trackPageview', _trackPvUrl]);
        }
    }
    else if(_pName=="/car.html"){
        _trackPvUrl = __gaRoot + '/car-list.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
        
    }
    else if(_pName=="/try.html"){
        _trackPvUrl = __gaRoot + '/test-drive.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    /*else if(_pName=="/try-success.html"){
        _trackPvUrl = __gaRoot + '/test-drive-success.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
        
        //console.log(storageFn.get("dealer_recordId")+storageFn.get("dealer_username")+storageFn.get("user_mobile")+'');
    }*/
    else if(result=wangfan.detect.execReg("car-%car%\.html",_pName)){
        var arrType = wangfan.detect.getCarTypeByUrl(result[1], _pHash);
        __gaCarType__ = arrType[0];
        __gaCarType2__ = arrType[1];
        __gaCarTypeFull__ = arrType[2];
        _trackPvUrl = __gaRoot + '/'+arrType[2]+'/home';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/feature.html" && (result=wangfan.detect.execReg("car-%car%$",_pHash))){
        var arrType = wangfan.detect.getCarTypeByUrl(result[1], _pHash);
        //console.log(result[1], "arrType", arrType );
        __gaCarType__ = arrType[0];
        __gaCarType2__ = arrType[1];
        _trackPvUrl = __gaRoot + '/'+arrType[2]+'/feature';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(result=wangfan.detect.execReg("car-%car%-color\.html",_pName)){
       var arrType = wangfan.detect.getCarTypeByUrl(result[1], _pHash);
       __gaCarType__ = arrType[0];
       __gaCarType2__ = arrType[1];
        _trackPvUrl = __gaRoot + '/'+arrType[2]+'/color';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/car-activity.html" && (result=wangfan.detect.execReg("%car%",_pHash))){
         var arrType = wangfan.detect.getCarTypeByUrl(_pHash, null);
        __gaCarType__ = arrType[0];
        __gaCarType2__ = arrType[1];
        _trackPvUrl = __gaRoot + '/'+arrType[2]+'/activity';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }    
    else if(_pName=="/media-news.html" ){
       //empty, tracking code in wangfan.detect.onMediaNewsHash()
    }
    else if(_pName=="/activity.html"){
        _trackPvUrl = __gaRoot + + '/activity.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/news.html"){
        _trackPvUrl = __gaRoot + + '/news.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/dealer.html"){
        _trackPvUrl = __gaRoot + + '/dealer.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/search.html"){
        _trackPvUrl = __gaRoot + + '/search.html';
        _gaq.push(['_trackPageview', _trackPvUrl+window.location.search]);
    }
    else if(_pName=="/search-info.html"){
         _trackPvUrl = __gaRoot + + '/search-info.html';
        _gaq.push(['_trackPageview', _trackPvUrl+window.location.search]);
    }
    else if(_pName=="/red_chalk/index.html" || _pName=="/red_chalk/"){
        _trackPvUrl = __gaRoot + + '/red_chalk/index.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/red_chalk/story.html"){
        _trackPvUrl = __gaRoot + + '/red_chalk/story.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/red_chalk/photo.html"){
        _trackPvUrl = __gaRoot + + '/red_chalk/photo.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/red_chalk/video.html"){
        _trackPvUrl = __gaRoot + + '/red_chalk/video.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/red_chalk/about.html"){
        _trackPvUrl = __gaRoot + + '/red_chalk/about.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/index.html" || _pName=="/tool/"){
        _trackPvUrl = __gaRoot + + '/tool/index.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-about.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-about.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-guide.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-guide.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-product.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-product.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-package.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-package.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-calculate.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-calculate.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-calculate-result.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-calculate-result.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-apply.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-apply.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/cale-apply-success.html"){
        _trackPvUrl = __gaRoot + + '/tool/cale-apply-success.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else if(_pName=="/tool/auto-insurance.html"){
        _trackPvUrl = __gaRoot + + '/tool/auto-insurance.html';
        _gaq.push(['_trackPageview', _trackPvUrl]);
    }
    else{
        _gaq.push(['_trackPageview']);
        console.log("defaut url: " + window.location.href );
    }
});

//button
$(function(){
    //console.log("window.location.pathname:"+window.location.pathname);
   // console.log($("#head .menu .iconMenu").length );


    $("#head .menu .iconMenu").live("click",function(){
		var THIS = $(this);
        window.setTimeout(function(){
            if(THIS.hasClass("iconMenuCurr")){
				mz.event('手机端-'+ReturnCarName+'官网-菜单');
                _gaq.push(['_trackEvent', "nav",'click','打开菜单']);
            }else{
				mz.event('手机端-'+ReturnCarName+'官网-返回');
                _gaq.push(['_trackEvent', "nav",'click','关闭菜单']);
            }
        },500);
    });


    $("#nav .ulNav li a.aCar").live("click",function(e){
        e.preventDefault();
		
		mz.event('手机端-'+ReturnCarName+'官网-全系车型');
		
        _gaq.push(['_trackEvent', "nav",'click','全系车型']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aActivity").live("click",function(e){
        e.preventDefault();
		
		mz.event('手机端-'+ReturnCarName+'官网-市场活动');
        _gaq.push(['_trackEvent', "nav",'click','市场活动']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aNews").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-品牌新闻');
        _gaq.push(['_trackEvent', "nav",'click','品牌新闻']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aDealer").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-查找经销商');
        _gaq.push(['_trackEvent', "nav",'click','查找经销商']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aTool").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-购车工具');
        _gaq.push(['_trackEvent', "nav",'click','购车工具']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aService").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-金领结服务');
        _gaq.push(['_trackEvent', "nav",'click','金领结服务']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aChalk").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-红粉笔计划');
        _gaq.push(['_trackEvent', "nav",'click','红粉笔计划']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aClub").live("click",function(e){
        e.preventDefault();
        _gaq.push(['_trackEvent', "nav",'click','UClub']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aCentury").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-世纪品牌');
        _gaq.push(['_trackEvent', "nav",'click','世纪品牌']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .ulNav li a.aWeibo").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-官方微博');
        _gaq.push(['_trackEvent', "nav",'click','官方微博']);
        var _href = $(this).attr("href");
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });
    $("#nav .searchbox input[type='button']").live("click",function(e){
        e.preventDefault();
        _gaq.push(['_trackEvent', "nav",'click','搜索']);
    });

    $("#head .logo .iconLogo").live("click",function(e){
		
		
        e.preventDefault();
		
		mz.event('手机端-'+ReturnCarName+'官网-雪佛兰LOGO');
		
		
        var _href = $(this).attr("href");
        _gaq.push(['_trackEvent', "nav",'click','logo']);
        window.setTimeout(function(){
            window.location.href = _href;
        },300);
    });

    $("#head .try .iconTry").live("click",function(e){
        e.preventDefault();
		mz.event('手机端-'+ReturnCarName+'官网-预约试驾');


        var _href = $(this).attr("href");
        _gaq.push(['_trackEvent', "LeftTopNav",'click','预约试驾']);

		window.setTimeout(function(){
			window.location.href = _href;
		},300);
    });
    $(".searchBlock .searchDiv input[type='button']").live("click",function(){
        var _searchVal = $('.searchBlock .searchDiv input[type="text"]');
        _gaq.push(['_trackEvent', "searchButton",'click',_searchVal]);
    });
    $(".searchBlock .boxFoot ul .li1 a").live("click",function(){
        _gaq.push(['_trackEvent', "searchButton",'click','站内']);
    });
    $(".searchBlock .boxFoot ul .li2 a").live("click",function(){
        _gaq.push(['_trackEvent', "searchButton",'click','资讯']);
    });
    
    
    $("#pageSwitchTop a").live("click",function(){
        _gaq.push(['_trackEvent', "首页",'click','向上']);
    });
    $("#pageSwitchFoot a").live("click",function(){
        _gaq.push(['_trackEvent', "首页",'click','向下']);
    });


    //var result;
    var _pName = window.location.pathname;
    if(__gaRoot.length>0){
        _pName  =   _pName.substr(__gaRoot.length);
    }
    var _pHash = window.location.hash.replace("#","");
    if(wangfan.detect.execReg("car-%car%\.html", _pName) || //各车型首页
        (_pName=="/feature.html" && wangfan.detect.execReg("%car%", _pHash) ) || //feature
        wangfan.detect.execReg("car-%car%-color\.html", _pName) || //color
        (_pName=="/car-activity.html" && wangfan.detect.execReg("%car%", _pHash) || true)  //车型活动
            ){//车型第三方

            $("#main .car_nav ul li:eq(0)").find("a").live("click", function(e){
                    e.preventDefault();
                     _gaq.push(['_trackEvent', "bottomNav",'click', '车型']);
					mz.event('手机端-'+ReturnCarName+'官网-底部导航-车型');
					
                    var redirectTo = $(this).attr('href');//得到当前点击link的url
                    setTimeout(function () {//延迟0.1s后跳转
                         window.location = redirectTo;
                        }, 300);
                });

            $("#main .car_nav ul li:eq(1)").find("a").live("click", function(e){
                    e.preventDefault();
                    _gaq.push(['_trackEvent', "bottomNav",'click', '配置价格']);
					mz.event('手机端-'+ReturnCarName+'官网-底部导航-配置价格');
					
					
                    var redirectTo = $(this).attr('href');//得到当前点击link的url
                    setTimeout(function () {//延迟0.1s后跳转
                         window.location = redirectTo;
                        }, 300);
                });
            $("#main .car_nav ul li:eq(2)").find("a").live("click", function(e){
                    e.preventDefault();
					if(location.href.indexOf('car-trax') > -1){
						mz.event('手机端-'+ReturnCarName+'官网-底部导航-360');
						_gaq.push(['_trackEvent', "bottomNav",'click', '360']);
					}else{
						mz.event('手机端-'+ReturnCarName+'官网-底部导航-车色');
						_gaq.push(['_trackEvent', "bottomNav",'click', '车色']);
					}
                    var redirectTo = $(this).attr('href');//得到当前点击link的url
                    setTimeout(function () {//延迟0.1s后跳转
                         window.location = redirectTo;
                        }, 300);
                });
            $("#main .car_nav ul li:eq(3)").find("a").live("click", function(e){
                    
                    _gaq.push(['_trackEvent', "bottomNav",'click', '活动']);
					mz.event('手机端-'+ReturnCarName+'官网-底部导航-活动');
					
					
                    if(__gaCarType__=="malibu" || __gaCarType__=="aveo"){//暂时只有malibu有活动
                        e.preventDefault();
                        var redirectTo = $(this).attr('href');//得到当前点击link的url
                        setTimeout(function () {//延迟0.1s后跳转
                             window.location = redirectTo;
                            }, 300);
                    }
                });
            $("#main .car_nav ul li:eq(4)").find("a").live("click", function(e){
                    e.preventDefault();
                    _gaq.push(['_trackEvent', "bottomNav",'click', '车型新闻']);
					
					
					mz.event('手机端-'+ReturnCarName+'官网-底部导航-车型新闻');
                    var redirectTo = $(this).attr('href');//得到当前点击link的url
                    setTimeout(function () {//延迟0.1s后跳转
                         window.location = redirectTo;
                        }, 300);
                });
            //console.log("ok....", $("#main .car_nav ul li:eq(0)").find("a"), $("#main .car_nav ul li:eq(1)").find("a"));
    }

    //红粉笔
    if(window.location.pathname.indexOf("/red_chalk/") != -1){
        $(".chalkStory .f_right ul li").eq(0).find("a").bind("click",function(e){
            e.preventDefault();
            _gaq.push(['_trackEvent', "chalkStory",'click',"最新线路"]);
        });
        $(".chalkStory .f_right ul li").eq(1).find("a").bind("click",function(e){
            e.preventDefault();
            _gaq.push(['_trackEvent', "chalkStory",'click',"历史回眸"]);
        });
        $("#btnBackTop").bind("click",function(e){
            e.preventDefault();
            _gaq.push(['_trackEvent', "chalkButton",'click',"回到顶部"]);
        });
        $(".chalkPhoto .provinceBox .selStyleDiv .ulOther li").live("click",function(){
            _gaq.push(['_trackEvent', "chalkPhoto",'click',"省份下拉选择"]);
        });
        $(".chalkPhoto a.aBtnLeft").live("click",function(){
            _gaq.push(['_trackEvent', "chalkPhoto",'click',"左按钮"]);
        });
        $(".chalkPhoto a.aBtnRight").live("click",function(){
            _gaq.push(['_trackEvent', "chalkPhoto",'click',"右按钮"]);
        });
        $(".chalkVideo .text .btnThumb ul li a").eq(0).bind("click",function(){
            _gaq.push(['_trackEvent', "chalkVideo",'click',"视频按钮1"]);
        });
        $(".chalkVideo .text .btnThumb ul li a").eq(1).bind("click",function(){
            _gaq.push(['_trackEvent', "chalkVideo",'click',"视频按钮2"]);
        });
        $(".chalkVideo .text .btnThumb ul li a").eq(2).bind("click",function(){
            _gaq.push(['_trackEvent', "chalkVideo",'click',"视频按钮3"]);
        });
        $(".chalkAbout .f_right ul li a").eq(0).bind("click",function(){
            _gaq.push(['_trackEvent', "chalkAbout",'click',"活动背景"]);
        });
        $(".chalkAbout .f_right ul li a").eq(1).bind("click",function(){
            _gaq.push(['_trackEvent', "chalkAbout",'click',"招募介绍"]);
        });
    }
    //购车工具
    else if(window.location.pathname.indexOf("/tool/") != -1){
        $(".toolIdx .btnBox .aCale").bind("click",function(e){
             e.preventDefault();
            var _href = $(this).attr("href");
            console.log(_href);
            _gaq.push(['_trackEvent', "toolIndex",'click',"网上车贷"]);
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        })
        $(".toolIdx .btnBox .aCount").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr("href");
            _gaq.push(['_trackEvent', "toolIndex",'click',"车险计算"]);
            window.setTimeout(function(){
                 window.location.href = _href;
            },300);
        })
        $(".toolNav .ulMain li").eq(1).bind("click",function(){
            _gaq.push(['_trackEvent', "toolNav",'click',"流程与套餐"]);
        });
        $(".toolPackage .buttonTry .btnSubmit").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr("href");
            _gaq.push(['_trackEvent', "toolPackage",'click',"立即申请"]);
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        });
        $(".toolPackage .formBox .buttonTel").bind("click",function(){
            _gaq.push(['_trackEvent', "toolPackage",'click',"车贷申请热线"]);
        });
        $(".toolApply .formBtn ul li a.btnSubmit").bind("click",function(){
            _gaq.push(['_trackEvent', "toolApply",'click',"提交"]);
        });
        $(".toolApply .formBtn ul li a.btnReset").bind("click",function(){
            _gaq.push(['_trackEvent', "toolApply",'click',"重置"]);
        });

    }
    else if(window.location.pathname.indexOf("/activity.html") != -1){
        console.log("/activity.html...");
        $("#ulActivity li .box a").live("click",function(){
            var idx = $("#ulActivity li").index($(this).closest("li"));
            console.log("idx:" + idx,$(this).closest("li"),$("#ulActivity li"));
            //???
        });
    }
    //captiva DC
    else  if(window.location.pathname.indexOf("car-captiva.html") != -1){
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        $("#head .logo .iconLogo").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        });
        $("#head .try .iconTry").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        });
        $("#head .menu .iconMenu").bind("click",function(){
            window.setTimeout(function(){
            },800);
        });
        //车型
        $(".car_nav ul li:nth-child(1) a").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        });
        //配置价格
        $(".car_nav ul li:nth-child(2) a").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);
        });
        //车色
        $(".car_nav ul li:nth-child(3) a").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);

        });
        //活动
        $(".car_nav ul li:nth-child(4) a").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                //        window.location.href = _href;
            },500);


        });
        //第三方
        $(".car_nav ul li:nth-child(5) a").bind("click",function(e){
            e.preventDefault();
            var _href = $(this).attr('href');
            window.setTimeout(function(){
                window.location.href = _href;
            },300);

        });
    }
    else if(window.location.pathname.indexOf("try-success.html") != -1){
        if(storageFn.get("car_no") == "2"){

        }
    }
    else{

    }
		//世纪品牌
	$(".parttit li a").click(function(e){
		e.preventDefault();
		var partIndex = $(".parttit li a").index(this);
		var partTxt= $(this).attr('title');
		var redirectTo =$(this).attr('href');
		_gaq.push(['_trackEvent', 'FootNav', 'link', partTxt]);
		setTimeout(function(){
				window.location.href = redirectTo;
		},300)
	})
	$('.corvettePart li a').click(function(e){
		e.preventDefault();
		var partIndex = $(".corvettePart li a").index(this);
		var partTxt= $(this).attr('title');
		var redirectTo =$(this).attr('href');
		_gaq.push(['_trackEvent', 'FootNav', 'link', partTxt]);
		setTimeout(function(){
				window.location.href = redirectTo;
		},300)
		
	})	
});



