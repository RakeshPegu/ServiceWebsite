import {createBrowserRouter} from 'react-router'
import {RouterProvider} from 'react-router/dom'
import Layout from './routes/Layout'
import Home from './routes/Home'
import TermsOfService from './routes/terms'
import PrivacyPolicy from './routes/privacyPolicy'
import SignIn from './routes/SignIn'
import SignUp from './routes/signup'
import Profile from './routes/profile'
import UserProfile from './routes/userProfile'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"",
          element:<Home/>
        },
        {
          path:"terms_of_service",
          element:<TermsOfService/>
        },
        {
          path:"privacy_policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"profile",
          element:<Profile/>
        },
        {
          path:"user_profile",
          element:<UserProfile/>
        }

      ]
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    }
  ])
 
  return (
    <RouterProvider router={router}/>
  )
}


export default App
