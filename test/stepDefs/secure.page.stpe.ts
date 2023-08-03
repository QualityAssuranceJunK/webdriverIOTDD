import { SecurePage } from '../page/secure.page.ts'
import Page from './page.ts';
import { clickElement, getTextElement, waitElement } from "../utils/commands.ts";

class SecureStep extends Page {
    public async containCheck(containTxt: string) {
        await expect(waitElement(await SecurePage.flashAlert)).toHaveTextContaining(containTxt)
        return this
    }

    public async logOut() {
        await clickElement(SecurePage.logoutBtn)
        return this
    }
}

export default new SecureStep();
