import React from 'react'
import Task1 from './Component/Task1'
import Task2 from './Component/Task2'
import Task3 from './Component/Task3'
import Task4 from './Component/Task4'
import Task5 from './Component/Task5'
import Task6 from './Component/Task6'
import ProfileCard from './Component/ProfileCard'
import SearchFilter from './Component/SearchFilter'
import FiveStarRating from './Component/FiveStarRating'
import GitHubProfileFinder from './Component/GitHubProfileFinder'


const App = () => {
  return (
    <div className=' w-full h-screen'>
       {/* <Task1/>   */} {/*completed*/}
       {/* <Task2/>   */} {/*completed*/}
       {/* <Task3/> */}   {/*completed*/}
       {/* <Task4/> */}   {/*completed*/}
       {/* <Task5/> */}   {/*completed*/}
       {/* <Task6/> */}   {/*completed*/}
      {/* <ProfileCard/> */}
      {/* <SearchFilter/> */}
      {/* <FiveStarRating/> */}
      <GitHubProfileFinder/>

    </div>
  )
}

export default App