import React from 'react'

export const Login = () => {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <div className="grid">     
          <div className="grid-hover">     
             
             <div className = "form">
               <div className ="border-line">
                 <h3><b> Login </b></h3>
             <form>
               <label>
                 <br></br>
                 <br></br>
                 User Name:
                    <input type="text" name="name" />
                    <br></br>
                    <br></br>
     
                  Password:
                   <input type="password" name="password" />
                   <br></br>
                   <br></br>
      
  
                 
      
                  Confirm Password:
                  <input type="password" name="password" />
                  <br></br>
                  <br></br>
      
                 Mobile Number: 
  
                 <input type="number" name="number" />
                </label>
                <br></br>
                <br></br>
                 <input type="submit" value="Login" />
                 <br></br>
                 <br></br>
                </form>
                </div>
                </div>
             </div>
         </div>         
           
     
        
  
  
        
           
           </>
             
           
     
     
         
         )
     }         

 export default Login
