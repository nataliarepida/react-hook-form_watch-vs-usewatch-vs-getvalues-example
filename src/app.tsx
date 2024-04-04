import { Form } from "components/form";

function App() {
  return (
    <>
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo left">
            RHF example
          </a>
        </div>
      </nav>
      <main className="container">
        <div className="section">
          <div className="row">
            <h6>watch vs useWatch vs getValues</h6>
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}

export default App;
