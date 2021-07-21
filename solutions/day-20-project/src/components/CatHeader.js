import styled from "styled-components";
import loading from "../images/loading.svg";
import CatRouter from "./CatRouter";
const Header = styled.header`
  text-align: center;
  background-color: rgb(185, 185, 185);
  width: 80%;
  margin: 0px auto 40px auto;
  padding: 50px 0;
  border-radius: 26px;
  background: #f1f1f1;
  box-shadow: 5px 5px 17px #d0d0d0, -5px -5px 17px #f0f0f0;
  h1,
  h2,
  p {
    margin: 8px 0;
    font-size: 20px;
  }
`;

const CatHeader = (props) => {
  const { AverageWeight, AverageLife, data } = props;
  return (
    <Header>
      <h1>30 days of react</h1>
      <h2>Cat paradise</h2>
      {data.length !== 0 ? (
        ""
      ) : (
        <>
          <img
            style={{ width: "100px", height: "100px" }}
            src={loading}
            alt="loading"
          ></img>
          <strong style={{ display: "block", margin: "-20px 0 30px 0" }}>
            Loading data, please wait...
          </strong>
        </>
      )}
      <p>
        There are <strong>{data.length}</strong> cat breeds
      </p>
      <p>
        On average weight cat is:{" "}
        <strong>{data.length !== 0 ? AverageWeight() : "loading..."}</strong>
        kg
      </p>
      <p>
        On average life is:{" "}
        <strong>{data.length !== 0 ? AverageLife() : "loading..."}</strong>
        year
      </p>
      <CatRouter />
    </Header>
  );
};
export default CatHeader;
