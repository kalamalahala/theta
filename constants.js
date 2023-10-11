export class constants {
    constructor () {}

    bigG = 6.67408e-11;
    earthMass = 5.972e24;
    earthRadius = 6371000;
    gravity = this.bigG * this.earthMass / Math.pow(this.earthRadius, 2);

}