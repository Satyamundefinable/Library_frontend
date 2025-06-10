import { useState } from "react";

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
  {
    id: 6,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 7,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 8,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 9,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 10,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 11,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 12,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 13,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 14,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 15,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 16,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 17,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 18,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 19,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 20,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 21,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 22,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 23,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 24,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 25,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 26,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 27,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 28,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 29,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 30,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 31,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 32,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 33,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 34,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 35,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 36,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 37,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 38,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 39,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 40,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 41,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 42,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 43,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 44,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 45,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  },
  {
    id: 46,
    bookName: "To Kill Mockingbird",
    writer: "Harper Lee",
    image: "/Mockingbird_book.webp"
  },
  {
    id: 47,
    bookName: "Mujhe Chand Chahiye",
    writer: "Surendra Verma",
    image: "/Mujhe-Chand-Chahiye_book.webp"
  },
  {
    id: 48,
    bookName: "Gunahon Ka Devta",
    writer: "Dharamvir Bharti",
    image: "/Gunahon_ka_devta_book.webp"
  },
  {
    id: 49,
    bookName: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    image: "/The-Subtle-Art-of-Not-Giving-a _F*ck_book.webp"
  },
  {
    id: 50,
    bookName: "Rich Dad Poor Dad .webp",
    writer: "Robert Kiyosaki",
    image: "/Rich-Dad-Poor-Dad_book.webp"
  }
];
  const filteredBooks = booksData.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.writer.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Library Collection</h2>

        <input
          type="text"
          placeholder="Search by book name or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            height: "30px",
            maxWidth: '400px',
            marginBottom: '2rem',
            fontSize: '1rem',
            borderRadius: '2px',
            border: '1px solid #ccc'
          }}
        />

        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (

            <div key={book.id} style={{padding: '1rem',marginBottom: '1rem',border: '1px solid #ddd',borderRadius: '8px', boxShadow : 'rgba(142, 124, 124, 0.3)'}}>
              <p><strong>Book:</strong> {book.bookName}</p>
              <p><strong>Author:</strong> {book.writer}</p>
              <img src={book.image} alt={book.bookName} loading="lazy" style={{ maxWidth: '100px', height: '100px', borderRadius: '4px' }}/>
            </div>

          ))) : (
          <p>No books found for "{searchQuery}".</p>
        )}
      </div>

      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Books Collection</h2>

        {booksData.map(book => (
          <div key={book.id} style={{padding: '1rem',marginBottom: '1rem',border: '1px solid #ddd',borderRadius: '8px'}}>

            <h3>{book.bookName}</h3>

            <p><strong>Author:</strong> {book.writer}</p>

          </div>

        ))}

      </div>
    </>
  )
}