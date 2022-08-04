import React from 'react'

function Register(){

  
  /* Creating a state object called formDetails and a function called setFormDetails. */
  const [ formDetails, setFormDetails ] = React.useState({
    username: '',  
    email : '',
    password: '',
  })

  /**
   * When the user types in the input field, update the formDetails object with the new value.
   * @param e - the event object
   */
  function updateFormDetails(e){
    setFormDetails(
      { 
        ...formDetails,
        [e.target.name]: e.target.value
      }
    )
  }

  return ( 
    <aside>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          className='input-style'
          type='text'
          placeholder='Username'
          name='username'
          value={ formDetails.username }
          onChange={ updateFormDetails }
        />

        <input
          className='input-style mt-3 lg:mt-6 xl:mt-12'
          type='email'
          placeholder='Email Address'
          name='email'
          value={ formDetails.email }
          onChange={ updateFormDetails }
        />

        <input 
          className="input-style mt-3 lg:mt-6 xl:mt-12" 
          type='password'
          placeholder="Password *"
          name='password'
          value={ formDetails.password }
          onChange = { updateFormDetails }
        />

        <p className='mt-3 xl:mt-6 text-xs lg:text-sm xl:text-base leading-relaxed'>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>

        <input 
          className="form-button" 
          type='submit'
          value='REGISTER'
        />

      </form>
      
    </aside>
  )
}

export default Register