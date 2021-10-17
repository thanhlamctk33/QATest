import JSconfig from '../Config/config';
import RgDb from '../Data/Test/registration_data.json';
import personalDb from '../Data/Test/personal_detail_data';
import businessDb from '../Data/Test/business_detail_data';
import directorDb from '../Data/Test/director_data';
import Login from '../PageObject/login_page';
import MobileVerification from '../PageObject/mobile_verification_page';
import RegistrationMethod from '../PageObject/registration_method_page';
import PersonalDetails from '../PageObject/personal_details_page';
import BusinessDetails from '../PageObject/business_detail_page';
import Director from '../PageObject/business_role_page';
import Registration from '../PageObject/registration_page';

fixture `Aspire Product Money Loan`;

test('Registration Account', async (t) => {
    await registrationAction();
    await MobileVerification.inputOtpNumber(JSconfig.otp);
    await DirectorFillInForm();
        
    async function registrationAction() {
        await Registration.clickRegister();
        await Registration.registerFillInForm(RgDb.fullName, RgDb.preferredName,
            RgDb.emailAddress, RgDb.mobileNumber, RgDb.whereDidYouHear, RgDb.promoCode);
        await Registration.clickAgreeContinue();
        await Registration.clickSkipApplyCode();
    }

    async function DirectorFillInForm() {
        await Director.navigateDirectorForm();
        await Director.fillInForm(directorDb.country, directorDb.solution);
    }
})
    .page(JSconfig.url);

test('Update Information account By Phone Number', async (t) => {
    await Login.loginToPage(RgDb.mobileNumber);
    await MobileVerification.inputOtpNumber(JSconfig.otp);
    await RegistrationMethod.chooseGetStartForStandardRegistration()
    await PersonalDetails.fillPersonalDetailForm(personalDb.national, personalDb.gender, 
        personalDb.currentYear, personalDb.currentYear)
    await MobileVerification.inputOtpNumber(JSconfig.otp);

    await BusinessDetails.fillInBusinessDetailForm(businessDb.businessName,
        businessDb.entityCategory, businessDb.entityType, businessDb.number,
        businessDb.industry, businessDb.subIndustry)

    await BusinessDetails.fillInInformationForm(businessDb.activity,
        businessDb.detailed, businessDb.website, businessDb.numberEmployee,
        businessDb.annualRevenue, businessDb.totalCard)

    await BusinessDetails.fillInPurposeForm (businessDb.useFor, businessDb.businessFunded)
    await BusinessDetails.uploadDocument(JSconfig.fileUpload)
})  
    .page(JSconfig.url);