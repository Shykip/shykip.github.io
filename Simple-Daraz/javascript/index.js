// calls sepcified function each time when scrolled
addEventListener('scroll', scrollReveal);
addEventListener('resize', windowChange);

// scroll reveal animation
function scrollReveal(){
    if(window.innerHeight > document.querySelector(".infoLeft").getBoundingClientRect().y){
        document.querySelector(".infoLeft").style.animation = "popOut 1s ease 0s forwards";
    }
    if(window.innerHeight > document.querySelector(".contentsBox").getBoundingClientRect().y){
        document.querySelector(".contentsBox").style.animation = "slideinRightLeft 1s ease 0s forwards";
    }
    if(window.innerHeight > document.querySelector(".loadMore").getBoundingClientRect().y){
        document.querySelector(".loadMore").style.animation = "popOut 1s ease 0s forwards";
    }
}

// dropdownmenu visibility
function windowChange(){
    if(window.innerWidth >= 1380){
        document.querySelector(".dropDownMenuButton").style.display = "none";
        document.querySelector(".dropDownMenu").style.display = "none";
    }
    else{
        document.querySelector(".dropDownMenuButton").style.display = "flex";
    }
}

// content reveal onclick
{
    function openShop(){
        document.querySelector(".itemBanner").style.display = "none";
        document.querySelector(".featuresContainer").style.display = "none";
        document.querySelector(".infoContainer").style.display = "none";
        document.querySelector(".shopNavContainer").style.animation = "slideinRightLeft 1s ease 0s forwards";
        document.querySelector(".contentsBox").style.animation = "slideinRightLeft 1s ease 0s forwards";
        document.querySelector(".loadMore").style.animation = "popOut 1s ease 0s forwards";
    }
    
    function openHome(){
        document.querySelector(".itemBanner").style.display = "flex";
        document.querySelector(".featuresContainer").style.display = "flex";
        document.querySelector(".infoContainer").style.display = "flex";
        document.querySelector(".itemBanner").style.display = "flex";
        document.querySelector(".itemBanner").style.display = "flex";
        document.querySelector(".itemBanner").style.display = "flex";
        document.querySelector(".itemBanner").style.display = "flex";
    }
    
    function openDropDownMenu(){
        document.querySelector(".dropDownMenuButton").style.display = "none";
        document.querySelector(".dropDownMenu").style.display = "flex";
    }
    
    function closeDropDownMenu(){
        document.querySelector(".dropDownMenuButton").style.display = "flex";
        document.querySelector(".dropDownMenu").style.display = "none";
    }
}

// displaying item on the basis userinput
{
    function itemSearchSort(){
        userSearchInput = document.querySelector(".searchInput").value;
        itemVisibility(userSearchInput);
    }
    
    function itemVisibility(userSearchInput){
        document.querySelector("#gucciPants").style.display = "none";
        document.querySelector("#airforce").style.display = "none";
        document.querySelector("#diorBag").style.display = "none";
        document.querySelector("#stripeShirt").style.display = "none";
        document.querySelector("#rolex").style.display = "none";
        document.querySelector("#tshirt").style.display = "none";
        document.querySelector("#airJordan").style.display = "none";
        document.querySelector("#plainCut").style.display = "none";
        switch(userSearchInput){
            case "gucci": document.querySelector("#gucciPants").style.display = "flex"; break;
            case "airforce": document.querySelector("#airforce").style.display = "flex"; break;
            case "bag": document.querySelector("#diorBag").style.display = "flex"; break;
            case "rolex": document.querySelector("#rolex").style.display = "flex"; break;
            case "airjordan": document.querySelector("#airJordan").style.display = "flex"; break;
            case "tshirt":  document.querySelector("#tshirt").style.display = "flex";
                            document.querySelector("#stripeShirt").style.display = "flex";
                            break;
            case "plaincut": document.querySelector("#plainCut").style.display = "flex"; break;
            case "stripe": document.querySelector("#stripeShirt").style.display = "flex"; break;
            default :   document.querySelector("#gucciPants").style.display = "flex";
                        document.querySelector("#airforce").style.display = "flex";
                        document.querySelector("#diorBag").style.display = "flex";
                        document.querySelector("#stripeShirt").style.display = "flex";
                        document.querySelector("#rolex").style.display = "flex";
                        document.querySelector("#tshirt").style.display = "flex";
                        document.querySelector("#airJordan").style.display = "flex";
                        document.querySelector("#plainCut").style.display = "flex";
                        document.querySelector(".searchInput").value = "";
                        alert("no results were found!");
        }
    }
}