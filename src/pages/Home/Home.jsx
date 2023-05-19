import * as userService from '../../utilities/users-service'
// import { useEffect, useState } from 'react';
// import * as restaurantsAPI from '../../utilities/restaurants-api';

export default function HomePage() {

    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    return (
        <>

            {/* <h1>Welcome, {user.name}</h1> */}
            <button onClick={handleCheckToken}></button>
        </>
    )
}