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

               
                <ul className={styles.geo}>
                <img src={`https://flagcdn.com/96x72/${geo?.geo.country.code.toLowerCase()}.png`} className={styles.geolocation__flag} alt={`${geo?.geo.country.name}`} />
                    <li>Your city is: <span className={styles.details}>{geo?.geo.city}</span></li>
                    <li>Your country code: <span className={styles.details}>{geo?.geo.country.code}</span></li>
                    <li>Your country name: <span className={styles.details}>{geo?.geo.country.name}</span></li>
                    <li>Your country timezone: <span className={styles.details}>{geo?.geo.timezone}</span></li>
                    <li>Your coordinates: <span className={styles.details}>{geo?.geo.latitude}, {geo?.geo.longitude}</span></li>
                </ul>
                {/* {JSON.stringify(geo)} */}
            
            </Container>

        </section>

    );
};

export default HeroBanner;
