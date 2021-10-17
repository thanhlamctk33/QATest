import { Selector, t } from 'testcafe';
import XPathSelector from '../Utilities/xpath-selector';

class RegistrationMethod {
    constructor () { 
        this.standardRegistrationButton  = Selector('div:nth-child(2)>div>button>span>span>span.block');           
    }
    async chooseGetStartForStandardRegistration () {
        await t
        .wait(5000)
        .click(this.standardRegistrationButton)
        
    }  
}
export default new RegistrationMethod();