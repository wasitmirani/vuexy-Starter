$((function(){"use strict";var t="rtl"===$("html").attr("data-textdirection"),n=$(".basic-ratings"),r=$(".custom-svg-ratings"),a=$(".multi-color-ratings"),e=$(".half-star-ratings"),i=$(".full-star-ratings"),l=$(".read-only-ratings"),o=$(".onset-event-ratings"),s=$(".onChange-event-ratings"),g=$(".methods-ratings"),h=$(".btn-initialize"),c=$(".btn-destroy"),d=$(".btn-get-rating"),u=$(".btn-set-rating");if(n.length&&n.rateYo({rating:3.6,rtl:t}),r.length&&r.rateYo({rating:3.2,starSvg:"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'-></path>",rtl:t}),a.length&&a.rateYo({rtl:t,multiColor:{startColor:"#ea5455",endColor:"var(--bs-primary)"}}),e.length&&e.rateYo({rtl:t,rating:2}),i.length&&i.rateYo({rtl:t,rating:2}),l.length&&l.rateYo({rating:2,rtl:t}),o.length&&o.rateYo({rtl:t}).on("rateyo.set",(function(t,n){alert("The rating is set to "+n.rating+"!")})),s.length&&s.rateYo({rtl:t}).on("rateyo.change",(function(t,n){var r=n.rating;$(this).parent().find(".counter").text(r)})),g.length){var w=g.rateYo({rtl:t});h.length&&h.on("click",(function(){w.rateYo({rtl:t})})),c.length&&c.on("click",(function(){w.hasClass("jq-ry-container")?w.rateYo("destroy"):window.alert("Please Initialize Ratings First")})),d.length&&d.on("click",(function(){if(w.hasClass("jq-ry-container")){var t=w.rateYo("rating");window.alert("Current Ratings are "+t)}else window.alert("Please Initialize Ratings First")})),u.length&&u.on("click",(function(){w.hasClass("jq-ry-container")?w.rateYo("rating",1):window.alert("Please Initialize Ratings First")}))}}));
