let chars = "_← ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let index = 0;
let text = "";
let lastTypeTime = Date.now();

$(() => {
    $(window).on("keypress", () => {
        lastTypeTime = Date.now();
        index = (index + 1) % chars.length;
        $("#tip").text(chars[index]);
    });
    $(window).on("click", () => {
        lastTypeTime = Date.now();
        index = (index + 1) % chars.length;
        $("#tip").text(chars[index]);
    });
    setInterval(() => {
        if (Date.now() - lastTypeTime > 500) {
            if (chars[index] != "_") {
                if (chars[index] === "←") {
                    if (text.length > 0) {
                        text = text.slice(0, text.length - 1);
                    }
                } else {
                    text += chars[index];
                }
                if (text.length > 0) {
                    $("#display").text(text);
                } else {
                    $("#display").text("Press any key to type.");
                }
            }
            index = 0;
            $("#tip").text(chars[index]);
            lastTypeTime = Date.now();
        }
    }, 30);
});
