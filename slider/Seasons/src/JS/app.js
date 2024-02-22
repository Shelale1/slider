

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthNumber = +prompt("Please write month number between (1-12):");


const seasons=document.getElementById("seasons")



// Girilen ay numarasına göre mevsimi belirleyelim
switch (monthNumber) {
  case 12:

  case 1:

  case 2:

  seasons.innerHTML=`<img src="https://i.pinimg.com/564x/ba/99/98/ba9998333a9c3e2dc3a155acceebd2e2.jpg" alt="">`;
   
    break;
  case 3:
  case 4:
  case 5:
    seasons.innerHTML=`<img src="https://i.pinimg.com/564x/21/da/fb/21dafb10913c5d90ac7a5c02b991bce7.jpg" alt="">`;
   
    break;

  case 6:

  case 7:

  case 8:
    seasons.innerHTML=`<img src="https://i.pinimg.com/564x/e8/43/bc/e843bc35162a8029c26e44d18f15fcf4.jpg" alt="">`;
   
    break;
  case 9:
  case 10:
  case 11:
    seasons.innerHTML=`<img src="https://i.pinimg.com/564x/a3/a2/65/a3a2653b65dd412d76f2f3dfb715d5d8.jpg" alt="">`;
   
    break;
  default:
    seasons.innerHTML=`<img src="" alt="">`;
   
    break;
}

