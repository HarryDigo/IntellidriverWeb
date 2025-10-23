import { useEffect, useState } from 'react'

import { getRanking } from '@services'

export const Leaderboard = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    getRanking(10).then((result) => {
      console.log(result)
      setUserList(result)
    })
  }, [])

  return (
    <div className='text-light'>
      {userList.map(( user, index ) => 
        <div key={index} className='d-flex align-items-center bg-tertiary w-100 rounded-pill fs-3 my-3'>
          <div style={{width: '42px'}} className='bg-warning rounded-circle fw-bold m-3 border-3 border-warning-subtle'>{index + 1}</div>
          <span className='ms-5'>{user.fullName}</span>
          <span className='ms-auto me-5 fw-bold'>{user.ecoCoins}</span>
        </div>
      )}
    </div>
  )
}