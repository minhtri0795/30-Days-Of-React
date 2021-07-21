import styled from "styled-components";
import unavailable from "../images/taveller.jpg";
const WrapperCat = styled.div`
  display: inline-block;
  width: 47%;
  margin: 20px 15px;
  border-radius: 26px;
  background: #f1f1f1;

  box-shadow: 18px 18px 37px #bebebe, -18px -18px 37px #ffffff;
`;
const ImgWrapper = styled.div`
  img {
    border-radius: 26px 26px 0 0;
    width: 100%;
  }
`;

const BodyWrapper = styled.div`
  padding: 20px 30px;
  .cat-attribute,
  .cat-desc {
    width: 100%;
    text-align: left;
    margin: 12px 0;
    & > div {
      margin: 8px 0;
    }
    strong,
    span {
      font-size: 18px;
    }
  }
  .cat-info {
    margin-bottom: 20px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const CatCard = (props) => {
  const {
    name,
    origin,
    temperament,
    life_span,
    weight: { metric },
    description,
    image,
  } = props.data;
  const url = !!image ? image.url : unavailable;
  return (
    <WrapperCat>
      <ImgWrapper>
        <img src={url} alt="cat-img"></img>
      </ImgWrapper>
      <BodyWrapper>
        <div className="cat-info">
          <h3 className="name">{name}</h3>
          <p className="origin">{origin}</p>
        </div>
        <div className="cat-attribute">
          <div className="temperament">
            <strong>Temperament: </strong>
            <span>{temperament}</span>
          </div>
          <div className="life-span">
            <strong>Life Span: </strong>
            <span>{life_span}</span>
          </div>
          <div className="weight">
            <strong>Weight: </strong>
            <span>{metric}</span>
          </div>
        </div>
        <div className="cat-desc">
          <strong>Description: </strong>
          <span>{description}</span>
        </div>
      </BodyWrapper>
    </WrapperCat>
  );
};
export default CatCard;
