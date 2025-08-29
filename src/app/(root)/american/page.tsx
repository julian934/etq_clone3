import React from 'react'
import { Metadata } from 'next'
type Props = {}


export const metadata:Metadata={
  title:'American',
  description:'About American Style.',
  creator:'Julian Borner'
}

const American = (props: Props) => {
  return (
    <div>American</div>
  )
}

export default American