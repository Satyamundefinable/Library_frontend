import "./about.css"
export const About = () => {
    const facultyInfo = [
        {
            id: 1,
            name: "Dr. Mohan T. A.",
            designation: "Librarian",
            mobile: "9343525141",
            email: "mohan@dhsgsu.edu.in",
            image: "/Dr.-Mohan-T.-A._Library.jpeg"
        },
        {
            id: 2,
            name: "Dr. Mukesh Sahu",
            designation: "Assistant Librarian",
            mobile: "9425437265",
            email: "msahu@dhsgsu.edu.in",
            image: "/Dr.-Mukesh-Sahu"
        },
        {
            id: 3,
            name: "Dr. Anurag Shrivastava",
            designation: "Assistant Librarian",
            mobile: "9425424909",
            email: "ashrivastava@dhsgsu.edu.in",
            image: "/Anurag-Shrivastava.jpg"
        },
        {
            id: 4,
            name: "Dr. Dayanandappa Kori",
            designation: "Information Scientist",
            mobile: "7829932452",
            email: "mkoridh@dhsgsu.edu.in",
            image: "/Dayanand-Kori.jpg"
        },
        {
            id: 5,
            name: "Ms. Raksha Choudhary",
            designation: "Professional Assistant",
            mobile: "07582297172",
            email: "pronlass1@dhsgsu.edu.in",
            image: "/Raksha-Choudhary.jpeg"
        },
        {
            id: 6,
            name: "Ms. Aditi Upadhaya",
            designation: "Semi Professional Assistant",
            mobile: "07582297172",
            email: "upadhyay.a@dhsgsu.edu.in",
            image: "/Aditi-Upadhyaya.jpeg"
        },
        {
            id: 7,
            name: "Mr. Abhinay Shroti",
            designation: "Semi Professional Assistant",
            mobile: "7389715747",
            email: "abhishroti1997@gmail.com",
            image: "/Abhinay-Shroti.jpeg"
        },
    ];
    return (
        <>
            <div className="container">

                <div className="aboutBox">
                    <img src="/photo.webp" alt="Dr. Hari Singh Gour" style={{width :' 70%',height:'50%'}} />
                    <p>
                        <b>Jawaharlal Nehru Library</b>: Dr. Harisingh Gour Vishwavidyalaya Sagar (Central University) is the oldest and Largest University Library situated in the Sagar district of Madhya Pradesh. It is located at the Centre of the University Teaching Departments to help the users for better and regular use of the Library. The Library has 3 stories Stack designed to accommodate 4 lacs volumes with an extension wing and a seminar hall. The present building's foundation stone was laid down by former Prime Minister Pt. Jawahar Lal Nehru. On the occasion of the University Commission’s tour of Saugor, Sir Radhakrishnan observed the following in connection with the site there: “This seat of the University with its situation amidst beautiful natural scenery would have been turned into a beauty spot in any other civilized country.”
                    </p>

                </div>

                <div className="infoTable">
                    <h2>Faculty Information</h2>
                    <table >
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name & Designation </th>
                                <th>Contact</th>
                                <th>Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facultyInfo.map((data) => (


                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td><strong>{data.name}</strong> <br /> {data.designation}</td>
                                    <td>Mobile : {data.mobile} <br />Email : {data.email}</td>
                                    <td><img src={data.image} alt={data.name} style={{ height: '100px' }} /></td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

        </>


    );
};
