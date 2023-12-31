import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  color: ${({ primary }) => (primary ? 'blue' : 'grey')};
  background-color: ${(props) => (props.primary ? 'grey' : 'none')};
  text-align: center;
  font-size: 2rem;
`
export const ParentComponent = styled.div`
  width: 350px;
  height: auto;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
export const LogoContainer = styled.div`
  width: 100px;
`

export const Image = styled.img`
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
  height: auto;
`

export const Input = styled.input`
  padding: 10px;
  width: 94%;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px dotted gray;
  color: #000;
  &:focus {
    outline: none;
  }
  color: ${({ fontcolor }) => fontcolor};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
`

export const Button = styled.button`
  width: 45%;
  padding: 8px;
  border-radius: 5px;
  color: #eee;
  font-size: 0.9em;
  cursor: pointer;
  background-color: ${(prop) => (prop.main ? '#7367f0' : '#ea5455')};
  box-shadow: ${({ main }) => main && '0 3px 6px 0 rgb(115 103 240 / 40%'};
`
