// Import React since its a JSX file for V17
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>    
    );
}

export default App