class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
   
/**What this principle entails is that "single responsability" means that each class will only have one responsability
 * It will not have two, three, or more, just one
*/

    login(authenticator: Authenticator): void {
        if (authenticator.authenticate(this.username, this.password)){
            console.log(`${this.username} has logged in`);
        }else {
            console.log('Invalid username or password');
        }
    }
}
/**Here we can see that in action. This class only authenticates the user in a basic way, it does not do anything else */
class Authenticator {
        authenticate(username: string, password: string): boolean {
            return username === 'admin' && password === 'password';
        }
}