const arr = [2, 24, 1, 3, 10];

console.log(
    (arr
        .filter((arr) => arr % 2 === 0))
        .map((arr) => arr * 3)
        .reduce(((acc, arr) => acc + arr))
    );