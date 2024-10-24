import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="contact-form container">
        <div className="form">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>}/>
        <Button text="VIA CALL" icon={<IoCallOutline />}/>
        </div>
        <div className="contact-img"></div>
    </div>
  )
}

export default ContactForm