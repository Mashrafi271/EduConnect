// Pages/Students.jsx
import React from 'react';
import studentsList from '../Components/Assets/raw_data/studentsList'; // Adjust path if needed
import './Students.css'; // Create Students.css and adjust styles
import image from '../Components/Assets/img_data/defaultimg1.jpg'; // Adjust path if needed

const Students = () => {
    return (
        <div className="students-page">
            <h1>Our Top Students</h1>
            <div className="students-list-container">
                {studentsList && studentsList.length > 0 ? studentsList.map(student => (
                    <div key={student.id} className="student-item">
                        <img src={student.image || image} alt={student.name} className="student-item-image" />
                        <div className="student-item-details">
                            <h2>{student.name}</h2>
                            <div className="student-item-contact">
                                <strong>Contact:</strong>
                                <p>Email: <a href={`mailto:${student.contact?.email || ''}`}>{student.contact?.email || 'N/A'}</a></p>
                                <p>Phone: <a href={`tel:${student.contact.phone ? student.contact.phone : ''}`}>{student.contact.phone ? student.contact.phone : 'N/A'}</a></p>
                            </div>
                        </div>
                    </div>
                )) : <p>No students available</p>}
            </div>
        </div>
    );
};

export default Students;