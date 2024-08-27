import "../App.css";
import NavBar from "./Navbar";

export default function contactUs() {
  return (
    <>
      <NavBar />
      <div className="h-[85vh] mt-[7%]">
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">Doorstep Donation</div>
                <div className="text-two">Bansilal Path ,Bibewadi 411048</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+91 989314 5647</div>
                <div className="text-two">+91 876714 5678</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">Doorstepdonation@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">CONTACT US</div>
              <p className="par">
                Any questions or remarks ? Drop your email ,we will be sure to
                contact you.
              </p>

              <form id="myForm" action="/query" method="post">
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-box-message">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
                <div className="button">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
