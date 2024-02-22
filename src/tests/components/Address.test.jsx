import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Address from '../../components/Address'

describe(Address, () => {
    it('Renders content', () => {
        const {name, phone, address} = {name: "Adam Sen", phone: "223458965", address: "Mali" }
        console.log(name)
        const {container} = render(<Address name={name} phone={phone} address={address} />)
    
        screen.debug()
        
        const nameElt = screen.getByText("Adam Sen")
        const phoneElt = screen.getByText("T: 223458965")
        const addressElt = screen.getByText("A: Mali")
    
        expect(nameElt).toBeDefined()
        expect(phoneElt).toBeDefined()
        expect(addressElt).toBeDefined()
    })
});