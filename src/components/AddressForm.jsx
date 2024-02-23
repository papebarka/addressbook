const AddressForm = ({action, change, fields}) => {
    const {name, phone, address} = fields
    return(
        <form onSubmit={action} role="form">
            <div>
                <input type="text" name="name" value={name} placeholder="Name" onChange={change}/>
            </div>

            <div>
                <input type="text" name="phone" value={phone} placeholder="Phone" onChange={change}/>
            </div>

            <div>
                <input type="text" name="address" value={address} placeholder="Address" onChange={change}/>
            </div>

            <button type="submit">Add</button>
        </form>
    )
}
export default AddressForm