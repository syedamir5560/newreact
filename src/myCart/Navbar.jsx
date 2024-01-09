import React from 'react'

function Navbar() {
    return (
        <div class="navbar">
            <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
            <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
            <a href='#' ><img src="360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg" alt="" /></a>
            <span style={{backgroundColor:'red',width:'25px', height:'25px',textAlign:'center',borderRadius:'50%'}}>0</span>
        </div>
    )
}

export default Navbar