$(document).ready(function () {
  var prefix = $('#prefix');
  //document.getElementById('terminal').disabled = true;
	$(document).keypress(function(e) {
		var pValue = prefix.text();
    	if(e.which == 13) {
        	prefix.text(pValue + '\n' + '->');
    	}
	}); 
});


