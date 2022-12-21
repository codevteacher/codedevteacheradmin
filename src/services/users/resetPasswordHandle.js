import { API_URL } from '../../configs/constants';
import _ from 'lodash';


const resetPasswordHandle = async (resetPasswordUid, newPassword) => {

    // eslint-disable-next-line no-useless-catch
    try {
        const resetPasswordHandleRaw = await fetch(`${API_URL}/users/resetPasswordHandle`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resetPasswordUid,
                password: newPassword
            })
        });
        const resetPasswordHandle = await resetPasswordHandleRaw.json();
        return resetPasswordHandle;
    }
    catch (error) {
        throw error;
    }
};

export default resetPasswordHandle;
