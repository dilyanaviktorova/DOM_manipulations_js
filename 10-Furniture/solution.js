function solve() {

  const tableBody = document.querySelector('table.table tbody');
  const [input, output] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');

 
  const items = [];


  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  
  function onGenerate() {
    
    const data = JSON.parse(input.value);

    
    for (let product of data) {

      const row = document.createElement('tr');

      const imgCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = product.img;
      imgCell.appendChild(img);

      const nameCell = document.createElement('td');
      const nameP = document.createElement('p');
      nameP.textContent = product.name;
      nameCell.appendChild(nameP);

      const priceCell = document.createElement('td');
      const priceP = document.createElement('p');
      priceP.textContent = product.price;
      priceCell.appendChild(priceP);

      const factorCell = document.createElement('td');
      const factorP = document.createElement('p');
      factorP.textContent = product.decFactor;
      factorCell.appendChild(factorP);

      const markCell = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      markCell.appendChild(checkBox);


      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(factorCell);
      row.appendChild(markCell);

   
      tableBody.appendChild(row);

      
      items.push({
        element: row,
        item: product,
        isChecked: () => checkBox.checked
      });
    }

   
    input.value = '';
  }

 
  function onBuy() {
   
    const selected = items.filter(i => i.isChecked());


    if (selected.length === 0) {
      output.value = 'No furniture selected.';
      return;
    }


    const names = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (let { item } of selected) {
      names.push(item.name);
      totalPrice += Number(item.price);
      totalDecFactor += Number(item.decFactor);
    }

    
    const avgDecFactor = totalDecFactor / selected.length;

  
    const result = `Bought furniture: ${names.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${avgDecFactor}`;


    output.value = result;
  }
}