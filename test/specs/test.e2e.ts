import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import PinPage from '../pageobjects/pin.page'

describe('Вход в приложение', () => {
    it('входит по номеру телефона, не открывая OneID в браузере', async () => {
        const phone = process.env.LOGIN_PHONE
        const password = process.env.LOGIN_PASSWORD
        const pin = process.env.LOGIN_PIN

        if (!phone || !password || !pin) {
            throw new Error('Укажите LOGIN_PHONE, LOGIN_PASSWORD и LOGIN_PIN в .env.test.local')
        }

        await expect(LoginPage.phoneField).toBeDisplayed()
        await expect(LoginPage.passwordField).toBeDisplayed()

        await LoginPage.enterCredentials(phone, password)
        await LoginPage.scrollToContinue()
        await expect(LoginPage.continueButton).toBeEnabled()
        await LoginPage.continueButton.click()

        const isPinConfirmation = await PinPage.confirmationPrompt.isExisting()
        await PinPage.enterPin(pin)

        if (!isPinConfirmation) {
            await expect(PinPage.confirmationPrompt).toBeDisplayed()
            await PinPage.enterPin(pin)
        }

        await expect(PinPage.confirmationPrompt).not.toBeDisplayed()
        await expect(PinPage.enableBiometricsButton).toBeDisplayed()
        await PinPage.enableBiometricsButton.click()
    })
})

