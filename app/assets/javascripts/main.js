jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#top', offset: 400});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -80}, {easing:'easeOutQuad'});

        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();

    /* ======= jQuery FitVids - Responsive Video ======= */
    $("#video-container").fitVids();



    /* ======= Style Switcher ======= */
    $('#config-trigger').on('click', function(e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();
        } else {
            $panel.show();
        }
        e.preventDefault();
    });

    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-panel').hide();
    });


    $('#color-options a').on('click', function(e) {
        var $styleSheet = $(this).attr('data-style');
        var $logoImage = $(this).attr('data-logo');
		$('#theme-style').attr('href', $styleSheet);
		$('#logo-image').attr('src', $logoImage);

		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');

		e.preventDefault();

	});

	$('#device-options a').on('click', function(e) {
        var $cssClass = $(this).attr('data-class');
        var $deviceType = $(this).attr('data-type');

        var $iphone = $('#promo').find('.iphone');
        var $android = $('#promo').find('.android');
        var $ipad = $('#promo').find('.ipad');

        if($deviceType === "iphone") {
            $ipad.hide();
            $android.hide();
            $iphone.show();
        }

        if($deviceType === "ipad") {
            $iphone.hide();
            $android.hide();
            $ipad.show();
        }

        if($deviceType === "android") {
            $iphone.hide();
            $ipad.hide();
            $android.show();
        }

        if($cssClass === "iphone-white") {
            $iphone.removeClass('iphone-black').addClass('iphone-white');
        }

        if($cssClass === "iphone-black") {
            $iphone.removeClass('iphone-white').addClass('iphone-black');
        }

        if($cssClass === "ipad-black") {
            $ipad.removeClass('ipad-white').addClass('ipad-black');
        }

        if($cssClass === "ipad-white") {
            $ipad.removeClass('ipad-black').addClass('ipad-white');
        }

		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');

		e.preventDefault();

	});

});

$(function() {
    $('#alertMe').click(function(e) {
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e) {
        e.preventDefault();
    });

    $('a.pop').popover();
    $('[rel="tooltip"]').tooltip();

    $('.next').click(function(){
        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#'+nextId+']').tab('show');
    })
});

$(function () {

    var active = true;

    $('#collapse-init').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', '');
            $(this).text('Enable accordion behavior');
        } else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');
            $(this).text('Disable accordion behavior');
        }
    });

    $('#accordion').on('show.bs.collapse', function () {
        if (active) $('#accordion .in').collapse('hide');
    });

});

//Minimizes the menu on the mobile after clicking
    jQuery('.navbar-collapse .nav > li > a').click(function(){
        jQuery('.collapse.in').removeClass('in').css('height', '0');
    });
