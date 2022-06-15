import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
    render(){
        return (
            <main data-aos="fade-right">
                <section className="container home">
                    <section className="resizable">
                        <section>
                            <h3>Waqas Khan</h3>
                        </section>
                        <section>
                            <p>Frontend Web Developer</p>
                        </section>
                        <section className="social-media-icons">
                                <a Style="--waqas: #00e" rel="noreferrer" target="_blank" href="https://web.facebook.com/innocentwaqas.khan"><i className="fa fa-facebook"></i></a>
                                <a Style="--waqas: #0c0" rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+923045454166&text=Hi"><i className="fa fa-whatsapp"></i></a>
                                <a Style="--waqas: #0bb" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/waqaskhan123/"><i className="fa fa-linkedin"></i></a>
                                <a Style="--waqas: #b0b" rel="noreferrer" target="_blank" href="https://github.com/Waqaskhan404?tab=repositories"><i className="fa fa-github"></i></a>
                        </section>
                        <section className="home-btns">
                            <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1QbOezW4OUQI6YN5fzv0TZGvHi_5oiL54/view?usp=sharing"><button className="cp-btn">Download My Resume</button></a>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}

export default Home;