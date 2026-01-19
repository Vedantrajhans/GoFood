import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
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
            maxHeight: "500px",
            objectFit: "contain !important",
          }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://scontent.fpnq13-3.fna.fbcdn.net/v/t39.30808-6/302172812_386464523661431_1580090239352041752_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-FpS7MjvThcQ7kNvgH5bc8i&_nc_zt=23&_nc_ht=scontent.fpnq13-3.fna&_nc_gid=Aww8aQtPz7Hvmx9wF1jGFq_&oh=00_AYC_6z6JZnMPeIvmPO6_gGSaQiO4pCo-51I_XHaW8gIqxQ&oe=673176F2"
                className="d-block mx-auto"
                style={{
                  filter: "brightness(30%)",
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                }}
                alt="Food Banner"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/logo512.png"
                className="d-block mx-auto"
                style={{
                  filter: "brightness(30%)",
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
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
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                }}
                alt="Banner"
              />
            </div>
          </div>

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
            <div
              className="d-flex justify-content-center"
              style={{ width: "80%" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ filter: "invert(1)" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ filter: "invert(1)" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem && foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodName={filterItems.name}
                            item={filterItems}
                            options={filterItems.options[0]}
                            ImgSrc={filterItems.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> No Such Data Found </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Categories Available</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
