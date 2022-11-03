import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import { sendToTelegram } from '../mailer';


export const StyledFormPage = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  height:85%;
    span {
        color:#8d2c2c;
        position:relative;
        top:-7px
    }
    p {
        color:#8d2c2c;
    }
    h1 {
        width:100%;
        text-align:center;
        font-size: 23px;
    }
    h2 {
        color:green;
        text-align:center;
    }
    label {
        color:#607B96;
        margin-bottom:30px;
        display:block;
    }
    input,
    textarea {
        display:block;
        margin:15px 0;
        outline:none;
        background-color:var(--colors-input-bg);
        border:1px solid #607B96;
        color:#465E77;
        border-radius:8px;
        min-height:40px;
        padding:15px;
        width:370px;
    }
    textarea {
        height:145px;
    }
    input[type="submit"] {
        cursor:pointer;
        background-color:#1C2B3A;
        color:white;
        border:none;
    }
    @media (max-device-width:768px) {
        height:unset;
        form {
            width:100%;
        }
        input, textarea {
            width:90%;
            margin:15px auto;
        }
        .input__title {
            width:90%;
            margin:0 auto;
            color:inherit;
        }
    }
`

function ContactsPageContent() {

    const [pending, setPending] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode:"onBlur"
    });
    const onSubmit = (data) => {
        sendToTelegram({
            from:data.email,
            name:data.name,
            message:data.message
        })
        setPending(true)
    };

    return (
        <StyledFormPage>
            <h1>Свяжитесь со мной</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><p className="input__title">_name<span>*</span></p>
                    <input {...register('name', { required: true })} placeholder="Имя" />
                    {errors.name && <p>Обязательное поле</p>}
                </label>
                <label><p className="input__title">_email<span>*</span></p>
                    <input {...register('email', { 
                        required: 'Обязательное поле',
                        pattern: {
                            value:/^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message:'Некорректный email'
                        }
                        })} placeholder="Электронная почта" />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <label><p className="input__title">_message<span>*</span></p>
                    <textarea {...register('message')} placeholder="Текст сообщения" />
                </label>
               
                <input type="submit" />
                {pending && <h2>Форма успено отправлена!</h2>}
            </form>
        </StyledFormPage>
    )
}

export default ContactsPageContent