import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Menu from './components/Menu'
import Names from './components/Names'
import Amounts from './components/Amounts'
import './App.css';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #66fcf1;
`

export default function App() {
  
    const [names, setNames] = useState(null)
    const [amounts, setAmounts] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)
    const [content, setContent] = useState(null)

    function handleContent(selection) {
      setContent(selection)

      if (selection === 'names') {
          getNames()
      }

      if (selection === 'amounts') {
        getAmounts()
        getTotalAmount()
      }
    }

    function getNames() {
      if (!names || names.length === 0) {
          setNames(null)
          axios.get('/api/names')
          .then(res => {
            setNames(res.data)
          })
          .catch(() => {
            setNames([])
          })
      }
    }

    function getAmounts() {
      if (!amounts || amounts.length === 0) {
        setAmounts(null)
        axios.get('/api/amounts')
        .then(res => {
          setAmounts(res.data)
        })
        .catch(() => setAmounts([]))
      }
    }

    function getTotalAmount() {
      if (!totalAmount) {
          axios.get('/api/totalamount')
          .then(res => {
              setTotalAmount(res.data)
          })
      }
    }

    return (
        <Container>
            <Menu content={content} handleContent={handleContent} />
            {content === 'names' && <Names names={names} />}
            {content === 'amounts' && <Amounts amounts={amounts} totalAmount={totalAmount} />}
        </Container>
    )
}