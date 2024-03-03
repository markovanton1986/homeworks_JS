let cookie = document.getElementById("cookie")
mClick = 0

console.log("start")

cookie.addEventListener("click", () => {

    mClick = mClick + 1;
    document.getElementById("clicker__counter").innerHTML = mClick;

    if (mClick % 2 === 1) {
        cookie.width += 10;
        cookie.height += 10;
    }
    if (mClick % 2 === 0) {
        cookie.width -= 10;
        cookie.height -= 10;
    }
    console.log(mClick % 2);
    console.log("inside");
} )



console.log("finish")