var http = require("http");
var fs = require("fs");
const error_json = '{"pageInfo": null,"errorCode": null,"data": null,"success": false,"errorMsgDev": "服务器开小差了","errorMsg": "服务器开小差了"}'

http.createServer(function(req, res){
    
	var url = req.url;
	console.log(url);
	var urlOnly = url.split('?')[0];
	var filename = urlOnly.substring(1,urlOnly.length)+'.json';
	
	console.log(filename)
	try {
		var data = fs.readFileSync(filename);
	} catch (e) {
		data = error_json;
	}
	
	
	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
	res.write(data.toString());
	res.end();

}).listen(9999);

console.log("访问地址：http://localhost:9999/")
