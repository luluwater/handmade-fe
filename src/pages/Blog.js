import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Blog() {
  return (
    <>
      <>
      <div className=""> 
        <Button className="mb-12" variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="secondary-dark">secondary-dark</Button>{" "}
        <Button variant="skin-brighter">skin-brighter</Button>{" "}
        <Button variant="skin-bright">skin-bright</Button>{" "}
        <Button variant="gray-dark">gray-dark</Button>{" "}
        <Button variant="gray-light">gray-light</Button>{" "}
        <Button variant="dark">dark</Button>{" "}
        <Button variant="link">Link</Button></div>
      </>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
export default Blog;
