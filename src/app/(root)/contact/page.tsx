'use client'
import React from 'react'
import { Metadata } from 'next'


export const metadata:Metadata={
  title:'Contact Us',
  description:'The Contact Us Page',
  creator:'Julian Borner'
}

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>Contact</div>
  )
}

export default Contact