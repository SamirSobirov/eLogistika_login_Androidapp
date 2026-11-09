const { $ } = require('@wdio/globals')

class PinPage {
    get confirmationPrompt () {
        return $('android=new UiSelector().description("Tasdiqlash uchun PIN-kodni qayta kiriting")')
    }

    get enableBiometricsButton () {
        return $('android=new UiSelector().description("Yoqish")')
    }

    async enterPin (pin) {
        for (const digit of pin) {
            await $(`android=new UiSelector().description("${digit}")`).click()
        }
    }
}

module.exports = new PinPage()