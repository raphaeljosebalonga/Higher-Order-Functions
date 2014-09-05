var siteloc = "http://localhost/Higher-Order-Functions";
var scriptloc = "/scripts/"

function square()
{
		
	$.ajax({
		url: siteloc + scriptloc + "squaring.py",
		data: {base:$("#base").val()
		},
		success: function(res)	{
			  $("p").append(res); 
		}
		});
		
}

 
function cube()
{
		
	$.ajax({
		url: siteloc + scriptloc + "cubing.py",
		data: {base:$("#base").val()
		},
		success: function(res)	{
			 $("p").append(res); 
		}
		});
		
}