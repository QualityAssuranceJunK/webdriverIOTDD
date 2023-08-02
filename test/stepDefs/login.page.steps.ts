import { LoginPage } from '../page/login.page.ts'
import { setText, clickElement, moveElement, getUrl, waitElement } from '../utils/commands.ts'
import Page from './page.ts';

class LoginStep extends Page {
    
    public async login (username: string, password: string) {
        await setText(LoginPage.inputUsername, username)
        await setText(LoginPage.inputPassword, password)
        await clickElement(LoginPage.btnSubmit)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginStep();