// "use client";
// import React from "react";
// import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
// import { FiCheckCircle } from "react-icons/fi";
// import { BsFillCircleFill } from "react-icons/bs";
// import { motion } from "framer-motion";
// import HeadPart from "@/components/offer/HeadPart";

// const features = [
//   "Graphics & Design Resources",
//   "Premium Templates (Website + App + Presentation)",
//   "Video & Editing Resource Pack",
//   "Office & Productivity Tools",
//   "eBooks, Guides & Learning Materials",
//   "আরও অনেক Premium Digital Asset!",
// ];

// const bonusItems = [
//   "৫৯৯+ প্রিমিয়াম ল্যান্ডিং পেইজ",
//   "ফুল রেডি Laravel E-Commerce ওয়েবসাইট (কোড + ভিডিও টিউটোরিয়ালসহ)",
//   "৮০০+ Envato Premium Themes & Plugins",
//   "10 মিলিয়ন+ রেডিমেড ডিজিটাল প্রোডাক্ট",
//   "100 GB গ্রাফিক্স বান্ডেল",
//   "সকল ধরণের প্রিমিয়াম পিসি সফটওয়ার",
//   "হাজার হাজার কোর্স বান্ডেল ও ই-বুক",
//   "৫ মিলিয়ন+ মুভি ও রিলস কালেকশন",
// ];

// const whyBuy = [
//   "এক ফাইলেই হাজারো রিসোর্স",
//   "Instant Download – সাথে সাথে অ্যাক্সেস",
//   "Secure & Safe Payment",
//   "Lifetime Access (একবার কিনলেই বারবার ব্যবহারযোগ্য)",
//   "অতিরিক্ত খরচ নেই – সব একসাথে সাশ্রয়ী দামে",
// ];

// export default function OfferPage() {
//   // ===== Hero Section =====
//   const HeroSection = () => (
//     <motion.section
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="text-white text-center py-5"
//       style={{ background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)" }}
//     >
//       <Container>
//         <motion.h1
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//           className="display-4 fw-bold mb-3"
//         >
//           Premium Digital Asset Package
//         </motion.h1>
//         <p className="lead mb-4">
//           Graphics, Templates, Videos, eBooks & All-in-One Business Tools!
//         </p>
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Button
//             size="lg"
//             className="fw-bold text-dark"
//             style={{ background: "linear-gradient(90deg, #2dd4bf, #84cc16)", border: "none" }}
//           >
//             অর্ডার করতে চাই
//           </Button>
//         </motion.div>
//       </Container>
//     </motion.section>
//   );

//   // ===== Features Section =====
//   const FeaturesSection = () => (
//     <Container className="py-5">
//       <h2 className="text-center mb-5">এই প্যাকেজে থাকছে-</h2>
//       <Row className="g-4">
//         {features.map((item, idx) => (
//           <Col md={6} lg={4} key={idx}>
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//               <Card className="h-100 border-0 shadow-lg" style={{ background: "linear-gradient(135deg, #e0f7fa, #fce4ec)" }}>
//                 <Card.Body className="d-flex align-items-start gap-3">
//                   <FiCheckCircle size={32} className="text-primary mt-1" />
//                   <Card.Text className="fw-semibold fs-6">{item}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );

//   // ===== Bonus Section =====
//   const BonusSection = () => (
//     <Container className="py-5">
//       <h3 className="text-center mt-5 mb-4">এছাড়াও থাকছে-</h3>
//       <Row className="g-3">
//         {bonusItems.map((item, idx) => (
//           <Col md={6} key={idx}>
//             <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
//               <Card className="p-3 border-0 shadow-sm d-flex align-items-center gap-2">
//                 <BsFillCircleFill className="text-success" size={12} />
//                 <span>{item}</span>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//       <div className="text-center mt-4">
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Button
//             style={{ background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)", border: "none" }}
//             className="text-white fw-bold px-5 py-2"
//           >
//             অর্ডার করতে চাই
//           </Button>
//         </motion.div>
//       </div>
//     </Container>
//   );

//   // ===== Why Buy Section =====
//   const WhyBuySection = () => (
//     <Container className="py-5 bg-light">
//       <h2 className="text-center mb-4">কেন কিনবেন এই Package?–</h2>
//       <Row className="g-3">
//         {whyBuy.map((item, idx) => (
//           <Col md={6} key={idx}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card className="p-3 shadow-lg h-100 d-flex align-items-start gap-3 border-start border-4 border-primary">
//                 <FiCheckCircle size={28} className="text-primary mt-1" />
//                 <span className="fw-semibold">{item}</span>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//       <div className="text-center mt-3">
//         <a href="#demo" className="text-decoration-underline text-primary fw-bold">
//           ডেমো দেখতে ক্লিক করুন!
//         </a>
//       </div>
//     </Container>
//   );

//   // ===== Order Form Section =====
//   const OrderFormSection = () => (
//     <Container className="py-5">
//       <h2 className="text-center mb-4">অর্ডার করতে নিচের ফর্মটি পূরন করুন</h2>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Card className="p-4 shadow-lg border-0">
//           <Badge bg="danger" className="position-absolute" style={{ top: "10px", right: "10px" }}>
//             Limited Offer
//           </Badge>
//           <Form>
//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Group controlId="formName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" defaultValue="mah" />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group controlId="formPhone">
//                   <Form.Label>Phone</Form.Label>
//                   <Form.Control type="text" defaultValue="0174252353252" />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" defaultValue="mah@gmail.com" />
//             </Form.Group>

//             <Card className="mb-3 p-3 bg-gradient-light border-0">
//               <Card.Title>Your Products</Card.Title>
//               <Card.Text>All-in-One Digital Business Solution</Card.Text>
//               <Card.Text className="text-danger fw-bold fs-5">
//                 490.00৳ <span className="text-decoration-line-through text-muted fs-6">1,590.00৳</span>
//               </Card.Text>
//               <Badge bg="success">Best Value</Badge>
//             </Card>

//             <Row className="mb-3">
//               <Col>
//                 <div className="d-flex justify-content-between fw-semibold">
//                   <span>Subtotal</span>
//                   <span>490.00৳</span>
//                 </div>
//               </Col>
//               <Col>
//                 <div className="d-flex justify-content-between fw-bold mt-2">
//                   <span>Total</span>
//                   <span>490.00৳</span>
//                 </div>
//               </Col>
//             </Row>

//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Button
//                 type="submit"
//                 className="w-100 text-white fw-bold"
//                 style={{
//                   background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)",
//                   border: "none",
//                 }}
//               >
//                 Place Order 490.00৳
//               </Button>
//             </motion.div>

//             <p className="text-muted mt-3 small">
//               Pay securely via Bangladeshi payment methods. Your personal data will
//               be used to process your order and support your experience.
//             </p>
//           </Form>
//         </Card>
//       </motion.div>
//     </Container>
//   );

//   return (
//     <div className="bg-light">
//       <HeadPart />
//       <HeroSection />
//       <FeaturesSection />
//       <BonusSection />
//       <WhyBuySection />
//       <OrderFormSection />
//     </div>
//   );
// }









"use client";
import React from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
 
 

const features = [
  "Graphics & Design Resources",
  "Premium Templates (Website + App + Presentation)",
  "Video & Editing Resource Pack",
  "Office & Productivity Tools",
  "eBooks, Guides & Learning Materials",
  "আরও অনেক Premium Digital Asset!",
];

const bonusItems = [
  "৫৯৯+ প্রিমিয়াম ল্যান্ডিং পেইজ",
  "ফুল রেডি Laravel E-Commerce ওয়েবসাইট (কোড + ভিডিও টিউটোরিয়ালসহ)",
  "৮০০+ Envato Premium Themes & Plugins",
  "10 মিলিয়ন+ রেডিমেড ডিজিটাল প্রোডাক্ট",
  "100 GB গ্রাফিক্স বান্ডেল",
  "সকল ধরণের প্রিমিয়াম পিসি সফটওয়ার",
  "হাজার হাজার কোর্স বান্ডেল ও ই-বুক",
  "৫ মিলিয়ন+ মুভি ও রিলস কালেকশন",
];

const whyBuy = [
  "এক ফাইলেই হাজারো রিসোর্স",
  "Instant Download – সাথে সাথে অ্যাক্সেস",
  "Secure & Safe Payment",
  "Lifetime Access (একবার কিনলেই বারবার ব্যবহারযোগ্য)",
  "অতিরিক্ত খরচ নেই – সব একসাথে সাশ্রয়ী দামে",
];

export default function OfferPage() {

  //offer card

  // ===== Offer Card with Countdown =====
  const OfferCard = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 22, minutes: 25, seconds: 29 });

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          let { hours, minutes, seconds } = prev;
          if (seconds > 0) seconds--;
          else if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const timerItems = [
      { value: timeLeft.hours, label: 'Hours' },
      { value: timeLeft.minutes, label: 'Minutes' },
      { value: timeLeft.seconds, label: 'Seconds' },
    ];

    return (
      <motion.div
        className="container my-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center">
          <motion.div
            className="col-md-8 text-center p-5 rounded-4 shadow-lg text-white"
            style={{ background: 'linear-gradient(135deg, #6A11CB, #2575FC)' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 className="text-decoration-line-through mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              রেগুলার প্রাইস ১৫০০/= টাকা
            </motion.h3>
            <motion.h1 className="fw-bold mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              আজকের জন্য মাত্র ৪৯/= টাকা
            </motion.h1>

            <div className="d-flex justify-content-center gap-4 mb-4">
              {timerItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white text-dark rounded-3 p-3 px-4"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                >
                  <h4 className="mb-0 fw-bold">{item.value}</h4>
                  <small>{item.label}</small>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#order"
              className="btn btn-light btn-lg fw-bold"
              whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
              whileTap={{ scale: 0.95 }}
            >
              অর্ডার করতে চাই
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  // ===== Hero Section =====
  const HeroSection = () => (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-center py-5"
      style={{ background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)" }}
    >
      <Container>
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold mb-3"
        >
          Premium Digital Asset Package
        </motion.h1>
        <p className="lead mb-4">
          Graphics, Templates, Videos, eBooks & All-in-One Business Tools!
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            size="lg"
            className="fw-bold text-dark"
            style={{ background: "linear-gradient(90deg, #2dd4bf, #84cc16)", border: "none" }}
          >
            অর্ডার করতে চাই
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  );

  // ===== Features Section =====
  const FeaturesSection = () => (
    <Container className="py-5">
      <h2 className="text-center mb-5">এই প্যাকেজে থাকছে-</h2>
      <Row className="g-4">
        {features.map((item, idx) => (
          <Col md={6} lg={4} key={idx}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="h-100 border-0 shadow-lg" style={{ background: "linear-gradient(135deg, #e0f7fa, #fce4ec)" }}>
                <Card.Body className="d-flex align-items-start gap-3">
                  <FiCheckCircle size={32} className="text-primary mt-1" />
                  <Card.Text className="fw-semibold fs-6">{item}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );

  // ===== Bonus Section =====
  const BonusSection = () => (
    <Container className="py-5">
      <h3 className="text-center mt-5 mb-4">এছাড়াও থাকছে-</h3>
      <Row className="g-3">
        {bonusItems.map((item, idx) => (
          <Col md={6} key={idx}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Card className="p-3 border-0 shadow-sm d-flex align-items-center gap-2">
                <BsFillCircleFill className="text-success" size={12} />
                <span>{item}</span>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            style={{ background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)", border: "none" }}
            className="text-white fw-bold px-5 py-2"
          >
            অর্ডার করতে চাই
          </Button>
        </motion.div>
      </div>
    </Container>
  );

  // ===== Why Buy Section =====
  const WhyBuySection = () => (
    <Container className="py-5 bg-light">
      <h2 className="text-center mb-4">কেন কিনবেন এই Package?–</h2>
      <Row className="g-3">
        {whyBuy.map((item, idx) => (
          <Col md={6} key={idx}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="p-3 shadow-lg h-100 d-flex align-items-start gap-3 border-start border-4 border-primary">
                <FiCheckCircle size={28} className="text-primary mt-1" />
                <span className="fw-semibold">{item}</span>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <a href="#demo" className="text-decoration-underline text-primary fw-bold">
          ডেমো দেখতে ক্লিক করুন!
        </a>
      </div>
    </Container>
  );

  // ===== Order Form Section =====
  const OrderFormSection = () => (
    <Container className="py-5">
      <h2 className="text-center mb-4">অর্ডার করতে নিচের ফর্মটি পূরন করুন</h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Card className="p-4 shadow-lg border-0">
          <Badge bg="danger" className="position-absolute" style={{ top: "10px", right: "10px" }}>
            Limited Offer
          </Badge>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" defaultValue="mah" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" defaultValue="0174252353252" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue="mah@gmail.com" />
            </Form.Group>

            <Card className="mb-3 p-3 bg-gradient-light border-0">
              <Card.Title>Your Products</Card.Title>
              <Card.Text>All-in-One Digital Business Solution</Card.Text>
              <Card.Text className="text-danger fw-bold fs-5">
                490.00৳ <span className="text-decoration-line-through text-muted fs-6">1,590.00৳</span>
              </Card.Text>
              <Badge bg="success">Best Value</Badge>
            </Card>

            <Row className="mb-3">
              <Col>
                <div className="d-flex justify-content-between fw-semibold">
                  <span>Subtotal</span>
                  <span>490.00৳</span>
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-between fw-bold mt-2">
                  <span>Total</span>
                  <span>490.00৳</span>
                </div>
              </Col>
            </Row>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                type="submit"
                className="w-100 text-white fw-bold"
                style={{
                  background: "linear-gradient(90deg, #1e3a8a, #6b21a8, #ec4899)",
                  border: "none",
                }}
              >
                Place Order 490.00৳
              </Button>
            </motion.div>

            <p className="text-muted mt-3 small">
              Pay securely via Bangladeshi payment methods. Your personal data will
              be used to process your order and support your experience.
            </p>
          </Form>
        </Card>
      </motion.div>
    </Container>
  );

  return (
    <div className="bg-light">
      <OfferCard/>
      <HeroSection />
      <FeaturesSection />
      <BonusSection />
      <WhyBuySection />
      <OrderFormSection />
    </div>
  );
}
 OfferPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};