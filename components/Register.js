import React from 'react'

function Register(){
  const [ formDetails, setFormDetails ] = React.useState({
    username: '',  
    email : '',
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
          value={formDetails.username}
          onChange={ (e) => { updateFormDetails( 'username', e.target.value ) }}
        />

        <input
          className='input-style mt-12'
          type='email'
          placeholder='Email Address'
          value={formDetails.username}
          onChange={ (e) => { updateFormDetails( 'email', e.target.value ) }}
        />

        <input 
          className="input-style mt-12" 
          type='password'
          placeholder="Password *"
          value={formDetails.password}
          onChange = {(e) => { updateFormDetails('password', e.target.value ) }}
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