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
          className="input-style mt-12" 
          type='password'
          name='password'
          placeholder="Password *"
          value={formDetails.password}
          onChange = { updateFormDetails }
        />

        <label 
          className=""
          htmlFor="remeber"
        >
          <input 
            id="remeber"
            className="mt-8 mr-3" 
            type='checkbox'
            placeholder=""
          />
          Remeber Me
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