function csvJSON3(csv) {

  var lines=csv.split("\n");

  var p_out = document.getElementById("out");

  for (var i = 0; i<lines.length; i++) {
  		var curr_line = lines[i].split(",");
  		
  		var tr_n = document.createElement('tr');
  		p_out.appendChild(tr_n);

  		for (var j = 0; j<curr_line.length; j++) {
  			var td_n = document.createElement('td');
  			td_n.textContent = curr_line[j];
  			tr_n.appendChild(td_n);
  		}

  }


  document.getElementsByTagName('tr')[0].setAttribute("class", "gr");

  var t = document.getElementById('t');
  var code = document.getElementById('code');
  var temp = t.innerHTML.replace(' id="out"', "").replace(' class="gr"', "");
  code.textContent = temp;
  
}
