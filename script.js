function calculateFLAMES() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');

    if (!name1 || !name2) {
        document.getElementById("result").innerText = "⚠ Please enter both names!";
        document.getElementById("result-container").style.opacity = "1";
        return;
    }

    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    name1Arr.forEach(letter => {
        let index = name2Arr.indexOf(letter);
        if (index !== -1) {
            name2Arr.splice(index, 1);
            name1Arr.splice(name1Arr.indexOf(letter), 1);
        }
    });

    let remainingCount = name1Arr.length + name2Arr.length;
    let flames = ["Friends", "Lovers", "Affection", "Marriage", "Enemies", "soulmates"];

    let index = (remainingCount % flames.length) - 1;
    if (index < 0) {
        index = flames.length - 1;
    }

    document.getElementById("result").innerText = `💖 Your relationship is: ${flames[index]}! 💖`;
    document.getElementById("result-container").style.opacity = "1";
}
