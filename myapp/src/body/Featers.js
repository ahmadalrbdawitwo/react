import React, { useRef } from 'react'
const Featers = ({maintype }) => {

  



  const refbox = useRef(null)
 

  return (
    <div className=' bg-slate-100   '>
 <div className=' sm:max-2xl:flex my-auto container mx-auto  '>
{maintype.map((item) => {

        return (
        <div key={item.id} className='mt-5 pb-5 ' >
          <div>

            <div  className="box mb-3 w-11/12 bg-white " ref={ refbox} data-work={item.type}>
              <img src={item.src} className=" w-full h-auto max-w-xl rounded-lg"  alt=""></img>
            </div>

          </div>
      </div>

        )
      })
    }
  
    </div>
    </div>
   

  )
}

export default Featers