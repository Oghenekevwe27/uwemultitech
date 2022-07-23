/* eslint-disable @next/next/no-img-element */
import React from "react";

const Testimonials = () => {
  return (
    <div className="">
      <div className="testimonial mt-5">
        <div className="row justify-content-center mt-5">
          {" "}
          {test.map((card) => (
            <div className="col-sm-4" key={card.id}>
              <div className="card d-flex flex-column align-items-center justify-content-center mb-5  py-4 test-card px-3">
                <div className="elipse">
                  <img src={card.image} alt="" />
                </div>
                <h3>{card.name}</h3>
                <p>{card.position}</p>
                <p>{card.desc}</p>
                <p>{card.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const test = [
  {
    id: 1,
    image: "/man.png",
    name: "paul issac",
    position: "ceo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
    rating: "",
  },
  {
    id: 2,
    image: "/woman.png",
    name: "paul issac",
    position: "ceo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
    rating: "",
  },
  {
    id: 3,
    image: "/pana.png2",
    name: "paul issac",
    position: "ceo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
    rating: "",
  },
  // {
  //   id: 4,
  //   image: "/pana.png2",
  //   name: "paul issac",
  //   position: "ceo",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
  //   rating: "",
  // },
  // {
  //   id: 4,
  //   image: "/pana.png2",
  //   name: "paul issac",
  //   position: "ceo",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
  //   rating: "",
  // },
  // {
  //   id: 4,
  //   image: "/pana.png2",
  //   name: "paul issac",
  //   position: "ceo",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde doloremque sequi veritatis eligendi nobis libero officiis impedit mollitia totam.",
  //   rating: "",
  // },
];
