// Sample Data
const subscriptions = [
    {
      service: 'Netflix',
      price: '$15.99',
      quality: '4K Ultra HD',
      devices: '4 Devices'
    },
    {
      service: 'Disney+',
      price: '$7.99',
      quality: 'Full HD',
      devices: '2 Devices'
    },
    {
      service: 'Amazon Prime',
      price: '$8.99',
      quality: 'Full HD',
      devices: '3 Devices'
    },
    {
      service: 'Hulu',
      price: '$6.99',
      quality: 'HD',
      devices: '2 Devices'
    },
    {
      service: 'HBO Max',
      price: '$14.99',
      quality: '4K Ultra HD',
      devices: '3 Devices'
    }
  ];
  
  // Load data into table
  function loadTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
  
    subscriptions.forEach(sub => {
      const row = `
        <tr>
          <td>${sub.service}</td>
          <td>${sub.price}</td>
          <td>${sub.quality}</td>
          <td>${sub.devices}</td>
          <td><button class="btn btn-success btn-sm">Subscribe</button></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
  loadTable();
  
  // Sorting Function
  function sortTable(n) {
    const table = document.getElementById("subscriptionTable");
    let switching = true;
    let dir = "asc";
    let switchcount = 0;
    
    while (switching) {
      switching = false;
      let rows = table.rows;
      for (let i = 1; i < (rows.length - 1); i++) {
        let shouldSwitch = false;
        let x = rows[i].getElementsByTagName("TD")[n];
        let y = rows[i + 1].getElementsByTagName("TD")[n];
        
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  
  // Search Function
  document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toUpperCase();
    const rows = document.querySelector("#subscriptionTable tbody").rows;
    
    for (let row of rows) {
      let firstCol = row.cells[0].textContent.toUpperCase();
      if (firstCol.indexOf(filter) > -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }      
    }
  });
  