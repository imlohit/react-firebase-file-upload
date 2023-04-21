import React from 'react'
import NavbarComponent from './Navbar'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'

export default function Dashboard() {
  const {folder}=useFolder()
  return (
    <div>
      <NavbarComponent/>
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
      </Container>
    </div>
  )
}