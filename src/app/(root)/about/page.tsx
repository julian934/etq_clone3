import React from 'react'
import { Metadata } from 'next'

type Props = {}

export const metadata:Metadata={
  title:'About',
  description:'About Us',
  creator:'Julian Borner'
}

const About = (props: Props) => {
  return (
    <div>About</div>
  )
}

export default About