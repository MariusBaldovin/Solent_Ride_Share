import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const FAQItem = styled.div`
  border: 1px solid white;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
  background-color: ${(props) => (props.isOpen ? "#af1904" : "transparent")};
`;

const FAQQuestion = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s;

  &.open {
    color: white;
  }
`;

const FAQAnswer = styled.div`
  color: white;
  margin-top: 20px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const FAQIcon = styled.div`
  font-size: 1.2rem;
`;

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Solent Ride Sharing App?",
      answer:
        "The Solent Ride Sharing App is a convenient and cost-effective solution designed exclusively for Solent University students. It allows students to share rides with fellow students, making their daily commutes to and from campus more affordable and environmentally friendly.",
    },
    {
      question: "How do I sign up for the Solent Ride Sharing App?",
      answer:
        "Signing up for the Solent Ride Sharing App is easy. You can create an account using your Google or Facebook account, or by providing your email address. Simply follow the on-screen instructions to complete the registration process, and you'll be ready to start sharing rides.",
    },
    {
      question: "How does ride sharing work on the app?",
      answer:
        "Ride sharing on the app is straightforward. After signing up, you can either offer a ride or search for available rides. If you're offering a ride, you can specify your route, departure time, and the number of available seats in your vehicle. If you're looking for a ride, you can search for rides that match your route and schedule. Once you find a suitable ride, you can request to join, and the driver will confirm your request.",
    },
    {
      question: "Is the Solent Ride Sharing App safe to use?",
      answer:
        "Yes, safety is a top priority for us. The app includes safety features such as verified student profiles, ratings and reviews. These features help ensure that you're sharing rides with fellow Solent students and provide a level of transparency and security.",
    },
    {
      question: "What happens in case of cancellations?",
      answer:
        "In case of cancellations, the app allows both drivers and passengers to manage their rides. If you need to cancel a ride you've booked, you can do so with advance notice. Drivers can also cancel rides if necessary. The app provides clear guidelines on cancellation policies, which may include penalties for last-minute cancellations.",
    },
    {
      question: "How do I report an issue or inappropriate behavior?",
      answer:
        "If you encounter any issues or witness inappropriate behavior while using the app, we encourage you to report it immediately. The app has a reporting feature that allows you to submit details about the incident. Our support team will review your report and take appropriate action to address the situation, ensuring a safe and respectful environment for all users.",
    },
  ];

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <FAQContainer>
      <br /> <br /> <br />
      <h1>FAQ</h1>
      <br /> <br /> <br />
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          isOpen={openItemIndex === index}
          onClick={() => toggleAccordion(index)}
        >
          <FAQQuestion className={openItemIndex === index ? "open" : ""}>
            {item.question}
            <FAQIcon>{openItemIndex === index ? "-" : "+"}</FAQIcon>
          </FAQQuestion>
          <FAQAnswer isOpen={openItemIndex === index}>{item.answer}</FAQAnswer>
        </FAQItem>
      ))}
      <br /> <br />
    </FAQContainer>
  );
};

export default FAQ;
