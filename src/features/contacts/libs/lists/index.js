const { default: ContactCards } = require("./card");
const { default: ContactList } = require("./list");

const Contacts = (props) => {
  return (
    <>
      <ContactList {...props} />
      <ContactCards {...props} />
    </>
  );
};

export default Contacts;
