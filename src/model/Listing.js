export class Listing {
    constructor(listingId, name, hostId, propertyType, country, description, address, latitude, longitude, image_1, image_2, image_3, image_4, image_5, createdAt) {
        this.listingId = listingId;
        this.name = name;
        this.hostId = hostId;
        this.propertyType = propertyType;
        this.country = country
        this.description = description
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.image_1 = image_1;
        this.image_2 = image_2;
        this.image_3 = image_3;
        this.image_4 = image_4;
        this.image_5 = image_5;
        this.createdAt = createdAt;
    }
}

