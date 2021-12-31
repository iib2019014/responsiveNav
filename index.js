sidenav_head = document.getElementById("sidenav-head");
sidenav_texts = document.getElementById("sidenav-texts");
sidenav_links_icons = document.getElementById("sidenav-links-icons");
sidenav_status = false;

sidenav_head.addEventListener("click", function(event) {
    if(window.innerWidth <= 445) {
        if(!sidenav_status) {
            sidenav_links_icons.classList.add("sidenav-links-icons-un-collapse");
            sidenav_status = true;
        }
    
        else {
            sidenav_links_icons.classList.add("sidenav-links-icons-collapse");
    
            setTimeout(function() {
                sidenav_links_icons.classList.remove("sidenav-links-icons-collapse");
                sidenav_links_icons.classList.remove("sidenav-links-icons-un-collapse");
                sidenav_status = false;
            }, 500);
        }
    }

    else {
        if(!sidenav_status) {
            sidenav_texts.classList.add("sidenav-texts-un-collapse");
            sidenav_status = true;
        }
    
        else {
            sidenav_texts.classList.add("sidenav-texts-collapse");
    
            setTimeout(function() {
                sidenav_texts.classList.remove("sidenav-texts-collapse");
                sidenav_texts.classList.remove("sidenav-texts-un-collapse");
                sidenav_status = false;
            }, 500);
        }
    }
})