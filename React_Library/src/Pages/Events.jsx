import './Event.css';

export const Events = () => {
  const events =  [
    {
      id : 1,
      imageName:"DHSGCU1",
      image: "/DHSGCU1.jpeg"
    },
    {
      id : 2,
      imageName:"DHSGCU2",
      image: "/DHSGCU2.jpg"
    },
    {
      id : 3,
      imageName:"DHSGCU3",
      image: "/DHSGCU3.jpg"
    },
    {
      id : 4,
      imageName:"DHSGCU4",
      image: "/DHSGCU4.jpg"
    },
    {
      id : 5,
      imageName:"DHSGCU5",
      image: "/DHSGCU5.jpeg"
    },
    {
      id : 6,
      imageName:"DHSGC6",
      image: "/DHSGCU6.png"
    },
    {
      id : 7,
      imageName:"DHSGCU7",
      image: "/DHSGCU7.png"
    },
    {
      id : 8,
      imageName:"DHSGCU8",
      image: "/DHSGCU8.png"
    },
    {
      id : 9,
      imageName:"DHSGCU9",
      image: "/DHSGCU9.jpeg"
    },
    {
      id : 10,
      imageName:"DHSGCU10",
      image: "/DHSGCU10.jpeg"
    },
  ];

  return (
    <div className="events-container">
      <section className="events-hero">
        <h1>Previous Events</h1>
        
      </section>

      <section className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      <p>Join us for exciting activities, author talks, exhibitions and more!</p>
      </section>
    </div>
  );
};