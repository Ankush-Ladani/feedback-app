import { Route, Routes, useNavigate, useParams } from "react-router-dom";

function Post() {
  // const params = useParams();
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };
  return (
    <div>
      {/* <h1>POST {params.id} </h1> */}
      <h1>POST</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello Ankush</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
