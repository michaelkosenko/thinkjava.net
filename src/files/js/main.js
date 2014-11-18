
$(document).ready(function() {

	$(window).resize(function(){
		$(".rslides").height($(window).height());
		$(".rslides-bottom").height($(window).height()); 
	});

	$(".rslides").height($(window).height());
	$(".rslides-bottom").height($(window).height()); 


	$(".rslides").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 1000,
		namespace: "centered-btns",
		prevText: "",
		nextText: ""
	});// slider

	$(".rslides-bottom").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 1200,
		namespace: "large-btns",
		prevText: "",
		nextText: ""
	});// slider-bottom(about-page)


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
        	$('.header-wrap').css("background-color","rgba(0,0,0, .39)");
        	$('.submenu').removeClass('menu-hidden');
        } else {
        	$('.header-wrap').css("background-color","");
        	$('.submenu').addClass('menu-hidden');
        }
    });// scroll header

    $('.main-nav li').hover(
    function() {
      $('.menu-toggle', this).slideDown(300);
     },
     function() {
      $('.menu-toggle', this).slideUp(200);
    });//hover on gifts

    var btnScroll = $('#services');
    var btnScroll2 = $('#blog');
    var btnBouquets = $('.bouquets-content');
    var btnNews = $('.news');
    btnScroll.on('click', function(){
    	$('html,body').animate({scrollTop:btnBouquets.offset().top}, 800);
    	return false;
    });// click on services

     btnScroll2.on('click', function(){
    	$('html,body').animate({scrollTop:btnNews.offset().top}, 800);
    	return false;
    });//click on blog

	$('.search-btn').on('mouseover', function(){
       $('.search-on').animate({'width':'130', 'border':'1px solid #eee', 'background': '#151515'},600);
	});// show input search 

    $('.search-on').on('blur', function(){
    	$('.search-on').animate({'width':'0', 'border':'0', 'background': '0'},600);
    });// hide input search

	$('.read-more').on('click',
	function(){
		$('.hidden-info').slideDown(400);
		$('.read-more').hide();
		return false;
	});// show more content (brands page)

	$(document).ready(function(){
		$(".chosen").chosen()
	});// styled select

	$("#example_id").ionRangeSlider({
	type: 'double',
	hasGrid: false,
	prettify: false,
	hideMinMax: true,
	hideFromTo: true,
	onChange: function (obj) {
		var sliderVal=$("#example_id").val();
		sliderVal=sliderVal.split(";");
		$(".start-price").val(sliderVal[0]);
		$(".end-price").val(sliderVal[1]);
		}
	});//inputs get slider data

	 $('.btn-filter').on('click', function() {
       $('.brands-form-wrap').parent().toggleClass("open");
    });// show/hide filters

	var latlng = new google.maps.LatLng(50.4560355,30.5326905); //start map
	var mapZoom=12;
	var mapstyles = [ { "stylers": [ { "invert_lightness": false }, { "weight": 0}, { "hue": "black" }, { "visibility": "on" }, { "saturation": -100 }, { "lightness": 5 }, { "gamma": 1 } ] } ];
	styledMapType = new google.maps.StyledMapType(mapstyles, { name: 'Styled' });
	var mapOptions = {
	zoom: mapZoom,
	zoomControl: false,
	disableDoubleClickZoom: true,
	center: latlng,  
	mapTypeControlOptions: {  
	mapTypeIds: ['Styled']},
	mapTypeId: 'Styled',    
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	panControl: false,
	disableDefaultUI: true };

	if($('#map-canvas').get(0)) {

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.mapTypes.set('Styled', styledMapType);
	}


	var myLatlng = new google.maps.LatLng(50.381402, 30.373893);// Krasnoarmeyskaya street
	var image = 'images/marker-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"Krasnoarmeyskaya street!"
       });

		google.maps.event.addListener(marker, 'click', function() {
		window.location = "http://www.google.com"
		});

	var myLatlng = new google.maps.LatLng(50.446566, 30.506935);// Pirogova street
	var image = 'images/marker-big-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"Pirogova Street!"
       });

		google.maps.event.addListener(marker, 'click', function() {
		window.location = "http://frontender.info"
		});


	var myLatlng = new google.maps.LatLng(50.439017, 30.523699);// Sportivnaya street
	var image = 'images/marker-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"Sportivnaya Street!"
       });

		google.maps.event.addListener(marker, 'click', function() {
		window.location = "http://www.football.ua"
		});

	var myLatlng = new google.maps.LatLng(50.446430, 30.513870);// Vladimirskaya street
	var image = 'images/marker-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"vladimirskaya Street!"
       });

		google.maps.event.addListener(marker, 'click', function() {
		window.location = "http://facebook.com"
		});

	var myLatlng = new google.maps.LatLng(50.472967, 30.435927);// Rigskaya street 
	var image = 'images/marker-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"Rigskaya Street!"
       });

		google.maps.event.addListener(marker, 'click', function() {
		window.location = "http://www.github.com"
		}); // end map 

	var latlng = new google.maps.LatLng(50.446626, 30.507111);// flagman map
	var mapZoom=18;
	var mapstyles = [ { "stylers": [ { "invert_lightness": false }, { "weight": 0}, { "hue": "black" }, { "visibility": "on" }, { "saturation": -100 }, { "lightness": 5 }, { "gamma": 1 } ] } ];
	styledMapType1 = new google.maps.StyledMapType(mapstyles, { name: 'Styled' });
	var mapOptions = {
	zoom: mapZoom,
	zoomControl: false,
	disableDoubleClickZoom: true,
	center: latlng,  
	mapTypeControlOptions: {  
	mapTypeIds: ['Styled']},
	mapTypeId: 'Styled',    
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	panControl: false,
	disableDefaultUI: true };

	if($('#map-flagman').get(0)) {
	var map = new google.maps.Map(document.getElementById('map-flagman'), mapOptions);
	map.mapTypes.set('Styled', styledMapType);
}

	var myLatlng = new google.maps.LatLng(50.446626, 30.507111); // Krasnoarmeyskaya street
	var image = 'images/marker-big-img.png';
	var marker = new google.maps.Marker({
                       position: myLatlng,
                       map: map,
                       icon: image,
                       title:"Krasnoarmeyskaya street!"
       });// end flagman map


});// document

