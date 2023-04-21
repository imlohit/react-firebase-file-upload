import React from 'react'
import NavbarComponent from './Navbar'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import AddFolderButton from './AddFolderButton'

export default function Dashboard() {
  return (
    <div>
      <NavbarComponent/>
      <Container fluid>
        <AddFolderButton/>
      </Container>
    </div>
  )
}