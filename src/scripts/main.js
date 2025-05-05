'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ths = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  ths.forEach((th, clickedIndex) => {
    th.addEventListener('click', () => {
      ths.forEach((header) => {
        header.style.backgroundColor = '';
        header.style.color = '';
      });

      th.style.backgroundColor = '#d14534';

      const columnIndex = clickedIndex;

      const rowsArray = Array.from(tbody.querySelectorAll('tr'));

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex];
        const valueA = cellA.textContent.trim();
        const cellB = rowB.children[columnIndex];
        const valueB = cellB.textContent.trim();

        if (columnIndex === 0 || columnIndex === 1) {
          return valueA.localeCompare(valueB);
        } else {
          const numA = parseFloat(valueA.replace(/[$,]/g, ''));
          const numB = parseFloat(valueB.replace(/[$,]/g, ''));

          if (isNaN(numA) || isNaN(numB)) {
            return valueA.localeCompare(valueB);
          }

          return numA - numB;
        }
      });

      tbody.innerHTML = '';

      rowsArray.forEach((row) => {
        tbody.appendChild(row);
      });
    });
  });
});
