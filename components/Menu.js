import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default function Menu() {
    return <List>
            <ListItem button key='1'>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Item 1"/>
            </ListItem>
            <ListItem button key='2'>
              <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
              <ListItemText primary="Item 2"/>
            </ListItem>
        </List>
}