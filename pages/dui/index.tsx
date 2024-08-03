import React, { useState, useEffect } from 'react';

const Dui: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Update the theme based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='pt-20'>
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="p-4">
        <button className="btn" onClick={toggleTheme}>
          {isDarkMode ? (
            <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          ):(
            <svg
                className="swap-on h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
          )}
        </button>
      </div>

      <div className="p-4">
        <button className="btn btn-primary">primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-accent">accent</button>
      </div>

      <div className="p-4" data-theme={isDarkMode ? 'dark' : 'cupcake'}>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      <div className="tabs tabs-lifted p-4">
        <button className="tab">Tab 1</button>
        <button className="tab tab-active">Tab 2</button>
        <button className="tab">Tab 3</button>
        <button className="tab"></button>
      </div>

      <div className="p-4">
        <input type="checkbox" className="toggle" />
        <input type="checkbox" className="toggle toggle-primary" />
        <input type="checkbox" className="toggle toggle-secondary" />
        <input type="checkbox" className="toggle toggle-accent" />
        <br />
        <input type="checkbox" className="checkbox" />
        <input type="checkbox" className="checkbox-primary checkbox" />
        <input type="checkbox" className="checkbox-secondary checkbox" />
        <input type="checkbox" className="checkbox-accent checkbox" />
        <br />
        <input type="radio" name="radio" className="radio" />
        <input type="radio" name="radio" className="radio-primary radio" />
        <input type="radio" name="radio" className="radio-secondary radio" />
        <input type="radio" name="radio" className="radio-accent radio" />
      </div>

      <div className="card m-4 w-80 shadow">
        <figure>
          <img alt='' src="https://picsum.photos/id/103/500/250" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">DaisyUI Card</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
        </div>
      </div>

      <details className="dropdown m-4">
        <summary className="btn m-1">open/close dropdown</summary>
        <ul className="dropdown-content menu z-[2] w-52 rounded-box bg-base-200 p-2">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>

      <button className="btn" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>

      <ul className="steps my-4 w-full">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>

      <div className="chat chat-start m-4">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
          <img alt='' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          see all components <a className="link" target="_blank" href="https://daisyui.com/components">Here</a>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Dui;

