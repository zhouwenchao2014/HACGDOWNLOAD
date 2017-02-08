$(function(){
	var innerText = $("body")[0].outerHTML;
	var patrn= new RegExp("[A-Za-z0-9]{40}","g");
    if ((result = innerText.match(patrn)) != null){
    	var length=result.length;
    	for(var i=0;i<length;i++){
    		value=result[i];
    		innerText = innerText.replace(value,"<a href='magnet:?xt=urn:btih:"+value+"'>"+value+"</a>");
    	}
    	$("body")[0].outerHTML=innerText;
    }
});