$(document).ready(function(){

	var switch_icon = $('.style_switcher_icon');
	var style_switch_conti = $('.style_switcher_conti');
	var switch_close_icon = $('.style_switcher_conti .fa-times');
	var proj_item = $('.details .dh-container');
	var proj_itemH = proj_item.width() * 0.8;
	var window_width = $( window ).width();

	


	$.fn.colorSwitchFunc = function(color){
		sessionStorage.setItem('themeColor',color);
	}

	var themeColor = sessionStorage.getItem('themeColor');


	var color = $('.color');
	var color1 = $('.color1');
	var color2 = $('.color2');
	var color3 = $('.color3');
	var color4 = $('.color4');
	var color5 = $('.color5');
	var color6 = $('.color6');
	var color7 = $('.color7');
	var color8 = $('.color8');
	var color9 = $('.color9');
	var color10 = $('.color10');


	// get the elements For multiple color starts

		var color_block = $('.color_block');
		var details_text_wrapper_h1 = $('.details .text-wrapper h1');
		var details_text_wrapper_a_span = $('.details .text-wrapper a span');
		var details_text_wrapper_a_span_i = $('.details .text-wrapper a span i');
		var details_text_wrapper_a_span_bg = $('.details .text-wrapper a span .bg');
		var details_text_wrapper_a_span_i = $('.details .text-wrapper a span i');
		var details_icon_menu_a_i = $('.details .icon_menu a i');
		var details_icon_menu_a_span = $('.details .icon_menu a span');
		var details_title_span = $('.details .title span');
		var s_card_percent_svg_circle = $('.s_card .percent svg circle');
		var unique_icon = $('.unique_icon');
		var cont_right_form_btn = $('.cont_right form button');
		var cont_right_form_btn_i = $('.cont_right form button i');
		var cont_right_form_btn_span = $('.details .cont_right form button span');
		var details_cont_right_form_label_input = $('.details .cont_right form label input');
		var details_cont_right_form_label_textarea = $('.details .cont_right form label textarea');
		var details_dh_container_dh_overlay = $('.details .dh-container .dh-overlay');
		// var loader = $('.loader');







		// $(window).scroll(function(e){
		// 	console.log('Hello');
		// });









		color1.click(function(e){

			color_block.css('background-color','#0056b3');
			details_text_wrapper_h1.css('color','#0056b3');
			details_text_wrapper_a_span.css('border','1px solid #0056b3');
			details_text_wrapper_a_span_bg.css('background-color','#0056b3');
			details_text_wrapper_a_span_i.css('background-color','#0056b3');
			details_icon_menu_a_i.css('background-color','#0056b3');
			details_icon_menu_a_span.css('background-color','#0056b3');
			details_title_span.css('color','#0056b3');
			s_card_percent_svg_circle.css('stroke','#0056b3');
			unique_icon.css('color','#0056b3');
			cont_right_form_btn.css('border','1px solid #0056b3');
			cont_right_form_btn_i.css('background-color','#0056b3');
			cont_right_form_btn_span.css('background-color','#0056b3');
			details_dh_container_dh_overlay.css('background-color','#0056b3');
			// loader.css('background-color','#0056b3');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #0056b3');
				details_cont_right_form_label_textarea.css('border','1px solid #0056b3');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #0056b3');
				details_cont_right_form_label_input.css('border','1px solid #0056b3');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});






		color2.click(function(e){

			color_block.css('background-color','#f72b1c');
			details_text_wrapper_h1.css('color','#f72b1c');
			details_text_wrapper_a_span.css('border','1px solid #f72b1c');
			details_text_wrapper_a_span_bg.css('background-color','#f72b1c');
			details_text_wrapper_a_span_i.css('background-color','#f72b1c');
			details_icon_menu_a_i.css('background-color','#f72b1c');
			details_icon_menu_a_span.css('background-color','#f72b1c');
			details_title_span.css('color','#f72b1c');
			s_card_percent_svg_circle.css('stroke','#f72b1c');
			unique_icon.css('color','#f72b1c');
			cont_right_form_btn.css('border','1px solid #f72b1c');
			cont_right_form_btn_i.css('background-color','#f72b1c');
			cont_right_form_btn_span.css('background-color','#f72b1c');
			details_dh_container_dh_overlay.css('background-color','#f72b1c');
			// loader.css('background-color','#f72b1c');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #f72b1c');
				details_cont_right_form_label_textarea.css('border','1px solid #f72b1c');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #f72b1c');
				details_cont_right_form_label_input.css('border','1px solid #f72b1c');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color3.click(function(e){

			color_block.css('background-color','#8a2be2');
			details_text_wrapper_h1.css('color','#8a2be2');
			details_text_wrapper_a_span.css('border','1px solid #8a2be2');
			details_text_wrapper_a_span_bg.css('background-color','#8a2be2');
			details_text_wrapper_a_span_i.css('background-color','#8a2be2');
			details_icon_menu_a_i.css('background-color','#8a2be2');
			details_icon_menu_a_span.css('background-color','#8a2be2');
			details_title_span.css('color','#8a2be2');
			s_card_percent_svg_circle.css('stroke','#8a2be2');
			unique_icon.css('color','#8a2be2');
			cont_right_form_btn.css('border','1px solid #8a2be2');
			cont_right_form_btn_i.css('background-color','#8a2be2');
			cont_right_form_btn_span.css('background-color','#8a2be2');
			details_dh_container_dh_overlay.css('background-color','#8a2be2');
			// loader.css('background-color','#8a2be2');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #8a2be2');
				details_cont_right_form_label_textarea.css('border','1px solid #8a2be2');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #8a2be2');
				details_cont_right_form_label_input.css('border','1px solid #8a2be2');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color4.click(function(e){

			color_block.css('background-color','#4169e1');
			details_text_wrapper_h1.css('color','#4169e1');
			details_text_wrapper_a_span.css('border','1px solid #4169e1');
			details_text_wrapper_a_span_bg.css('background-color','#4169e1');
			details_text_wrapper_a_span_i.css('background-color','#4169e1');
			details_icon_menu_a_i.css('background-color','#4169e1');
			details_icon_menu_a_span.css('background-color','#4169e1');
			details_title_span.css('color','#4169e1');
			s_card_percent_svg_circle.css('stroke','#4169e1');
			unique_icon.css('color','#4169e1');
			cont_right_form_btn.css('border','1px solid #4169e1');
			cont_right_form_btn_i.css('background-color','#4169e1');
			cont_right_form_btn_span.css('background-color','#4169e1');
			details_dh_container_dh_overlay.css('background-color','#4169e1');
			// loader.css('background-color','#4169e1');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #4169e1');
				details_cont_right_form_label_textarea.css('border','1px solid #4169e1');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #4169e1');
				details_cont_right_form_label_input.css('border','1px solid #4169e1');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color5.click(function(e){

			color_block.css('background-color','#daa520');
			details_text_wrapper_h1.css('color','#daa520');
			details_text_wrapper_a_span.css('border','1px solid #daa520');
			details_text_wrapper_a_span_bg.css('background-color','#daa520');
			details_text_wrapper_a_span_i.css('background-color','#daa520');
			details_icon_menu_a_i.css('background-color','#daa520');
			details_icon_menu_a_span.css('background-color','#daa520');
			details_title_span.css('color','#daa520');
			s_card_percent_svg_circle.css('stroke','#daa520');
			unique_icon.css('color','#daa520');
			cont_right_form_btn.css('border','1px solid #daa520');
			cont_right_form_btn_i.css('background-color','#daa520');
			cont_right_form_btn_span.css('background-color','#daa520');
			details_dh_container_dh_overlay.css('background-color','#daa520');
			// loader.css('background-color','#daa520');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #daa520');
				details_cont_right_form_label_textarea.css('border','1px solid #daa520');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #daa520');
				details_cont_right_form_label_input.css('border','1px solid #daa520');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color6.click(function(e){

			color_block.css('background-color','#ee6192');
			details_text_wrapper_h1.css('color','#ee6192');
			details_text_wrapper_a_span.css('border','1px solid #ee6192');
			details_text_wrapper_a_span_bg.css('background-color','#ee6192');
			details_text_wrapper_a_span_i.css('background-color','#ee6192');
			details_icon_menu_a_i.css('background-color','#ee6192');
			details_icon_menu_a_span.css('background-color','#ee6192');
			details_title_span.css('color','#ee6192');
			s_card_percent_svg_circle.css('stroke','#ee6192');
			unique_icon.css('color','#ee6192');
			cont_right_form_btn.css('border','1px solid #ee6192');
			cont_right_form_btn_i.css('background-color','#ee6192');
			cont_right_form_btn_span.css('background-color','#ee6192');
			details_dh_container_dh_overlay.css('background-color','#ee6192');
			// loader.css('background-color','#ee6192');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #ee6192');
				details_cont_right_form_label_textarea.css('border','1px solid #ee6192');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #ee6192');
				details_cont_right_form_label_input.css('border','1px solid #ee6192');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color7.click(function(e){

			color_block.css('background-color','#9acd32');
			details_text_wrapper_h1.css('color','#9acd32');
			details_text_wrapper_a_span.css('border','1px solid #9acd32');
			details_text_wrapper_a_span_bg.css('background-color','#9acd32');
			details_text_wrapper_a_span_i.css('background-color','#9acd32');
			details_icon_menu_a_i.css('background-color','#9acd32');
			details_icon_menu_a_span.css('background-color','#9acd32');
			details_title_span.css('color','#9acd32');
			s_card_percent_svg_circle.css('stroke','#9acd32');
			unique_icon.css('color','#9acd32');
			cont_right_form_btn.css('border','1px solid #9acd32');
			cont_right_form_btn_i.css('background-color','#9acd32');
			cont_right_form_btn_span.css('background-color','#9acd32');
			details_dh_container_dh_overlay.css('background-color','#9acd32');
			// loader.css('background-color','#9acd32');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #9acd32');
				details_cont_right_form_label_textarea.css('border','1px solid #9acd32');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #9acd32');
				details_cont_right_form_label_input.css('border','1px solid #9acd32');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color8.click(function(e){

			color_block.css('background-color','#fa5b0f');
			details_text_wrapper_h1.css('color','#fa5b0f');
			details_text_wrapper_a_span.css('border','1px solid #fa5b0f');
			details_text_wrapper_a_span_bg.css('background-color','#fa5b0f');
			details_text_wrapper_a_span_i.css('background-color','#fa5b0f');
			details_icon_menu_a_i.css('background-color','#fa5b0f');
			details_icon_menu_a_span.css('background-color','#fa5b0f');
			details_title_span.css('color','#fa5b0f');
			s_card_percent_svg_circle.css('stroke','#fa5b0f');
			unique_icon.css('color','#fa5b0f');
			cont_right_form_btn.css('border','1px solid #fa5b0f');
			cont_right_form_btn_i.css('background-color','#fa5b0f');
			cont_right_form_btn_span.css('background-color','#fa5b0f');
			details_dh_container_dh_overlay.css('background-color','#fa5b0f');
			// loader.css('background-color','#fa5b0f');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #fa5b0f');
				details_cont_right_form_label_textarea.css('border','1px solid #fa5b0f');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #fa5b0f');
				details_cont_right_form_label_input.css('border','1px solid #fa5b0f');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});





		color9.click(function(e){

			color_block.css('background-color','#72b626');
			details_text_wrapper_h1.css('color','#72b626');
			details_text_wrapper_a_span.css('border','1px solid #72b626');
			details_text_wrapper_a_span_bg.css('background-color','#72b626');
			details_text_wrapper_a_span_i.css('background-color','#72b626');
			details_icon_menu_a_i.css('background-color','#72b626');
			details_icon_menu_a_span.css('background-color','#72b626');
			details_title_span.css('color','#72b626');
			s_card_percent_svg_circle.css('stroke','#72b626');
			unique_icon.css('color','#72b626');
			cont_right_form_btn.css('border','1px solid #72b626');
			cont_right_form_btn_i.css('background-color','#72b626');
			cont_right_form_btn_span.css('background-color','#72b626');
			details_dh_container_dh_overlay.css('background-color','#72b626');
			// loader.css('background-color','#72b626');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #72b626');
				details_cont_right_form_label_textarea.css('border','1px solid #72b626');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #72b626');
				details_cont_right_form_label_input.css('border','1px solid #72b626');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});




		color10.click(function(e){

			color_block.css('background-color','#ffb400');
			details_text_wrapper_h1.css('color','#ffb400');
			details_text_wrapper_a_span.css('border','1px solid #ffb400');
			details_text_wrapper_a_span_bg.css('background-color','#ffb400');
			details_text_wrapper_a_span_i.css('background-color','#ffb400');
			details_icon_menu_a_i.css('background-color','#ffb400');
			details_icon_menu_a_span.css('background-color','#ffb400');
			details_title_span.css('color','#ffb400');
			s_card_percent_svg_circle.css('stroke','#ffb400');
			unique_icon.css('color','#ffb400');
			cont_right_form_btn.css('border','1px solid #ffb400');
			cont_right_form_btn_i.css('background-color','#ffb400');
			cont_right_form_btn_span.css('background-color','#ffb400');
			details_dh_container_dh_overlay.css('background-color','#ffb400');
			// loader.css('background-color','#ffb400');

			details_cont_right_form_label_input.focus(function(){
				details_cont_right_form_label_input.css('border','1px solid #ffb400');
				details_cont_right_form_label_textarea.css('border','1px solid #ffb400');
			});

			details_cont_right_form_label_input.focusout(function(){
				details_cont_right_form_label_input.css('border','1px solid transparent');
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
			});

			details_cont_right_form_label_textarea.focus(function(){
				details_cont_right_form_label_textarea.css('border','1px solid #ffb400');
				details_cont_right_form_label_input.css('border','1px solid #ffb400');
			});

			details_cont_right_form_label_textarea.focusout(function(){
				details_cont_right_form_label_textarea.css('border','1px solid transparent');
				details_cont_right_form_label_input.css('border','1px solid transparent');
			});

			

		});


		if(themeColor == 'one'){
			color1.click();
		}else if(themeColor == 'two'){
			color2.click();
		}else if(themeColor == 'three'){
			color3.click();
		}else if(themeColor == 'four'){
			color4.click();
		}else if(themeColor == 'five'){
			color5.click();
		}else if(themeColor == 'six'){
			color6.click();
		}else if(themeColor == 'seven'){
			color7.click();
		}else if(themeColor == 'eight'){
			color8.click();
		}else if(themeColor == 'nine'){
			color9.click();
		}else if(themeColor == 'ten'){
			color10.click();
		}else{
			color7.click();
		}

		


	// get the elements For multiple color ends








	var style_switch_contiH = style_switch_conti.height() + 20;

	style_switch_conti.css('top','-' + style_switch_contiH + 'px');

	proj_item.css('height',proj_itemH + 'px');

	switch_icon.click(function(){

		switch_icon.css('transform','translateY(-100%)');
		style_switch_conti.css('top','0px');
		style_switch_conti.css('visibility','visible');
		style_switch_conti.css('transition-delay','0.2s');
		switch_icon.css('transition-delay','0s');

	});

	switch_close_icon.click(function(){

		style_switch_conti.css('top','-' + style_switch_contiH + 'px');
		switch_icon.css('transform','translateY(0px)');
		style_switch_conti.css('transition-delay','0s');
		switch_icon.css('transition-delay','0.2s');

	});

	$(window).resize(function(){
		var proj_itemH = proj_item.width() * 0.8;
		proj_item.css('height',proj_itemH + 'px');
	});



	// profile image starts here

		var profile_image = $('.details .profile_img');

		profile_image_w = profile_image.width();

		if(window_width < 992){
			profile_image.css('height',profile_image_w + 'px');
		}


	$(window).resize(function(){

		var profile_image = $('.details .profile_img');

		profile_image_w = profile_image.width();

		if(window_width < 992){
			profile_image.css('height',profile_image_w + 'px');
		}

	});




	




	// profile image ends here



	// toggle starts here

		var container_fluid = $('.container-fluid');
		var toggle = $('.container-fluid .toggle');

		toggle.click(function(){
			toggle.toggleClass('active');
			container_fluid.toggleClass('active');
			$('body').toggleClass('active');
			$('html').toggleClass('active');
		});



	//toggle ends here






	// direction aware hove For portfolio items starts here


			$('.details .dh-container').directionalHover();

			$('.details .dh-container').directionalHover({

		  // CSS class for the overlay
		  overlay: ".details .dh-container .dh-overlay",

		  // Linear or swing
		  easing: "swing",

		  // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
		  speed: 400
		  
		});




	// direction aware hove For portfolio items ends here



	// loading animation starts here


		// $(document).ready(function() {
		// 	// Animate loader off screen
		// 	$(".loader").fadeOut("slow");
		// });





	// loading animation ends here











});