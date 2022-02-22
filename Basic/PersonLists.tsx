import React from 'react';

import {PersonListProps} from './PersonLists.types'

const PersonLists = (props: PersonListProps) => {
  return <div>
    {props.names.map((name, index) => <h2>{name.first} {name.last}</h2>)
    }
  </div >;
};

export default PersonLists;
