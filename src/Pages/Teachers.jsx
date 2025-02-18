// Pages/Teachers.jsx
import React from 'react';
import teachersList from '../Components/Assets/raw_data/teachersList'; // Adjust path if needed
import './Teachers.css';
import image from '../Components/Assets/img_data/defaultimg2.jpg'; // Adjust path if needed

const Teachers = () => {
    return (
        <div className="teachers-page">
            <h1>Our Teachers</h1>
            <div className="teachers-list-container">
                {teachersList.map(teacher => (
                    <div key={teacher.id} className="teacher-item">
                        <img src={teacher.image} alt={teacher.name} className="teacher-item-image" />
                        <div className="teacher-item-details">
                            <h2>{teacher.name}</h2>
                            <p className="teacher-item-subject">
                                Subjects: {Array.isArray(teacher.subjects) ? teacher.subjects.join(', ') : 'N/A'} {/* Check if subjects is an array */}
                            </p>
                            <p className="teacher-item-info">
                                <strong>Proficiency:</strong> {teacher.proficiencyLevel}<br />
                                <strong>Grade Levels:</strong> {Array.isArray(teacher.gradeLevel) ? teacher.gradeLevel.join(', ') : 'N/A'}<br /> {/* Check if gradeLevel is an array */}
                                <strong>University:</strong> {teacher.university}<br />
                                <strong>Hourly Rate:</strong> ${teacher.hourlyRate}
                            </p>
                            <p className="teacher-item-bio">{teacher.bio}</p>
                            <div className="teacher-item-contact">
                                <strong>Contact:</strong>
                                <p>Email: <a href={`mailto:${teacher.contact.email}`}>{teacher.contact.email}</a></p>
                                <p>Phone: <a href={`tel:${teacher.contact.phone}`}>{teacher.contact.phone}</a></p>
                            </div>
                            <p className="teacher-item-availability">
                                <strong>Availability:</strong> {Array.isArray(teacher.availability) ? teacher.availability.join(', ') : 'N/A'} {/* Check if availability is an array */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;