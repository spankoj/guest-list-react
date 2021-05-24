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
      <Header />
      <AddGuest onAdd={addGuest} />
      {guests.length > 0 ? (
        <Guests
          guests={guests}
          onDelete={deleteGuest}
          onToggle={toggleAttendence}
        />
      ) : (
        'No more guests on the list'
      )}
    </div>
  );
}

export default App;
