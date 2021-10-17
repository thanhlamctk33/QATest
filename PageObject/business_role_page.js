import { Selector, t } from 'testcafe';
import XPathSelector  from '../Utilities/xpath-selector';

var country = "";
var solution = ""

class Director {
    constructor () {
        this.titleRoleLabel = XPathSelector('//div[contains(text(),"I am a registered director of the company")]');
        this.countrySelect = Selector('div[placeholder="Select any of the following"]');
        this.solutionSelect = Selector('div[placeholder="Select applicable options"]');
        this.continueButton = Selector('.block');
        this.generalOption = Selector('div.q-item__label');        
    }
    async navigateDirectorForm () {
        await t
        .click(this.titleRoleLabel);
    }

    async fillInForm (country, solution) {
        await t
        .click(this.countrySelect)
        .hover(this.generalOption.withText(country))
        .click(this.generalOption.withText(country))
        .click(this.solutionSelect)
        .hover(this.generalOption.withText(solution))
        .click(this.generalOption.withText(solution))
        .click(this.continueButton)
    }
}
export default new Director();