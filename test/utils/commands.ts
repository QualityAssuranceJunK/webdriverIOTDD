
// wait Element Core Function
export async function waitElement(element: WebdriverIO.Element) : Promise<WebdriverIO.Element>  {
    
    await element.waitUntil(async function() {
        return (await element.isDisplayed())
    }, {
        timeout: 5000,
        timeoutMsg : 'expected displyaed different',
        interval : 5000
    }).then(
        result => console.log("element is checked : ", result)
    )
    return await Promise.resolve(element);
}

// setText Function
export const setText = async(element: Promise<WebdriverIO.Element>, text: string) => {
    await waitElement(await element)
    await (await element).setValue(text).then
    (
        result => console.log(text+"is set")
    )
}

// click Function
export const clickElement = async(element: Promise<WebdriverIO.Element>) => {
    const clickElement_ = await waitElement(await element)
    await clickElement_.isClickable()
    await (await element).click().then(
        reesult => console.log("element is clicked")
    )
}

// getText Function
export const getTextElement = async(element: Promise<WebdriverIO.Element>) => {
    await waitElement(await element)
    return (await element).getText()
}

// move Element Funtion
export const moveElement = async(element: Promise<WebdriverIO.Element>) => {
    const moveElement_ = await waitElement(await element)
    await moveElement_.scrollIntoView({
        block : 'center',
        inline : 'center'
    })
}

// getUrl Function
export const getUrl = async() => {
    const currentUrl = browser.getUrl()
    return currentUrl
}