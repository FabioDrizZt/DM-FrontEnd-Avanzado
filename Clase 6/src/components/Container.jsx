import {
  Button,
  ButtonContainer,
  Form,
  Image,
  Input,
  LogoContainer,
  ParentComponent,
  Title
} from './style'
import Logo from '../assets/DM.png'
import { useState } from 'react'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function Container () {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!data.name) {
      window.alert('ingrese su nombre')
    } else if (!data.lastName) {
      window.alert('ingrese su apellido')
    } else if (!data.email || !emailRegex.test(data.email)) {
      window.alert('ingrese bien su correo')
    }
    console.table(data)
  }

  const handleCleanUp = () => {
    setData({
      name: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  return (
    <div>
      <Title>Eventos y formularios</Title>
      <ParentComponent>
        <LogoContainer>
          <Image src={Logo} alt='form_logo' />
        </LogoContainer>
        <Form id='user_form' onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder='Name'
            value={data.name}
            name='name'
            fontcolor='red'
          />
          <Input
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            placeholder='Last Name'
            value={data.lastName}
            name='lastName'
            fontcolor='blue'
          />
          <Input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder='Email'
            value={data.email}
            type='email'
            name='email'
            fontcolor='green'
          />
          <Input
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder='Password'
            value={data.password}
            type='password'
            name='password'
            fontcolor='purple'
          />
        </Form>
        <ButtonContainer>
          <Button onClick={handleCleanUp}>Cancel</Button>
          <Button form='user_form' type='submit' main='true'>
            Submit
          </Button>
        </ButtonContainer>
      </ParentComponent>
    </div>
  )
}
