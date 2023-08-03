import { securePageLocators } from '../locators/secure.locators.ts'

class SecureObjects {
    
    public get flashAlert () {
        return $(securePageLocators.flashAlert);
    }
    public get logoutBtn () {
        return $(securePageLocators.logoutBtn);
    }
}

export const SecurePage = new SecureObjects();
