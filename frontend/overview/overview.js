const canvas = document.getElementById('lineGraph');
  const ctx = canvas.getContext('2d');

  const data = {
    labels: ['SM 1', 'SM 2', 'SM 3', 'SM 4', 'SM 5', 'SM 6', 'SM 7', 'SM 8', 'SM 9', 'SM 10'],
    datasets: [
      {
        label: 'GPA',
        data: [3.5, 3.7, 3.6, 3.8, 3.9, 3.8, 3.7, 3.6, 3.5, 3.4],
        borderColor: 'grey',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'CGPA',
        data: [3.0, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.0],
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Semesters',
          },
        },
        y: {
          title: {
            display: true,
            text: 'GPA/CGPA',
          },
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);

  // Add this to your existing JavaScript code

function showSideBar(){
  const navbar = document.querySelector('.navbar');
  navbar.style.display= 'flex';
}
function searchFunction(event) {
  // Check if the Enter key is pressed
  if (event.key === 'Enter') {
    var input, filter, tabs, dropdownItems, i, j, tab, dropdownItem, txtValue, pageLink, matchingPage;

    input = document.querySelector('.input-search');
    filter = input.value.toLowerCase();
    tabs = document.querySelectorAll('.tabs .tab');
    dropdownItems = document.querySelectorAll('.dropdown-content a');

    // Loop through all tabs and check if any matches the search query
    for (i = 0; i < tabs.length; i++) {
      tab = tabs[i];
      txtValue = tab.textContent.toLowerCase() || tab.innerText.toLowerCase(); // Ensure both filter and text are lowercase

      // Case-insensitive search
      if (txtValue.includes(filter)) {
        // Get the link of the matching page
        pageLink = tab.querySelector('a').getAttribute('href');
        matchingPage = true;
        break; // Exit the loop if a match is found
      }
    }

    // If no match is found in tabs, check dropdown items
    if (!matchingPage) {
      for (j = 0; j < dropdownItems.length; j++) {
        dropdownItem = dropdownItems[j];
        txtValue = dropdownItem.textContent.toLowerCase() || dropdownItem.innerText.toLowerCase(); // Ensure both filter and text are lowercase

        // Case-insensitive search
        if (txtValue.includes(filter)) {
          // Get the link of the matching page
          pageLink = dropdownItem.getAttribute('href');
          matchingPage = true;
          break; // Exit the loop if a match is found
        }
      }
    }

    // If a matching page is found, navigate to it; otherwise, show an error
    if (matchingPage) {
      window.location.href = pageLink;
    } else {
      alert('No such page found.'); // You can use a more sophisticated UI element for the error message
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // Sample timetable data (replace this with your actual data)
  const timetableData = [
    { weekday: 'Monday', course: 'Math 101', lecturer: 'Professor Smith', venue: 'Room 101' },
    { weekday: 'Tuesday', course: 'History 202', lecturer: 'Dr. Johnson', venue: 'Room 203' },
    { weekday: 'Wednesday', course: 'Physics 301', lecturer: 'Professor Brown', venue: 'Room 302' },
    { weekday: 'Thursday', course: 'English 201', lecturer: 'Dr. Davis', venue: 'Room 201' },
    { weekday: 'Friday', course: 'Computer Science 401', lecturer: 'Prof. Wilson', venue: 'Room 401' },
  ];

  // Get the timetable table
  const timetableTable = document.getElementById('timetable');

  // Populate the timetable table with data
  timetableData.forEach(item => {
    const row = timetableTable.insertRow(-1); // Insert a row at the end of the table
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    // Populate cells with data
    cell1.textContent = item.weekday;
    cell2.textContent = item.course;
    cell3.textContent = item.lecturer;
    cell4.textContent = item.venue;
  });
});