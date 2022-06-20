import React from 'react'

function Login(){
  const [ formDetails, setFormDetails ] = React.useState({
    name: '',
    password: '',
  })
  
  function updateFormDetails( detail, value ){
    setFormDetails(
      { 
        ...formDetails,
        [detail]: value
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
          value={formDetails.name}
          onChange={ (e) => { updateFormDetails( 'name', e.target.value ),  console.log(formDetails) }}
        />

        <input 
          className="input-style mt-12" 
          type='password'
          placeholder="Password *"
          value={formDetails.password}
          onChange = {(e) => { updateFormDetails('password', e.target.value ) }}
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