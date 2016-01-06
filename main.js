$(document).ready(function() {mainFunction("docReady")});
$(window).on('resize', function() {mainFunction("docResize")});


function mainFunction(status) {    
    $(".scroll-to").click(function(e) {
        var destination = $(this).attr('href');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(destination).offset().top}, 500);
        
    });
    
    if ($(window).innerWidth() < 1200) {
        console.log("hi");
        $(".left-header").hide();
        $(".right-header").hide();
        $(".start-inner-box img").css("height", "auto");
        $(".learn-more-mobile").html(
            "Click your language to learn more about Chinese therapy: <a style='display: inline' href='more-english.html'>English</a> / <a style='display: inline' href='more-chinese.html'>Chinese</a>");
        $(".top-header").html("Lucy Rao Beauty");
        $(".footer").html("Call (727)-488-0202 | 9365 U.S. Highway 19 North, Suite C, Pinellas Park, FL 33782");
        $(".health").html("<h2 style='text-align: left' class='col-md-6'>Health Benefits</h2><ul class='col-md-6'><b>Our services can provide:</b><br><br><li>Nutrition and health care</li><li>Facial improvements and slimming</li><li>Immuno-enhancement</li><li>Strengthening sinews and bones</li><li>Retaining youthful looks</li><li>Cures for diseases</li><li>Extension of life</li><li>Diet consultation</ul>");
    }
        
    else {
        $(".left-header").show();
        $(".right-header").show();
        $(".start-inner-box img").css("height", 500);
        $(".learn-more-mobile").html("");
        $(".top-header").html("");
        $(".footer").html("");
        $(".health").html("<ul class='col-md-6'><b>Our services can provide:</b><br><br><li>Nutrition and health care</li><li>Facial improvements and slimming</li><li>Immuno-enhancement</li><li>Strengthening sinews and bones</li><li>Retaining youthful looks</li><li>Cures for diseases</li><li>Extension of life</li><li>Diet consultation</ul><h2 class='col-md-6'>Health Benefits</h2>");
    }
    
    //Action commands
    if (status == "docReady") {
        
        
    }
    
}