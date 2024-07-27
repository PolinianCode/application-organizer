import { useState } from 'react'
import formStyles from '../styles/form.module.css'
import styles from '../styles/login.module.css'

export default function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={styles.LoginContainer}>
            <form className={formStyles.general}>
                <div className={formStyles.inputBlock}>
                    <label>E-mail *</label>
                    <input type='text' placeholder='Type your e-mail' required></input>
                </div>
                <div className={formStyles.inputBlock}>
                    <label>Password *</label>
                    <input type={passwordVisible ? "text" : "password"} placeholder='Type your password' required>
                    </input>
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className={formStyles.passwordToggle}
                    >
                        {passwordVisible ? '🙈' : '👁️'}
                    </button>
                </div>

                <div className={formStyles.inputBlock}>
                    <input type="submit" value="Sign In" className={formStyles.signinButton}></input>
                </div>
                
            </form>
        </div>
    )
}