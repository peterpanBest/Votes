var basrUrl = "http://116.62.204.146:8080";
function ajaxRequest(paramsJson) {
	mui.ajax(basrUrl + paramsJson.url,{
		data: paramsJson.data,
		type: paramsJson.type || 'post',
		timeout: paramsJson.timeout || 2000,
		headers: {"Content-Type": "text/plain"},	              
		success: paramsJson.success || function(){},
		error: paramsJson.error || function(){}
	});
}