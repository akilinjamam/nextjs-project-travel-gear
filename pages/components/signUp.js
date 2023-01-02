import Image from 'next/image';
import React, { useContext } from 'react';
import signUp from '../../styles/signup.module.css';
import img from '../../public/images/signup-form-img.png'
import AppContext from '../../AppContext/AppContext';
const SignUp = () => {

    const context = useContext(AppContext);

    let darkMode = context.darkMode

    return (


        <div className={`${signUp.main} ${darkMode ? 'dark' : 'bg-light'} `}>
            <h2 style={{ color: 'orange' }}>SIGN UP</h2>
            <div className={signUp.container}>
                <div className={signUp.imgPart}>
                    <Image src={img} height={400} width={500} alt=""></Image>
                </div>

                <div className={signUp.detailPart}>
                    <form action="">
                        <input className={signUp.iOne} placeholder='First Name' type="text" />

                        <input className={signUp.iTwo} placeholder='Last Name' type="text" />
                        <br /><br />
                        <input className={signUp.iThree} placeholder='Email' type="email" name="" id="" />
                        <br /><br />
                        <input className={signUp.iFour} placeholder='password' type="password" name="" id="" />

                        <br /><br />
                        <input className='btn btn-primary' type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignUp;