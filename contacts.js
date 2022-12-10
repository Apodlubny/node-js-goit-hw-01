const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactsById = async () => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === `${contactId}`);
  return result || null;
};
module.exports = { listContacts, getContactById, addContact, removeContact };
