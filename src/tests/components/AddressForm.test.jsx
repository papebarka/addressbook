import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddressForm from '../../components/AddressForm'
import { addAddress } from '../../App'

describe(AddressForm, () => {

    beforeEach(()=> {
        const fields= {name: '', phone: '', address: ''}
        const action = addAddressHandler
        const change = ''

        render(<AddressForm action={action} change={change} fields={fields}/>)
    })

    it("renders the form", () => {

        const form = screen.getByRole('form')

        const nameInput = screen.getByPlaceholderText('Name')
        const phoneInput = screen.getByPlaceholderText('Phone')
        const addressInput = screen.getByPlaceholderText('Address')
        const addButton = screen.getByRole('button', {name: 'Add'})

        expect(form).toBeDefined()
        expect(form).toContainElement(nameInput)
        expect(form).toContainElement(phoneInput)
        expect(form).toContainElement(addressInput)
        expect(form).toContainElement(addButton)
    })

    it("invokes the addAddress method when clicked on Add button", async () => {
        const addAddress = jest.fn() // Event handler

        const addButton = screen.getByRole('button', {name: 'Add'})
        const user = userEvent.setup() // start a session with user event

        user.click(addButton)

        expect(addAddress.mock.calls).toHaveLength(1)
    })
})