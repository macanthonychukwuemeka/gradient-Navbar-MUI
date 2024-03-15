import Navbar from "./Components/Navbar";
const linksArray = [
  "products",
  "Services",
  "Overview",
  "pricing",
  "Contact Us",
];
function App() {
  return (
    <>
      <Navbar links={linksArray} />
    </>
  );
}

export default App;
