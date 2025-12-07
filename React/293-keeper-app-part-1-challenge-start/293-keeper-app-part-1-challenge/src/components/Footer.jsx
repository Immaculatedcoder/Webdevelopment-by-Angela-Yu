import React from "react";
import '../../public/styles.css'

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

function Footer() {
    return (
        <footer>
            <p> Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer
