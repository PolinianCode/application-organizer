import { useState } from 'react'
import formStyles from '../styles/form.module.css'
import styles from '../styles/register.module.css'

export default function Register() {

    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={styles.LoginContainer}>
            <form className={formStyles.general}>
                <div className={styles.InputLayoutTwoRow}>

                    <div className={formStyles.inputBlock}>
                        <label>First Name *</label>
                        <input type='text' placeholder='Type your e-mail' required></input>
                    </div>
                    <div className={formStyles.inputBlock}>
                        <label>Last Name *</label>
                        <input type='text' placeholder='Type your e-mail' required></input>
                    </div>
                    
                </div>
                <div className={formStyles.inputBlock}>
                    <label>E-mail *</label>
                    <input type='text' placeholder='Type your e-mail' required></input>
                </div>

                <div className={styles.InputLayoutTwoRow}>

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
                        <label>Confirm Password *</label>
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

                </div>
                

                <div className={formStyles.inputBlock}>
                    <input type="submit" value="Create an account" className={formStyles.signinButton}></input>
                </div>
                
            </form>
        </div>
    )
}