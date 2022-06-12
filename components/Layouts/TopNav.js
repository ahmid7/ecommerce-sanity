import { Header } from "../index";

function TopNav({ children }){
  return(
    <>
      <Header/>
      { children }
    </>
  )
}

export default TopNav;