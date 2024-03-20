document.addEventListener('DOMContentLoaded', function() {
    const termInput = document.getElementById('term');
    const descriptionInput = document.getElementById('description');
    const addButton = document.getElementById('add-button');
    const dataTableBody = document.getElementById('data-body');
  
    addButton.addEventListener('click', function() {
      const term = termInput.value.trim();
      const description = descriptionInput.value.trim();
  
      if (term === '' || description === '') {
        alert('Please enter both term and description.');
        return;
      }
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${term}</td>
        <td>${description}</td>
      `;
      dataTableBody.appendChild(row);
  
      // Clear input fields
      termInput.value = '';
      descriptionInput.value = '';
    });
  });
  