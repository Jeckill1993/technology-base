export interface AddressInterface {
    street: string;
    city: string;
    zipcode: string;
}

export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressInterface;
}