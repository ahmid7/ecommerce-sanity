import React from 'react'

function Login(){
  const [ formDetails, setFormDetails ] = React.useState({
    name: '',
    password: '',
  })
  
  function updateFormDetails(e){
    setFormDetails(
      {
        ...formDetails,
        [e.target.name]: e.target.value
      }
    )
  }

  return(
    <aside >
      <form 
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input  
          className="input-style" 
          type='text'
          placeholder="Username or email address *"
          name='name'
          value={formDetails.name}
          onChange={ updateFormDetails }
        />

        <input 
          className="input-style mt-3 lg:mt-6 xl:mt-12" 
          type='password'
          name='password'
          placeholder="Password *"
          value={formDetails.password}
          onChange = { updateFormDetails }
        />

        <label 
          className=""
          htmlFor="remember"
        >
          <input 
            id="remember"
            className="mt-4 lg:mt-5 xl:mt-8 mr-3 text-sm lg:text-base" 
            type='checkbox'
            placeholder=""
          />
          Remember Me
        </label>
        

        <input 
          className="form-button" 
          type='submit'
          value='LOGIN'
        />

      </form>
    </aside>
  )
}

export default Login