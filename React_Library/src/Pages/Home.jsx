import { NavLink } from 'react-router-dom';
import './home.css';

export const Home = () => {
  const booksData = [
    {
      id: 1,
      bookName: "To Kill Mockingbird",
      writer: "Harper Lee",
      image: "/Mockingbird_book.webp"
    },
    {
      id: 2,
      bookName: "Mujhe Chand Chahiye",
      writer: "Surendra Verma",
      image: "/Mujhe-Chand-Chahiye_book.webp"
    },
    {
      id: 3,
      bookName: "Gunahon Ka Devta",
      writer: "Dharamvir Bharti",
      image: "/Gunahon_ka_devta_book.webp"
    },
    {
      id: 4,
      bookName: "The Subtle Art of Not Giving a F*ck",
      writer: "Mark Manson",
      image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
    },
    {
      id: 5,
      bookName: "Rich Dad Poor Dad .webp",
      writer: "Robert Kiyosaki",
      image: "/Rich-Dad-Poor-Dad_book.webp"
    },
  ];
  
  return (
    <>
   
    <div className="home-container">
      <section className="hero">
        <p>Your gateway to a world of knowledge, culture, and community.</p>
        <button> <NavLink to= "catalog">Explore Now </NavLink></button>
      </section>

      <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <img src="/DHSGCU11.png" alt="" style={{width:'80vw',height:'50vh',border:'2px solid black', borderRadius:'10px',padding:'2vh 0'}}/>
    </div>

      <section className="about">
        <h1>About Us</h1>
        <h2>Inaugurated by Pt. JawaharLal Nehru</h2> <br />
        <p>
          Established in 1946, JNC Library serves thousands of students and researchers across India.
          With over 400,000 books and digital archives, we’re committed to supporting learning, innovation, and academic excellence.
        </p>
         <NavLink to= "about">  Click to Know More</NavLink>
      </section>

    
      <section className="books">
        <h2>Featured Books</h2>
        <div className="book-grid">
        {booksData.map ( book =>  (
          <div key={book.id} className='book-card'>
            <h3>{book.title}</h3>
          <p style={{fontSize:'1.5rem'}}><strong>Book:</strong> {book.bookName}</p>
          <p style={{fontSize:'1.5rem'}}><strong>Author:</strong> {book.writer}</p>
          <img src={book.image} alt={book.bookName} style={{height:'500px', width:'300px', border:'3px solid rgba(1,1,1,4)', borderRadius:'1.2rem'}}/>
          </div>
        )
          
        )}
          
        </div>
      </section>

      <section className="cta">
        <h2>Ready to explore the world of books?</h2>
        <button> <NavLink to = "contact"> Join Now</NavLink></button>
      </section>
    </div>
    </>
  );
};
