import React, { useState } from 'react';
import '../css/form.css';
import base from '../base';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebookHandle] = useState('');
    const [instagram, setInstagramHandle] = useState('');
    const [linkedIn, setLinkedInHandle] = useState('');
    const [twitter, setTwitterHandle] = useState('');
    const [pinterest, setPinterestHandle] = useState('');
    const [youtube, setYouTubeHandle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const userId = Date.now();
        const parsedData = JSON.parse(stringifyFormData(data));
        Object.keys(parsedData).forEach(itemKey => {
            const item = parsedData[itemKey];
            if (item.length === 0) {
                delete parsedData[itemKey];
                
            };
        });
        base.post(`users/${userId}`, { data: parsedData })
            .then(() => {
                alert('Form Submitted!')
                resetForm();
            })
            .catch(e => {
                console.log('ERROR:: ', e);
            }
        );
    }

    const stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
    }

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setJobTitle('');
        setCompany('');
        setPhoneNumber('');
        setWebsite('');
        setFacebookHandle('');
        setInstagramHandle('');
        setLinkedInHandle('');
        setTwitterHandle('');
        setPinterestHandle('');
        setYouTubeHandle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>First Name:</span>
                <input
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    name="first_name"
                />
            </label>
            <label>
                <span>Last Name:</span>
                <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    name="last_name"
                />
            </label>
            <label>
                <span>Company:</span>
                <input
                    type="text"
                    placeholder="Best Company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    name="company"
                />
            </label>
            <label>
                <span>Job Title:</span>
                <input
                    type="text"
                    placeholder="Manager"
                    value={jobTitle}
                    onChange={e => setJobTitle(e.target.value)}
                    name="job_title"
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                />
            </label>
            <label>
                <span>Phone Number:</span>
                <input
                    type="text"
                    placeholder="(123)
                    123 - 1231"
                    value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                    name="phone"
                />
            </label>
            <label>
                <span>Website:</span>
                <input
                    type="text"
                    placeholder="johndoe.com"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    name="website"
                />
            </label>
            <label>
                <span>Facebook Handle:</span>
                <input
                    type="text"
                    placeholder="jdoe"
                    value={facebook}
                    onChange={e => setFacebookHandle(e.target.value)}
                    name="facebook"
                />
            </label>
            <label>
                <span>Instagram Handle:</span>
                <input
                    type="text"
                    placeholder="j_doe_pics"
                    value={instagram}
                    onChange={e => setInstagramHandle(e.target.value)}
                    name="instagram"
                />
            </label>
            <label>
                <span>LinkedIn Handle:</span>
                <input
                    type="text"
                    placeholder="Johnathan T. Doe"
                    value={linkedIn}
                    onChange={e => setLinkedInHandle(e.target.value)}
                    name="linkedin"
                />                    
            </label>
            <label>
                <span>Twitter Handle:</span>
                <input
                    type="text"
                    placeholder="j_doe_tweets"
                    value={twitter}
                    onChange={e => setTwitterHandle(e.target.value)}
                    name="twitter"
                />
            </label>
            <label>
                <span>Pinterest Handle:</span>
                <input
                    type="text"
                    placeholder="j_doe_pins"
                    value={pinterest}
                    onChange={e => setPinterestHandle(e.target.value)}
                    name="pinterest"
                />
            </label>
            <label>
                <span>YouTube Handle:</span>
                <input
                    type="text"
                    placeholder="j_doe_video"
                    value={youtube}
                    onChange={e => setYouTubeHandle(e.target.value)}
                    name="youtube"
                />
            </label>
            <button>Go!</button>
        </form>
    );
}

export default Form;