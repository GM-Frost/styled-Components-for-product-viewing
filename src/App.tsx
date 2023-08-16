import Home from "./pages/Home";
import { useGetAllProductsQuery } from "./service/product";

function App() {
  const { data } = useGetAllProductsQuery();
  return (
    <>
      <Home />
      {console.log(data)}
    </>
  );
}

export default App;
