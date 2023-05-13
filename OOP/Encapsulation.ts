class BankAccount{
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount;
        }
        else {
            console.log('Insufficient balance');
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

// 1000 IS THE BALANCE
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(2000); // Insufficient balance
console.log(account.getBalance()); // 1500