import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Input, Button } from '@material-ui/core'

const BuyForm = (props) => {
    const { productCode, orderProduct, allErrors } = props;
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const status = 'waiting';

    const onSubmitHandler = e => {
        e.preventDefault();
        orderProduct({name, productCode, amount, mobile, address, status})
        setName("");
        setMobile("");
        setAmount("");
        setAddress("");
    }

    return (
        <div style={{padding:'30px'}}>
            <h2>استبيان عملية الشراء</h2>
            <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                <FormControl >
                    <InputLabel htmlFor="name">الاسم كاملاً</InputLabel>
                    <Input
                        id="name"
                        aria-describedby="nameErr"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    {allErrors.name ?
                        <FormHelperText style={{ color: 'red' }} id="nameErr">{allErrors.name.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="mobile">رقم الهاتف</InputLabel>
                    <Input
                        id="mobile"
                        aria-describedby="mobileErr"
                        type="text"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile} />
                    {allErrors.mobile ?
                        <FormHelperText style={{ color: 'red' }} id="mobileErr">{allErrors.mobile.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="amount">الكميّة</InputLabel>
                    <Input
                        id="amount"
                        aria-describedby="amountErr"
                        type="text"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount} />
                    {allErrors.amount ?
                        <FormHelperText style={{ color: 'red' }} id="amountErr">{allErrors.amount.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="address">العنوان</InputLabel>
                    <Input
                        id="address"
                        aria-describedby="addressErr"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address} />
                    {allErrors.address ?
                        <FormHelperText style={{ color: 'red' }} id="addressErr">{allErrors.address.message}</FormHelperText> : ''}
                </FormControl><br></br> <br></br>
                <Button type="submit" variant="contained" color="primary" >اشتري</Button>
            </form>
        </div>
    )
}

export default BuyForm;