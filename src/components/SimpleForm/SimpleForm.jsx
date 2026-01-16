import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        // default je browser behavior ache oita stop koro mane thako,
        e.preventDefault();
        // name diye name fieled peye geci
        console.log(e.target.name.value);
        // gmail dite peye geci 
        console.log(e.target.email.value);

    }

    return (
        <div> 
            {/*  onSubmit */}
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name='email' placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;