import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const LivreList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="text" />
            <TextField source="image" />
            <EmailField source="prix" />
            <TextField source="quantite" />
            
        </Datagrid>
    </List>
);

export default LivreList ;