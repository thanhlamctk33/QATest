import Director from '../PageObject/business_role_page';
import registerTest from './registration_test'

test
    ('Business Role', async t => {
        registerTest
        await Director.navigateDirectorForm();
        await Director.fillInForm();
});
