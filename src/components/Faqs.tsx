import { MoreInfoBtn } from './MoreInfoBtn';
import arrowBlue from '../images/icon-arrow.svg';
import arrowRed from '../images/icon-arrow-soft-red.svg';


// State for which accordian elements are expanded.
type Accordion = [boolean, boolean, boolean, boolean];

// Accordion component
export function Faqs(
  props: {accordion: Accordion,
  setAccordion: React.Dispatch<React.SetStateAction<Accordion>>}) {

  const parameterisedSetter = (element: number) => {
    props.setAccordion((state) => {
      const newState: Accordion = [...state];
      newState[element] = !state[element];
      return newState;
    });
  }

  // Arrow denoting if accordion sub-element is extended.
  const renderArrow = (element: number) => {
    if (props.accordion[element] === true) {
      return (
        <img 
          className="break-6:mr-5 rotate-180" style={{width: 18, height: 12}}
          src={arrowRed}
          alt="Upward pointing arrow"
        />
      );
    } else {
      return (
        <img
          className="break-6:mr-5"
          style={{width: 18, height: 12}}
          src={arrowBlue}
          alt="Downward pointing arrow"
        />);
    }
  }

  return (
    <article
      className="mb-28 break-6:mb-40 mx-auto relative"
      style={{maxWidth: 530}}
    >
      <h2
        className="heading-sm break-6:heading-lg text-very-dark-blue text-center mb-4"
      >
      Frequently Asked Questions
      </h2>
      <p
        className="para-sm break-6:para-lg text-grayish-blue text-center max-w-lg mx-auto mb-16"
        style={{maxWidth: 560}}
      >
      Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.
      </p>
      <article className="border-t relative z-0"> 
        <button
          className="accordion text-very-dark-blue hover:text-soft-red"
          onClick={() => parameterisedSetter(0)}
        >
          <h4 className="para-sm break-6:para-lg question">
            What is Bookmark?
          </h4>
          {renderArrow(0)}
        </button>
        {props.accordion[0] && 
          <div className="animate-expand">
            <p
              className="answer-sm break-6:answer-lg text-firefox-btn-dark animate-expand"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </p>
          </div>
        }
      </article>
      <article className="border-t relative z-10 bg-white">
        <button
          className="accordion text-very-dark-blue hover:text-soft-red"
          onClick={() => parameterisedSetter(1)}
        >
          <h4 className="para-sm break-6:para-lg question">
            How can I request a new browser?
          </h4>
          {renderArrow(1)}
        </button>
        {props.accordion[1] &&
          <div className="animate-expand">
            <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </p>
          </div>
        }
      </article>
      <article className="border-t">
        <button
          className="accordion text-very-dark-blue hover:text-soft-red"
          onClick={() => parameterisedSetter(2)}
        >
          <h4 className="para-sm break-6:para-lg question">
            Is there a mobile app?
          </h4>
          {renderArrow(2)}
        </button>
        {props.accordion[2] &&
          <div className="animate-expand">
            <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
            sollicitudin ex et ultricies bibendum.
            </p>
          </div>
        }
      </article>
      <article className="border-t border-b">
        <button
          className="accordion text-very-dark-blue hover:text-soft-red"
          onClick={() => parameterisedSetter(3)}
        >
          <h4 className="para-sm break-6:para-lg question">
            What about other Chromium browsers?
          </h4>
          {renderArrow(3)}
        </button>
        {props.accordion[3] &&
          <div className="animate-expand">
            <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
            vitae neque eget nisl gravida pellentesque non ut velit.
            </p>
          </div>
        }
      </article>
      <div className="flex place-content-center mt-14">
        <MoreInfoBtn/>
      </div>
    </article>
  );
}

