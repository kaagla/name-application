import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 100px;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    padding-top: px;
    padding: 5px 20px 5px 20px;
    letter-spacing: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :nth-of-type(odd) {
        background-color: #1f2833;
    }
`

export const ListItemHeader = styled(ListItem)`
    padding: 5px 10px 5px 10px;
    border-bottom: 2px solid #66fcf1;
`

export const ListItemTotal = styled(ListItem)`
    padding: 5px 10px 5px 10px;
    border-top: 2px solid #66fcf1;
`

export const Error = styled.div`
    text-align: center;
`