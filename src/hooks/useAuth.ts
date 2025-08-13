import { AuthUserContext} from "@/context/AuthUserContext"
import { useContext } from "react"


const useAuth = () => {
  const context = useContext(AuthUserContext);

  if(!context){
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }
  return context;
}

export default useAuth