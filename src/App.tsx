
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1716984157551-cfca8e4d1b2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1716847214582-d5979adbf300?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnw2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1716377239833-54b55d732bc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1672923062105-3127a97ca7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1672923062105-3127a97ca7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8'
]

const imagesWrapperAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.1
    }
  }
}

const imageAnim = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 1.5,
      ease: [0.8, 0, 0.16, 1],
    }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.8, 0, 0.16, 1],
    }
  }
}

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className='w-full h-full relative'>
          <motion.div
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.8, 0, 0.16, 1],
            }}
            className="w-full h-full">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1716611213337-6d2ce6e8e549?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div></div>
          </motion.div>

          <div className='absolute bottom-44 w-full right-0 overflow-hidden '>
            <div className='grid grid-cols-12'>
              <div className='col-span-5'></div>
              <div className='col-span-7 w-full h-[380px]'>
                <motion.div
                  variants={imagesWrapperAnim}
                  initial='hidden'
                  animate='show'
                  className='flex gap-6'>
                  {images.map((d, i) => (
                    <motion.div
                      variants={imageAnim}
                      key={i} className='bg-red-500 h-[380px] aspect-[4/6] rounded-xl'>
                      <img className='object-cover w-full h-full rounded-xl' src={d} alt="" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>

          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.8, 0, 0.16, 1],
            }}
            className='w-full h-full absolute right-0 top-0 bg-white'>

          </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
