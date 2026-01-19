import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    try {
      const res = await fetch("http://localhost:5000/api/auth/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      const response = await res.json();
      console.log("Order data received:", response);

      if (response.orderData && response.orderData.order_data) {
        setOrderData(response.orderData.order_data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData.length > 0 ? (
            orderData
              .slice(0)
              .reverse()
              .map((orderGroup, groupIndex) => {
                return (
                  <div key={groupIndex} className="row">
                    {orderGroup.map((item, itemIndex) => {
                      if (item.Order_date) {
                        return (
                          <div key={itemIndex} className="m-auto mt-5">
                            <div className="fs-3 fw-bold">
                              {new Date(item.Order_date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </div>
                            <hr />
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={itemIndex}
                            className="col-12 col-md-6 col-lg-3 mb-3"
                          >
                            <div
                              className="card mt-3"
                              style={{
                                width: "16rem",
                                maxHeight: "360px",
                              }}
                            >
                              <img
                                src={item.img}
                                className="card-img-top"
                                alt={item.name}
                                style={{
                                  height: "120px",
                                  objectFit: "fill",
                                }}
                              />
                              <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div
                                  className="container w-100 p-0"
                                  style={{ height: "38px" }}
                                >
                                  <span className="m-1">Qty: {item.qty}</span>
                                  <span className="m-1">Size: {item.size}</span>
                                  <div className="d-inline ms-2 h-100 w-20 fs-5">
                                    ₹{item.price}/-
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })
          ) : (
            <div className="text-center my-5">
              <h4 className="text-muted">No Orders Yet</h4>
              <p className="text-muted">Start ordering delicious food!</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
