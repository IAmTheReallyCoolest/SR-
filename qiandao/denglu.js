//$(function(){
//			alert("1");
//			var yan = document.getElementById("denglu");
//			var username = yan.yhm.value;
//			var password = yan.mm.value;
//			alert("2");
//
//			if (yan.yhm.value == "") {
//				alert("用户名不能为空");
//				return false;
//			}
//
//			if (yan.yhm.value.length < 3 || yan.yhm.length > 20) {
//				alert("用户名格式错误");
//				return false;
//			}
//			if (yan.mm.value.length < 6 || yan.mm.value.length > 20) {
//				alert("密码格式错误");
//				return false;
//			}
//			window.location = "qiandaoxitong.html";
//			
//			
//			var button1 = $(".denglu1");
//		button1.onclick(function() {
//			alert("werufwi;")
//			$.post() {
//				url: "denglu/",
//				data: {
//					username:username,
//					password:password
//				},
//				
//
//			}
//		})
//		})


alert("1")
$(function () {





	//		button1.onclick(function() {
	//			alert("werufwi;")
	//			$.post(){
	//				'url': "denglu/",
	//				'data': {
	//					"username":yhm,
	//					
	//				}
	//				
	//
	//			}
	//		})

	$(".denglu1").click(function () {
		var username = $("input[name='yhm']").val()
		var password = $("input[name='mm']").val()
		event.preventDefault();
		$.post("denglu/", {
				username: "username",
				password: "password"

			},

			function (data, status) {
				alert("Data: " + data + "\nStatus: " + status);
			});
		alert(username);
		console.log(username)
	});
})
