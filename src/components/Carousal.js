import React from 'react';

export default function CarouselComponent() {
    return (
        <div>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{
                    maxWidth: "100%",
                    margin: "0 auto",
                    borderRadius: "15px",
                    overflow: "hidden",
                    maxHeight:"500px",
                    objectFit:'contain !important',
                     
                }}
            >
                <div className="carousel-inner">
                    {/* Carousel Images */}
                    <div className="carousel-item active">
                        <img
                            src="https://scontent.fpnq13-3.fna.fbcdn.net/v/t39.30808-6/302172812_386464523661431_1580090239352041752_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-FpS7MjvThcQ7kNvgH5bc8i&_nc_zt=23&_nc_ht=scontent.fpnq13-3.fna&_nc_gid=Aww8aQtPz7Hvmx9wF1jGFq_&oh=00_AYC_6z6JZnMPeIvmPO6_gGSaQiO4pCo-51I_XHaW8gIqxQ&oe=673176F2"
                            className="d-block mx-auto"
                            style={{
                                filter: "brightness(30%)",
                                width: "100%",  // Set width to 640px
                                height: "480px", // Set height to 480px
                                objectFit: "cover", // Ensures the image doesn't distort
                            }}
                            alt="Carina Nebula"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/logo512.png"
                            className="d-block mx-auto"
                            style={{
                                filter: "brightness(30%)",
                                width: "100%",  // Set width to 640px
                                height: "480px", // Set height to 480px
                                objectFit: "cover", // Ensures the image doesn't distort
                            }}
                            alt="Logo"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/carina_nebula~orig.png"
                            className="d-block mx-auto"
                            style={{
                                filter: "brightness(30%)",
                                width: "100%",  // Set width to 640px
                                height: "480px", // Set height to 480px
                                objectFit: "cover", // Ensures the image doesn't distort
                            }}
                            alt="Carina Nebula"
                        />
                    </div>
                </div>

                {/* Search Bar Positioned at Bottom */}
                <div
                    className="carousel-caption d-flex flex-column align-items-center"
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        width: "100%",
                        zIndex: 1,
                    }}
                >
                    <form className="d-flex justify-content-center" style={{ width: "80%" }}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ maxWidth: "300px" }}
                        />
                        <button className="btn btn-outline-light" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(1)" }}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(1)" }}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
