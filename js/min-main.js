var openBtn=document.querySelector(".button-footer"),modal=document.querySelector(".modal"),closeBtn=modal.querySelector(".close");openBtn.addEventListener("click",function(e){e.preventDefault(),modal.style.display="block"}),closeBtn.addEventListener("click",function(){modal.style.display="none"});
