import React from "react";

const HomeFooterComponent = () => {
    return (
        <div>
            <section id="footer">
                <footer className="socials">
                    <div className="container-fluid">
                        <a className="social-icon" href="mailto:info@whipup.com" target="_blank"
                           rel="noopener noreferrer">
                            <i className="bi bi-envelope pe-3"></i></a>
                        <a className="social-icon" href="https://www.linkedin.com/in/whipup/"
                           target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin pe-3"></i></a>
                        <a className="social-icon" href="https://github.com/whipup"
                           target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github pe-3"></i></a>
                        <a className="social-icon"
                           href="https://www.tiktok.com/@whipup?lang=en" target="_blank"
                           rel="noopener noreferrer">
                            <i className="bi bi-tiktok pe-3"></i></a>
                        <a className="social-icon" href="https://www.instagram.com/whipup/"
                           target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram pe-3"></i></a>
                    </div>

                    <div className="footer-quote">
                        <q>After a good dinner one can forgive anybody, even one’s own
                            relatives.</q>
                        <br/>
                        <span
                            className="footer-quote-writer">-- Oscar Wilde
                            </span>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default HomeFooterComponent;