import React from "react";
import HeroSection from "./hero";
export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <section
                id="library"
                className="bg-white px-5 py-15 sm:px-9 lg:px-11 lg:py-25"
            >
            </section>

        </main>
    );
}