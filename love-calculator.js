var name1 = prompt("Please provide your full name:");
var name2 = prompt("please provide the full name of your crush:");
var lovePercent = Math.random();
lovePercent = lovePercent * 100;
lovePercent = Math.floor(lovePercent) +1;

if (lovePercent === 100) {
    alert(name1 + " and " + name2 + " are a perfect match! 100%!");
} else if (lovePercent > 80) {
    alert(name1 + " and " + name2 + " are a great match! " + lovePercent + "%.");
} else if (lovePercent > 60 && lovePercent <= 80) {
    alert(name1 + " and " + name2 + " are a good match! " + lovePercent + "%.");
} else if (lovePercent > 40 && lovePercent <= 60) {
    alert(name1 + " and " + name2 + " are a decent match! " + lovePercent + "%.");
} else if (lovePercent > 20 && lovePercent <= 40) {
    alert(name1 + " and " + name2 + " are a poor match! " + lovePercent + "%.");
}
else {
    alert(name1 + " and " + name2 + " are a terrible match! " + lovePercent + "%.");
}
// alert(name1 + "'s compatibility with " + name2 + " is " + lovePercent + "%.");


