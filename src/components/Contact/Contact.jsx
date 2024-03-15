import { Button, ContactItem } from "./Contact.styled";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <ContactItem>
      <p>
        {name}: <span>{number}</span>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </p>
    </ContactItem>
  );
}
