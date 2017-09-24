define (['jquery','template','cookie'],function($,template){
 //NProgress.start();
 //NProgress.done();


  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });

  //实现退出功能
     $('#logoutBtn').click(function(){
      //alret（1）   检测是否点击退出有效果

      $.ajax({
        type:'post',
        url:'/api/logout',
        dataType:'json',
        success:function(data){
          //检测是否退出成功

                // alert(123123)
               //console.log(data);
        
               if(data.code == 200){
               
                //重新跳转到登录页
                location.href = '/main/login';
               }
        }
      });
     });


     //检测用户是否登录
     //先获取cookie
      var flag = $.cookie('PHPSESSID');

      //检测是否登录成功
     // console.log(flag);
      if(!flag&&location.pathname!='/main/login'){
        //如果cookie不存在，跳转到登录页
        location.href = '/main/login';
      }

      //设置头像信息
      //打印一下

     var loginInfo = $.cookie('loginInfo');

     //判断一下，信息是否存在如果不存在就不会跳转
      loginInfo = loginInfo && JSON.parse(loginInfo); 
      //设置用户的头像信息
     //$('.aside .profile img').attr('src',loginInfo.tc_avatar);
     //$('.aside .profile h4').html(loginInfo.tc_name);

   var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
      
    // console.log(loginInfo) 
   var html = template.render(tpl,loginInfo);
    $('.aside .profile').html(html);
});
	