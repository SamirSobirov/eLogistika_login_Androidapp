const { $, driver } = require('@wdio/globals')

class LoginPage {
    get phoneField () {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)')
    }

    get passwordField () {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)')
    }

    get continueButton () {
        return $('android=new UiSelector().description("Davom etish").className("android.widget.Button")')
    }

    async enterCredentials (phone, password) {
        await this.phoneField.click()
        await this.phoneField.setValue(phone)
        await this.passwordField.click()
        await this.passwordField.setValue(password)
    }

    async scrollToContinue () {
        await driver.hideKeyboard()
        const { width, height } = await driver.getWindowSize()
        await driver.execute('mobile: swipeGesture', {
            left: Math.round(width * 0.15),
            top: Math.round(height * 0.4),
            width: Math.round(width * 0.7),
            height: Math.round(height * 0.45),
            direction: 'up',
            percent: 0.65
        })
    }
}

module.exports = new LoginPage()
