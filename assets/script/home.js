mui(".mui-bar").on('tap', '.mui-tab-item',function() {
	var _item = this.dataset.item+'';
	console.log(_item);
	switch (_item){
		case '1':
			window.location.href='home.html';
			break;
		case '2':
			window.location.href='news.html';
			break;
		case '3':
			window.location.href='message.html';
			break;
		case '4':
			window.location.href='personal.html';
			break;
		default:
			break;
	}
});

var gallery = mui('#slider');
gallery.slider({
  interval:2000
});

ajaxRequest({
	url: '/api/login/signUp',
	data: JSON.stringify({
		username: "pfs",
		password: 123456,
	}),
	type: 'post',
	success(sVal) {
		console.log(sVal);
	}
});