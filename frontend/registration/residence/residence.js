const residences = [
    "Crystal Hall",
    "Ember Lodge",
    "Tranquil Heights",
    "Golden Haven",
    "Serene Pavilion",
    "Sapphire Towers",
    "Amber House",
    "Rosewood Manor",
    "Harmony Court",
    "Mystic Gardens",
    "Opal Residence",
    "Azure Retreat",
    "Silver Vale",
    "Ivory Estate",
    "Verdant View",
    "Crimson Plaza",
    "Celestial Gardens",
    "Pearl Enclave",
    "Luminous Villa",
    "Aurora Oasis"
    // Add more unique hall names as needed
  ];
  
  function displayResidences(query = '') {
    const filteredResidences = residences.filter(residence =>
      residence.toLowerCase().includes(query.toLowerCase())
    );
  
    const residencesContainer = document.querySelector('.residences');
    residencesContainer.innerHTML = ''; // Clear the container
  
    filteredResidences.forEach(residence => {
      const residenceItem = document.createElement('div');
      residenceItem.classList.add('residence-item');
      residenceItem.textContent = residence;
      residencesContainer.appendChild(residenceItem);
    });
  
    applyStylesToResidences(); // Apply styles after updating the content
  }
  
  function applyStylesToResidences() {
    const residenceItems = document.querySelectorAll('.residence-item');
    residenceItems.forEach(item => {
      item.classList.add('course-item');
      item.style.marginBottom = '15px';
      item.style.backgroundColor = 'var(--very-light-solid)';
      item.style.padding = '1em';
      item.style.borderRadius = '5px';
      item.style.boxShadow = '0px 1px 1px rgba(0, 0, 0, 0.4)';
  
      item.addEventListener('click', handleResidenceSelection);
    });
  }
  
  // Usage:
  displayResidences(); // Initially display all residences
  
  // Handle search functionality
  const searchInput = document.querySelector('.input-search');
  searchInput.addEventListener('input', function() {
    displayResidences(this.value);
  });
  
  // Handle the selection
  function handleResidenceSelection(event) {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  }
  
  // Handle the submission
  const submitButton = document.getElementById('submitResidence');
  submitButton.addEventListener('click', function() {
    const selectedResidences = document.querySelectorAll('.selected');
  
    const selectedResidencesArray = Array.from(selectedResidences).map(residence => residence.textContent);
    console.log('Selected Residences:', selectedResidencesArray);
    // Perform further actions with the selected residences.
  });