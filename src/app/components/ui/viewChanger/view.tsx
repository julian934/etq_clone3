'use client'
import React from 'react'
import Modals from '../views/modals'
import Squares from '../views/squares'
import * as motion from 'motion/react-client'
type Props = {}

const ViewChanger = (props: Props) => {
  return (
    <motion.div className='flex ' >
        
        <motion.div className='flex z-[9999]' >
          <Modals/>
          <Squares/>

        </motion.div>
        </motion.div>
  )
}

export default ViewChanger