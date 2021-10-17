import JSconfig from '../Config/config';
import DataRg from '../Data/Test/registration_data.json';
import Director from '../PageObject/business_role_page';
import Registration from '../PageObject/registration_page';
import DataDr from '../Data/Test/director_data';
import MobileVerification from '../PageObject/mobile_verification_page';

fixture `Page Model`;

const registerTest = test
    .disablePageCaching('Registration', async (t) => {

        await registrationAction();
        await MobileVerification.inputOtpNumber(JSconfig.otp);
        await DirectorFillInForm();
        
        async function registrationAction() {
            await Registration.clickRegister();
            await Registration.registerFillInForm(DataRg.fullName, DataRg.preferredName,
            DataRg.emailAddress, DataRg.mobileNumber, DataRg.whereDidYouHear, DataRg.promoCode);
            await Registration.clickAgreeContinue();
            await Registration.clickSkipApplyCode();
        }

        async function DirectorFillInForm() {
            await Director.navigateDirectorForm();
            await Director.fillInForm(DataDr.country, DataDr.solution);
        }
    })
    .page(JSconfig.url);