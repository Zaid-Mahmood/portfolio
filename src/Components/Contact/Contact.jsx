import "../Contact/Contact.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Footer from "..//Footer/Footer";
function Contact() {
  const handleSubmit = (values, { resetForm }) => {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: values.fullName,
      from_email: values.email,
      to_name: "Zaid Mahmood",
      message: values.textareaField
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setTimeout(() => {
          toast.success("Message Send Successfully!", {
            autoClose: 1500
          })
        }, 1000)
        resetForm()
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Message Sending Failed", {
            autoClose: 1500
          })
        }, 1000)
      })

  }

  let initialValues = {
    fullName: "",
    email: "",
    textareaField: ""
  }
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email").email("Please Enter valid Email"),
    textareaField: yup.string().required("Please enter your message").max(200, "Maximum 200 words are allowed")
  })
  return (
    <div style={{ height: "100vh" }} className='contactSection container position-relative'>
      <div className='form'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div className="mt-5 text-center pb-1" ><h2>Contact Me</h2></div>
            <div className='row mx-auto'>
              <div className="col-md-4 d-grid align-content-center">
                <div className="d-inline-block">
                  <i className="contactIcons fs-3 bi bi-send"></i>
                  <span className="contactText">mahmoodzaid603@gmail.com</span>
                </div>
                <div className="d-inline-block">
                  <i className="contactIcons fs-3 bi bi-phone"></i>
                  <span className="contactText">+92-309-4350605</span>
                </div>
              </div>
              <div className='col-md-8'>
                <div className="tableSection">
                  <div className="text-start mt-5">
                    <Field type="text" className="form-control bg-dark border-dark shadow-none text-secondary w-100" placeholder="Your Name" name="fullName" />
                  </div>
                  <div>
                    <p className='text-danger'>
                      <ErrorMessage name="fullName" />
                    </p>
                  </div>

                  <div className="text-start mb-3">
                    <Field type="email" className="form-control bg-dark border-dark shadow-none text-secondary w-100" placeholder="Your Email" name="email" />
                  </div>
                  <div>
                    <p className='text-danger'>
                      <ErrorMessage name="email" />
                    </p>
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      className="form-control bg-dark border-dark shadow-none text-secondary w-100"
                      name="textareaField"
                      rows="5"
                      placeholder="Your Message Here..."
                    />
                    <div>
                      <p className='text-danger'>
                        <ErrorMessage name="textareaField" />
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="seeMoreBtn mt-2 text-decoration-none">Submit</button>
                  </div>

                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="position-absolute start-50 bottom-0 translate-middle">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
