import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
