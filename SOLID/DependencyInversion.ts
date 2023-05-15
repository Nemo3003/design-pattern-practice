
/**
 * The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. 
 * Instead, both should depend on abstractions. 
 * It also states that abstractions should not depend on details; 
 * details should depend on abstractions.
 *  In other words, it promotes decoupling and encourages the use of interfaces or abstract classes to define dependencies.
 */


interface MessageSender {
    sendMessage(message: String): void;
}

class EmailSender implements MessageSender {
    sendMessage(message: String): void {
        console.log(`Sending emails: ${message}`);
    }
}

class SMS implements MessageSender {
    sendMessage(message: String): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class NotificationService {
    private messageSender: MessageSender;

    constructor(messageSender: MessageSender) {
        this.messageSender == messageSender;
    }
    sendNotification(message: String): void {
        this.messageSender.sendMessage(message);
    }
}

const emailSender = new EmailSender();
const smsSender = new SMS();

const emailNotification = new NotificationService(emailSender);
emailNotification.sendNotification('Hello via email');

const smsNotification = new NotificationService(smsSender);
smsNotification.sendNotification('Hello via SMS');