import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 95%;
    margin-top: ${props => props.marginTop};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-out;
`

const Box = styled.div`
    width: fit-content;
    max-width: 600px;
    height: ${props => props.height};
    border-radius: 66px;
    border: 4px solid #66fcf1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const TextInput = styled.input`
    border: none;
    font: inherit;
    color: inherit;
    background-color: inherit;
    flex: 1;
    margin-left: 30px;
    font-size: 30px;
    border-bottom: 2px #66fcf1 solid;

    :focus {
        outline: none;
    }

    @media only screen and (max-width: 600px) {
        width: 50%;
        font-size: 20px;
        margin-left: 10px;
    }

    @media only screen and (max-width: 400px) {
        width: 30%;
        font-size: 16px;
    }
`

const Button = styled.button`
    width: 150px;
    height: 80%;
    border: none;
    outline: none;
    margin-right: 10px;
    margin-left: 10px;
    background-color: ${props => props.selected ? '#45a29e':'#66fcf1'};
    cursor: ${props => props.selected ? 'default':'pointer'};
    color: ${props => props.selected ? 'white':'#0b0c10'};
    font: inherit;
    transition: all 0.1s;

    :hover {
        background-color: #45a29e;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        width: 100px;
    }
`

const ButtonRight = styled(Button)`
    border-radius: 10px 66px 66px 10px;
`

const ButtonLeft = styled(Button)`
    border-radius: 66px 10px 10px 66px;
`

const SearchResult = styled.div`
    height: 70px;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

export default function Menu({ content, handleContent }) {

    const [searchResult, setSearchResult] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [text, setText] = useState('')

    function handleText(text) {
        setText(text)
    }

    function handleSearch() {
        setSearchResult(null)
        setErrorMsg('')
        axios.get(`/api/amounts?name=${text}`)
        .then(res => {
            setSearchResult(res.data)
        })
        .catch(() => {
            setErrorMsg(`Name ${text.trim()} not found.`)           
        })
    }

    return (
        <Wrapper id='menu-component' marginTop={content ? '5vh':'30vh'}>
            <Box height={'70px'}>
                <TextInput
                    id='search-input'
                    type='search'
                    value={text}
                    placeholder={'Search for a name...'}
                    onChange={(e) => handleText(e.target.value)}
                />
                <ButtonRight id='search-button'
                    onClick={() => handleSearch()}
                >SEARCH</ButtonRight>
            </Box>
            <SearchResult>
                {errorMsg !== '' && <span>{errorMsg}</span>}
                {searchResult && <span>{searchResult.name} - {searchResult.amount}</span>}
            </SearchResult>
            <Box height={'40px'}>
                <ButtonLeft
                    onClick={() => handleContent('names')}
                    selected={content === 'names' ? true : false}
                >NAMES</ButtonLeft>
                <ButtonRight
                    onClick={() => handleContent('amounts')}
                    selected={content === 'amounts' ? true : false}
                >AMOUNTS</ButtonRight>
            </Box>
      </Wrapper>
    )
}
