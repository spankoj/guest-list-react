/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
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

const baseUrl = 'http://localhost:5000';

function App() {
  const [showAddGuest, setShowAddGuest] = useState(false);
  const [guests, setGuests] = useState([]);

  // Getting all guest
  useEffect(() => {
    const fetchGuests = async () => {
      const response = await fetch(`${baseUrl}/`);
      const allGuests = await response.json();
      setGuests(allGuests);
    };
    fetchGuests();
  }, []);

  // Add Guest
  const addGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    });

    const createdGuest = await response.json();

    setGuests([...guests, createdGuest]);

    ////// Without API
    // console.log(guest);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newGuest = { id, ...guest };
    // setGuests([...guests, newGuest]);
  };

  // Delete Guest
  const deleteGuest = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
    const deletedGuest = await response.json();

    setGuests(guests.filter((guest) => guest.id !== id));
  };

  // Toggle Attendence
  const toggleAttendence = async ({ attending, id }) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
    const updatedGuest = await response.json();

    setGuests(
      guests.map((guest) => {
        return guest.id === id
          ? { ...guest, attending: updatedGuest.attending }
          : guest;
      }),
    );
  };

  return (
    <div css={containerStyle}>
      <Header
        onAdd={() => setShowAddGuest(!showAddGuest)}
        onBtnChange={showAddGuest}
      />
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
