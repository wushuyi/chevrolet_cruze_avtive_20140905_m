var flagMove = false;
//resizeFn
var resizeFn = {
    prevMain:function () {
        var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
        $("#main").height(_windowHeight + 500);
        $("#container").height(_windowHeight + 200);
        if (isBrowse().chrome) {
        } else {
            $(window).scrollTop(1);
        }
    },
    initDom:function () {
        var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
        var winVisiH = _windowHeight - $("#head").height(); //重置成新高度
        $("#main").height(winVisiH);
        $("#container").height(_windowHeight );
        $("#featureBlock").height(winVisiH );
    }
};
/*
 * featureFn
 * */

var featureFn = {
    addBg:function () {
        $(".featureBlock .tblStyle tr:odd td").addClass("tdOdd");
    },
    flodFn:function () {
        var $box = $(".featureBlock .blockBody .box");
        $box.each(function (idx) {
            $(this).find(".title").unbind("click").bind("click", function () {
                if (!flagMove) {
					$(this).toggleClass('hover');
                    $box.find(".text").eq(idx).stop(true, false).slideToggle();
                }
            });
        });
    },
    carMenuFn:function (name) {
        var carTypeP = featureFn.carType!="" ? "-"+featureFn.carType : "";

        var _html = '<li><a href="car-' + name+carTypeP + '.html">车型</a></li>' +
            '<li><a href="javascript:;" class="curr">配置价格</a></li>' +
            '<li><a href="car-' + name + '-color.html#'+featureFn.carType+'">车色</a></li>' +
            '<li><a href="car-activity.html#'+name+'">活动</a></li>' +
            '<li><a href="media-news.html#'+name+'-article"></a></li>';
        $("#carMenuBox ul").html(_html);
    },
    changed:false,
    dataFn:function (f) {
        $(".featureBlock .blockBody").html('<div class="loadingDiv"><img src="img/o_loading.gif"><p><br/>正在加载中……</p></div>');
        var name = f.name , modelId = f.modelId;
        window.setTimeout(function(){
            $.getJSON("data/feature_" + name + "_" + modelId + ".txt", function (data) {
                $(".featureBlock .blockTop h3").css({"background-image":"url(" + data.pic + ")"});
                $(".featureBlock .blockTop h3 .word").html(data.name + '<br/>配置价格');
                var modelStr;
                if(data.model.match("\n")){
                    modelStr = data.model.replace("\n","<br/>");
                    $(".featureBlock .blockTop .title").addClass("title2");
                }else{
                    $(".featureBlock .blockTop .title").removeClass("title2 title3");
                     modelStr = data.model;
                     var reg = /%(.*)%$/;
                     var result = reg.exec(modelStr);
                     if(result){
                        modelStr    =   modelStr.replace("%"+result[1]+"%","");
                        $(".featureBlock .blockTop .title").addClass(result[1]);
                     }
                    
                }
                $(".featureBlock .blockTop .title .word").html(modelStr);
                if(!featureFn.changed){
                    var _strModels = '<option selected value="0">更换车型</option>';
                    var _oModels = data.allModels;
                    for (var i = 0; i < _oModels.length; i++) {
                        _strModels += '<option value="' + _oModels[i].id + '">' + _oModels[i].name + '</option>';
                    }
                    $("#dataAllModels").html(_strModels);
                    featureFn.changed = true;
                }

                //详细数据
                var _htmlDetail = '', jsonDetail = data.datas, isSubContent = 0;
                for (var i = 0; i < jsonDetail.length; i++) {
                    if (jsonDetail[i].name == "__TITLE__") {
                        if (isSubContent != 1) {
                            _htmlDetail += '<div class="box"><div class="title">' + jsonDetail[i].value[0] + '</div><div class="text">';
                            _htmlDetail += '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tblStyle">';
                            isSubContent = 1;
                        } else if (isSubContent == 1) {
                            _htmlDetail += '</table></div>';
                            _htmlDetail += '</div></div>';
                            isSubContent = 2;
                            i--;
                        }
                    } else {
                        var dataValue =  jsonDetail[i].value[0].replace("\n","<br/>");
                        _htmlDetail += '<tr><td class="td1"><b>' + jsonDetail[i].name + '</b></td><td class="td2"><b>' + dataValue + '</b></td></tr>';         //每一属性行
                    }
                }
                $(".featureBlock .blockBody").html(_htmlDetail);
				
				
				
				var boxFirst = $('.blockBody .box:first');
				
				if(boxFirst.find('tr').size() > 5) boxFirst = $('<div class="box"></div>');   ///沃兰达没有价格
				boxFirst.find('.title').remove();
				
				
				$('.blockTop').find('.box').remove();
				
				$('.blockTop').append(boxFirst);
				$('#blockTopClone').remove();
				var Clone = $('.blockTop').clone(true);
				
				Clone.find('h3').remove()
				$('#main').append(Clone.attr('id' , 'blockTopClone'))
				
				/*$('.blockTop').css({'position' :'fixed' ,   'top': -30 , 'width' : '100%'});
				$('.blockBody').css('margin-top',105);*/
				
				 $(".featureBlock .tblStyle tr:odd td").addClass("tdOdd");
				 $("#blockTopClone .tblStyle tr:odd td").addClass("tdOdd");
				
				 if(window.myScroll.y < -80) {
						$('#blockTopClone').show()
					}else
					{
						$('#blockTopClone').hide()	
					}
			
				  
				  
                featureFn.flodFn();
               // featureFn.addBg();
                jackyFn.loadingFn("no");
            });

            featureFn.carMenuFn(name);
			/* 爱唯欧敬请期待 */
			var pageHref = window.location.href;
			if(/feature.html#car-aveo$/.test(pageHref)){
				var coming = function(event){
					event.attr("href", "javascript:void(0);").click(function(){
						jackyFn.coming();
						return false;
					});
				}
				//coming($(".car_nav li:eq(1) a"));
				coming($(".car_nav li:eq(2) a"));
				coming($(".car_nav li:eq(3) a"));
				coming($(".car_nav li:eq(4) a"));
				
				var aveoreset = setInterval(function(){
					var newtitle = $('#featureBlock .blockTop h3 .word');
					newtitle.html("新爱唯欧<br>配置价格");
					if(newtitle.html() == "新爱唯欧<br>配置价格"){
						clearInterval(aveoreset);
					}
				}, 200);
			}
			;(function(){
				if((window.location.href.indexOf('car-cruzeclassic') == -1)){ return false; }
				var $cache = {};
				$cache.carMenu = $('#carMenuBox a');
				$cache.cxBtn = $cache.carMenu.eq(0);
				$cache.csBtn = $cache.carMenu.eq(2);
				$cache.hdBtn = $cache.carMenu.eq(3);
				$cache.xwBtn = $cache.carMenu.eq(4);
	
				$cache.cxBtn.attr('href', '/cruze/classic/');
				$cache.xwBtn.attr('href', 'media-news.html#cruze-article');
				$cache.csBtn.click(function(e){
					e.preventDefault();
					jackyFn.coming();
					return false;
				});
				$cache.hdBtn.click(function(e){
					e.preventDefault();
					jackyFn.coming();
					return false;
				});
			})();
        },200);
    },
    carType:"",
    init:function (carName, cType) {
        if(cType=="hb" || cType=="nb"){
            featureFn.carType = cType;
        }
        featureFn.dataFn({name:carName, modelId:"1"});
        $("#dataAllModels").bind("change", function (e) {
            e.preventDefault();
            if($(this).val() != 0){
                featureFn.dataFn({name:carName, modelId:$(this).val()});
                 setTimeout(function(){
                    $("#dataAllModels").val("0");
                }, 10);
            }
            
        });
    }

};


/*
 * iScroll
 * */
var loadedMain = function () {
	var TIMES = null;
    var myScroll = new iScroll("featureBlock", {
        myscroll:false,
        vScrollbar:true,
        bounce:false,
        fixedScrollbar:true,
        checkDOMChanges:true,
        useTransform:false,
        hideScrollbar:true,
        onScrollMove:function () {
            flagMove = true;
			if(myScroll.y < -80) {
				$('#blockTopClone').show()
			}else
			{
				$('#blockTopClone').hide()	
			}
        },
		onTouchEnd : function (){
			var TIMESINDEX = 10;
			TIMES = setInterval( function (){
				if(TIMESINDEX -- < 0 ) 	 clearInterval(TIMES);
				
				if(myScroll.y < -80) {
					$('#blockTopClone').show()
				}else
				{
					$('#blockTopClone').hide()	
				}
				
			} ,100)	
		} ,
        onScrollEnd:function () {
			clearInterval(TIMES);
			if(myScroll.y < -80) {
				$('#blockTopClone').show()
			}else
			{
				$('#blockTopClone').hide()	
			}
			
            window.setTimeout(function () {
                flagMove = false;
            }, 200);
        }
    });
	
	//console.log(myScroll)
	
	window.myScroll = myScroll;
    myScroll.refresh();
};



$(function () {
	//重新定义 try.html 链接
	resetTry();
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
    navSwitch.bindEvent();
    $(window).bind({
        "load":function () {
            resizeFn.prevMain();
            loadedMain();
            resizeFn.initDom();
            $.history.init(function (hash) {
                var arrHash = hash.split("-");
                if (arrHash[0] == "car") {
                    var carName = arrHash[1];       //获取车型的英文全称，EXP:volt、malibu
                    
                    featureFn.init(carName, arrHash[2]);
                } else {
                    featureFn.init("malibu");
                }
            });
        },
        "resize":function () {
            resizeFn.initDom();

        }
    });
});


function resetTry(){
	var LocationHash = window.location.hash;
	$(".iconTry").attr("href", "try.html"+LocationHash);
}
