const AddressForm = ({action, change, fields}) => {
    const {name, phone, address} = fields
    return(
        <form onSubmit={action}>
            <div>
                <input type="text" name="name" value={name} onChange={change}/>
            </div>

            <div>
                <input type="text" name="phone" value={phone} onChange={change}/>
            </div>

            <div>
                <input type="text" name="address" value={address} onChange={change}/>
            </div>

            <button type="submit">Add</button>
        </form>
    )
}
export default AddressForm