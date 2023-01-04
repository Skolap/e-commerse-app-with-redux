import { color } from "@mui/system";
import React from "react";
import Table from "react-bootstrap/Table";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="itemsdetails d-flex">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : Massala Theoryy
                    </p>
                    <p>
                      <strong>Price</strong> : ₹300
                    </p>
                    <p>
                      <strong>Dishes</strong> : North Indian, Biryani
                    </p>
                    <p>
                      <strong>Total</strong> : ₹300
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating: </strong>
                      <span
                        style={{
                          background: "green",
                          color: "#FFF",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        3.5 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review: </strong>
                      <span>1175 + order placed from here recently</span>
                    </p>
                    <p>
                      <strong>Remove: </strong>
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;