import Container from '../Container';
import styles from './style.module.css';
import React, { useState, useEffect } from 'react'


const HeroBanner = (props) => {

    const [geo, setGeo] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch("/geolocation")
                const data = await res.json()
                console.log(data)
                setGeo(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const { path, fields } = props;
    const heroImageStyle = {
        backgroundImage: `url(https:${fields.image?.fields?.file?.url})`
    };


    return (
        <section
            className={styles.hero}
            data-sb-field-path={` ${path} ${path}.image`}
            style={heroImageStyle}
        >
            <Container isSection={false} classes={styles[fields.textColor]}>
                {fields.title && <h1 data-sb-field-path=".title" className={styles.hero__title}>{fields.title}</h1>}
                {/* {fields.subtitle && <p data-sb-field-path=".subtitle" className={styles.hero__subtitle}>{fields.subtitle}</p>} */}

                {/* <img src="https://flagcdn.com/96x72/${countryCode?.toLowerCase()}.png" className="geolocation__flag" alt="${countryName}" /> */}
                <ul>
                    <li>You are located in: {JSON.stringify(geo?.geo.city)}</li>
                    <li>Your country code: {JSON.stringify(geo?.geo.country.code)}</li>
                    <li>Your country name: {JSON.stringify(geo?.geo.country.name)}</li>
                    <li>Your country timezone: {JSON.stringify(geo?.geo.timezone)}</li>
                    <li>Your latitude: {JSON.stringify(geo?.geo.latitude)}</li>
                    <li>Your longitude: {JSON.stringify(geo?.geo.longitude)}</li>
                </ul>
                {/* {JSON.stringify(geo)} */}
            
            </Container>

        </section>

    );
};

export default HeroBanner;
