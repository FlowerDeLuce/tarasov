$(document).ready(function() {
$.validator.addMethod("validcb1", function(value){
		if ($("input[name=agree]:checked").length > 0) return true
		else return false;
	},"");
    $.validator.addMethod("validcb2", function(value){
		if ($("input[name=news]:checked").length > 0) return true
		else return false;
	},"");
	
    
    
 $("#form1").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
            email: {
				required: true,
				minlength: 5
			},
            tel: {
                required: true
                        
            },
            agree: {validcb1:true},
			news: {validcb2:true}
		},
		messages: {
			name: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 2-х символов"
			},
			email: {
				required: "Поле обязательно к заполнению",
				email: "Необходим формат адреса email"	
			},
			tel: {
                required: "Поле обязательно к заполнению"
                
            },
            agree: "Вы не отметили флажок",
			news: "Вы не отметили флажок"
            
		},
     
     errorPlacement: function(error, element) {
			if (element.attr("name") == "name") error.insertAfter($("input[name=name]"));
			if (element.attr("name") == "tel") error.insertAfter($("input[name=tel]"));
			if (element.attr("name") == "email") error.insertAfter($("input[name=email]"));
			if (element.attr("name") == "agree") error.insertAfter($("#agree-line"));
			if (element.attr("name") == "news") error.insertAfter($("#news-line"));
		}	
        
	});
    
});