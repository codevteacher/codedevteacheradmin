/* eslint-disable prefer-const */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilLockUnlocked } from '@coreui/icons';
import { AppContext } from '../../../context/AppContext';
import immutableSetState from '../../../context/immutableSetState';
import { useNavigate } from 'react-router-dom';
import { passwordStrength } from 'check-password-strength';
import { useSearchParams } from 'react-router-dom';
import resetPasswordHandle from '../../../services/users/resetPasswordHandle';




const ResetPassword = () => {

    let [searchParams] = useSearchParams();
    const resetPasswordUid = searchParams.get('repui');
    const { appState } = useContext(AppContext);

    const navigate = useNavigate();

    const { login } = appState;


    const passwordCheck = passwordStrength(login?.password).value;


    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm>
                                        <h1>ResetPassword</h1>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type={
                                                    login?.showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                value={login?.password}
                                                onChange={(event) => {
                                                    const newPassword = event.target.value;
                                                    immutableSetState((draft) => {
                                                        draft.login.password = newPassword;
                                                    });
                                                }}
                                            />
                                            <CButton
                                                onClick={() => {
                                                    immutableSetState((draft) => {
                                                        draft.login.showPassword = !draft.login.showPassword;
                                                    });
                                                }}
                                            >
                                                {
                                                    login?.showPassword
                                                        ? <CIcon
                                                            icon={cilLockUnlocked}
                                                            size='sm'
                                                        />
                                                        : <CIcon
                                                            icon={cilLockLocked}
                                                            size='sm'
                                                        />
                                                }
                                                {/* {
                                                    !login?.showPassword
                                                        ? 'show'
                                                        : 'hide'
                                                } */}
                                            </CButton>
                                        </CInputGroup>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type={
                                                    login?.showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="Re Enter Password"
                                                autoComplete="current-password"
                                                value={login?.passwordConfirm}
                                                onChange={(event) => {
                                                    const newPassword = event.target.value;
                                                    immutableSetState((draft) => {
                                                        draft.login.passwordConfirm = newPassword;
                                                    });
                                                }}
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            {
                                                login?.password
                                                && passwordCheck
                                            }
                                        </CRow>
                                        <CRow>
                                            <CCol >
                                                <CButton
                                                    color="warning" className="px-4"
                                                    onClick={async () => {
                                                        const isPasswordChanged = await resetPasswordHandle(resetPasswordUid, login?.password);
                                                        if (isPasswordChanged?.message == 'password updated successfully') {
                                                            navigate('/login');
                                                        }
                                                    }}
                                                    disabled={
                                                        !(
                                                            login?.password
                                                            && resetPasswordUid
                                                            && login?.passwordConfirm
                                                            && login?.password == login?.passwordConfirm
                                                            && !['Too weak', 'Weak'].includes(passwordCheck)
                                                        )
                                                    }
                                                >
                                                    Reset Password
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-white bg-warning py-5" style={{ width: '44%' }}>
                                <CCardBody className="text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <Link to="/register">
                                            <CButton color="warning" className="mt-3" active tabIndex={-1}>
                                                Register Now!
                                            </CButton>
                                        </Link>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default ResetPassword;
