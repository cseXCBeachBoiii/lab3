'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".project").click(projectClick);
}

function projectClick(e)
{
	e.preventDefault();
	console.log("Project clicked");
	$("#project").click(function(e){
		$('.project h4').text("Project clicked");
	});
    //$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	// containingProject.append("<div class='project-description'>\
	// <p>Description of the project.</p></div>");
	// // var containingProject = $(this).closest(".project");
    // // var description = $(containingProject).find(".project-description");
    // // if (description.length == 0) {
    // //    $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");//}
    // // } else {
	// //    description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	// //    	$("#project1").fadeIn();
	// // }

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		$(".project-description").hide("<div class='project-description'><p>Description of the project.</p></div>");
	}

}