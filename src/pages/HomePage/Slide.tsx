import { Link } from "react-router";
import Button from "../../components/Button.tsx";

type ISlide = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  background: string;
};

type SlideProps = {
  slide: ISlide;
};

const Slide = ({ slide }: SlideProps) => {
  return (
    <>
      <div className="slide">
        <div className="slide-content">
          <span className="slide-title">{slide.title}</span>
          <span className="slide-description">{slide.description}</span>
          <Link to={slide.buttonLink}>
            <Button type={"button"}>{slide.buttonText}</Button>
          </Link>
        </div>
        <img className="slide-background" src={slide.background} alt="" />
      </div>
    </>
  );
};

export default Slide;
