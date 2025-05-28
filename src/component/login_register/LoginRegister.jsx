import { useState } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const LoginRegister = ()=>{
   
      const [isExistingUser, setIsExistingUser] = useState(true)
   
     return <div>
      
        {isExistingUser ? <SignIn newUser={setIsExistingUser}/>: <SignUp existingUser={setIsExistingUser}/>}
     </div>
}
export default LoginRegister