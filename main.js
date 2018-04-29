javascript: (function () {
    function F1() {
    	var rows = document.querySelectorAll("table.zc-subformcontent tr.zc-grid-subform");
    	for(var i = 1; i <= rows.length; i++) {
    		var tr = rows[i];
    		if(tr)
            {
    			for(var j = 2; j <= tr.cells.length; j++) {
    			    if(typeof(tr.querySelectorAll('td li.search-selected-val')[j]) != 'undefined' && tr.querySelectorAll('td li.search-selected-val')[j] != null)
    			    {
        				tr.querySelectorAll('td li.search-selected-val')[j].setAttribute("selvalue","2727643000027208389"); // Change Grade Code Here // [Refer to README.md for list of Grade Codes]
        				tr.querySelectorAll('td li.search-selected-val')[j].querySelector("span").innerHTML = "Excellent"; // Replace Grade Name Here //
        				tr.querySelectorAll('td li.search-selected-val')[j].querySelector("input").setAttribute("value","2727643000027208389");
    			    }
    			}
    		}
    	}
    }
    F1();   
})();