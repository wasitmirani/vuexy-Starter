$((function(){"use strict";var t=$(".remove-wishlist"),e=$(".move-cart"),o="rtl"===$("html").attr("data-textdirection");t.on("click",(function(){$(this).closest(".ecommerce-card").remove(),toastr.error("","Removed Item 🗑️",{closeButton:!0,tapToDismiss:!1,rtl:o})})),e.on("click",(function(){$(this).closest(".ecommerce-card").remove(),toastr.success("","Moved Item To Your Cart 🛒",{closeButton:!0,tapToDismiss:!1,rtl:o})}))}));