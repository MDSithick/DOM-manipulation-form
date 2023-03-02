form = document.querySelector("#form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    parent = document.querySelector('.data table')

    container = document.createElement('tr')

    let array = ['firstname','lastname','address','pincode','gender','state','country'];
    for(var i of array){
        Fn = document.createElement('td')
    Fn_data = i !== 'gender' ? document.querySelector(`[placeholder=${i}]`) : 
        document.querySelector('input[name="gender"]:checked');
    Fn.innerText = Fn_data.value
    container.append(Fn)
    }
    let foodList = '';
    const foods = document.querySelectorAll('input[name="food[]"]'); 
    console.log(foods.length)
    for (let i = 0; i < foods.length; i++) {
        console.log(foods[i].checked, foods[i].value);
        if (foods[i].checked) {
          if (foodList === '') {
            foodList += foods[i].value;
          } else {
            foodList += ', ' + foods[i].value;
          }
        }
      }
      console.log(foodList);
      const foodData = document.createElement("td");
      foodData.innerHTML = foodList;
      container.append(foodData);
      const tbody = document.querySelector("tbody");
      tbody.append(container);
      form.reset();
    parent.append(container);

});