// src/components/AboutUs.js
import React from 'react';
import './about.css'; // Import the CSS for About Us styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <section className="intro">
                <h1>Welcome to StoryPulse, where stories come alive!</h1>
                <p>
                    At StoryPulse, we believe in the power of storytelling to inspire, entertain, and connect people from all walks of life.
                    Our mission is to bring you captivating tales, thought-provoking narratives, and heartwarming adventures that resonate
                    with readers around the globe.
                </p>
            </section>

            <section className="who-we-are">
                <h2>Who We Are</h2>
                <p>
                    We are a passionate team of writers, editors, and storytellers dedicated to sharing the beauty and diversity of human experiences.
                    From fiction to non-fiction, short stories to serialized novels, our platform is a haven for literary enthusiasts seeking fresh and engaging content.
                </p>
            </section>

            <section className="what-we-do">
                <h2>What We Do</h2>
                <ul>
                    <li>Curate Quality Content: We handpick stories from talented writers, ensuring a diverse range of voices and perspectives.</li>
                    <li>Encourage Creativity: We provide a platform for aspiring authors to showcase their work and reach a wider audience.</li>
                    <li>Foster a Community: We believe in building a supportive community where readers and writers can connect, share feedback, and grow together.</li>
                </ul>
            </section>

            <section className="join-us">
                <h2>Join Us on This Journey</h2>
                <p>
                    Whether you’re a voracious reader looking for your next great read or a writer with a story to tell, StoryPulse is the perfect place for you.
                    Dive into our collection, submit your own stories, and be part of a vibrant community that celebrates the art of storytelling.
                </p>
                <p>
                    Thank you for visiting StoryPulse. We hope you find inspiration, joy, and a sense of belonging in our stories.
                </p>
                <button>Join Now</button>
            </section>
        </div>
    );
};

export default AboutUs;
