import { Entity } from 'typeorm'

class Listing {
    constructor(listingId, name, hostId, propertyType, address, latitude, longitude) {
        this.listingId = listingId;
        this.name = name;
        this.hostId =hostId;
        this.propertyType = propertyType;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

module.exports = {
    Listing: Listing
};