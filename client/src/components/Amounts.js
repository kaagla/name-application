import React from 'react'
import { Wrapper, List, ListItem, ListItemHeader, ListItemTotal, Error } from './ListComponents'

export default function Amounts({ amounts, totalAmount }) {
    
    if (!amounts) {
        return null
    }

    return (
        <Wrapper id='amounts-component'>
            {amounts.length > 0 ?
            <List>
                <ListItemHeader key={'header'}>
                    <span>Name</span>
                    <span>Amount</span>
                </ListItemHeader>
                {amounts.map(item => 
                    <ListItem key={item.name}>
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                    </ListItem>
                )}
                {totalAmount &&
                <ListItemTotal key='total'>
                    <span>Total</span>
                    <span>{totalAmount.total}</span>
                </ListItemTotal>
                }
            </List>
            : <Error>Amounts not found.</Error>
            }
        </Wrapper>
    )
}
