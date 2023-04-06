import geolocationInfo from './geolocation-info';

export default function Page ({ geo }) {

    // title: "Geolocation",
    // metaDescription:
    //   "Use Netlify Edge Functions to get information about a user's location to serve location-specific content.",
 
      return (
      <section>
        <h1>Geolocation</h1>
        <p>You can use Edge Functions to get information about a user's location to serve location-specific content and personalize their experience.</p>
        
        {geolocationInfo({
          city: geo?.city,
          countryCode: geo?.country?.code,
          countryName: geo?.country?.name,
          latitude: geo?.latitude,
          longitude: geo?.longitude,
          timezone: geo?.timezone,
        })}
        
      </section>
    );
    }