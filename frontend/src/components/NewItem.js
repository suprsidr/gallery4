import React from 'react';
import CreateItem from './CreateItem';
import PleaseSignIn from './PleaseSignIn';

const NewItem = props => (
  <div>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default NewItem;