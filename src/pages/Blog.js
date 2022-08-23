import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Blog() {
  return (
    <>
      <>
        <div className="d-flex flex-column gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary-dark">secondary-dark</Button>
          <Button variant="skin-brighter">skin-brighter</Button>
          <Button variant="skin-bright">skin-bright</Button>
          <Button variant="gray-dark">gray-dark</Button>
          <Button variant="gray-light">gray-light</Button>
          <Button variant="dark">dark</Button>
          <Button variant="link bg-primary btn">Link</Button>
        </div>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p className="fs-xl">96</p>
      <div className="fs-1">fs1</div>
      <div className="fs-2">fs2</div>
      <div className="fs-3">fs3</div>
      <div className="fs-4">fs4</div>
      <div className="fs-5">fs5</div>
      <div className="fs-6">fs6</div>
      <div className="fs-xl">fs-xl</div>
      {[
        'primary',
        'secondary',
        'secondary-dark',
        'skin-brighter',
        'skin-bright',
        'gray-dark',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}
export default Blog
