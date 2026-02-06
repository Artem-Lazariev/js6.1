let num = 1
while (num <= 10) {
    console.log(num)
    num++
}
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    console.log("7 * " + 7 + " = " + i*7)
}
let fnum = 15
for (let i = 0;; i++) {
    if (fnum <= i ) {
        break;
    }
    console.log(i+1)
}
let i = 1
while (i <= 20) {
    i += 1
    if ((i % 3 === 0)) {
        continue;

    }

    console.log(i)

}