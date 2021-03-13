import React from 'react';
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types';

export default class SideNav extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    render() {
        const { notes = [], folders = [] } = this.context

        const { noteId } = this.props.match.params;

        const noteFolderId = notes.filter(note => note.id === noteId)

        const idForFolder = folders.filter(folder => folder.id === 2)

        const getFolderName = (noteId, folders = []) => (
            (noteFolderId.folder_id === idForFolder.id)
                ? idForFolder.map(folder => folder.folder_name)
                : folders.filter(folder => folder.id)
        )

        return (
            <div className="SideNav">
                <li id="go-back">
                <button
                    type="button"
                    className="go-back-link"
                    onClick={() => this.props.history.goBack()}>
                    Back
                </button>
                </li>
            </div>
        )
    }
}
SideNav.defaultProps = {
    notes: [],
    folders: [],
    name: ""
}

SideNav.propTypes = {
    notes: PropTypes.array,
    folders: PropTypes.array,
    name: PropTypes.string,
    noteId: PropTypes.number
}