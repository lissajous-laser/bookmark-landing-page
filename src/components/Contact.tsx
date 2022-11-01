import { useContext, useState } from "react";
import { WinContext, MAX_CONTENT_WIDTH, BREAK_6 } from "../App";
import iconError from '../images/icon-error.svg';

export function Contact() {
  const {winWidth} = useContext(WinContext);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
      setEmail('');
      setIsValid(true);
      // const request = {
      //   method: 'POST',
      //   body: JSON.stringify({email: email})
      // };
      // invoke fetch()
    }
  }

  const emailInput = (
    <div
      className="h-12 flex justify-between border rounded bg-white relative"
      {... winWidth < BREAK_6? undefined : {style: {width: 296}}}
    >
      <input
        className="h-12 rounded grow text-very-dark-blue text-sm caret-soft-blue placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-wider p-5"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={inputChangeHandler}
        onInvalid={(event) => {
          event.preventDefault();
          setIsValid(false);
        }}
        required
      />
      {!isValid && 
        <img
          className="absolute top-3 right-3"
          style={{width: 20, height: 20}}
          src={iconError}
          alt="Exclaimation mark"
        />
      }
    </div>
  );

  const submitBtn = (
    <button
      className="button px-6 hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 w-full break-6:w-auto"
    >
      Contact Us
    </button>
  );

  // e-mail input and validation message.
  const emailInputAndInvalidMsg = (
    <div
      className="bg-soft-red border-bg-soft-red border-2 border-soft-red rounded-md"
    >
      {emailInput}
      <div
        className="ml-2 my border-t-1 border-y-2 border-soft-red text-xs text-white font-medium italic"
      >
        Whoops, make sure it's an email
      </div>
    </div>
  )

  const renderFormFromWidth = () => {
    if (winWidth < BREAK_6) {
      return (
        <form
          className="w-11/12 break-6:w-5/6 mx-auto gap-4"
          onSubmit={submitHandler}
        >
          {isValid ? emailInput : emailInputAndInvalidMsg}
          <div className="h-4 flex justify-center"></div>
          {submitBtn}
        </form>
      );
    } else {
      return (
        <form
          className="w-11/12 break-6:w-5/6 mx-auto flex justify-center gap-4"
          onSubmit={submitHandler}
        >
          {isValid ? emailInput : emailInputAndInvalidMsg}
          {submitBtn}
        </form>
      );

    }
  };

  return (
    <div
      className="w-11/12 break-6:w-5/6 mx-auto pb-16 break-6:pb-20 pt-16"
      style={{maxWidth: MAX_CONTENT_WIDTH}}
    >
      <div
        className="text-center text-white text-sm-xs font-medium"
        style={{letterSpacing: "0.3rem"}}
      >
        35,000+ ALREADY JOINED
      </div>
      <h2 
        className="mt-4 break-6:mt-10 mb-8 break-6:mb-10 heading-sm break-6:heading-lg mx-auto text-center text-white max-w-md"
      >
        Stay up-to-date with what we’re doing
      </h2>
      {renderFormFromWidth()}
    </div>
  );
}
