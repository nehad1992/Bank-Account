// DEFINE BANKACCOUNT CLASS
function BankAccount(initialDeposit, user) {
  this.balance = initialDeposit;
  this.user = user;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

BankAccount.prototype.getCurrentBalance = function() {
  return this.balance;
}

function displayBalance(account){
  $("#balance").text(account.balance);
}


$(document).ready(function(){

  $("#new-account-form").submit(function(event){
    event.preventDefault();

    var user = $("#user").val();
    var initial = parseFloat($("#initial").val());
    $("#user").val("");
    $("#initial").val("");

    var newAccount = new BankAccount(initial, user);
    displayBalance(newAccount);

    $("#transaction-form").submit(function(event){
      event.preventDefault();
  
      var deposit = parseFloat($("#deposit").val());
      var withdraw = parseFloat($("#withdraw").val());
      $("#deposit").val("");
      $("#withdraw").val("");

      deposit ? newAccount.deposit(deposit) : null;
      withdraw ? newAccount.withdraw(withdraw) : null;
      displayBalance(newAccount);
  
    });
  });
})