import Image from 'next/image';
import signUp from '../../styles/signup.module.css'
import img from '../../public/images/login-img.png'
import { useContext } from 'react';
import AppContext from '../../AppContext/AppContext';



const Login = () => {

    const context = useContext(AppContext);

    let darkMode = context.darkMode
    return (
        <div>

            <div className={`${signUp.main} ${darkMode ? 'dark' : 'bg-light'} `}>

                <h2 style={{ color: 'orange' }}>LOGIN</h2>
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
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;