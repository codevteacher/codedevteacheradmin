import { API_URL } from '../../configs/constants';

const usersLogin = async (username, password) => {
    debugger;
    try {
        const usersLoginRaw = await fetch(`${API_URL}/users/login`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const usersLogin = await usersLoginRaw.json();
        if (usersLogin.message == 'You Can not login to our system. Wrong username or password!') {
            throw new Error(usersLogin.message);
        }
        const token = usersLogin?.access_token;
        if (!token) {
            throw new Error('not found token');
        }
        // const decoded = jwt_decode(token);
        // if (
        //     !(
        //         decoded[`${globalConstants.ROLE.CUSTOMER}`]
        //     )
        // ) {
        //     throw new Error('can not login');
        // }
        // await setFix4Token(token);
        return;
    }
    catch (error) {
        // immutableSetState((draft) => {
        //     draft.login.errorMessage = error.message;
        //     draft.login.isValid = false;
        //     draft.login.disable = false;
        // });
        // throw new Error('Invalid email or password');
    }
};

export default usersLogin;
