import { Selector, t } from 'testcafe';

var national = ''
var gender = ''
var year = ''

class PersonalDetails {
    constructor () {
        this.emailAddressInput = Selector('input[data-cy="person-edit-email"]');
        this.nationalitySelect = Selector('input[placeholder="Type to Search or Select Nationality"]');
        this.genderSelect = Selector('input[placeholder="Set your gender"]');
        this.generalOption = Selector('div.q-item__label');
        this.dateOfBirthDateTime = Selector('input[placeholder="Set your date of birth"]');
        this.generalDate = Selector('span.block');
        this.leftArrowButton = Selector('.fas.fa-chevron-left.q-icon.notranslate');
        this.calendarSelect = Selector('.q-date__years-content.col.self-stretch.row.items-center');
        this.dateSelect = Selector('.q-date__calendar-days.fit');
        this.submitButton = this.generalDate.withText('Submit');
    }

    async verifyEmailIsCorrect (emailAddress) {
        await t
        .expect(Selector(this.emailAddress).exists).ok()
    }

    async fillPersonalDetailForm (national, gender, currentYear,
        birthYear) {
        await t
        .click(this.dateOfBirthDateTime)
        .hover(this.generalDate.withText(currentYear))
        .click(this.generalDate.withText(currentYear))

        .click(this.leftArrowButton)
        .click(this.leftArrowButton)
        .click(this.calendarSelect)
        .click(this.dateSelect)

        .click(this.nationalitySelect)
        .hover(this.generalOption.withText(national))
        .click(this.generalOption.withText(national))
        .click(this.genderSelect)
        .hover(this.generalOption.withText(gender))
        .click(this.generalOption.withText(gender))

        .click(this.submitButton)
    }
}
export default new PersonalDetails();