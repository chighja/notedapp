import React, { Component } from 'react';
import './Collection.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';

class Collection extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    this.setState(
      {
        loading: true
      },
      async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/notes`);
          const notes = await res.json();

          this.props.dispatch({
            type: 'FETCH_NOTES_SUCCESS',
            payload: { notes }
          });
        } catch (error) {
          this.props.dispatch({
            type: 'FETCH_NOTES_ERROR',
            payload: { error: error.message }
          });
        }
      }
    );
  };

  render() {
    const { notes } = this.props;

    return (
      <div className="Collection">
        {notes.map((note, i) => {
          <Note note={note} key={i} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ notes: state.notes });

export default connect(mapStateToProps)(Collection);
