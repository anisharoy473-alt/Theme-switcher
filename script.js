function changeTheme(theme) {

    // Remove previous themes

    document.body.classList.remove("dark");
    document.body.classList.remove("pink");
    document.body.classList.remove("blue");
    document.body.classList.remove("green");


    // Apply selected theme

    if (theme == "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeName").innerText = "Midnight Dark";

    }

    else if (theme == "pink") {

        document.body.classList.add("pink");

        document.getElementById("themeName").innerText = "Blush Pink";

    }

    else if (theme == "blue") {

        document.body.classList.add("blue");

        document.getElementById("themeName").innerText = "Ocean Blue";

    }

    else if (theme == "green") {

        document.body.classList.add("green");

        document.getElementById("themeName").innerText = "Sage Green";

    }

    else {

        document.body.classList.remove("dark");
        document.body.classList.remove("pink");
        document.body.classList.remove("blue");
        document.body.classList.remove("green");

        document.getElementById("themeName").innerText = "Classic Light";

    }

}
