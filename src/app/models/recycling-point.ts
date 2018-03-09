export class RecyclingPoint {

    constructor(
        public name: string,
        public lat: number,
        public lng: number,
        public type_id = [],
        public place_id: number,
        public address: string,
        public openingTime: string,
        public info: string,
        public administrator: string
    ) {}
}
