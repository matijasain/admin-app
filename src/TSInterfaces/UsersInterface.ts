export interface IUsers {
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    },
}