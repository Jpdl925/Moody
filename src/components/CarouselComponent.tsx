import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/carousel1.png";
import Image2 from "../assets/carousel2.png";
import Image3 from "../assets/carousel3.png";

const CarouselComponent = () => {
  return (
    <Carousel className="h-100 w-100" style={{ height: "100vh" }}>
      <Carousel.Item style={{ height: "100%" }}>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
          style={{ objectFit: "cover", height: "100vh", objectPosition: "left center" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
