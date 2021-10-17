import MobileVerification from '../POM/mobile_verification_page';
import registerTest from './registration_test'

test
    .before( async t => {
        registerTest
    })
    ('Input Otp Number', async t => {
        await MobileVerification.inputOtpNumber();
});
