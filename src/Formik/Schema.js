import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  author: Yup.string().required("Author is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.string().required("Language is required"),
  link: Yup.string().required("Link is required"),
  pages: Yup.number()
    .required("Pages is required")
    .positive("Pages must be positive"),
  title: Yup.string().required("Title is required"),
  year: Yup.number()
    .required("Year is required")
    .positive("Year must be positive"),
  id: Yup.string().required("ID is required"),
});

export default validationSchema;
