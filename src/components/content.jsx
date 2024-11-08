import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Home from "./pages/home_component";

function Content() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ padding: "20px", minHeight: "50vh" }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default Content;