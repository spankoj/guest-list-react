/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import AddGuest from './components/AddGuest';
import Guests from './components/Guests';
import Header from './components/Header';

const containerStyle = css`
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #234598;
  border-radius: 5px;
  min-height: 300px;
  max-width: 500px;
  /* overflow: auto; */
`;
function App() {
  const [showAddGuest, setShowAddGuest] = useState(false);
  const [guests, setGuests] = useState([
    {
      id: 1,
      firstName: 'János',
      lastName: 'Spanyol',
      attending: true,
    },
    {
      id: 2,
      firstName: 'Zsófia',
      lastName: 'Kárpáti',
      attending: true,
    },
    {
      id: 3,
      firstName: 'Mátyás',
      lastName: 'Spanyol-Kárpáti',
      attending: false,
    },
    {
      id: 4,
      firstName: 'Konrád',
      lastName: 'Spanyol-Kárpáti',
      attending: false,
    },
  ]);

  // Add Guest
  const addGuest = (guest) => {
    console.log(guest);
    const id = Math.floor(Math.random() * 10000) + 1;

    const newGuest = { id, ...guest };
    setGuests([...guests, newGuest]);
  };

  // Delete Guest
  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  // Toggle Attendence
  const toggleAttendence = (id) => {
    setGuests(
      guests.map((guest) => {
        return guest.id === id
          ? { ...guest, attending: !guest.attending }
          : guest;
      }),
    );
  };

  return (
    <div css={containerStyle}>
      <Header onAdd={() => setShowAddGuest(!showAddGuest)} />
      {showAddGuest && <AddGuest onAdd={addGuest} />}
      {guests.length > 0 ? (
        <Guests
          guests={guests}
          onDelete={deleteGuest}
          onToggle={toggleAttendence}
        />
      ) : (
        'Guest list is empty'
      )}
    </div>
  );
}

export default App;
