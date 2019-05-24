import React from 'react';

const ListView = props => {
    return (
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.phone_number}</p>
                    <p>{user.zipcode}</p>
                    <p>{user.email}</p>
                    <p>{user.institution}</p>
                    <p>{user.tenant}</p>
                </div>
            ))}
        </div>
    )
}

export default ListView;