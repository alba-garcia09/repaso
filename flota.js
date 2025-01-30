function getRandomNumber(max, min) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    return randomNumber
}

// function board(column) {
//     const matrix=[]
//     for (let j = 0; j < column.length; j++) {
//         matrix.push(".")

//     }
//     return matrix
// }

function board(columns, rows) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push("."); // Puedes cambiar "." por otro carácter
        }
        matrix.push(row);
    }

    return matrix;
}

const myBoard = board(5, 3); // 5 columnas, 3 filas
console.log(myBoard);
