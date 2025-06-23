import React from 'react';

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>

        <img src='media/homeHero.png' alt='Hero Image' className='mb-5' />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>
          Signup Now
        </button>

        {/* Styled Dashboard Button */}
        <a href="https://zerodha-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
          <button className="dashboard-btn mt-3">Go to Dashboard</button>
        </a>

        {/* Add this inside your component OR in your global CSS file */}
        <style>{`
          .dashboard-btn {
            background-color: #0f172a;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease;
          }
          .dashboard-btn:hover {
            background-color: #1e293b;
          }
        `}</style>

      </div>
    </div>
  );
}

export default Hero;
