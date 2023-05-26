<<<<<<< HEAD
import PropTypes from 'prop-types';
import { DeleteButton } from './Phonebook.styled';

export default function Contact({
    name,
    number,
    onDelete,
}) {
    return (
        <>
            {name}: {number}
            <DeleteButton type="button" onClick={onDelete}>
                Delete
            </DeleteButton>
        </>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
=======
import { nanoid } from 'nanoid';

export default function Contact(
    id = nanoid(),
    name,
    number,
    onRemoveContact,
) {
    return (
        <li key={id}>
            {name}: {number}
            {'   '}
            <button
                type="button"
                onClick={() => onRemoveContact(id)}
            >
                Delete
            </button>
        </li>
    );
}
>>>>>>> parent of db27ad9 (localstorage done)
