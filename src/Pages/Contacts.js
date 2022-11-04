import React, { useRef } from 'react'
import logo from '../I4G.png'
import zuri from '../zuri.png'

import styled from 'styled-components'

const ContactPage = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setlastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    //     var params = {
    //       name: `${firstName} ${lastName}`,
    //       email: email,
    //       message: message,
    //     }
    //     if (firstName === '' && email === '' && message === '') {
    //       alert('input field is empty')
    //     } else
    //       emailjs
    //         .send(
    //           'service_fowzbaj',
    //           'template_5xtnofs',
    //           params,
    //           'bJuHV43wl24US7DKx'
    //         )
    //         .then(
    //           (result) => {
    //             setEmail('')
    //             setFirstName('')
    //             setlastName('')
    //             setMessage('')
    //             alert('message sent successfully')
    //           },
    //           (error) => {
    //             alert('message not sent,check your connection and Try again')
    //           }
    //         )
  }

  return (
    <Wrapper>
      <div className='part'>
        <div className='part1'>
          <h2>Contact Me</h2>
          <p id='info'>
            Hi there, contact me to ask me about anything you have in mind.{' '}
          </p>
        </div>
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e)
          }}
          className='part2'
        >
          <div className='name'>
            <div className='first'>
              <label htmlFor='first'>First Name</label>
              <input
                type='text'
                placeholder='Enter your first name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                name='firstName'
                id='first_name'
              />
            </div>
            <div className='second'>
              <label htmlFor='second'>Last Name</label>
              <input
                type='text'
                value={lastName}
                placeholder='Enter your last name'
                onChange={(e) => {
                  setlastName(e.target.value)
                }}
                name='lastName'
                id='last_name'
              />
            </div>
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='yourname@email.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              name='Email'
              id='email'
            />
          </div>
          <div className='message'>
            <label htmlFor='message'>Message</label>
            <textarea
              type='text'
              placeholder='Send me a message and Ill reply you as soon as possible...'
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              name='message'
              rows='5'
              cols='35'
              id='message'
            />
          </div>
          <div className='check'>
            <input type='checkbox' name='' id='checkbox' />
            <p>
              You agree to providing your data to Bashir who may contact you.
            </p>
          </div>
          <button
            type='submit'
            id='btn_submit'
            onClick={(e) => {
              sendEmail(e)
            }}
            className='cv4-btn'
          >
            Send Message✅
          </button>
        </form>
      </div>
      <section className='footers'>
        <img src={zuri} alt='' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={logo} alt='' />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  //   width: 90vw;
  // display: grid;
  //   padding: 15rem 0;

  margin: 0 auto;
  // text-align: center;
  gap: 4rem;
  .about-img {
    max-width: 100%;
    // margin: 0 auto;
    display: block;
    text-align: center;
    border-radius: var(--radius);
    // height: 500px;
    // object-fit: cover;
  }
  h2 {
    font-size: 1.8rem;
  }
  .check {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    // justify-content: start;
  }
  .check input {
    width: unset;
    border: 1px solid #d0d5dd;
    outline: none;
    // padding: 0;
    font-size: unset;
    border-radius: none;
    height: unset;
    // background: #5a686a;
    color: black;
  }
  .part {
    // display: grid;
    // margin: 0 auto;
    // width: 70vw;
    // grid-template-columns: 40% 55%;
    // gap: 5%;
    align-items: center;
  }
  #info {
    font-size: 1.3rem;
    margin: 1rem 0 3rem 0;
    // padding-right: 5rem;
  }
  .name,
  .email,
  .message {
    // margin: 1rem 0;
  }
  .name {
    display: grid;
    grid-template-columns: 47% 47%;
    justify-content: space-between;
  }
  label {
    font-family: 'Alpino-Regular';
    font-size: 1.2rem;
    // margin-bottom: 5rem;
  }
  .name div,
  .email,
  .message {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }
  input {
    width: 100%;
    border: 1px solid #d0d5dd;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 10px;
    height: 3rem;
    // background: #5a686a;
    color: black;
  }
  textarea {
    resize: none;
    // background: #5a686a;
    border: 1px solid #d0d5dd;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 10px;
    outline: none;
    width: 100%;
  }
  .about-img {
    object-fit: contain;
    padding: 0 2rem;
  }
  .socials {
    display: flex;
    gap: 2.5rem;
    height: 1.5rem;
  }
  .socials a {
    height: 1.5rem;
  }
  .socials img {
    height: 100%;
  }
  #email1 {
    color: #3772ff;
    margin-bottom: 1rem;
  }
  .img {
    display: flex;
    flex-direction: column;
  }
  .img1 {
    width: 80%;
    position: relative;
    top: 10%;
    right: 235%;
  }
  .img2 {
    width: 25%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .journey {
    border-top: 1px dashed #9eacae;
    margin-top: 5rem;
  }
  .journey h3 {
    padding: 1rem 0;
  }
  .join {
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
  }
  .join2 {
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    justify-content: space-between;
  }
  h3 {
    margin-down: 2rem;
  }
  .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    padding: 3rem 0;
    width: 50%;
  }
  p {
    line-height: 1.5;
    // max-width: 45em;
    // margin: 0 auto;
    // margin-top: 2rem;
    color: #475467;
  }
  .back {
    font-weight: bolder;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (max-width: 800px) {
    // width: 95%;
    #goal {
      padding-left: 1rem;
    }
    #info {
      font-size: 1.1rem;
      padding-right: 1rem;
    }
    .about {
      flex-direction: column-reverse;
    }
    .text {
      width: 90%;
    }
    .socials a {
      height: 1.2rem;
    }
    .socials {
      display: flex;
      gap: 1.5rem;
      height: 1.5rem;
    }
    .join {
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 49% 49%;
      justify-content: space-between;
    }
  }
  @media (max-width: 800px) {
    .part {
      display: grid;
      grid-template-columns: 100%;
      // gap: 5%;
      width: 100%;
      align-items: center;
    }

    .journey h3 {
      padding-left: 1rem;
    }
  }
  @media (max-width: 550px) {
    :root {
      font-size: 1px;
    }
    .name {
      display: grid;
      grid-template-columns: 100%;
      justify-content: space-between;
    }

    .join {
      padding: 0 1rem;
      align-items: center;
      display: grid;
      grid-template-columns: 100%;
      justify-content: center;
    }
    .join2 {
      padding: 0 1rem;
      align-items: center;
      display: grid;
      grid-template-columns: 100%;
      justify-content: center;
    }
  }
`

export default ContactPage
