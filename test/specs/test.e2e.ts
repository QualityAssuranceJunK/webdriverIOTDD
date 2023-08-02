import LoginStep from '../stepDefs/login.page.steps.js'
import SecurePage from '../stepDefs/secure.page.js'

describe('My Login application', function(){
    it('should login with valid credentials', async () => {
        await LoginStep.open()
        await LoginStep.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    }, 2)
})

