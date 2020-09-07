let toggleNavStatus = false;

let toggleNav = function() { /*tu mamy przyklad anonymous function */
  let getSidebar = document.querySelector(".nav-sidebar");   /*I want to do something in the html document that's why using document, querySelector is a method that we can use to grab something from HTML */
  let getSidebarUl = document.querySelector(".nav-sidebar ul"); /*getSidebarUl is a name that we assign ourselves to the 'let' variable*/
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); /* there are a few a tags and querySelector only takes out one, so we need to use querySelectorAll to grab all of them */

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible"; /*in here I connect js to css file that I want to edit, .style is the name of the file and .visibility is a parameter inside the css file, getSidebarUl is linked to .nav-sidebar ul so it all makes sense */
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) { /*there are 3 things inside 'for': i = 0 is the starting number, i < arrayLength means that we want to stop looping process once we get to the number of length of arrays, i++ means that each time we run the loop, we want to increase by 1*/
      getSidebarLinks[i].style.opacity = "1"; /*we grab an array in here, and i = 0 because this is the first number in programming*/
    }

    toggleNavStatus = true; /*Jak skrypt sie skonczy i zmieni z false do true to zacznie sie command na dole if else */
  }

  else  if  (toggleNavStatus === true) { /*in here we basically change everything back to the default styling so it looks lik before clicking the button*/
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) { /*there are 3 things inside 'for': i = 0 is the starting number, i < arrayLength means that we want to stop looping process once we get to the number of length of arrays, i++ means that each time we run the loop, we want to increase by 1*/
      getSidebarLinks[i].style.opacity = "0"; /*we grab an array in here, and i = 0 because this is the first number in programming*/
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}
