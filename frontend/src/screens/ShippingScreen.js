import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)

  useEffect(() => {
    if (!userInfo) {
      history.push('/cart')
    }
  }, [history, userInfo])

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({
        address,
        city,
        postalCode,
        phoneNumber,
      })
    )
    history.push('/payment')
  }

  return (
    <>
      <CheckoutSteps
        step1
        step2
        step3={shippingAddress.address}
        step4={shippingAddress.address}
      />
      <FormContainer>
        <h1 className='mb-n3'>כתובת למשלוח</h1>
        <small>* שדות חובה</small>
        <Form onSubmit={submitHandler} className='mt-3'>
          <Form.Group controlId='address'>
            <Form.Label>* רחוב, מספר בית ודירה</Form.Label>
            <Form.Control
              type='text'
              placeholder='רחוב, מספר בית ודירה'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='city'>
            <Form.Label>* עיר</Form.Label>
            <Form.Control
              type='text'
              placeholder='עיר'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='postalCode'>
            <Form.Label>מיקוד</Form.Label>
            <Form.Control
              type='tel'
              placeholder='מיקוד (7 ספרות)'
              pattern='[0-9]{7}'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='phoneNumber'>
            <Form.Label>מספר טלפון נייד</Form.Label>
            <Form.Control
              type='tel'
              value={phoneNumber}
              placeholder='מספר טלפון נייד (מספרים בלבד)'
              pattern='[0-9]{10}'
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' className='btn-brand btn-block mt-5'>
            מעבר לבחירת שיטת תשלום
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen