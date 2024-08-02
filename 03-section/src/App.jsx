import { BrowserRouter as Router } from 'react-router-dom'

// import Interactivity from "./components/10-interactivity/Interactivity"
// import Breakpoints from './components/11-breakpoints/Breakpoints'
// import Columns from './components/12-columns/Columns'
// import Flex from './components/13-flex/Flex'
// import Grid from './components/14-grid/Grid'
// import TransformTransition from './components/15-transform-transition/TransformTransition'
// import Animation from './components/16-animation/Animation'
// import Customization from './components/17-customization/Customization'
import DarkMode from './components/18-dark-mode/DarkMode'

const App = () => {
  return (
    <Router>
      <div className='m-2'>
        {/* <Interactivity /> */}
        {/* <Breakpoints /> */}
        {/* <Columns /> */}
        {/* <Flex /> */}
        {/* <Grid /> */}
        {/* <TransformTransition /> */}
        {/* <Animation /> */}
        {/* <Customization /> */}
        <DarkMode />
      </div>
    </Router>
  )
}

export default App