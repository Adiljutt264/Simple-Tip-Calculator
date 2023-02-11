var tips, firstTip, secondTip, thrirdTip, firstBill, secondBill, thirdBill;
firstBill = 49;
secondBill = 100;
thirdBill = 3000;
function tipcalculator(tips)
{
    if (tips < 50)
     {
        return 0.2 * tips;
    } 
    else if (tips > 50 && tips < 200)
     {
        return 0.15 * tips;
    }
    else
     {
        return 0.10 * tips;
    }
}
firstTip = tipcalculator(firstBill);
secondTip = tipcalculator(secondBill);
thirdTip = tipcalculator(thirdBill);
var Totaltips = [ firstTip, secondTip, thirdTip ];
var totalAmountPaid = [ firstBill + firstTip,secondBill + secondTip, thirdBill + thirdTip];
console.log("Total number of tips are " + Totaltips + ' paid against total number of bills respectively ' +  totalAmountPaid);

