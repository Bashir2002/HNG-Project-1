import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import slack from './slack.png'
import Github from './github.png'
import logo from './I4G.png'
import zuri from './zuri.png'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contacts'
import data from './data.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contacts' element={<Contact />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

// function App() {
//   return (
// <div className='App'>
//   <img src='https://github.com/Bashir2002.png' alt='' />
//   <h3>Aliu Bashir</h3>
//   <div className='links'>
//     {data.map((item) => {
//       const { id, key, url, sit, desc } = item

//       return (
//         <button key={key} id={id} class={sit}>
//           <a href={url} target='_blank'>
//             {desc}{' '}
//           </a>
//         </button>
//       )
//     })}
//   </div>
//   <div className='socials'>
//     <a href=''>
//       <img src={slack} alt='' />
//     </a>
//     <a href='https://github.com/Bashir2002'>
//       <img src={Github} alt='' />
//     </a>
//   </div>
//   <section className='footers'>
//     <img src={zuri} alt='' />
//     <p>HNG Internship 9 Frontend Task</p>
//     <img src={logo} alt='' />
//   </section>
// </div>
//   )
// }

// export default App
