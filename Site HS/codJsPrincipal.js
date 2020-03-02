window.onload = function() {
					
				
	var b = document.getElementById("buton");
	

	
	
	var k = 0;
	b.onclick = function(){
		k++;
		if(k%2==0)
			b.style.color = "green";
		else
			b.style.color = "blue";
		var b2 = document.createElement("input");
		var s = document.getElementById("for");
		var b3 = document.createElement("input");
		s.appendChild(b2);
		
		s.appendChild(b3);
		b2.type = "button";
		b2.style.color = "red";
		var x = document.getElementById("text");
		b2.value = k;
		b3.value = x.value;
		b2.onclick = function(){
			s.removeChild(b2);
			s.removeChild(b3);
		}
	
	}
	
	
}