import React from 'react'
import './footer.css'
import logo from './Images/HINDUWHITE2.png'

function Footer() {
    return (
    <>
    <div>
        <section id="footer">
            <div className="text-center"><img src={logo} className="logo text-center"/></div>
            <p class="text-center text-white home">PRESENTS</p>
            
            <h1 class="text-center text-white footer-header home">THEPC ONE</h1>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <ul class="list-unstyled list-inline social text-center">
                        <li class="list-inline-item " /><a href="https://www.facebook.com/vitthehindueplusclub/" ><i class="fa fa-facebook" /></a>
                        <li class="list-inline-item" /><a href="https://twitter.com/ThepcVit"><i class="fa fa-twitter"/></a>
                        <li class="list-inline-item" /><a href="https://www.instagram.com/thepc_vit/" ><i class="fa fa-instagram"/></a>
                        <li class="list-inline-item" /><a href="https://www.youtube.com/channel/UCDEGoswuWfF-drO7Db7awNA" ><i class="fa fa-youtube"/></a>
                        
                    </ul>
                </div>
            
            </div>	
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
                <p><u></u>This is a beta version of the app. Bugs are expected. </p>
                <p class="h6">© Copyright 2020, The Hindu Education Plus Club - VIT. All Rights Reserved.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank" /></p>
            </div>
            
        </div>	
        </section>
        </div>
    </>
    )
}

export default Footer
