import React from 'react'
import { Navbar,Hero, Skills, About, Footer } from './components'
import Fedback from './components/Fedback'
const App = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Fedback />
       <Footer />
    </div>
  )
}

export default App

// import React from 'react'
// import { Fedback, Hero, Navbar, Skills} from './components'


// const App = () => {
//   return (
//     <div>
//       <Navbar />S
//       <Hero />
//     </div>
//   )
// }

// export default App