import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CategoryIcon from '@material-ui/icons/Category';

export default function Menu() {
    return <List>
            <ListItem button key='1' component="a" href="/categories">
              <ListItemIcon><CategoryIcon /></ListItemIcon>
              <ListItemText primary="Categorias"/>
            </ListItem>
            <ListItem button key='2'>
              <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
              <ListItemText primary="Item 2"/>
            </ListItem>
        </List>
}