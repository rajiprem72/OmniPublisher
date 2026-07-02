/*=========================================================
  OmniPublisher
  Version : 1.0.0
  File    : app.js
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("====================================");
    console.log("OmniPublisher");
    console.log("Version 1.0.0");
    console.log("Application Started Successfully");
    console.log("====================================");

    initializeMenu();

});


/*---------------------------------------------------------
    Initialize Sidebar Menu
----------------------------------------------------------*/

function initializeMenu() {

    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            menuItems.forEach(li => li.classList.remove("active"));

            this.classList.add("active");

            console.log(this.innerText.trim() + " Selected");

        });

    });

}


/*---------------------------------------------------------
    Utility Functions
----------------------------------------------------------*/

function showMessage(message){

    console.log(message);

}


/*---------------------------------------------------------
    Future Modules
----------------------------------------------------------

Dashboard

Channels

New Post

Platforms

History

Analytics

Settings

Help

These modules will be implemented in future versions.

----------------------------------------------------------*/
