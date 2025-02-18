import React from 'react';
import Hero from '../Components/Hero/Hero'; // Assuming you have a Hero component
import './Home.css'; // You can create a separate CSS file for styling

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section - Main banner area */}
            <Hero />

            {/* About Us Section */}
            <section className="about-us-section">
                <div className="container">
                    <h2>About Educonnect</h2>
                    <p>
                        Welcome to Educonnect, Bangladesh's leading online platform connecting teachers and students across the nation.
                        Our mission is to democratize education and make quality learning accessible to everyone, regardless of location or background.
                        We believe in fostering a collaborative and engaging learning environment to empower the next generation of Bangladeshi students.
                    </p>
                    <p>
                        Educonnect provides a comprehensive suite of tools and resources for both teachers and students.
                        For teachers, we offer a platform to expand their reach, share their expertise, and connect with students seeking guidance.
                        For students, we provide access to a diverse pool of qualified educators and a wealth of learning materials to support their academic journey.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2>Key Features of Educonnect</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <i className="fas fa-chalkboard-teacher"></i> {/* Example icon - you might need to include Font Awesome or similar */}
                            <h3>Find Qualified Teachers</h3>
                            <p>Browse through profiles of experienced and verified teachers from across Bangladesh. Find the perfect শিক্ষক for your needs, whether it's for academic subjects, skill development, or exam preparation.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-video"></i> {/* Example icon */}
                            <h3>Engaging Video Lessons</h3>
                            <p>Access a vast library of high-quality video lessons created by expert educators. Learn at your own pace and revisit concepts as many times as you need.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-puzzle-piece"></i> {/* Example icon */}
                            <h3>Interactive Quizzes & Assessments</h3>
                            <p>Test your understanding and track your progress with interactive quizzes and assessments. Get instant feedback and identify areas for improvement.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-book-open"></i> {/* Example icon */}
                            <h3>Digital Learning Resources</h3>
                            <p>Explore a rich collection of digital textbooks, study guides, and supplementary materials. Enhance your learning experience with resources available at your fingertips.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-users"></i> {/* Example icon */}
                            <h3>Connect & Collaborate</h3>
                            <p>Join a vibrant community of students and teachers.  Participate in discussions, ask questions, and collaborate with peers to enhance your learning journey.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate"></i> {/* Example icon */}
                            <h3>Certificates of Completion</h3>
                            <p>Earn certificates upon successful completion of courses and assessments. Showcase your achievements and boost your credentials.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section (Optional - you can remove this if not needed) */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>What Our Users Say</h2>
                    <div className="testimonial-slider"> {/* You can use a slider/carousel component here */}
                        <div className="testimonial">
                            <p>"Educonnect has been a game-changer for my studies! I can now access quality tutoring from anywhere in Bangladesh."</p>
                            <p className="author">- Sadia Rahman, Student</p>
                        </div>
                        <div className="testimonial">
                            <p>"As a teacher, Educonnect has allowed me to reach more students and share my passion for education with a wider audience."</p>
                            <p className="author">-  Professor Islam, Teacher</p>
                        </div>
                        {/* Add more testimonials here */}
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="contact-section">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Have questions or need assistance? Reach out to us!</p>
                    <div className="contact-details">
                        <p>Email: <a href="mailto:contact@educonnectbd.com">contact@educonnectbd.com</a></p>
                        <p>Phone: +880 123 456 7890</p>
                        <p>Address:  [Your Physical Address in Bangladesh, if applicable]</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;