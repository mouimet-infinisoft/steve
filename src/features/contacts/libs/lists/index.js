const { default: ContactCards } = require("./card");
const { default: ContactList } = require("./list");

const Contacts = (props) => false ? <ContactList {...props}/> : <ContactCards {...props}/>

export default Contacts