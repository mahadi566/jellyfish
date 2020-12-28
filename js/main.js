$(document).ready(function(){
	$('.banner_group').slick({
		autoplay: true,
		fade: true,
		autoplaySpeed: 3000,
     // prevArrow:false,
     // nextArrow:false
     prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-right"></i></button>',
     nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-left"></i></button>',
     responsive: [
   			 {
     		 breakpoint: 1024,
    			  settings: {
     				   slidesToShow: 1,
     				   slidesToScroll: 1,
     				 
   		   }
   			 },
         {
           breakpoint: 768,
               settings: {
               slidesToShow: 1,
             slidesToScroll: 1
         }
        },
  			  {
  				  breakpoint: 576,
  				    settings: {
    			    slidesToShow: 1,
     			    slidesToScroll: 1
    		  }
   			 },
  			  {
  				 breakpoint: 480,
   					   settings: {
   				     slidesToShow: 1,
   			     slidesToScroll: 1
     		 }
  		  },
  		  {
  				 breakpoint: 320,
   					   settings: {
   				     slidesToShow: 1,
   			     slidesToScroll: 1
     		 }
  		  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
 			 ]
 });







 

 $(window).scroll(function(){
   var positionTop = $(document).scrollTop();
  //  console.log(positionTop);

   if(positionTop > 170){
     document.getElementById("manuBarTop").style.display = "block";
     document.getElementById("manuBarTop").style.position = "fixed";
     document.getElementById("manuBarTop").style.opacity = "1";
   }else{
    document.getElementById("manuBarTop").style.display = "none";
   }
   

 });

	 
 $(document).ready(function () {
	new WOW().init();
});


});