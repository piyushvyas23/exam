import React from 'react'

// import signpic from "../Images/sign.jpeg";
export const SignUp = () => {
    return (
        <>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid">     
        <div className="grid-hover">     
           
           <div className = "form">
             <div className ="border-line">
               <h3><b>Sign Up </b></h3>
           <form>
             <label>
               <br></br>
               <br></br>
               Full Name:
                  <input type="text" name="name" />
                  <br></br>
                  <br></br>
   
                Email:
                 <input type="email" name="email" />
                 <br></br>
                 <br></br>
    

                Create Password:
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
               <input type="submit" value="Sign Up" />
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
export default SignUp
