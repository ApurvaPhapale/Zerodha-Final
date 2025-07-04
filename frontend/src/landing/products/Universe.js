import React from 'react';

function Universe() {
    return ( 
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our
          partner platforms</p>
       
         <div className="col-4  p-3 mt-5">
          <img src='media/smallcaseLogo.png' className='mt-2'style={{width:"60%"}} />
          <p className='text-small text-muted mt-4'>Thematic investment platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src='media/streakLogo.png' style={{width:"50%"}} />
          <p className='text-small text-muted mt-4'>Algo & strategy platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
         <img src='media/sensibullLogo.svg' className='mt-4'style={{width:"60%"}} />
          <p className='text-small text-muted mt-4'>Options trading platform</p>
        </div>
         <div className="col-4  p-3 mt-5">
          <img src='media/zerodhaFundhouse.png'className='mt-2'style={{width:"60%"}} />
          <p className='text-small text-muted mt-4'>Asset management</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src='media/goldenpiLogo.png' style={{width:"60%"}}/>
          <p className='text-small text-muted mt-4'>Bonds trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
         <img src='media/dittoLogo.png' style={{width:"40%"}}/>
          <p className='text-small text-muted mt-4'>Insurance</p>
          </div>
          <button className='p-2 btn btn-primary fs-5 mb-5 mt-3 ' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
        </div>
         
      
      </div>
     );
}

export default Universe;