import "./Contact.css";

export default function Contact() {
    return (
        <div className="Contact ">
            <h3>Send Me a Message!</h3>
            <form method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRIq9W-bRu1TR1ScPhxZGBd-H7Z49zek6m3YQaI-y5Knev5g/formResponse">
            <label for="name">Name</label>
            <input className="contact-small" type="text" id="name" name="entry.2029292307" required/>
            <label for="email">Email</label>
            <input className="contact-small" type="email" id="email" name="entry.115920059" required/>
            <label for="message">Message</label>
            <textarea className="contact-big" id="message" name="entry.658828470" style={{"width":"300px"}}></textarea>
            <button className="contact-submit" type="submit">Send</button>
            </form>
        </div>
    );
}