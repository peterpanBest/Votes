var basrUrl = "http://localhost:3333";
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