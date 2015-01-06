var http=require("http");
var fs=require("fs");

gpiovalue=""
teststring = "This is a test string for output";

var server = http.createServer(function(Request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});

	response.write(teststring+"\n");
	response.write(getDateTime()+"\n");

	fs.readFile('/sys/class/gpio/gpio2/value', function (err, data) {
	gpiovalue=data;});

response.write(gpiovalue);

	response.end();
});


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}


server.listen(8081);

