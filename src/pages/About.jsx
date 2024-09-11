import React from "react";
import { Link, Outlet } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="card">
      <img src={employee.image} alt={employee.name} />
      <div className="card-body">
        <h5 className="card-title">{employee.name}</h5>
        <p className="card-text">{employee.position}</p>
        <p className="card-text">{employee.bio}</p>
      </div>
    </div>
  );
};

const About = () => {
  const employees = [
    {
      name: "John Doe",
      position: "CEO",
      bio: "John is the CEO of our company.",
      image: "https://example.com/john-doe.jpg",
    },
    {
      name: "Jane Doe",
      position: "CTO",
      bio: "Jane is the CTO of our company.",
      image: "https://example.com/jane-doe.jpg",
    },
    {
      name: "Bob Smith",
      position: "Marketing Manager",
      bio: "Bob is the Marketing Manager of our company.",
      image: "https://example.com/bob-smith.jpg",
    },
    {
      name: "Alice Johnson",
      position: "Sales Manager",
      bio: "Alice is the Sales Manager of our company.",
      image: "https://example.com/alice-johnson.jpg",
    },
    {
      name: "Mike Brown",
      position: "Software Engineer",
      bio: "Mike is a Software Engineer at our company.",
      image: "https://example.com/mike-brown.jpg",
    },
  ];

  return (
    <div className="about-container">
      <h1>About Our E-commerce Store</h1>
      <p>
        Welcome to our online store, where we offer a wide range of products
        with excellent quality and competitive prices.
      </p>
      <section className="info-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide our customers with an exceptional shopping
          experience, ensuring that they find what they need quickly and easily.
        </p>
      </section>
      <section className="info-section">
        <h2>Our Products</h2>
        <p>
          We offer a diverse range of products, including [list some examples,
          e.g., electronics, fashion, home goods, etc.].
        </p>
      </section>
      <section className="info-section">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Fast and reliable shipping</li>
          <li>Secure payment options</li>
          <li>Excellent customer service</li>
        </ul>
      </section>
      <div className="card-grid">
        {employees.map((employee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default About;
