import React, { useState } from 'react';
import { StyledFormPage } from '../contactPage/content/ContactsPageContent'
import { useForm } from 'react-hook-form';
import axios from '../../api/axios/index'

function LoginPage() {
    const [isLogin, setLogin] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        axios.post('/auth/login', {
            login: data.login,
            password: data.password
        })
            .then(response => {
                (response.data.token && setLogin(true))
                window.localStorage.setItem('token', response.data.token)
            })
    };

    return (
        <StyledFormPage>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>_name<span>*</span>
                    <input {...register('login', { required: true })} placeholder="login" />
                    {errors.login && <p>Обязательное поле</p>}
                </label>
                <label>_email<span>*</span>
                    <input {...register('password', {
                        required: 'Обязательное поле'
                    })} placeholder="password" />
                    {errors.password && <p>{errors.password.message}</p>}
                </label>

                <input type="submit" />
                {isLogin && <h2>Вы авторизованы!</h2>}
                {window.localStorage.getItem('token')}
            </form>
        </StyledFormPage>
    )
}

export default LoginPage