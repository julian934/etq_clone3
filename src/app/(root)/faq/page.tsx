'use client'
import React from 'react'
import { Metadata } from 'next'


export const metadata:Metadata={
  title:'FAQ',
  description:'The FAQ Page',
  creator:'Julian Borner'
}

type Props = {}

const FAQ = (props: Props) => {
  return (
    <div>FAQ</div>
  )
}

export default FAQ