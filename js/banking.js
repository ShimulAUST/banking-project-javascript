document.getElementById('deposit-amount-button').addEventListener('click', function () {

    //getting the value from the input field of deposit
    const depositAmountText = document.getElementById('deposit-amount-input');
    const depositAmount = depositAmountText.value;
    const depositAmountParse = parseFloat(depositAmount);
    if (depositAmountParse > 0) {
        //getting the value from the existing deposit amount value
        const showDeposit = document.getElementById('show-deposit-amount');
        const showDepositTotal = showDeposit.innerText;
        const showDepositTotalParse = parseFloat(showDepositTotal);

        // //adding the two value and set the showing deposit total value
        const newDepositTotal = depositAmountParse + showDepositTotalParse;
        showDeposit.innerText = newDepositTotal;


        //getting the total balance value
        const totalBalanceShowAmountText = document.getElementById('total-balance-show');
        const totalBalanceShowAmount = totalBalanceShowAmountText.innerText;
        const totalBalanceShowAmountParse = parseFloat(totalBalanceShowAmount);

        //adding the value with input deposit value and showing deposit total value
        const newTotalBalance = depositAmountParse + totalBalanceShowAmountParse;
        totalBalanceShowAmountText.innerText = newTotalBalance;

        depositAmountText.value = '';
    }
    else {
        alert("Please enter a valid amount");
    }
    //console.log(showDeposit);
});
document.getElementById('withdraw-amount-button').addEventListener('click', function () {

    //getting the value from the input field of deposit
    const withdrawAmountText = document.getElementById('withdraw-amount-input');
    const withdrawAmount = withdrawAmountText.value;
    const withdrawAmountParse = parseFloat(withdrawAmount);

    if (withdrawAmountParse > 0) {

        //getting the value from the existing deposit amount value
        const showWithdraw = document.getElementById('show-withdraw-amount');
        const showWithdrawTotal = showWithdraw.innerText;
        const showWithdrawTotalParse = parseFloat(showWithdrawTotal);

        // //adding the two value and set the showing deposit total value
        const newWithdrawTotal = withdrawAmountParse + showWithdrawTotalParse;
        showWithdraw.innerText = newWithdrawTotal;


        //getting the total balance value
        const totalBalanceShowAmountText = document.getElementById('total-balance-show');
        const totalBalanceShowAmount = totalBalanceShowAmountText.innerText;
        const totalBalanceShowAmountParse = parseFloat(totalBalanceShowAmount);

        //adding the value with input deposit value and showing deposit total value
        const newTotalBalance = totalBalanceShowAmountParse - newWithdrawTotal;
        totalBalanceShowAmountText.innerText = newTotalBalance;

        withdrawAmountText.value = '';
    }
    else {
        alert("Please enter a valid amount");
    }
    //console.log(showDeposit);
});