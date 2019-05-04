//作者：Peter.Pan
//cookie 功能的封装，通常有三种操作
// 设置cookie（增删改）
/*
增	setCookie("a", "123", 5)		setCookie("a", "123")
删	setCookie("a", "", -1)
改	setCookie("a", "456", 5)
*/

function setCookie(_name, _value, _date){
	if( _date ){
		var d = new Date();
		d.setDate(d.getDate()+_date);	
		document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/; expires="+d.toGMTString();
	}else{
		document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/;";
	}
}

function getCookie(_name){
	var str = document.cookie;	
	var arr = str.split("; ");
	var l = arr.length;
	for( var i=0; i<l; i++ ){
		var col = arr[i].split("=");
		if( col[0] == _name ){
			return decodeURIComponent(col[1]);
		}
	}
	return "";
}

function delCookie(_name){
		setCookie(_name,"",-1);
}
