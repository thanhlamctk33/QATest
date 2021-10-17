import { Selector, t } from 'testcafe';

class Registration {
    constructor () {
        this.registerButton          = Selector('.text-primary.text-bold.login-step-start__register-link');
        this.fullNameAsPerIdInput       = Selector('input[placeholder="Name must match exactly as listed in ID"]');
        this.preferredNameInput         = Selector('input[placeholder="Tell us how to address you"]');
        this.emailAddressInput          = Selector('input[placeholder="abc@example.com"]');
        this.mobileNumberInput        = Selector('input[placeholder="91234567"]');
        this.whereDidYouHearAboutUsInput     = Selector('input[placeholder="Type to Search or Select any of the following"]');
        this.ReferralPromoCodeInput           = Selector('input[placeholder="Enter the referral code or promo code"]');
        this.agreeButton    = Selector('.q-checkbox__inner.relative-position.non-selectable.q-checkbox__inner--falsy');
        this.continueButton = Selector('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row');
        this.skipButton = Selector('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row')
    }

    async clickRegister () {
        await t
        .click(this.registerButton);
    }

    async registerFillInForm (fullNameAsPerId, preferredName, 
        emailAddress, mobileNumber, whereDidYouHearAboutUs,
        ReferralPromoCode) {
        await t
            .typeText(this.fullNameAsPerIdInput, fullNameAsPerId)
            .typeText(this.preferredNameInput, preferredName)
            .typeText(this.emailAddressInput, emailAddress)
            .typeText(this.mobileNumberInput, mobileNumber)
            .typeText(this.whereDidYouHearAboutUsInput, whereDidYouHearAboutUs)
            .typeText(this.ReferralPromoCodeInput, ReferralPromoCode);     
    }

    async clickAgreeContinue() {
        await t
        .click(this.agreeButton)
        .click(this.continueButton);
    }

    async clickSkipApplyCode() {
        await t
        .click(this.skipButton)
    }
}
export default new Registration();