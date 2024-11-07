import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const About = () => {

  const {loggedInUser} = useContext(UserContext)

  return (
    <div>
        <h1>About</h1>
        <h2 className='text-lg'>{loggedInUser}</h2>
    </div>
  )
}

export default About;