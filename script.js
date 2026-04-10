let chart; // IMPORTANT FIX

function analyze() {

    let algo = document.getElementById("algorithm").value;
    let n = parseInt(document.getElementById("inputSize").value);

    let result = "";

    if (isNaN(n) || n <= 0) {
        document.getElementById("result").innerHTML = "⚠ Enter valid number";
        return;
    }

    let data = [];

    if (algo === "linear") {
        result = `
        📌 Linear Search <br>
        🔢 Operations: ${n} <br>
        ⏱ Time Complexity: O(n)
        `;
        data = Array.from({length: n}, (_, i) => i + 1);
    }

    else if (algo === "binary") {
        let ops = Math.floor(Math.log2(n));
        result = `
        📌 Binary Search <br>
        🔢 Operations: ${ops} <br>
        ⏱ Time Complexity: O(log n)
        `;
        data = Array.from({length: n}, (_, i) => Math.log2(i + 1));
    }

    else if (algo === "bubble") {
        let ops = (n * (n - 1)) / 2;
        result = `
        📌 Bubble Sort <br>
        🔢 Operations: ${ops} <br>
        ⏱ Time Complexity: O(n²)
        `;
        data = Array.from({length: n}, (_, i) => i * i);
    }

    document.getElementById("result").innerHTML = result;

    drawGraph(n, data);
}


function drawGraph(n, data) {

    let ctx = document.getElementById("graph").getContext("2d");

    // destroy old graph (IMPORTANT FIX)
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array.from({length: n}, (_, i) => i + 1),
            datasets: [{
                label: "Time Complexity Growth",
                data: data,
                borderColor: "yellow",
                fill: false
            }]
        }
    });
}