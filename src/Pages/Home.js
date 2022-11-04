import React from 'react'
// import { useGlobalContext } from '../context'
import slack from '../slack.png'
import Github from '../github.png'
import { NavLink } from 'react-router-dom'
import logo from '../I4G.png'
import zuri from '../zuri.png'
import data from '../data.js'

const HomePage = () => {
  return (
    <div className='App'>
      <img src='https://github.com/Bashir2002.png' alt='' />
      <h3>Aliu Bashir</h3>
      <div className='links'>
        {data.map((item) => {
          const { id, key, url, sit, desc, target } = item

          return (
            // <button key={key} id={id} class={sit}>
            <a
              key={key}
              id={id}
              class={`${sit} button`}
              href={url}
              target={target}
            >
              {desc}{' '}
            </a>
            // </button>
          )
        })}
      </div>
      <div className='socials'>
        <a href=''>
          <img src={slack} alt='' />
        </a>
        <a href='https://github.com/Bashir2002'>
          <img src={Github} alt='' />
        </a>
      </div>
      <section className='footers'>
        <img src={zuri} alt='' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={logo} alt='' />
      </section>
    </div>
  )
}
export default HomePage
