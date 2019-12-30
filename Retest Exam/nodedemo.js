fs=require("fs");
http=require("http");
url=require("url");
query=require("querystring");

s=http.createServer(function(req,resp){

u=url.parse(req.url,true);
switch(u.pathname)
{
	case "/":
		read=fs.readFile("nodedemo.html",function(error,data){
		if(error)
		{
			resp.end(error);
		}
		else
		{
			resp.end(data);
		}			
		});
		break;

	case "/success":
			data=u.query;			
			resp.writeHead(200,{"content-type":"text/html"});
			resp.write("<body>");
			resp.write("<center>");
			
			resp.write("<h3>");
			resp.write(" Successfully registed");
			resp.write("</h3>");

			resp.write("first Name: ");	
			resp.write(data.nm);
			resp.write("</br>");

			resp.write("Last Name: ");	
			resp.write(data.lname);
			resp.write("</br>");


			resp.write("UserName: ");
			resp.write(data.uname);
			resp.write("</br>");

			resp.write("Password: ");
			resp.write(data.pwd);
			resp.write("</br>");

			resp.write("Gender: ");
			resp.write(data.rdo);	
			resp.write("</br>");

			resp.write("Date Of Birth: ");
			resp.write(data.date);	
			resp.write("</br>");

			resp.write("Hobbies :");
			resp.write(data.chkbox);	
			resp.write("</br>");

			resp.write("</center>");
			resp.end("</body>");
		break;			
	}
});

s.listen(5050);
console.log("server started........");


