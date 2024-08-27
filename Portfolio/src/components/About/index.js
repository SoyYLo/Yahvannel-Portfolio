import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../assets/Screenshot 2024-07-09 at 10.17.43 PM.png')}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>
                <p>I am a Full Stack Web Developer that specializes in Frontend Development and UI/UX design.
                    I love exciting and challenging opportunities to grow in becoming a great, successful professional.
                    I recently invested in myself and completed a coding bootcamp course through the University of Texas at Austin.
                    I received my certification and wish to continue to grow in my knowledge and become a strong web developer.
                </p>
            </div>
        </section>
    );
}

export default About;