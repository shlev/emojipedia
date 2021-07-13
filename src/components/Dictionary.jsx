import React from 'react'
import emojipedia from '../emojipedia.js';
import Entry from './Entry';

function createEntry(entry) {
    return (
        <Entry 
            key = {entry.id}
            emoji = {entry.emoji}
            name = {entry.name}
            meaning = {entry.meaning}
        />
    )
}

function Dictionary() {
    return (
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    );
}

export default Dictionary
