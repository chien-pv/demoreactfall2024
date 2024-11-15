import { useParams, useSearchParams } from "react-router-dom";
function ProductDetail() {
  let { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>Product Detail</h1>
      <button
        onClick={() => {
          setSearchParams({ q: "fdfd" });
        }}
      >
        Search
      </button>
      {id}
      {searchParams}
    </>
  );
}

export default ProductDetail;
