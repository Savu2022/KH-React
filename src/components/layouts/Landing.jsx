import { Link } from 'react-router-dom';
import React from 'react'

const Landing = () => {
  return (
    <>
    <section class="landing">
            <div class="dark-overlay">
                <div class="landing-inner">
                    <h1 class="x-large">Developer Connector</h1>
                    <p class="lead">Create a developer profile/portfolio, share posts and get help from other
                    developers</p>

                    <div class="buttons">
                    
                      <Link to="/register" class="btn btn-primary" >Register</Link>
              
                      <Link to="/login" class="btn btn-white">Login</Link>
          
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
export default Landing