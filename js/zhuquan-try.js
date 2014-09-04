$(function() {
    /** total ***/
    var total = {
        isSuccess: false,
        PageName: "",
        id: "",
        init: function() {

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

        //有效点击提交统计
        if (name.val().length != 0 || phone.val().length != 0) {
            mz.event('手机端-经典科鲁兹官网-立即申请');
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

			mz.trycar(cccdata.name,cccdata.mobile,data.record_id);

            if (data.result == "success") {

                if (data.jsonResponse == 0) { //缺少参数
                } else if (data.jsonResponse == 1) { //success
                    //预约成功提交统计
                    mz.event('手机端-经典科鲁兹官网-立即申请-预约试驾成功');
					window.myname=name.val();
					window.myphone=phone.val();
                    alert("预约成功!");
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