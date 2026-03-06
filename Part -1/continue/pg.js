let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
let i = 1;

while (i <= 10) {
    if (i == 6) {
        i++;       // increment first
        continue;  // then skip printing
    }
    console.log(i);
    i++;
}
