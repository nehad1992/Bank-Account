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

$(document).ready(function(){

  $("#new-account-form").submit(function(event){
    event.preventDefault();

    var user = $("#user").val();
    var initial = parseFloat($("#initial").val());

  });
  $("#transaction-form").submit(function(event){
    event.preventDefault();

    var deposit = parseFloat($("#deposit").val());
    var withdraw = parseFloat($("#withdraw").val());

  });
})