let money = +prompt("ما هي قيمه الورث ؟ ");
let zoga = confirm("هل هناك زوجه ؟ ");
if (zoga == true) {
    let zogaNasip = (1/8) * money ;
    money = money - zogaNasip;
    console.log("نصيب الزوجه  = " + zogaNasip);
} 
let boys = +prompt("عندك كام ولد ؟ ");
    let girls = +prompt("عندك كام بنت ؟ ");
    let numOfAshom =(2 * boys )+ (1 * girls);
    let sahm = money / numOfAshom;
    let sahmOfBoy = sahm * 2; 
    let sahmOfgirl = sahm * 1 ;
    console.log("نصيب الولد الواحد  = " + sahmOfBoy);
    console.log("نصيب البنت الواحده  = " + sahmOfgirl);