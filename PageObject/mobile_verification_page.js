import { Selector, t } from 'testcafe';

class MobileVerification {
    constructor () {
        this.optNumberInput = Selector('.digit-input__input.flex.flex-center.text-weight-medium.cursor-pointer.digit-input__input--highlight.digit-input__input--blinking');
    }
    async inputOtpNumber (optNumber) {
        await t
        .wait(2000)
        .pressKey(optNumber)
    }
}
export default new MobileVerification();