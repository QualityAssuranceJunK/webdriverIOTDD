import { loginPageLocators } from '../locators/login.locators.ts'

class LoginObjects {
    
    public get inputUsername () {
        return $(loginPageLocators.username);
    }

    public get inputPassword () {
        return $(loginPageLocators.password);
    }

    public get btnSubmit () {
        return $(loginPageLocators.btnSubmit);
    }
}

export const LoginPage = new LoginObjects();