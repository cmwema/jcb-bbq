import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// eslint-disable-next-line
import React, { useCallback, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// eslint-disable-next-line
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className="">
      <p></p>
      <div className="mt-12 flex flex-col gap-20 md:gap-6 p-4 md:flex-row md:p-6">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default React.memo(Contact);

const ContactDetails = () => {
  const items = [
    {
      id: "i1",
      icon: AiTwotonePhone,
      title: "Call",
      description: "+254 706 089666",
    },
    {
      id: "i2",
      icon: FaLocationArrow,
      title: "Address",
      description: "Craft Center, Gigiri Lane, Nairobi, Kenya",
    },
    {
      id: "i3",
      icon: MdEmail,
      title: "Email",
      description: "info@josephinebbq.com",
    },
  ].map((item, key) => (
    <ContactItem
      id={item.id}
      key={key}
      icon={item.icon}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <div className="flex flex-col rounded-xl h-max bg-gray-300 p-2">
      <div>{items}</div>
    </div>
  );
};

const ContactItem = (props) => {
  return (
    <div className="flex items-center gap-3 p-4 text-lg">
      <props.icon className="text-orange-500" style={{ fontSize: "1.5rem" }} />
      <div className="px-2">
        <h3 className="font-medium tracking-wide">{props.title}</h3>
        <p className="font-light">{props.description}</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();

  const toastifySuccess = useCallback(() => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  }, []);

  const onSubmit = useCallback(
    async (data) => {
      const { name, email, subject, message } = data;
      try {
        // eslint-disable-next-line
        const templateParams = {
          name,
          email,
          subject,
          message,
        };
        // await emailjs.send(
        //   "service_9eaptpc",
        //   "template_tbzcxkf",
        //   templateParams,
        //   "D1N6xIbt6DsP3zvb2",
        // );

        reset();

        toastifySuccess();
      } catch (e) {
        // console.log(e);
      }
    },
    [reset, toastifySuccess]
  );

  return (
    <div className="flex w-[100%] flex-col items-center justify-center bg-gray-300 p-2 md:p-4 ">
      <h3 className="p-3 text-2xl font-semibold text-black ">Write to us</h3>
      <form id="" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}
        <div className="text-md flex w-full flex-col justify-between gap-6 md:flex-row md:p-4">
          <input
            id="name"
            type="text"
            required
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="w-[300px] rounded-md bg-gray-100 p-2 px-3 text-sm outline-[0.5px] outline-gray-400"
            placeholder="Name"
          ></input>

          <input
            id="email"
            required
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="w-[300px] rounded-md bg-gray-100 p-2 px-3 text-sm outline-[0.5px] outline-gray-400"
            placeholder="Email address"
          ></input>
        </div>
        {/* Row 2 of form */}
        <div className="text-md my-4 flex w-full flex-col items-start justify-start gap-6 md:flex-row md:p-4">
          <input
            required
            classname="px-4 outline-none"
            id="subject"
            type="text"
            name="subject"
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="w-[300px] rounded-md bg-gray-100 p-2 px-3 text-sm outline-[0.5px] outline-gray-400 md:w-[650px]"
            placeholder="Subject"
          ></input>
        </div>
        {/* Row 3 of form */}
        <div className="text-md flex w-full flex-col justify-between gap-6 md:flex-row md:p-4">
          <textarea
            required
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="h-[150px] w-[300px] rounded-md bg-gray-100 p-2 px-3 text-sm outline-[0.5px] outline-gray-400 md:w-[650px]"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          className="my-2 rounded-md border-[1px] p-2 px-4 text-sm hover:bg-orange-500 hover:text-white bg-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
