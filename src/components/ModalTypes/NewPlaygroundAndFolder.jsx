import React from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
const Opt = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top:2px;
    
`
const NewPlaygroundAndFolder = () => {
  return (
    <>
      <Header>
        <Heading>Create New Playground & Create New Folder</Heading>
        <IoCloseSharp />
      </Header>
      <Content> 
        <p>Enter Folder Name: <input type="text" /></p>
        <p>Enter PLayground: <input type="text" /></p>
      </Content>
      <Opt>
      <select name="" id="">
        <option value="c++">C++</option>
        <option value='java'>Java</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
      <button>Create New Playground</button>
      </Opt>
    </>

  )
}

export default NewPlaygroundAndFolder