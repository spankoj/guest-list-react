import { useState } from 'react';
import Guest from './Guest';

const Guests = ({ guests, onDelete, onToggle }) => {
  return (
    <div>
      {guests.map((guest) => {
        return (
          <Guest
            key={guest.id}
            guest={guest}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default Guests;
