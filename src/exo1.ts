interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export function getUserSummary(id: number): Promise<User> {
    // Return User not found if user does not exist
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then((user: User) => {
            return user;
        });
}

// getUserSummary(1).then(user => {
//     const {name, email, address: {city}} = user;
//     console.log(`name: ${name}, email: ${email}, city: ${city}`);
// });
