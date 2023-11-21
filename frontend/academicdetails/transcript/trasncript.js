document.addEventListener("DOMContentLoaded", function () {
    // Sample data for Semester 1 (replace with your actual data)
    const resultData1 = [
        { course: "Assembly Language", grade: "A", cgpa: 4.0, gpa: 4.0, },
        { course: "Internet of Things(IoT)", grade: "A", cgpa: 3.5, gpa: 3.5, },
        { course: "Web development", grade: "A", cgpa: 3.5, gpa: 3.5, },
        { course: "Artificial Intelligence", grade: "A", cgpa: 3.5, gpa: 3.5, },
        { course: "Cloud Computing", grade: "A", cgpa: 3.5, gpa: 3.5, },
        { course: "Operating Systems", grade: "A", cgpa: 3.5, gpa: 3.5, },
        { course: "Web Aesthetics", grade: "A", cgpa: 3.5, gpa: 3.5, },
        // Add more data as needed
    ];

    // Sample data for Semester 2 (replace with your actual data)
    const resultData2 = [
        // Data for the second semester result table
    ];

    // Sample data for Semester 3 (replace with your actual data)
    const resultData3 = [
        // Data for the third semester result table
    ];

    // Function to create and populate the result table
    function createResultTable(data, tableId) {
        const table = document.createElement("table");

        // Create table header
        const headerRow = table.insertRow();
        for (const key in data[0]) {
            if (key !== "link") {
                const th = document.createElement("th");
                th.textContent = key.toUpperCase();
                headerRow.appendChild(th);
            }
        }

        // Create table rows
        data.forEach((row) => {
            const tr = table.insertRow();
            for (const key in row) {
                if (key !== "link") {
                    const td = tr.insertCell();
                    // Add regular text content
                    td.textContent = row[key];
                }
            }
        });

        // Append table to the specified result table div
        document.getElementById(tableId).appendChild(table);
    }

    // Call the function with the sample data for each semester
    createResultTable(resultData1, "resultTable1");
    createResultTable(resultData2, "resultTable2");
    createResultTable(resultData3, "resultTable3");
});