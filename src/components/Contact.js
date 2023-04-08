import "./Contact.css";

export default function Contact() {
    return (
        <div className="Contact">
            <form method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRIq9W-bRu1TR1ScPhxZGBd-H7Z49zek6m3YQaI-y5Knev5g/formResponse">
            <label for="name">Name</label>
            <input type="text" id="name" name="entry.2029292307" required/>
            <label for="email">Email</label>
            <input type="email" id="email" name="entry.115920059" required/>
            <label for="message">Message</label>
            <textarea id="message" name="entry.658828470" required></textarea>
            <button type="submit">Send</button>
            </form>
            
        </div>
    );
}