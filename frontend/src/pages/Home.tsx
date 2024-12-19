import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="container border-radius-3 p-3 mb-1 mt-10">
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 text-muted customButton" href="#">
                            <i className="bi-newspaper mr-1"></i>
                            17.12.2024
                        </a>
                    </nav>
                </div>

                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-12 px-0">
                        <h1 className="display-4 font-italic">The Forgotten City</h1>
                        <small>Eine sowjetische Zeitkapsel in der Welt von GTA 5 Roleplay</small>
                        <p className="lead my-3">
                            Aktuell arbeiten wir mit Hochdruck am Server sowie der Online-Präsenz. Geplanter Release vom Live Server ist der 1.2.2025, aber wie jeder weiß, kann auch was dazwischen kommen. Alles in allem machen wir große Schritte und hoffen auf eure Unterstützung. <br />
                            Im Team benötigen wir ebenfalls deine Hilfe. Wenn du Bock hast eine Aufgabe im Team zu übernehmen, dann melde dich gerne bei uns im Discord. Für jeden ist bestimmt was dabei...<br />
                            Bis dahin wünschen wir allen eine schöne Urlaubszeit...<br />
                            <br />
                            Euer TFC Team
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;