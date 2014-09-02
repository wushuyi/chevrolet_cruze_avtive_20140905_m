$(function() {
    /** total ***/
    var total = {
        isSuccess: false,
        PageName: "",
        id: "",
        init: function() {
            var _PageName = {
                "/car-volt-color.html": {
                    "name": "沃蓝达颜色",
                    "id": "5"
                },
                "/car-camaro-color.html": {
                    "name": "科迈罗颜色",
                    "id": "6"
                },
                "/car-captiva-color.html": {
                    "name": "科帕奇颜色",
                    "id": "2"
                },
                "/car-malibu-color.html": {
                    "name": "迈锐宝颜色",
                    "id": "10"
                },
                "/car-trax_360.html": {
                    "name": "创酷360",
                    "id": "11"
                },
                "/car-epica-color.html": {
                    "name": "景程颜色",
                    "id": "9"
                },
                "/car-cruze-color.html": {
                    "name": "科鲁兹颜色",
                    "id": "7_6"
                },
                "/car-aveo-color.html": {
                    "name": "爱唯欧颜色",
                    "id": "3_4"
                },
                "/car-aveoold-color.html": {
                    "name": "爱唯欧颜色",
                    "id": "3_4"
                },
                "/car-sail-color.html#hb": {
                    "name": "赛欧两厢颜色",
                    "id": "4_1"
                },
				"/car-sail-color.html#nb": {
                    "name": "赛欧三厢颜色",
                    "id": "4_1"
                },
                "/car-volt.html": {
                    "name": "沃蓝达车型",
                    "id": "5"
                },
                "/car-camaro.html": {
                    "name": "科迈罗车型",
                    "id": "6"
                },
                "/car-captiva.html": {
                    "name": "科帕奇车型",
                    "id": "2"
                },
                "/car-malibu.html": {
                    "name": "迈锐宝车型",
                    "id": "10"
                },
                "/car-trax.html": {
                    "name": "创酷车型",
                    "id": "11"
                },
                "/car-epica.html": {
                    "name": "景程车型",
                    "id": "9"
                },
                "/car-cruze-hb.html": {
                    "name": "科鲁兹车型",
                    "id": "7_7"
                },
                "/car-cruze-nb.html": {
                    "name": "科鲁兹车型",
                    "id": "7_6"
                },
                "/car-cruze-new-color.html": {
                    "name": "科鲁兹车型",
                    "id": "7_6"
                },
                "/car-aveo.html": {
                    "name": "爱唯欧车型",
                    "id": "3_4"
                },
                "/car-aveoold.html": {
                    "name": "爱唯欧车型",
                    "id": "3_4"
                },
                "/car-sail-hb.html": {
                    "name": "赛欧两厢车型",
                    "id": "4_1"
                },
                "/car-sail-nb.html": {
                    "name": "赛欧三厢车型",
                    "id": "4_2"
                },
                "#car-volt": {
                    "name": "沃蓝达配置价格",
                    "id": "5"
                },
                "#car-camaro": {
                    "name": "科迈罗配置价格",
                    "id": "6"
                },
                "#car-captiva": {
                    "name": "科帕奇配置价格",
                    "id": "2"
                },
                "#car-malibu": {
                    "name": "迈锐宝配置价格",
                    "id": "10"
                },
				"#car-fromMalibuhistory": {
                    "name": "迈锐宝配置价格",
                    "id": "10"
                },
                "#car-trax": {
                    "name": "创酷配置价格",
                    "id": "11"
                },
                "#car-epica": {
                    "name": "景程配置价格",
                    "id": "9"
                },
                "#car-cruze-hb": {
                    "name": "科鲁兹配置价格",
                    "id": "7_6"
                },
                "#car-cruze-nb": {
                    "name": "科鲁兹配置价格",
                    "id": "7_7"
                },
                "#car-aveo": {
                    "name": "爱唯欧配置价格",
                    "id": "3_4"
                },
                "#car-aveoold": {
                    "name": "爱唯欧配置价格",
                    "id": "3_4"
                },
                "#car-sail-hb": {
                    "name": "赛欧两厢配置价格",
                    "id": "4_1"
                },
                "#car-sail-nb": {
                    "name": "赛欧三厢配置价格",
                    "id": "4_2"
                }
            };
            var LocationPathname = window.location.pathname;
            var LocationHash = window.location.hash;
            for (var i in _PageName) {
                if (LocationPathname == i) {

                    total.PageName = _PageName[i].name;
                    total.id = _PageName[i].id;
                   // console.log("name: " + total.PageName + "id: " + total.id);
                    if (LocationPathname == "/try.html") {
                        total.PageName = "预约试驾";
                        //console.log("name: " + total.PageName + "id: " + total.id);
                    }
                    return;
                } else if (LocationHash == i) {
                    total.PageName = _PageName[i].name;
                    total.id = _PageName[i].id;
                    //console.log("name: " + total.PageName + "id: " + total.id);
                    if (LocationPathname == "/try.html") {
                    	total.PageName = "预约试驾";
                        //console.log("name: " + total.PageName + "id: " + total.id);
                    }
                    return;
                } else {
                    total.PageName = "预约试驾";
                    total.id = "";
                    //console.log("name: " + total.PageName + "id: " + total.id);
                }
            }

        },
        run: function() {

}
    };
    total.init();

    $('.newPostPhone , .newPostName').val('');

    $('.tryopenbtn').click(function() {
        $(this).parent().toggleClass('hover');
    });
	var clickLock = false;
    $('.newSubBtn.sub').click(function() {
        if (clickLock) {
            return;
        }

        //var _this = this;
        var boxname;
        var env = $(this);
        var name = $(this).parent().find('.newPostName');
        var phone = $(this).parent().find('.newPostPhone');
        var thisbox = $(this).parent().attr("class");
        if (thisbox == "bt_try_box") {
            boxname = '底部';
        } else {
            boxname = '头部';
        }

        //有效点击提交统计
        if (name.val().length != 0 || phone.val().length != 0) {
            _gaq.push(['_trackEvent', "try", 'click', total.PageName + '页面点击' + boxname + '预约试驾']);
            mz.event(total.PageName + '页面点击' + boxname + '预约试驾');
           // console.log(total.PageName + '页面点击' + boxname + '预约试驾');
        }

        //var subloading =  $(this).parent().find('.subloading');
        var subloading = {
            show: function(env) {
                env.children('.word').html("正在提交中...");
                clickLock = true;
            },
            hide: function(env) {
                env.children('.word').html("立即申请");
                clickLock = false;
            }
        };
        //var succbox = $(this).parent().find('.succbtn')

        if ($(this).parent().find('.subloading:visible').size() == 1) return;

        if ($.trim(name.val()).length == 0) {
            alert('请输入姓名!');
            name.focus();
            return;
        }

        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phone.val())) {
            alert('手机号码输入有误!');
            phone.focus();
            return;
        };

        subloading.show(env);

        var CarId = total.id;
       // console.log(CarId);
		
		var cccdata = {
            car: CarId,
            dealer: '1536',
            email: '',
            mobile: phone.val(),
            name: name.val(),
            pro: '1',
            purchase_intention: '三个月内'
        };
        $.getJSON('http://www.chevrolet.com.cn/brandsite/ccc/try_order_sync.ashx?callback=?', cccdata, function(data){

            subloading.hide(env);

            /* 请将 LabelValue 替换为对应字段的取值 */
            /*
            var CARIDARR = {
                malibu: "10",
                aveo: "3_4",
                "cruze": "7_6",
                "cruze-nb": "7_7",
                captiva: "2",
                camaro: "6",
                epica: "9",
                "sail": "4_1",
                "sail-nb": "4_2",
                volt: "5",
                trax: "11"
            };
            */
			mz.trycar(cccdata.name,cccdata.mobile,data.record_id);

            if (data.result == "success") {

                if (data.jsonResponse == 0) { //缺少参数
                    //$(".testdriveWrap .fm_message").text("缺少参数");
                } else if (data.jsonResponse == 1) { //success
                    //预约成功提交统计
                    _gaq.push(['_trackEvent', "try", 'click', total.PageName + '页面点击' + boxname + '预约试驾成功']);
                    mz.event(total.PageName + '页面点击' + boxname + '预约试驾成功');
                    //console.log(total.PageName+'页面点击'+boxname+'预约试驾成功');
					window.myname=name.val();
					window.myphone=phone.val();
                    _smq.push(['custom', '预约试驾', '提交成功', "CH" + data.record_id + "+" + name.val() + "+" + phone.val()]);
					if(window.location.href.indexOf('car-aveo.html') > 0){
						var oBox=$(".alert_box2");
						oBox.attr({"id":"alert_success"});
						oBox.find(".notice_img").html('<p>“预约成功</p>赶快试试手气吧！”');						
						choujian(window.myname,window.myphone);
						aveoFn.lock = true; // 锁屏
						var pubmask = $('#pubMask'); // 公共浮层 遮罩
						var popbox = $('#popbox2'); // 浮沉内容 1
						pubmask.css({'top': '0px', 'z-index': '99'});
						popbox.css({'top': '0px', 'z-index': '100'});
						mz.event('手机端-爱唯欧官网-刮奖区');
					}else{
						alert("预约成功!");
					}
                    name.val('');
                    phone.val('');
                    //品友
                    if (window.location.href.indexOf('captiva') != -1) { //品友
                        pymcvtfun();
                    }
                    if (window.location.href.indexOf('malibu') != -1) { //品友
                        Cvt();
                    }
                    if (window.location.href.indexOf('trax') != -1) { //品友
                        pytraxmcvtfun();
                    }
                    if (window.location.href.indexOf('aveo') != -1) { //品友
                        pycvtAVEOfun();
                    }
                    if (window.location.href.indexOf('tf4promotion') != -1) {
                        pycvtfun();
                    }
					
					 if (window.location.href.indexOf('manlian') != -1) {
						var frmid = data.record_id;
						if(!frmid || null==frmid){
							frmid = '';
						}
						var w=window,d=document,e=encodeURIComponent;
						var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
						if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('R6.0V.KLR3gN3HpvnpF08RBuxek_')+'&OrderNo='+e(frmid)+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
						(new Image()).src=u;
	
					}


					if (window.location.href.indexOf('car-cruze-nb') != -1 || window.location.href.indexOf('car-cruze-new') != -1) { //品友
						var frmid = data.record_id;
						if(!frmid || null==frmid){
							frmid = '';
						}
                        pycvtfunNewCruze(frmid);
                    }
				
                    //wangfan.testDrive._record_id = data.record_id;
                    //wangfan.testDrive.onSubmitSuccess(cccdata);
                    //$(".testdriveWrap .fm_message").text("");
                    //wangfan.testDrive._onDcLeads(cccdata, data.record_id);
                    //wangfan.testDrive._setting.onApplyTestdriveSuccessFn(cccdata, data.record_id);
                } else if (data.jsonResponse == 2) { //车型、省份、经销商或数据存储错误
                    //$(".testdriveWrap .fm_message").text("车型、省份、经销商或数据存储错误");
                } else {
                    //$(".testdriveWrap .fm_message").text("提交失败");
                }
            } else {
                alert("提交失败");
            }

        });

    });

});




function pycvtfunNewCruze(orderno){
	var w=window,d=document,e=encodeURIComponent;
	var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
	if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('R6.ci.DJFo4hGH6w6Sfhclm4eWJP')+'&OrderNo='+e(orderno)+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
	(new Image()).src=u;
}



/////////////////////////////品友

function Cvt() {
    var w = window,
    d = document,
    e = encodeURIComponent;
    var b = location.href,
    c = d.referrer,
    f, g = d.cookie,
    h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
    i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) {
        f = b;
        b = c;
        c = f;
    };
    u = '//stats.ipinyou.com/cvt?a=' + e('R6.qA.v0-dp4UOmE289FlJol2OQP') + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&e='; (new Image()).src = u;
}

function pytraxmcvtfun(orderno) {
    var w = window,
    d = document,
    e = encodeURIComponent;
    var b = location.href,
    c = d.referrer,
    f, g = d.cookie,
    h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
    i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) {
        f = b;
        b = c;
        c = f;
    };
    u = '//stats.ipinyou.com/cvt?a=' + e('R6.2p.iXAmSa7l4GgtRUj31Z2zT_') + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&e='; (new Image()).src = u;
}

function pymcvtfun(orderno) {
    var w = window,
    d = document,
    e = encodeURIComponent;
    var b = location.href,
    c = d.referrer,
    f, g = d.cookie,
    h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
    i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) {
        f = b;
        b = c;
        c = f;
    };
    u = '//stats.ipinyou.com/cvt?a=' + e('R6.Xn.JOXxoM3bkqHC3VgGCtSCqX') + '&c=' + e(h ? h

    [2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime

    () + '&OrderNo=' + orderno + '&e='; (new Image()).src = u;
}

function pycvtAVEOfun() {
    var w = window,
    d = document,
    e = encodeURIComponent;
    var b = location.href,
    c = d.referrer,
    f, g = d.cookie,
    h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
    i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) {
        f = b;
        b = c;
        c = f;
    };
    u = '//stats.ipinyou.com/cvt?a=' + e('R6.LH.mKiN7rJiy-yDKyT7RP7d1P') + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&e='; (new Image()).src = u;
}

function pycvtfun() {
    var w = window,
    d = document,
    e = encodeURIComponent;
    var b = location.href,
    c = d.referrer,
    f, g = d.cookie,
    h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
    i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) {
        f = b;
        b = c;
        c = f;
    };
    u = '//stats.ipinyou.com/cvt?a=' + e('R6.dT.BtALsH36tg_gsuPFJpaZ6P') + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&e='; (new Image()).src = u;
}

$(document).ready(function() {
    // 解决 iphone 输入框 失去焦点 top 条 位置 漂移 bug
    $("body").mouseover(function() {
        $("input").blur();
        //alert("ok");
    });
});