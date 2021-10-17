import { Selector, t } from 'testcafe';

class Login {
    constructor () {
        this.enterMailOrPhoneInput  =  Selector('input[placeholder="Enter your email or phone"]');
        this.nextButton = Selector('.q-btn__wrapper.col.row.q-anchor--skip')
    }

    async loginToPage (mobileNumber) {
        await t
            .typeText(this.enterMailOrPhoneInput, mobileNumber)
            .click(this.nextButton)
    }
}
export default new Login();