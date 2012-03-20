$(function(){
    $("ul.dropdown li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
		//$("#select").css('visibility', 'hidden')
    }, function(){
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
		//$("#select").css('visibility', 'visible')	
    });
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
});

$(function(){
    $("ul.menu li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
		//$("#select").css('visibility', 'hidden')
    }, function(){
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
		//$("#select").css('visibility', 'visible')
    });
    $("ul.menu li ul li:has(ul)").find("a:first").append(" &raquo; ");
});