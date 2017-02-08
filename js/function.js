$(function(){
	var innerText = $("body")[0].outerHTML;
	var patrn= new RegExp("[A-Za-z0-9]{40}","g");
	var source=[];
    if ((result = innerText.match(patrn)) != null){
    	var length=result.length;
    	var isContain=false;
    	for(var i=0;i<length;i++){
    		value=result[i];
    		if(source!=null){
    			for(var index=0;index<source.length;index++){
    				if(source[index]==value){
    					isContain=true;
    				}
    			}
    		}
    		if(!isContain){
    			source.push(value);
    			innerText = innerText.replace(value,"<a href='magnet:?xt=urn:btih:"+value+"'>"+value+"</a>");
    		} 
    	}
    	$("body")[0].outerHTML=innerText;
    }
});