var inputContainer=document.querySelector(".auth-input-wrapper");inputContainer.onkeyup=function(e){var n=e.srcElement,a=parseInt(n.attributes.maxlength.value,10),t=n.value.length;if(8===e.keyCode){if(0===t)for(var r=n;(r=r.previousElementSibling)&&null!=r;)if("input"==r.tagName.toLowerCase()){r.focus();break}}else if(t>=a)for(r=n;(r=r.nextElementSibling)&&null!=r;)if("input"==r.tagName.toLowerCase()){r.focus();break}};const numeralMask=document.querySelectorAll(".numeral-mask");numeralMask.length&&numeralMask.forEach((e=>{new Cleave(e,{numeral:!0})}));