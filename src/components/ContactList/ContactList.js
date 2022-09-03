import PropTypes from 'prop-types';
import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import { ContactListStyle, ContactItem } from "components/ContactList/ContactList.styled";

export const ContactList = ({ visibleContacts, ...otherProps }) => {
    return (
        <ContactListStyle>
            {visibleContacts.map(({id, name, number}) => {
                return (
                    <ContactItem key={id}>
                        <ContactItemEntrails id={id} name={name} number={number} {...otherProps} />
                    </ContactItem>
                );
            })}
        </ContactListStyle>
    );
};

ContactList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};