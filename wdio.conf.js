const { existsSync } = require('node:fs')

if (existsSync('.env.test.local')) {
    process.loadEnvFile('.env.test.local')
}

exports.config = {
    runner: 'local',
    specs: ['./test/specs/test.e2e.js'],
    maxInstances: 1,
    port: 4723,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:udid': 'R5CY30JK2FB',
        'appium:appPackage': 'uz.autodoc.e_logistics',
        'appium:appActivity': 'com.autodoc.elogistika.MainActivity',
        'appium:noReset': true
    }],
    logLevel: 'warn',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}