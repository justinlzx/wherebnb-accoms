export class Listing {
    constructor(id, name, hostId, propertyType, address, latitude, longitude, image_1, image_2, image_3, image_4, image_5, createdAt, description, instructions, rating) {
        this.id = id;
        this.name = name;
        this.hostId = hostId;
        this.propertyType = propertyType;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.image_1 = image_1;
        this.image_2 = image_2;
        this.image_3 = image_3;
        this.image_4 = image_4;
        this.image_5 = image_5;
        this.createdAt = createdAt;
        this.description = description;
        this.instructions = instructions;
        this.rating = rating;
    }
}

