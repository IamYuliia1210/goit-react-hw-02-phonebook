import { List, Item, Text, Button } from './ListContact.styled';

export const ListContact = ({ filter, onDeleteContact }) => {
  return (
    <div>
      <List>
        {filter.map(item => (
          <Item key={item.id}>
            <Text>
              {item.name} : {item.number}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(item.id)}>
              Delet contact
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
