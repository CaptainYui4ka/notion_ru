import React from "react";
import "./style/Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <section className="py-5 text-center container banner-content">
                <div className="row py-lg-6 col-md-6 mx-auto">
                    <h1 className="fw-light">Document Editor</h1>
                    <p className="lead text-muted">Что-нибудь короткое и вводное о коллекции ниже — ее содержании, создателе и т. д. Сделайте это кратко и содержательно, но не слишком коротко, чтобы люди просто не пропустили ее полностью.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2 mx-2">Попробовать</a>
                        <a href="#" className="btn btn-primary my-2 mx-2">Подробнее</a>
                    </p>
                </div>
            </section>
            <div>

            </div>
        </div>
    )
};

export default Banner;