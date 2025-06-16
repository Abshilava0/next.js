import classes from './Button.module.css'

export default function Button({onClick, children }) {
  return <button className={classes.contactBtn} onClick={onClick}>
    <img src="/contactbtn.jpg" alt="Contact Us" />
    {children}
  </button>
}