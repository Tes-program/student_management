// Assume you have an API endpoint to fetch invoice data
const invoiceApiEndpoint = '/api/invoice';

// Function to fetch and display invoice details
function fetchInvoiceDetails() {
  // Make an AJAX request to fetch invoice data
  // Replace this with your actual AJAX implementation
  const invoiceData = /* Fetch data from the server */ {};

  const invoiceContainer = document.getElementById('invoiceContainer');
  invoiceContainer.innerHTML = '';

  // Check if there is invoice data
  if (invoiceData) {
    // Create invoice header
    const invoiceHeader = document.createElement('div');
    invoiceHeader.classList.add('invoice-header');
    invoiceHeader.innerHTML = '<h2>Invoice</h2>';
    invoiceContainer.appendChild(invoiceHeader);

    // Create invoice details section
    const invoiceDetails = document.createElement('div');
    invoiceDetails.classList.add('invoice-details');
    invoiceDetails.innerHTML = `
      <p><strong>Invoice Number:</strong> ${invoiceData.invoiceNumber}</p>
      <p><strong>Invoice Date:</strong> ${invoiceData.date}</p>
      <p><strong>Due Date:</strong> ${invoiceData.dueDate}</p>
    `;
    invoiceContainer.appendChild(invoiceDetails);

    // Create table for invoice items
    const invoiceItemsTable = document.createElement('table');
    invoiceItemsTable.classList.add('invoice-items');
    invoiceItemsTable.innerHTML = `
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${invoiceData.items.map(item => `
          <tr>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>${item.unitPrice}</td>
            <td>${item.total}</td>
          </tr>
        `).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"><strong>Total</strong></td>
          <td><strong>${invoiceData.total}</strong></td>
        </tr>
      </tfoot>
    `;
    invoiceContainer.appendChild(invoiceItemsTable);

    // Create total section
    const invoiceTotal = document.createElement('div');
    invoiceTotal.classList.add('invoice-total');
    invoiceTotal.innerHTML = `<p><strong>Total:</strong> ${invoiceData.total}</p>`;
    invoiceContainer.appendChild(invoiceTotal);

    // Create invoice footer
    const invoiceFooter = document.createElement('div');
    invoiceFooter.classList.add('invoice-footer');
    invoiceFooter.innerHTML = '<p>Thank you for your business!</p>';
    invoiceContainer.appendChild(invoiceFooter);
  } else {
    // Display a message if there is no invoice data
    const noInvoiceElement = document.createElement('p');
    noInvoiceElement.textContent = 'No invoice data available.';
    invoiceContainer.appendChild(noInvoiceElement);
  }
}

// Fetch and display data when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchInvoiceDetails();
});