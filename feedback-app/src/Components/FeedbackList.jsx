//loop through and import each feedback
//import { PropTypes } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from './FeedbackItem'
import React from 'react'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/spinner"

// type Feedback={  
//   id:number,
//   rating:number,
//   text?:string
// }
// type Props = {
//   feedback :Feedback[]
// }

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  console.log(feedback)
    if (!isLoading&&(!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
      }
    
    return isLoading ? <Spinner/> :(
        <div className='feedback-list'>
          <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    
      )

//   return (
//     <div className='feedback-list'>
//       {feedback.map((item) => (
//         //<div>{item.rating}</div>
//         < FeedbackItem key={item.id} item={item} 
//         handleDelete={handleDelete}
//              />
//         ))}
//     </div>

//   )
}

export default FeedbackList
