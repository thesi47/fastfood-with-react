import React from 'react'

function Hero() {
    const scrollToSection = () => {
        document.getElementById("cards").scrollIntoView({ behavior: "smooth" });
    };
    return (

        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/R4BdRTn0/hero-bg.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find your next meal</h1>
                    <p className="mb-5">
                        Craving something delicious? Discover top fast food spots around you and order instantly for delivery or pickup. Whether it’s a juicy burger, crispy fries, or something fresh, your next meal is just a click away.
                    </p>
                    <button onClick={scrollToSection} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero