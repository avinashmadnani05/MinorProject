// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function Home () {
//   return (
// <>
// <h1>Course Recommendation</h1>


// <Link to="/login">Login</Link>
// <Link to="/signup">Signup</Link>
// <Link to="/UserInput">UserInput</Link>
// <Link to="/Home"></Link>
// </>

//   )
// }
import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
function HomePage() {
  return (
    <div className="home-page">
  <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/creators">Creators</Link>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">
            More
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
      <div className="parallax-background">
        <img src="background-image.jpg" alt="Background Image" />
      </div>
      <div className="hero-container">
        <div className="hero-section">
          <h1>Course Compass!!</h1>
          <p>"Find your perfect fit"</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="course-recommendation-section">
        <h2>Recommended Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <img src="course-image1.jpg" alt="Course Image 1" />
            <h3>Course 1</h3>
            <p>This is a sample course description.</p>
            <button>Enroll Now</button>
          </div>
          <div className="course-card">
            <img src="course-image2.jpg" alt="Course Image 2" />
            <h3>Course 2</h3>
            <p>This is a sample course description.</p>
            <button>Enroll Now</button>
          </div>
          <div className="course-card">
            <img src="course-image3.jpg" alt="Course Image 3" />
            <h3>Course 3</h3>
            <p>This is a sample course description.</p>
            <button>Enroll Now</button>
          </div>
          <div className="course-card">
            <img src="course-image4.jpg" alt="Course Image 4" />
            <h3>Course 4</h3>
            <p>This is a sample course description.</p>
            <button>Enroll Now</button>
          </div>
        </div>
      </div>
      <div className="call-to-action-section">
        <h2>Get Started Today!</h2>
        <p>This is a sample call-to-action section.</p>
       <button> <Link to="/signup" className="btn btn-default border w-100 rounded-0 text-decoration-none">
                    Signup!
                </Link> </button>
      </div>
    </div>
  );
}

export default HomePage; 