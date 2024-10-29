import { MdMessage } from "react-icons/md";

const Button = (props) => {
  return (
    <button className="primary-btn">
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button

