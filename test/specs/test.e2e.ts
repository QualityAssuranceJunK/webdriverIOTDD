import LoginStep from '../stepDefs/login.page.steps.js'
import SecurePage from '../stepDefs/secure.page.step.js'

describe('My Login application', function(){
    it('should login with valid credentials', async () => {
        await LoginStep.open()
        await LoginStep.login('tomsmith', 'SuperSecretPassword!');
        await SecurePage.containCheck('You logged into a secure area!');
        await SecurePage.logOut();
    })
})

