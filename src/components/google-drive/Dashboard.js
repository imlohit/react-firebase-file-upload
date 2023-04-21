import React from 'react'
import NavbarComponent from './Navbar'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'

export default function Dashboard() {
  const {folder,childFolders}=useFolder("7wNMcbad2zb6rqFF81Xt")
  console.log(childFolders)
  return (
    <div>
      <NavbarComponent/>
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
} 