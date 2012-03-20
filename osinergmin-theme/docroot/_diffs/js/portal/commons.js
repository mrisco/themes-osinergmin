var tabs = {
    load:function(){
        $(".tab_content").hide(); //Hide all content
        $("ul.tabs li:first").addClass("active").show(); //Activate first tab
        $(".tab_content:first").show(); //Show first tab content

        //On Click Event
        $("ul.tabs li").click(function() {
                $("ul.tabs li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content").hide(); //Hide all tab content
                var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
                $(activeTab).fadeIn(); //Fade in the active content
                return false;
        });

        $("#s2").dropdownchecklist( {firstItemChecksAll: true, emptyText: "Todos", icon: {}, width: 108} ); //explicitClose: 'close',

        //$(".iten").autocomplete(cities, {multiple: true,autoFill: true/*,mustMatch: true*/}); coemtado por Andy : Data de prueba
        tabs.SetMsg(document.getElementById('suggest3', false));
        
    },
    
    SetMsg:function(txt, active){
        
        if (txt == null) return;

        if (active) {
            if (txt.value == 'Ejem: Miraflores, Surco') txt.value = '';
        } else {
            if (txt.value == '') txt.value = 'Ejem: Miraflores, Surco';
        }
    }
    
}

var bannerSlide = {
    load:function(){
        $(".paging").show();
	$(".paging a:first").addClass("active");

	//Get size of images, how many there are, then determin the size of the image reel.
	var imageWidth = $(".window").width();
	var imageSum = $(".image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;

	//Adjust the image reel to its new size
	$(".image_reel").css({'width' : imageReelWidth});

	//Paging + Slider Function
	rotate = function(){
            var triggerID = $active.attr("rel") - 1; //Get number of times to slide
            var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide

            $(".paging a").removeClass('active'); //Remove all active class
            $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

            //Slider Animation
            $(".image_reel").animate({
                    left: -image_reelPosition
            }, 500 );

	};

	//Rotation + Timing Event
	rotateSwitch = function(){
            play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
                $active = $('.paging a.active').next();
                if ( $active.length === 0) { //If paging reaches the end...
                        $active = $('.paging a:first'); //go back to first
                }
                rotate(); //Trigger the paging and slider function
            }, 3000); //Timer speed in milliseconds (3 seconds)
	};

	rotateSwitch(); //Run function on launch

	//On Hover
	$(".image_reel a").hover(function() {
            clearInterval(play); //Stop the rotation
	}, function() {
            rotateSwitch(); //Resume rotation
	});

	//On Click
	$(".paging a").click(function() {
            $active = $(this); //Activate the clicked paging
            //Reset Timer
            clearInterval(play); //Stop the rotation
            rotate(); //Trigger rotation immediately
            rotateSwitch(); // Resume rotation
            return false; //Prevent browser jump to link anchor
	});
    }
}

var autoCompletar = {
    load:function(){
        var data_user = ["Miraflores", "San Borja", "Surco"];
        $("#list_user").autocomplete(data_user, properties = {
            matchContains: true,
            minChars: 2,
            max: 100,
            selectFirst: false,
            intro_text: "Tipear Lugar",
            no_result: "Lugar no encontrado"
            
        });

    }
}

var tolHelp = {
    load:function(){
        $('.help').hover(
            function() {
                $('.help_lugar').css({display: "block"});
            },
            function() {
                $('.help_lugar').css({display: "none"});
            }
        );
    }
}

var lighBox = {
    load:function(){
    },

    open:function(e){
        $('#lb_'+e).css({'display':'block'});
		if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$('select.dissappear').css({'display':'none'});
		}
		return false;
    },

    close:function(e){
        $('#lb_'+e).css({'display':'none'});
        return false;
    }
}

var tabsMicuenta = {
    load:function(){
        $(".tab_content2").hide();
	    $("ul.tabs2 li:first").addClass("selected").show();
	    $(".tab_content2:first").show();

		$("ul.tabs2 li").click(function(){
			$("ul.tabs2 li").removeClass("selected");
			$(this).addClass("selected");
			$(".tab_content2").hide();
	
			var selectedTab = $(this).find("a").attr("href");
			$(selectedTab).fadeIn();
			return false;
		});
    }
}

var preFrecuentes = {
    load:function(){
        $(".tab_content_pre").hide();
	$("ul.tabs_pre li:first").addClass("selected_pre").show();
	$(".tab_content_pre:first").show();

	$("ul.tabs_pre li").click(function(){
		$("ul.tabs_pre li").removeClass("selected_pre");
		$(this).addClass("selected_pre");
		$(".tab_content_pre").hide();

		var selectedTab = $(this).find("a").attr("href");
		$(selectedTab).fadeIn();
		return false;
	});
    }
}

var galDecoracion = {
    load:function(){
        var slider = $('.slider2').bxSlider({
            pager: true,
            buildPager: function(slideIndex){
                switch (slideIndex){
                    case 0:
                        return '<li><a href=""><img src="img/img_gal_1.jpg" alt="" width="108" height="90" /></a></li>';
                    case 1:
                        return '<li><a href=""><img src="img/img_gal_1.jpg" alt="" width="108" height="90" /></a></li>';
                    case 2:
                        return '<li><a href=""><img src="img/img_gal_1.jpg" alt="" width="108" height="90" /></a></li>';
                    case 3:
                        return '<li><a href=""><img src="img/img_gal_1.jpg" alt="" width="108" height="90" /></a></li>';
                    case 4:
                        return '<li><a href=""><img src="img/img_gal_1.jpg" alt="" width="108" height="90" /></a></li>';
                }
            }
        });

        $('.bx-pager').jcarousel({scroll: 1,vertical:true});
    }
}

var ubicaInmueble = {
    load:function(){
        $("#s3").dropdownchecklist( {firstItemChecksAll: true, emptyText: "Todos", icon: {}, width: 108} ); //explicitClose: 'close',

        //$(".iten").autocomplete(cities, {multiple: true,autoFill: true/*,mustMatch: true*/}); Comentado por Andy  es Data de prueba
        tabs.SetMsg(document.getElementById('suggest4', false));

    },

    SetMsg:function(txt, active){

        if (txt == null) return;

        if (active) {
            if (txt.value == 'Ejem: Miraflores, Surco') txt.value = '';
        } else {
            if (txt.value == '') txt.value = 'Ejem: Miraflores, Surco';
        }
    }

}

var scroll = {
    load:function(){
        $(".scroll").click(function(event){
            //prevent the default action for the click event
            event.preventDefault();

            //get the full url - like mysitecom/index.htm#home
            var full_url = this.href;

            //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
            var parts = full_url.split("#");
            var trgt = parts[1];

            //get the top offset of the target anchor
            var target_offset = $("#"+trgt).offset();
            var target_top = target_offset.top;

            //goto that anchor by setting the body scroll top to anchor top
            $('html, body').animate({scrollTop:target_top}, 1500);
        });
    }
}

var showdown = {
    load:function(){
        $("#showdnw > .basic a").click(function() {
            if($(this).parent().hasClass('current')) {
                $(this).siblings('.conte').slideUp(300,function() {
                    $(this).parent().removeClass('current');
                });
            } else {
                $('#showdnw .conte').slideUp(300, function() {
                    $(this).parent().removeClass('current');
                });
                $(this).siblings('.conte').slideToggle(300, function() {
                    $(this).parent().toggleClass('current');
                });
            }
            return false;
        });
    }
}

var init = {
    funciones:function(){
        $.ifixpng('img/blank.gif');
        $(".actchat_up,.actchat_down,.actchat_center,.nochat_up,.nochat_center,.nochat_down,.paging,.error_up,.error_center,.error_bottom,.error_mark").ifixpng();
        
        if($(".tabs_home").size()!=0) tabs.load();
        if($(".slide01").size()!=0) bannerSlide.load();
        if($(".maininput").size()!=0) autoCompletar.load();
        if($(".item_lqmtg2").size()!=0) tolHelp.load();

        /*$('#slider1').anythingSlider({
            autoPlay: true,
            width : 855,          // Override the default CSS width
            easing: 'easeInOutExpo'
        });*/

        $('#mycarousel').jcarousel({scroll: 1});
        $('#mycarousel_noticias').jcarousel({scroll: 1});
        $('.mycarousel_pro').jcarousel({scroll: 1});
        $('.mycarousel_flat').jcarousel({scroll: 1});
        
        $('.gal_fotos').jcarousel({scroll:1});

        if($(".pest_reg").size()!=0) tabsMicuenta.load();
        
        //comentado por Carlos Choque 18/08/2011 Carrusel de Imagenes de plantilla
        //if($(".slider2").size()!=0) galDecoracion.load();

        if($(".ubica_in").size()!=0) ubicaInmueble.load();
        if($(".enl_pregfreg").size()!=0) preFrecuentes.load();

        if($("#wrapper").size()!=0) {scroll.load();}
        if($("#showdnw").size()!=0) {showdown.load();}
        
        
    }
}
$(document).ready(init.funciones);