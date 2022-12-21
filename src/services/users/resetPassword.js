import { API_URL } from '../../configs/constants';
import _ from 'lodash';


const resetPassword = async (username) => {

    // eslint-disable-next-line no-useless-catch
    try {
        const resetPasswordRaw = await fetch(`${API_URL}/users/resetPassword`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username
            })
        });
        const resetPassword = await resetPasswordRaw.json();
    }
    catch (error) {
        throw error;
    }
};

export default resetPassword;
