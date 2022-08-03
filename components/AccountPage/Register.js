import React from 'react'

function Register(){

  const [ formDetails, setFormDetails ] = React.useState({
    username: '',  
    email : '',
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
          className='input-style mt-12'
          type='email'
          placeholder='Email Address'
          name='email'
          value={ formDetails.email }
          onChange={ updateFormDetails }
        />

        <input 
          className="input-style mt-12" 
          type='password'
          placeholder="Password *"
          name='password'
          value={ formDetails.password }
          onChange = { updateFormDetails }
        />

        <p className='mt-6 leading-relaxed'>
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