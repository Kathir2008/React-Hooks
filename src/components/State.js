import { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const State = () => {
  const [name, setName] = useState("");
  const [work, setwork] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [showcard, setshowcard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowcard(true);
  };
  return (
    <div className="container-fluid">
      <h1 className="bg-dark text-white text-center">
        Hey! Here you can convert text into Messager
      </h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-container p-4">
            <h2>Fill out the form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="work" className="form-label">
                  Work or profession
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="work"
                  value={work}
                  onChange={(e) => setwork(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
          <div className="col-md-6">
        {showcard && (<div class="card">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{work}</h6>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni consequuntur repellendus autem consequatur ad, sint tempore libero ipsam? Doloremque dolores pariatur, dicta asperiores inventore officiis non reiciendis, aspernatur quam, nostrum ex adipisci praesentium enim? Laudantium laboriosam debitis et, consequatur perspiciatis sapiente nemo ratione ullam iste qui eum sunt vero dolores!</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Email:</strong> {email}</li>
              <li class="list-group-item"><strong>Phone:</strong> +91 {phone}</li>
            </ul>
          </div>
        </div>
        )}
          </div>
      </div>
    </div>
  );
};

export default State;
