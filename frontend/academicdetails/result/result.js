document.addEventListener("DOMContentLoaded", function () {
    // Sample data (replace with your actual data)
    const resultData = [
        { course: "Assembly Language", grade: "A", cgpa: 4.0, gpa: 4.0, },
        { course: "Internet of Things(IoT)", grade: "A", cgpa: 3.5, gpa: 3.5,},
        { course: "Web development", grade: "A", cgpa: 3.5, gpa: 3.5,},
        { course: "Artificial Intelligence", grade: "A", cgpa: 3.5, gpa: 3.5,},
        { course: "Cloud Computing", grade: "A", cgpa: 3.5, gpa: 3.5,},
        { course: "Operating Systems", grade: "A", cgpa: 3.5, gpa: 3.5,},
        { course: "Web Aesthetics", grade: "A", cgpa: 3.5, gpa: 3.5,},
        // Add more data as needed
    ];

    // Function to create and populate the result table
    function createResultTable(data) {
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

        // Append table to the result table div
        document.getElementById("resultTable").appendChild(table);
    }

    // Call the function with the sample data
    createResultTable(resultData);
});
function showSideBar(){
    const navbar = document.querySelector('.navbar');
    navbar.style.display= 'flex';
  } 