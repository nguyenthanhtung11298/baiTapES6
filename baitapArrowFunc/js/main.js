const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermiillion", "lavender", "celadon", "saffron", "fuschi", "cinnabar"]

// click = className=>{
//     console.log(className)
//     document.querySelector('#house').className="house "+className;
// }

// onclick="click('${colorList[i]}'
loadColor = colorList => {
    let content = '';
    for (let i = 0; i < colorList.length; i++) {
        content += `<button class="color-button ${colorList[i]}")"></button>`
    }
    document.querySelector("#colorContainer").innerHTML = content;
}
loadColor(colorList);

// Get the container element
let btnContainer = document.getElementById("colorContainer");

// Get all buttons with class="color-button" inside the container
let btns = btnContainer.getElementsByClassName("color-button");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    let color = colorList[i];
    
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        
        console.log(current)

        document.getElementById('house').className = "house " + color;
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}





