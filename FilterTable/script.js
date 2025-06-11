//search input value from the table
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
  //if element doesn't exist in table then error msg
    const errorMsg = document.getElementById('errorMsg');
    if (!matchFound && filter !== '') {
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  });
  
  /// delete logic
document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', function () {
        const row = this.closest('tr');
        row.remove();
      });
    });
    
  