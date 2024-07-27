import { useState } from 'react';
import formStyles from '../styles/form.module.css';
import styles from '../styles/register.module.css';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisible((prevVisibility) => ({
            ...prevVisibility,
            [field]: !prevVisibility[field]
        }));
    };

    return (
        <div className={styles.LoginContainer}>
            <form className={formStyles.general}>
                <div className={styles.InputLayoutTwoRow}>
                    <div className={formStyles.inputBlock}>
                        <label>First Name *</label>
                        <input type="text" placeholder="Type your first name" required />
                    </div>
                    <div className={formStyles.inputBlock}>
                        <label>Last Name *</label>
                        <input type="text" placeholder="Type your last name" required />
                    </div>
                </div>
                <div className={formStyles.inputBlock}>
                    <label>E-mail *</label>
                    <input type="email" placeholder="Type your e-mail" required />
                </div>
                <div className={styles.InputLayoutTwoRow}>
                    <div className={formStyles.inputBlock}>
                        <label>Password *</label>
                            <input
                                type={passwordVisible.password ? "text" : "password"}
                                placeholder="Type your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('password')}
                                className={formStyles.passwordToggle}
                            >
                                {passwordVisible.password ? '🙈' : '👁️'}
                            </button>
                    </div>
                    <div className={formStyles.inputBlock}>
                        <label>Confirm Password *</label>
                            <input
                                type={passwordVisible.confirmPassword ? "text" : "password"}
                                placeholder="Type your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                className={formStyles.passwordToggle}
                            >
                                {passwordVisible.confirmPassword ? '🙈' : '👁️'}
                            </button>
                    </div>
                </div>
                <div className={formStyles.inputBlock}>
                    <input type="submit" value="Create an account" className={formStyles.signinButton} />
                </div>
            </form>
        </div>
    );
}
