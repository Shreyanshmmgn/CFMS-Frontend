import "./../../../css/SendQuery.css";
const SendQuery = () => {
  return (
    // <h1>sascscefce</h1>
      <div class="container contact-form">
      <div class="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      
      <form >
        <h3>Drop Us a Query <br></br><h4>Get in touch and we’ll get back to you as soon as we can.  We look forward to hearing from you!</h4></h3>
        
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Your Name *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Your Phone Number *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btnContact"
                value="Send Message"
                href="mailto: shyam.yadav@gmail.com"
              />
              
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Your Message *"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendQuery;
