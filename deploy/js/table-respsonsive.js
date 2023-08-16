window.addEventListener('load', () => {
  
    const panelTables = document.querySelectorAll('.panel-table');
    const panelTableHeaderColumn = document.querySelectorAll('.panel-table-header-column');
    const panelTableMultipleHeaders = document.querySelectorAll('.panel-table-mutiple-headers');
  
    panelTables.forEach(panel => {
      const table = panel.querySelector('table');
      const tableHeaders = Array.from(table.querySelectorAll('th')).map(th => th.cloneNode(true));
      const tableRows = Array.from(table.querySelectorAll('tbody tr'));
      tableRows.forEach(row => {
        Array.from(row.querySelectorAll('td')).forEach((cell, i) => {
          const span = document.createElement('span');
          span.textContent = tableHeaders[i].textContent;
          cell.insertBefore(span, cell.firstChild);
        });
      });
    })
  
    panelTableHeaderColumn.forEach(panel => {
      const table = panel.querySelector('table');
      const tableHeaders = Array.from(table.querySelectorAll('th')).map(th => th.cloneNode(true));
      const tableRows = Array.from(table.querySelectorAll('tbody tr'));
      tableRows.forEach(row => {
        Array.from(row.querySelectorAll('td')).forEach((cell, i) => {
          const span = document.createElement('span');
          span.textContent = tableHeaders[i].textContent;
          cell.insertBefore(span, cell.firstChild);
        });
      });
    })
  
    panelTableMultipleHeaders.forEach(panel => {
      const table = panel.querySelector('table');
      const tableHeaders = Array.from(table.querySelectorAll('th')).map(th => th.cloneNode(true));
      const tableRows = Array.from(table.querySelectorAll('tbody tr'));
      tableRows.forEach(row => {
        Array.from(row.querySelectorAll('td')).forEach((cell, i) => {
          const span = document.createElement('span');
          span.textContent = tableHeaders[i].textContent;
          cell.insertBefore(span, cell.firstChild);
        });
      });
    })
  
  })