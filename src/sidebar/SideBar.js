import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import './SideBar.css'

export default class SideBar extends React.Component {

    static contextType = NotefulContext;

    render() {

        const { folders = [] } = this.context
        const folderId = folders.map(folder => folder.id)
        const findFolder = (folders = [], folderId) =>
            folders.find(folder => folder.id === folderId)

        const folderDisplay = findFolder(folders, folderId);

        return (
            <nav className="nav">
                <div className="side">
                <div className="folderList">
                    {folders.map(folder =>
                        <li key={folder.id} >
                                <NavLink to={`/folder/${folder.id}`} className={folder.id === folderId ? ' active' : 'not-active'} >
                                <h3>{folder.name}</h3>
                            </NavLink>
                            {folderDisplay}
                        </li>)}
                </div>
                <Link 
                    className='addFolder'
                    id='add-folder-link' 
                    to='/add-folder'>
                        Add Folder
                </Link>
                </div>
            </nav>
        )
    }
}

SideBar.defaultProps = {
    folders: [],
}

SideBar.propTypes = {
    folders: PropTypes.array,
    id: PropTypes.string,
    name: PropTypes.string
}
