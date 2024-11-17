import React from "react";

const Map = () => {
    return (
        <div className="embed-responsive embed-responsive-16by9 m-1 mb-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.896326116194!2d77.0018468!3d28.990442999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbabcffffffff%3A0xdcf5d9392573d15a!2sH%20G%20Trades%20(%20HSJN%20FinWisdom%20Private%20Limited%20)!5e0!3m2!1sen!2sin!4v1700636299219!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
            ></iframe>
        </div>
    );
};

export default Map;
