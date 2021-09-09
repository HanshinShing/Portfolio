//當滑到物件底部，才顯現
$(document).ready(function() {
		    $(window).scroll(function(){
		        $('.hiding').each(function(i){
		            
		            var btm_of_obj = $(this).offset().top + $(this).outerHeight();
		            var btm_of_window = $(window).scrollTop() + $(window).height();
		            
		            if(btm_of_window > btm_of_obj ){
		                $(this).animate({'opacity':'1'},600); 
		            }
		            
		        }); 
		    
		    });
	    
		});