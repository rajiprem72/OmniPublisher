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
    loadPage("dashboard");

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

            const page = this.dataset.page;

            loadPage(page);

        });

    });

}

/*---------------------------------------------------------
    Load Page
----------------------------------------------------------*/

function loadPage(page) {

    const contentArea = document.getElementById("contentArea");

    fetch(`pages/${page}.html`)
        .then(response => {

            if (!response.ok) {
                throw new Error("Page not found");
            }

            return response.text();

        })
        .then(html => {

            contentArea.innerHTML = html;

            document.querySelector(".topbar h3").textContent =
                page.replace("-", " ")
                    .replace(/\b\w/g, c => c.toUpperCase());

        })
        .catch(error => {

            contentArea.innerHTML = `
                <div class="alert alert-danger">
                    Unable to load page : ${page}.html
                </div>
            `;

            console.error(error);

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
