
import {BrowserRouter as BrowseRouter,Switch,Route} from 'react-router-dom';
//BrowserRouter 가 먼저 적혀있지 않으면 이상동작함;;;;;;;;
import  Home from './page/page_home';
import  Contectus from './page/page_conus';

import DaelimNav from './DaelimNav';
import Content from './page/page_content';


function DaelimMain(){
    return(
             <div>
				 <BrowseRouter>
               		<DaelimNav/>
              		 <hr id="headerline"/>
                	<div className="main_root"> 
                   		 <div>
                       		 <div className="main_body">
                           		 <Switch>
                                	 <Route exact path="/"  component={Home} />
                               		 <Route path="/conus" component={Contectus} />
                                	 <Route path="/content" component={Content} />
                           		 </Switch>
                        	</div>
                        	<div class="content_body">
                            	 welcome to d system
                        	</div>
                   		 </div>

                  	    <div id="footer-content" class="container">
		                  <div id="fbox1">
		                	<h2>Recent Updates</h2>
		                	<ul class="style3">
		            		    <li class="first">
				        	      <p class="date"><a href="#">April<b>20</b></a></p>
					              <h3>Amet sed volutpat mauris</h3>
					              <p><a href="#">Mauris tempus nibh sodales adipiscing dolore.</a></p>
				                </li>
				                <li>
				                	<p class="date"><a href="#">April<b>18</b></a></p>
				                	<h3>Sagittis diam dolor sit amet</h3>
				                	<p><a href="#">Duis arcu tortor fringilla sed  sed magna.</a></p>
			                	</li>
			                	<li>
			                		<p class="date"><a href="#">April<b>15</b></a></p>
				                	<h3>Adipiscing sed consequat</h3>
			                		<p><a href="#">Pharetra ac velit sed in volutpat nisl mauris vel.</a></p>
			                	</li>
			                </ul>
		                  </div>
		                  <div id="fbox2">
			                <h2>About</h2>
			                <p>This is<strong> Endearing Green</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. This free template is released under the <a href="http://creativecommons.org/licenses/by/3/">Creative Commons Attribution</a> license, so you’re pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :)</p>
			                <a href="#" class="button-style">Ipsum feugiat consequat</a> </div>
		               	  <div id="fbox3">
			                <h2>Contact</h2>
			                <p>Nam erat a posuere laoreet eget nibh sodales adipiscing. Phasellus tristique dui.</p>
			                <ul class="style5">
			                	<li class="first"><span class="address">Address</span> <span class="address-01">1234 Somewhere Road #4285 <br />
					                Nashville, TN 00000</span> </li>
				                <li> <span class="mail">Mail</span> <span class="mail-01"><a href="#">someone@untitled.tld</a></span> </li>
				                <li> <span class="phone">Phone</span> <span class="phone-01">(000) 000-0000</span> </li>
			                </ul>
		               	  </div>
	                	</div>

                    	<div id="footer">
	                   		 <p>&copy; Untitled. All rights reserved. Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. Photos by <a href="http://fotogrph.com/">Fotogrph</a>.</p>
                   		 </div>
              		 </div>
				</BrowseRouter>
            </div>
    )
}

export default DaelimMain;