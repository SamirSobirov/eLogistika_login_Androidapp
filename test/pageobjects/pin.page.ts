import { $ } from '@wdio/globals'

class PinPage {
    public get confirmationPrompt () {
        return $('android=new UiSelector().description("Tasdiqlash uchun PIN-kodni qayta kiriting")')
    }

    public get enableBiometricsButton () {
        return $('android=new UiSelector().description("Yoqish")')
    }

    public async enterPin (pin: string) {
        for (const digit of pin) {
            await $(`android=new UiSelector().description("${digit}")`).click()
        }
    }
}

export default new PinPage()