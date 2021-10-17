import { Selector, t } from 'testcafe';

var businessName = '';
var entityCategory = '';
var entityType = '';
var businessNumber = '';
var industry ='';
var subIndustry ='';

class BusinessDetail {
    constructor () {
        this.generalOption = Selector('div.q-item__label'); 
        this.businessLegalNameInput = Selector('input[placeholder="The full legal business name"]');  
        this.entityCategorySelect = Selector('input[placeholder="Select your business registration type"]');    
        this.entityTypeSelect = Selector('input[data-cy="register-business-sub-registration-type"]');
        this.businessRegistrationNumberInput = Selector('input[placeholder="Enter your business registration number"]');
        this.industrySelect = Selector('input[data-cy="register-business-industry"]');
        this.subIndustrySelect = Selector('input[data-cy="register-business-sub-industry"]');
        this.continueButton = Selector('.block');
        this.businessActivityInput = Selector('input[placeholder="eg. We provide IT services to businesses"]');
        this.detailedProductInput = Selector('input[placeholder="eg, Sell computers, Consult on market-entry strategy"]');
        this.websiteInput = Selector('input[placeholder="Enter your website URL"]');
        this.numberEmployeesSelect = Selector('input[placeholder="Select your company size"]');
        this.annualRevenueSelect = Selector('input[placeholder="Select your annual revenue"]');
        this.totalMonthlyCardSelect = Selector('input[placeholder="Select your total monthly card spend"]');
        this.useForSelect = Selector('div[placeholder="Type to Search or Select any of the following"]');
        this.purposeOption = Selector('div.q-item__label.ellipsis');
        this.businessFundedSelect = Selector('.onboarding-step-business-banking-regulation__multiple-placeholder');
        this.purposePage = Selector('.q-form.auth-form');
        this.sameRegisterCheckbox = Selector('Same as registered business address')
        
    }
    async fillInBusinessDetailForm (businessName, entityCategory,
        entityType, businessNumber, industry, subIndustry) {
        await t
        .typeText(this.businessLegalNameInput, businessName)

        .click(this.entityCategorySelect)
        .hover(this.generalOption.withText(entityCategory))
        .click(this.generalOption.withText(entityCategory))

        .click(this.entityTypeSelect)
        .hover(this.generalOption.withText(entityType))
        .click(this.generalOption.withText(entityType))

        .typeText(this.businessRegistrationNumberInput, businessNumber)

        .click(this.industrySelect)
        .hover(this.generalOption.withText(industry))
        .click(this.generalOption.withText(industry))

        .click(this.subIndustrySelect)
        .hover(this.generalOption.withText(subIndustry))
        .click(this.generalOption.withText(subIndustry))
        
        .click(this.continueButton)
    }

    async fillInInformationForm (businessActivity, productDetailed,
        websiteOwner, numberOfEmployee, annualRevenue, totalCard) {
        await t
        .typeText(this.businessActivityInput, businessActivity)
        .typeText(this.detailedProductInput, productDetailed)
        .typeText(this.websiteInput, websiteOwner)

        .click(this.numberEmployeesSelect)
        .hover(this.generalOption.withText(numberOfEmployee))
        .click(this.generalOption.withText(numberOfEmployee))

        .click(this.annualRevenueSelect)
        .hover(this.generalOption.withText(annualRevenue))
        .click(this.generalOption.withText(annualRevenue))

        .click(this.totalMonthlyCardSelect)
        .hover(this.generalOption.withText(totalCard))
        .click(this.generalOption.withText(totalCard))
        .click(this.continueButton)
    }

    async fillInPurposeForm (useFor, businessFunded) {
        await t
        .click(this.useForSelect)
        .hover(this.purposeOption.withText(useFor))
        .click(this.purposeOption.withText(useFor))

        .hover(this.purposePage)
        .click(this.purposePage)

        .click(this.businessFundedSelect)
        .hover(this.purposeOption.withText(businessFunded))
        .click(this.purposeOption.withText(businessFunded))
        
        .click(this.continueButton)
        .click(this.sameRegisterCheckbox)
        .click(this.continueButton)    
    }

    async uploadDocument () {
        const uploadedFileElements = Selector('#uploaded-file-list').child('li');
        await t
        .setFilesToUpload('img[src="img/common/files/cloud-computing.svg"]', [
            '../Uploads/text-file-1.txt',
        ])
        .click('img[src="img/common/files/cloud-computing.svg"]')
        .expect(uploadedFileElements.count).eql(1)
        .expect(uploadedFileElements.nth(0).textContent).eql('text-file-1.txt')
    }
        
}
export default new BusinessDetail();