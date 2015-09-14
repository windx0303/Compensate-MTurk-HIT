$(document).ready(function () {
	
	//check if accepted
	if(gup("assignmentId") === "ASSIGNMENT_ID_NOT_AVAILABLE") {
		
		$("body").empty();
		$("body").css("background", "white");
		
		var noteDiv = $("<div>This HIT is for <span class='highlight'>specific workers only</span>.<br><br>Only accept this HIT if you've been contacted by us.</div>");
		$(noteDiv).css("margin-left", "auto");
		$(noteDiv).css("margin-right", "auto");
		$(noteDiv).css("margin-top", "50px");
		$(noteDiv).css("font-size", "30px");
		$(noteDiv).css("text-align", "center");
		$("body").append(noteDiv);
		$(".color").css("color", "blue");
		$(".color").css("font-weight", "600");
		
		$('input').attr("DISABLED", "true");
        _allowSubmit = false;
        
        return false;
        
    } else {
        _allowSubmit = true;
    }
	
	if(isValidWorker()){
		
		if (gup("assignmentId") != "") {
	        // create form
	        //$('#instructions').append($('<div id="legion-submit-div"><p id="legion-submit-instructions">The HIT is now over. Please submit it for payment. If the button below is disabled, then you did not accumulate enough money to be paid.</p><form id="legion-submit-form"><input type="hidden" name="money" value="0" id="legion-money-field"><input type="hidden" name="assignmentId" id="legion-assignmentId"><input id="legion-submit" type="button" value="Submit HIT"></div>'));

	        var jobkey = gup("assignmentId");
	        if (gup("hitId") != "") {
	            jobkey += "|" + gup("hitId");
	        }

	        if (gup("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE") {
	            $('input').attr("DISABLED", "true");
	            _allowSubmit = false;
	        } else {
	            _allowSubmit = true;
	        }
	        $('#compensate-form-assignmentId').attr('value', gup("assignmentId"));
	        $("#compensate-form").attr('method', 'POST');


	        if (gup("turkSubmitTo") != "") {
	            $("#compensate-form").attr('action', gup("turkSubmitTo") + '/mturk/externalSubmit');
	        }

	        //$('#legion-submit').removeAttr('disabled');
	        //$("#legion-submit").click(submitToTurk);
	    } else {
	        //alert("not unlocking:: " + gup("assignmentId"))
	    }
		
	}else{
		
		$("body").empty();
		$("body").css("background", "white");
		
		var noteDiv = $("<div>This HIT is for <span class='highlight'>specific workers only</span>.<br><br><span class=\"highlight-strong\">Please return this HIT.</span></div>");
		$(noteDiv).css("margin-left", "auto");
		$(noteDiv).css("margin-right", "auto");
		$(noteDiv).css("margin-top", "50px");
		$(noteDiv).css("font-size", "30px");
		$(noteDiv).css("text-align", "center");
		$("body").append(noteDiv);
		$(".color").css("color", "blue");
		$(".color").css("font-weight", "600");
		
		$('input').attr("DISABLED", "true");
        _allowSubmit = false;
        
        return false;
        
	}
	
	
	
});

function isValidWorker(){
	
	var nowWorkerId = gup("workerId");
	
	var nowWorkers = gup("workers");
	
	var workers = nowWorkers.split(",");
	
	for(var i=0;i<workers.length;i++){
		if(nowWorkerId.trim().toUpperCase()==workers[i].trim().toUpperCase()){
			return true;
		}
	}

	return false;
	
}

//function for getting URL parameters
function gup(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
	    return "";
    else
	    return unescape(results[1]);
}