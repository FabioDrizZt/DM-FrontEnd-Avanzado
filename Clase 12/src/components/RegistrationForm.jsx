import useLocalStorage from '../hooks/useLocalStorage'

const RegistrationForm = () => {
  const [user, setUser] = useLocalStorage('user', {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={user.firstName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={user.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={user.password}
        onChange={handleChange}
      />
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={user.confirmPassword}
        onChange={handleChange}
      />
      <button type='submit'>Register</button>
    </form>
  )
}

export default RegistrationForm
