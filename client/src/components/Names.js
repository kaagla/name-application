import React from 'react'
import { Wrapper, List, ListItem, Error } from './ListComponents'

export default function Names({ names }) {

    if (!names) {
        return null
    }

    return (
        <Wrapper id='names-component'>
            {names.length > 0 ?
            <List>
                {names.map(n => 
                    <ListItem key={n.name}>{n.name}</ListItem>
                )}
            </List>
            : <Error id='names-error'>Names not found.</Error>
            }
        </Wrapper>
    )
}
