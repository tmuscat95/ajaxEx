var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if(XHR.readyState === 4 && XHR.status === 200) //4 = ready
            console.log(XHR.responseText);
        else
            console.log("Error");  
}

XHR.open("GET","https://api.github.com/zen");
XHR.send();

