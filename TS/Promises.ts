(()=>{

    const withDrawMoney = (moneyOut: number): Promise <number> => {

        let currentMoney = 1500;

        return new Promise ((resolve, reject) => {

            if (moneyOut > currentMoney) {
                reject('Not enough money')
            }else {
                currentMoney -= moneyOut;
                resolve(currentMoney);
            }

        });

    }

    withDrawMoney(1000)
        .then(currentMoney => console.log(`I have left ${currentMoney}`))
        .catch(err => console.warn(err))


})();