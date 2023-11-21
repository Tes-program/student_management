const personalDetails = [
  { label: 'Student ID', value: '123456' },
  { label: 'First Name', value: 'John' },
  { label: 'Last Name', value: 'Doe' },
  { label: 'Date of Birth', value: 'January 15, 1998' },
  { label: 'Gender', value: 'Male' },
  { label: 'Contact Info', value: 'john.doe@example.com / +1 234 567 890' },
  { label: 'Address', value: '123 Main Street, Cityville' },
  { label: 'Course of Study', value: 'Computer Science' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'School', value: 'School of Engineering' },
  { label: 'Current Level', value: 'Sophomore' },
  { label: 'Account Number', value: '9876543210' },
];

// Function to generate the details HTML
function generateDetailsHTML(details) {
  const detailsContainer = document.getElementById('personalDetailsContainer');
  details.forEach(({ label, value }) => {
    const detailItem = document.createElement('div');
    detailItem.classList.add('detail-item');
    detailItem.innerHTML = `<label for="${label.toLowerCase().replace(/\s/g, '-')}"">${label}:</label><span>${value}</span>`;
    detailsContainer.appendChild(detailItem);
  });
}

// Call the function with the sample data
generateDetailsHTML(personalDetails);