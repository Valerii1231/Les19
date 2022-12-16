
let age = +prompt("How old are you?", 'Age');
if (age <= 17) {
  confirm('Do you study at shool? ');
} else {
  if (age > 17 && age < 25) {
    confirm('Do you study at university?');
  } else {
    if (age >= 25 && age < 60) {
      confirm('Do you have job?');
    } else {
      alert('What are you doing?');
    }
  }
};




let property = prompt ('Enter CCS property Display'); 
switch (property) {
  case  'block':
        alert('block');
        break;
    case 'flex' :
        alert('flex');
        break;
    case 'grid' :
        alert('grid');
        break;
    case 'none' :
        alert('none' );
        break;
    default:
        alert('Set \'display: inline-block');
}



let number = prompt('Please enter the number');
let bool = true;
while (true) {
  if (+number >= bool) {
    alert(`${number} by 12  equal  ${+number * 12}`);
    break;
  } else {
    number = prompt('Your number is incorect, please nter corect number');
  };
}




for (let i = 1;  i <= 50; i++ ){
 if (i % 2 == 0) {
  console.log (i);
 }
}