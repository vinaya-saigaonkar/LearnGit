console.log("Ajax tutorial in one vedio");

let fb=document.getElementById('fetchbtn');
fb.addEventListener('click',buttonClickHandler);

function buttonClickHandler()
{

    console.log("you have clicked the button fb");

    //instansiate an xhr or xml object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts', true);// here true means asynchronous means i don't want to block the page.
    xhr.setRequestHeader('Content-type','application/json');

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("onprogress");
    }

   //what to do when response is ready
    xhr.onload=function ()
    {
        console.log(this.responseText)
    }

   // only triggers if the request couldn't be made at all
    xhr.onerror = function() { 
        alert(`Network Error`);
      };
      

    //send the request
    params='{"id":"101","title": "foo", "body": "bar","userId": "1"}';
    xhr.send(params);


}