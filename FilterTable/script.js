// Filter logic
document.getElementById('searchInput').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    let matchFound = false;
  
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const isMatch = text.includes(filter);
      row.style.display = isMatch ? '' : 'none';
      if (isMatch) matchFound = true;
    });
  
    document.getElementById('errorMsg').style.display = (!matchFound && filter !== '') ? 'block' : 'none';
  });
  
  // Delete logic
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.closest('tr').remove();
    }
  });
  
  // Add new row
  document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const city = document.getElementById('cityInput').value;
  
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${city}</td>
      <td>
        <button class="btn btn-warning btn-sm edit-btn">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      </td>
    `;
    document.getElementById('tableBody').appendChild(newRow);
    document.getElementById('addForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
    modal.hide();
  });
 
  // Edit button click - open modal with row data
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn')) {
      currentEditRow = e.target.closest('tr');
      const cells = currentEditRow.querySelectorAll('td');
  
      document.getElementById('editName').value = cells[0].textContent;
      document.getElementById('editAge').value = cells[1].textContent;
      document.getElementById('editCity').value = cells[2].textContent;
  
      const editModal = new bootstrap.Modal(document.getElementById('editModal'));
      editModal.show();
    }
  });
  
  // Save changes from edit modal
  document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const city = document.getElementById('editCity').value;
  
    if (currentEditRow) {
      const cells = currentEditRow.querySelectorAll('td');
      cells[0].textContent = name;
      cells[1].textContent = age;
      cells[2].textContent = city;
    }
  
    const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
  });
    